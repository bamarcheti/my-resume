import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

const MultiLanguages = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex gap-3 items-center">
      <ReactCountryFlag
        onClick={() => changeLanguage('pt')}
        className="cursor-pointer"
        alt="BR"
        countryCode="BR"
        style={{
          fontSize: '2em',
          lineHeight: '2em'
        }}
        svg
      />
      <ReactCountryFlag
        onClick={() => changeLanguage('en')}
        className="cursor-pointer"
        alt="US"
        countryCode="US"
        style={{
          fontSize: '2em',
          lineHeight: '2em'
        }}
        svg
      />
      <ReactCountryFlag
        onClick={() => changeLanguage('es')}
        className="cursor-pointer"
        alt="ES"
        countryCode="ES"
        style={{
          fontSize: '2em',
          lineHeight: '2em'
        }}
        svg
      />
    </div>
  );
};

export default MultiLanguages;
