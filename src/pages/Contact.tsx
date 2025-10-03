import SocialLink from '@/components/SocialLink';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { socialLinks } from '@/helpers/socialLinks';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// ===== schema & tipos =====
const schema = z.object({
  name: z.string().min(2, 'Informe seu nome'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(3, 'Tema da mensagem'),
  message: z.string().min(10, 'Mensagem muito curta'),
  company: z.string().optional() // honeypot
});
type FormValues = z.infer<typeof schema>;

// ===== Web3Forms =====
const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const WEB3FORMS_KEY =
  (import.meta.env.VITE_WEB3FORMS_KEY as string) ?? 'e5cf8d48-61b1-4d22-8790-6c524742932e';

// ===== rate-limit & duplicados =====
const COOLDOWN_MS = 30_000; // 30s entre envios
const DUP_TTL_MS = 24 * 60 * 60 * 1000; // 24h p/ bloquear msg idêntica
const LS_LAST_KEY = 'contact:lastSentAt';
const LS_HIST_KEY = 'contact:history'; // [{ id: string, ts: number }]

// hash estável do conteúdo (usa Web Crypto quando disponível)
async function contactId(v: FormValues) {
  const canonical = JSON.stringify({
    email: v.email.trim().toLowerCase(),
    subject: v.subject.trim().toLowerCase(),
    message: v.message.trim().toLowerCase()
  });

  if (crypto?.subtle) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(canonical));
    return Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  }
  // fallback simples
  let h = 0;
  for (let i = 0; i < canonical.length; i++) h = (h * 31 + canonical.charCodeAt(i)) | 0;
  return String(h);
}

function getHistory(): { id: string; ts: number }[] {
  try {
    return JSON.parse(localStorage.getItem(LS_HIST_KEY) || '[]');
  } catch {
    return [];
  }
}
function saveHistory(items: { id: string; ts: number }[]) {
  localStorage.setItem(LS_HIST_KEY, JSON.stringify(items));
}

// ===== dados estáticos =====
const CONTACT_INFO = [
  {
    icon: Mail,
    title: 'Email',
    content: 'bmarchetifiorin@gmail.com',
    link: 'mailto:bmarchetifiorin@gmail.com'
  },
  {
    icon: Phone,
    title: 'Telefone',
    content: '+55 (67) 99619-7943',
    link: 'tel:+5567996197943'
  },
  {
    icon: MapPin,
    title: 'Localização',
    content: 'Campo Grande, MS',
    link: '#'
  }
] as const;

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="text-xs text-red-500 mt-1" role="alert">
      {message}
    </p>
  );
}

export default function Contact() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors }
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    try {
      // honeypot
      if (values.company && values.company.trim() !== '') {
        reset();
        return;
      }

      // ---- rate limit (cooldown) ----
      const now = Date.now();
      const last = Number(localStorage.getItem(LS_LAST_KEY) || '0');
      const left = COOLDOWN_MS - (now - last);
      if (left > 0) {
        const sec = Math.ceil(left / 1000);
        toast({
          title: 'Aguarde um instante 🙂',
          description: `Você poderá enviar novamente em ${sec}s.`,
          variant: 'destructive'
        });
        return;
      }

      // ---- evita repetição da mesma mensagem por 24h ----
      const id = await contactId(values);
      const hist = getHistory();
      const recent = hist.find((h) => h.id === id && now - h.ts < DUP_TTL_MS);
      if (recent) {
        const mins = Math.ceil((DUP_TTL_MS - (now - recent.ts)) / 60000);
        toast({
          title: 'Mensagem já enviada',
          description: `Parece igual a uma mensagem enviada recentemente. Tente novamente em ~${mins}min se precisar.`,
          variant: 'destructive'
        });
        return;
      }

      // Envia como application/x-www-form-urlencoded (evita preflight/CORS)
      const payload = new URLSearchParams();
      payload.set('access_key', WEB3FORMS_KEY);
      payload.set('name', values.name);
      payload.set('email', values.email);
      payload.set('subject', `[Portfólio] ${values.subject}`);
      payload.set('message', values.message);
      payload.set('botcheck', values.company ?? '');
      payload.set('from_name', 'Formulário do Portfólio');
      payload.set('replyto', values.email);
      payload.set('origin', window.location.origin);
      payload.set('page', window.location.href);

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 12000);

      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          Accept: 'application/json'
        },
        body: payload.toString(),
        signal: controller.signal
      });

      clearTimeout(timeout);
      const data = await res.json().catch(() => ({} as any));

      if (res.ok && (data?.success ?? true)) {
        // ok: grava cooldown + histórico
        localStorage.setItem(LS_LAST_KEY, String(now));
        const pruned = hist.filter((h) => now - h.ts < DUP_TTL_MS);
        saveHistory([{ id, ts: now }, ...pruned].slice(0, 20));

        toast({
          title: 'Mensagem enviada!',
          description: 'Obrigado pelo contato.'
        });
        reset();
      } else {
        throw new Error(data?.message || 'Falha ao enviar');
      }
    } catch (err: any) {
      toast({
        title: 'Falha ao enviar',
        description: err?.message ?? 'Tente novamente mais tarde.',
        variant: 'destructive'
      });
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Entre em{' '}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Contato</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vamos conversar sobre seu próximo projeto? Estou sempre aberta a novas oportunidades!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="animate-fade-in">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <MessageCircle className="w-6 h-6 mr-2 text-primary" />
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  {/* honeypot */}
                  <input
                    type="text"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register('company')}
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        placeholder="Seu nome completo"
                        {...register('name')}
                        aria-invalid={!!errors.name}
                        aria-describedby="err-name"
                      />
                      <FieldError id="err-name" message={errors.name?.message} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="seu.email@exemplo.com"
                        {...register('email')}
                        aria-invalid={!!errors.email}
                        aria-describedby="err-email"
                      />
                      <FieldError id="err-email" message={errors.email?.message} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto *</Label>
                    <Input
                      id="subject"
                      placeholder="Sobre o que gostaria de falar?"
                      {...register('subject')}
                      aria-invalid={!!errors.subject}
                      aria-describedby="err-subject"
                    />
                    <FieldError id="err-subject" message={errors.subject?.message} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      placeholder="Descreva seu projeto ou dúvida..."
                      className="min-h-[120px]"
                      {...register('message')}
                      aria-invalid={!!errors.message}
                      aria-describedby="err-message"
                    />
                    <FieldError id="err-message" message={errors.message?.message} />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full shadow-purple"
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact & Social */}
          <div className="space-y-8 animate-scale-in">
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {CONTACT_INFO.map((info) => (
                  <a
                    key={info.title}
                    href={info.link}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-secondary transition-colors group
                               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    <div className="p-2 bg-primary-light rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-medium">{info.title}</p>
                      <p className="text-muted-foreground text-sm">{info.content}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-xl">Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((s) => (
                    <SocialLink key={s.title} {...s} className={`border-2 ${s.color}`} />
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden shadow-md">
              <div className="absolute inset-0 bg-gradient-hero opacity-10 pointer-events-none z-0 rounded-2xl"></div>
              <CardContent className="container text-center mx-auto p-6 relative z-10">
                <div className="text-center">
                  <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <h3 className="font-semibold mb-2">Disponível para projetos</h3>
                  <p className="text-muted-foreground text-sm">
                    Estou disponível para freelances e oportunidades de trabalho em tempo integral.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16 animate-fade-in">
          <p className="text-muted-foreground">
            Respondo a todas as mensagens em até 24 horas.
            <br />
            Para projetos urgentes, entre em contato via WhatsApp.
          </p>
        </div>
      </div>
    </div>
  );
}
