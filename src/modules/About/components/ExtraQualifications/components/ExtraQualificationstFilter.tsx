import { Atom, GraduationCap, Rocket } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  ExtraQualificationsAction,
  extraQualificationsPT
} from '../../../../../_shared/constant/extraQualifications';
import { getCategories } from '../../../../../_shared/helpers/getCategories';
import { getFilteredTechs } from '../../../../../_shared/helpers/getFilteredTechs';
import { SelectTag } from '../../../../../components/SelectTag';

export const useExtraQualifications = (): ExtraQualificationsAction[] => {
  return extraQualificationsPT;
};

export const ExtraQualificationstFilter = () => {
  const extraQualifications = useExtraQualifications();
  const categories = getCategories(extraQualifications);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { t } = useTranslation();

  const fontStyle = 'text-xs xl:text-sm lg:text-sm font-normal';

  const iconMap: Record<string, JSX.Element> = {
    course: <GraduationCap className="text-white w-6 h-6" />,
    article: <Atom className="text-white w-6 h-6" />,
    startup: <Rocket className="text-white w-6 h-6" />
  };

  const styleMap = {
    course: 'bg-secondary dark:bg-dark text-darkSecondary',
    article: 'bg-whiteSecondary dark:bg-darkTertiary text-darkSecondary',
    startup: 'bg-tertiary dark:bg-darkSecondary text-darkPrimary'
  };

  const handleSelectCategory = (category: string) => {
    if (category === selectedCategory) {
      setSelectedCategory('');
      return;
    }
    setSelectedCategory(category);
  };

  const filteredTechs = getFilteredTechs(selectedCategory, extraQualifications);

  return (
    <div className="flex flex-col w-full justify-center space-y-5">
      <div className="flex justify-center md:justify-start">
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
            } flex flex-col rounded-3xl p-8 gap-4 transition ease-in-out hover:scale-105`}
          >
            <div className="flex flex-col gap-1.5 justify-center text-center">
              {iconMap[tech.type]}
              <p className="text-base xl:text-lg lg:text-lg font-bold text-white">{tech.title}</p>
              <p className={`${fontStyle} dark:text-secondary`}>{tech.period}</p>
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
