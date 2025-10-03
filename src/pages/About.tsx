import barbaraPhoto from "@/assets/barbara-photo.jpg";
import { ExperienceSection } from "@/components/experience";
import CompanyTimeline from "@/components/experience/CompanyTimeline";
import ExperienceCard from "@/components/experience/ExperienceCard";
import SectionHeader from "@/components/SectionHeader";
import TagList from "@/components/TagList";
import { Card, CardContent } from "@/components/ui/card";
import {
  certifications,
  education,
  experiences,
  skillGroups,
} from "@/content/about";
import { getAge } from "@/helpers/age";
import { careerStartYear } from "@/helpers/yearsExperience";
import { TypeCertification } from "@/types/content";
import { Award, Calendar, GraduationCap, MapPin, Palette } from "lucide-react";
import { useMemo, useState } from "react";

const CERT_CATEGORIES = ["Todos", "Curso", "Artigo", "Startup"] as const;
type CertificationCategory = (typeof CERT_CATEGORIES)[number];

const About = () => {
  const [certSelected, setCertSelected] =
    useState<CertificationCategory>("Todos");

  const age = getAge();

  const years = Math.max(0, new Date().getFullYear() - careerStartYear);

  const filteredCerts = useMemo(
    () =>
      certSelected === "Todos"
        ? certifications
        : certifications.filter((c) => c.type === certSelected),
    [certSelected]
  );

  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <SectionHeader
          title="Sobre Mim"
          subtitle="Um pouco da minha trajetória e competências"
        />

        {/* Profile */}
        <Card className="mb-12 shadow-lg animate-scale-in">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="flex justify-center">
                <img
                  src={barbaraPhoto}
                  alt="Bárbara Marcheti Fiorin"
                  className="w-80 h-80 rounded-2xl object-cover shadow-md"
                />
              </div>

              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    Bárbara Marcheti Fiorin
                  </h2>
                  <p className="text-lg text-primary font-medium mb-4">
                    Desenvolvedora Frontend React.js
                  </p>

                  <div className="flex items-center space-x-2 text-muted-foreground mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>Campo Grande, Mato Grosso Do Sul</span>
                  </div>

                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>
                      Brasileira, {age} {age === 1 ? "ano" : "anos"}
                    </span>
                  </div>
                </div>

                <div className="rounded-lg bg-card text-card-foreground shadow-sm border"></div>
                <div className="flex items-center gap-3 mb-6">
                  <Palette className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold neon-text">
                    Minha História
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sou graduada em{" "}
                  <strong className="text-primary">
                    Análise e Desenvolvimento de Sistemas
                  </strong>
                  pela Faculdade Insted. Trabalho há{" "}
                  <strong className="text-primary">
                    {years} {years === 1 ? "ano" : "anos"}
                  </strong>{" "}
                  com programação e tenho uma paixão genuína por criar soluções
                  digitais inovadoras.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Iniciei minha jornada com Vue.js e atualmente me especializo
                  em
                  <strong className="text-primary">
                    {" "}
                    React.js, TypeScript e Next.js
                  </strong>
                  . Foco em criar projetos com excelente usabilidade,
                  responsividade total e experiência do usuário excepcional.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            <Award className="inline w-8 h-8 mr-2 text-primary" />
            Habilidades
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {skillGroups.map((skillGroup, index) => (
              <Card
                key={index}
                className="p-4 rounded-lg bordershadow-md animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2 text-center">
                    {skillGroup.category}
                  </h3>
                  <TagList
                    items={skillGroup.items}
                    category={skillGroup.category}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            <GraduationCap className="inline w-8 h-8 mr-2 text-primary" />
            Graduação Acadêmica
          </h2>

          <Card className="shadow-lg animate-fade-in bg-gradient-to-r from-primary/5 to-primary-light/10">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">
                  {education[0].title}
                </h3>
                <p className="text-primary font-medium mb-4">
                  {education[0].period}
                </p>
                <p className="text-muted-foreground">
                  {education[0].description}
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Experiência</h2>
          <ExperienceSection experiences={experiences} />
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Certificações</h2>

          {/* Filtro por categoria */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {CERT_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCertSelected(c)}
                className={
                  "px-3 py-1 rounded-md text-sm transition " +
                  (certSelected === c
                    ? "bg-primary text-primary-foreground"
                    : "border hover:bg-primary/10")
                }
              >
                {c}
              </button>
            ))}
          </div>

          {/* Lista filtrada */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {filteredCerts.map((certification, index) => (
              <Card
                key={index}
                className="shadow-md hover:shadow-lg transition-shadow duration-300 p-4 rounded-lg border"
              >
                <CardContent className="p-6">
                  <div className="text-center space-y-3">
                    <h3 className="text-lg font-semibold">
                      {certification.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {certification.type} • {certification.period}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {certification.description}
                    </p>
                    {certification.hasCertificate && (
                      <a
                        href={certification.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-300 text-sm font-medium items-center"
                      >
                        Abrir Certificado
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
