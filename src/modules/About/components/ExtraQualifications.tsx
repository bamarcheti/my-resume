import Card from '../../../components/Card';
import Subtitle from '../../../components/Subtitle';

const ExtraQualifications = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col justify-between items-start">
        <Subtitle subtitle="Qualificações extras" />
      </div>
      <div className="flex flex-col sm:pt-4 pt-0">
        <div className="flex md:flex-row flex-col gap-5 sm:gap-10 w-full xl:gap-16 lg:gap-14 justify-center">
          <div className="flex flex-col gap-4 w-full">
            <Card
              title="SEBRAE"
              period="SETEMBRO DE 2023"
              description="Startup Day - Modelando e imprimindo o seu primeiro objeto 3D"
            />
            <Card
              title="COSACO"
              period="ABRIL DE 2023"
              description="Artigo - Analisando a Fragilidade de Códigos Cifrados por Criptoanálise: estudo de caso com o Código de César"
            />
            <Card
              title="COSACO"
              period="ABRIL DE 2023"
              description="Artigo - Utilização de Inteligência Artificial na transmissão de mensagens baseadas nas emoções a partir da interpretação do comportamento humano"
            />
            <Card
              title="COSACO"
              period="ABRIL DE 2023"
              description="Artigo - Pet For You: Aplicativo de adoção de animais para Campo Grande/MS"
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <Card
              title="EBAC"
              period="SETEMBRO DE 2022"
              description="Curso - Crie “O” Case do seu Portfólio em 7 dias"
            />
            <Card
              title="EBAC"
              period="JULHO DE 2022"
              description="Curso - Seu Começo de Carreira em Programação"
            />

            <Card
              title="IFMS"
              period="MARÇO DE 2022 - JUNHO DE 2022"
              description="Curso - Introdução à Inteligência Artificial"
            />
          </div>
          <div className="flex flex-col gap-4 w-full">
            <Card
              title="OAB"
              period="MARÇO DE 2022"
              description="Curso - Produtividade e Alta Performance"
            />
            <Card
              title="CCAA / Nível 9"
              period="2013 - 2021, CCAA Joaquim Murtinho"
              description="Inglês Avançado"
            />
            <Card
              title="KUMON"
              period="2013 - 2016, Escola Carandá Bosque"
              description="Matemática"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraQualifications;
