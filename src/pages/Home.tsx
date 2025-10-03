import barbaraPhoto from "@/assets/barbara-photo.jpg";
import SocialLink from "@/components/SocialLink";
import { Button } from "@/components/ui/button";
import { strongSkillsCount } from "@/content/about";
import { socialLinks } from "@/helpers/socialLinks";
import { careerStartYear } from "@/helpers/yearsExperience";
import { useProjects } from "@/hooks/useProjects";
import { ArrowRight, Loader, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const { completedCount, loading } = useProjects();

  const now = new Date();
  const yearsOfExperience = Math.max(0, now.getFullYear() - careerStartYear);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10 pointer-events-none z-0"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <p className="text-primary font-medium text-lg">Olá, eu sou</p>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                  Bárbara
                  <span className="bg-gradient-primary bg-clip-text text-transparent block">
                    Marcheti Fiorin
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Desenvolvedora Frontend React.js
                </p>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Campo Grande, Mato Grosso do Sul</span>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Apaixonada por criar experiências digitais incríveis e
                interfaces intuitivas. Especializada em React, TypeScript e
                desenvolvimento frontend moderno.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="shadow-purple hover:shadow-lg hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/projetos">
                    Ver Projetos
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:shadow-md hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <Link to="/sobre">Sobre Mim</Link>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4 pt-4">
                {socialLinks.map((social) => (
                  <SocialLink key={social.title} {...social} />
                ))}
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end animate-scale-in">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 animate-float pointer-events-none"></div>
                <img
                  src={barbaraPhoto}
                  alt="Bárbara Marcheti Fiorin"
                  className="relative w-80 h-80 object-cover rounded-2xl shadow-lg border-4 border-background"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2 animate-fade-in">
              <h3 className="text-3xl font-bold text-primary">
                {yearsOfExperience}+
              </h3>
              <p className="text-muted-foreground">Anos de Experiência</p>
            </div>
            <div className="text-center space-y-2 animate-fade-in">
              {loading ? (
                <Loader className="w-6 h-6 block mx-auto text-primary animate-spin" />
              ) : (
                <h3 className="text-3xl font-bold text-primary">
                  {completedCount}+
                </h3>
              )}
              <p className="text-muted-foreground">Projetos Concluídos</p>
            </div>

            <div className="text-center space-y-2 animate-fade-in">
              <h3 className="text-3xl font-bold text-primary">
                {strongSkillsCount}+
              </h3>
              <p className="text-muted-foreground">Tecnologias Dominadas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
