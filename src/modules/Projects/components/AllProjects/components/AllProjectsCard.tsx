import { ExternalLink } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

type Props = {
  className?: string;
  name: string;
  html_url: string;
  topics: string[];
  homepage: string | any;
  previewImageUrl: string | null;
};

export const AllProjectsCard: React.FC<Props> = ({
  className,
  name,
  html_url,
  topics,
  homepage,
  previewImageUrl
}) => {
  const { t } = useTranslation();

  return (
    <div
      className={`${className} flex flex-col justify-between space-y-2 rounded-3xl bg-butterflyBush-600 dark:bg-stone-800 p-4 md:p-5 gap-4 w-full h-full`}
    >
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
      <ul className="flex flex-wrap items-center gap-1">
        {topics.map((topic, index) => (
          <li key={index}>
            {/* <li key={index} className="2xl:w-[120px] xl:w-[126px] "> */}
            <p className="flex items-center w-full cursor-default font-medium md:font-semibold xl:text-sm text-xs 2xl:text-base text-purple-600 dark:text-white bg-white dark:bg-purple-400 px-[3.8px] min-[375px]:px-[10px] md:px-2 rounded-2xl">
              {topic}
            </p>
          </li>
        ))}
      </ul>

      {homepage ? (
        <div className="flex items-end h-full">
          <a
            href={homepage}
            title={homepage}
            target="_blank"
            className="flex gap-2 items-center text-sm md:text-base text-stone-900 dark:text-stone-400 hover:underline"
            rel="noreferrer"
          >
            {t('acess')} <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      ) : (
        <div className="flex items-end h-full">
          <a
            href={html_url}
            title={html_url}
            target="_blank"
            className="flex gap-2 items-center text-[11.6px] min-[425px]:text-sm lg:text-base text-stone-900 dark:text-stone-400 hover:underline"
            rel="noreferrer"
          >
            {t('github')} <ExternalLink className="lg:w-5 lg:h-5 w-4 h-4" />
          </a>
        </div>
      )}
      {/* {previewImageUrl && <img src={previewImageUrl} alt={`Preview do ${name}`} />} */}
    </div>
  );
};
