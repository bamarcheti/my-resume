import { Atom, GraduationCap, Rocket } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ExtraQualificationsAction,
  extraQualificationsPT
} from '../../../../../_shared/constant/extraQualifications';
import { getQualificationsCategories } from '../../../../../_shared/helpers/getQualificationsCategories';
import { getQualificationsFilteredTechs } from '../../../../../_shared/helpers/getQualificationsFilteredTechs';
import { SelectTag } from '../../../../../components/SelectTag';

export const useExtraQualifications = (): ExtraQualificationsAction[] => {
  return extraQualificationsPT;
};

export const ExtraQualificationstFilter = () => {
  const extraQualifications = useExtraQualifications();
  const categories = getQualificationsCategories(extraQualifications);
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]);
  const { t } = useTranslation();

  const fontStyle = 'text-xs 2xl:text-base lg:text-sm font-normal';

  const iconMap: Record<string, JSX.Element> = {
    startup: <Rocket className="text-white w-6 h-6" />,
    article: <Atom className="text-white w-6 h-6" />,
    course: <GraduationCap className="text-white w-6 h-6" />
  };

  const styleMap = {
    startup: 'bg-butterflyBush-600 dark:bg-stone-800 text-stone-800 dark:text-stone-700',
    article: 'bg-butterflyBush-600 dark:bg-stone-800 text-stone-800 dark:text-stone-700',
    course: 'bg-butterflyBush-600 dark:bg-stone-800 text-stone-800 dark:text-stone-700'
  };

  const handleSelectCategory = (category: string) => {
    if (category !== selectedCategory) {
      setSelectedCategory(category);
      return;
    }
  };

  const filteredTechs = getQualificationsFilteredTechs(selectedCategory, extraQualifications);

  return (
    <div className="flex flex-col w-full justify-center space-y-5">
      <div className="flex justify-center md:justify-start gap-2">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;

          return (
            <SelectTag
              key={cat}
              onClick={() => handleSelectCategory(cat)}
              isActive={isActive}
              category={cat}
            />
          );
        })}
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-5">
        {filteredTechs.map((tech, index) => (
          <div
            key={index}
            className={`${
              styleMap[tech.type]
            } flex flex-col rounded-md p-8 gap-4 transition ease-in-out hover:scale-105`}
          >
            <div className="flex flex-col gap-1.5 justify-center text-center">
              {iconMap[tech.type]}
              <p className="text-base xl:text-lg lg:text-lg font-bold text-white">{tech.title}</p>
              <p className={`${fontStyle} dark:text-purple-400`}>{tech.period}</p>
            </div>
            <p className={`${fontStyle} text-white`}>{tech.description}</p>
          </div>

          // <ExtraQualificationsCard
          //   key={index}
          //   extraQualifications={t('extraQualifications', { returnObjects: true })}
          // />
        ))}
      </div>
    </div>
  );
};
