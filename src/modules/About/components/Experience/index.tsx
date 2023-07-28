import Subtitle from '../../../../components/Title/Subtitle';
import ExperienceSection from './components/ExperienceSection';

const Experience = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-start">
        <Subtitle subtitle="Experiência " />
      </div>
      <ExperienceSection
        company="Inovvati Tecnologia / Desenvolvedora Junior"
        period="DESDE SETEMBRO DE 2021, SEDE"
        description="Atuo nos projetos internos da empresa que trabalho (Holerite, Carreiras, Site da empresa);
        Utilizo ferramentas como React.js, Tailwind, TypeScript e Next.js diariamente em todas as frente do projeto;
        Estes projetos contém: responsividade para desktop, tablet e mobile; integração com API; utilização do react-router-dom; além de ter arquitetura limpa e código limpo;
        Convivo diariamente com metodologias ágeis com Kanban e Xp (utilizamos Scrum, daily e plannings para a gestão de nossa equipe);
        Tenho um relacionamento diário e direto com minha equipe (durante o expediente ficamos em chamada fazendo nossas demandas e caso necessário tiramos dúvidas uns com os outros para que possamos solucionar nosso problema)."
      />
    </div>
  );
};

export default Experience;
