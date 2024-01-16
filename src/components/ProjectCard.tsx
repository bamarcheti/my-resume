import React from 'react';

type Props = {
  name: string;
  html_url: string;
  topics: string[];
  homepage: string | any;
  previewImageUrl: string | null;
};

const ProjectCard: React.FC<Props> = ({ name, html_url, topics, homepage, previewImageUrl }) => {
  return (
    <div className="flex flex-col rounded-3xl bg-secondary dark:bg-dark xl:pb-8 xl:pt-6 xl:px-12 pb-5 pt-3 px-7 gap-4">
      <h1>
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-base xl:text-lg lg:text-lg font-bold text-white hover:opacity-60"
        >
          {name}
        </a>
      </h1>
      <ul className="grid grid-cols-4 gap-3 items-center">
        {topics.map((topic, index) => (
          <li key={index}>
            <p className="font-semibold flex justify-center text-xs text-whitePrimary dark:text-white bg-white dark:bg-secondary p- rounded-2xl">
              {topic}
            </p>
          </li>
        ))}
      </ul>
      {homepage && (
        <a href={homepage} className="text-base text-default dark:text-darkPrimary hover:underline">
          Clique aqui para acessar
        </a>
      )}
      {/* {previewImageUrl && <img src={previewImageUrl} alt={`Preview do ${name}`} />} */}
    </div>
  );
};

export default ProjectCard;
