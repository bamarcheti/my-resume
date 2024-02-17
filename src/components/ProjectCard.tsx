import { ExternalLink } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  name: string;
  html_url: string;
  topics: string[];
  homepage: string | any;
  previewImageUrl: string | null;
};

export const ProjectCard: React.FC<Props> = ({
  name,
  html_url,
  topics,
  homepage,
  previewImageUrl
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col rounded-3xl bg-secondary dark:bg-dark p-4 md:p-6 gap-4 h-full">
      <h1>
        <a
          href={html_url}
          title={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-base lg:text-lg font-bold text-white hover:opacity-60"
        >
          {name}
        </a>
      </h1>
      <ul className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-3 items-center">
        {topics.map((topic, index) => (
          <li key={index}>
            <p className="cursor-default font-medium md:font-semibold xl:text-sm flex justify-center text-xs text-whitePrimary dark:text-white bg-white dark:bg-secondary px-[24px] sm:p-0 rounded-2xl">
              {topic}
            </p>
          </li>
        ))}
      </ul>
      {homepage && (
        <a
          href={homepage}
          title={homepage}
          target="_blank"
          className="flex gap-2 items-center text-sm md:text-base text-default dark:text-darkPrimary hover:underline"
          rel="noreferrer"
        >
          {t('acess')} <ExternalLink className="w-5 h-5" />
        </a>
      )}
      {/* {previewImageUrl && <img src={previewImageUrl} alt={`Preview do ${name}`} />} */}
    </div>
  );
};
