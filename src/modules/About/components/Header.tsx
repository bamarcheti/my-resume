import { useTranslation } from 'react-i18next';

import { Title } from '../../../components/Title';
import { Links } from './Links';

export const Header = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3">
      <Title title="Bárbara Marcheti Fiorin" />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between md:justify-start gap-5 items-center">
          <p className="font-normal text-base text-stone-500">{t('info')}</p>
          <Links />
        </div>
        <p className="font-normal text-base text-stone-500">Campo Grande, Mato Grosso do Sul</p>
      </div>
      <p className="cursor-stone-900 z-10 font-semibold text-3xl capitalize text-purple-400 dark:text-butterflyBush-600 transition ease-in-out hover:translate-x-1 hover:-translate-y-1">
        {t('responsibility')}
      </p>
    </div>
  );
};
