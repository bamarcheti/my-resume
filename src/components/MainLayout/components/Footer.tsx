import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full pb-7 pt-10 text-textB text-xs text-center">
      @{new Date().getFullYear()} CV Bárbara MF. {t('footer')}
    </div>
  );
};

export default Footer;
