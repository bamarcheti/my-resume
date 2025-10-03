import SocialLink from '@/components/SocialLink';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { socialLinks } from '@/helpers/socialLinks';
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

// ===== schema & tipos =====
const schema = z.object({
  name: z.string().min(2, 'Informe seu nome'),
  email: z.string().email('Email inválido'),
  phone: z.string().min(8, 'Telefone inválido'),
  message: z.string().min(10, 'Mensagem muito curta'),
  company: z.string().optional() // honeypot
});
type FormValues = z.infer<typeof schema>;

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
  const [formData, setFormData] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // limpa erro do campo editado
    setErrors((prev) => ({ ...prev, [name as keyof FormValues]: undefined }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // valida com Zod
    const parsed = schema.safeParse(formData);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof FormValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const path = issue.path[0] as keyof FormValues;
        if (!fieldErrors[path]) fieldErrors[path] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error('Por favor, corrija os campos destacados.');
      return;
    }

    // honeypot: se preenchido, ignora
    if (formData.company && formData.company.trim() !== '') {
      setFormData({ name: '', email: '', phone: '', message: '', company: '' });
      return;
    }

    setIsSubmitting(true);

    try {
      const whatsappMsg = `Olá! Me chamo ${formData.name}. Email: ${formData.email}. Telefone: ${formData.phone}. Mensagem: ${formData.message}`;
      const whatsappUrl = `https://wa.me/5567996197943?text=${encodeURIComponent(whatsappMsg)}`;
      window.open(whatsappUrl, '_blank');
      toast.success('Redirecionando para WhatsApp...');

      setFormData({ name: '', email: '', phone: '', message: '', company: '' });
      setErrors({});
    } finally {
      setIsSubmitting(false);
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
                  Entre em Contato!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-6" noValidate>
                  {/* honeypot */}
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome completo"
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={!!errors.name}
                        aria-describedby="err-name"
                      />
                      <FieldError id="err-name" message={errors.name} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu.email@exemplo.com"
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                        aria-describedby="err-email"
                      />
                      <FieldError id="err-email" message={errors.email} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="(67) 9619-7943"
                      value={formData.phone}
                      onChange={handleChange}
                      aria-invalid={!!errors.phone}
                      aria-describedby="err-phone"
                    />
                    <FieldError id="err-phone" message={errors.phone} />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Descreva seu projeto ou dúvida..."
                      className="min-h-[120px]"
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={!!errors.message}
                      aria-describedby="err-message"
                    />
                    <FieldError id="err-message" message={errors.message} />
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
