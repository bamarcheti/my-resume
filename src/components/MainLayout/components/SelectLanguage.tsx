import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

interface Language {
  name: string;
  code: string;
}

const SelectLanguage = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const languages: Language[] = [
    { name: 'Português', code: 'BR' },
    { name: 'Inglês', code: 'US' },
    { name: 'Espanhol', code: 'ES' }
  ];

  return (
    <div className="flex md:gap-3 gap-2 items-center">
      <ReactCountryFlag
        onClick={() => changeLanguage('pt')}
        className="cursor-pointer"
        alt="BR"
        countryCode="BR"
        style={{
          fontSize: '1.5em',
          lineHeight: '1.5em'
        }}
        svg
      />
      <ReactCountryFlag
        onClick={() => changeLanguage('en')}
        className="cursor-pointer"
        alt="US"
        countryCode="US"
        style={{
          fontSize: '1.5em',
          lineHeight: '1.5em'
        }}
        svg
      />
      <ReactCountryFlag
        onClick={() => changeLanguage('es')}
        className="cursor-pointer"
        alt="ES"
        countryCode="ES"
        style={{
          fontSize: '1.5em',
          lineHeight: '1.5em'
        }}
        svg
      />
      {/* <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        aria-expanded={isOpen}
      >
        {languages.map((language) => (
          <div key={language.code}>
            <ReactCountryFlag countryCode={language.code} />
            {language.name}
          </div>
        ))}
        <svg
          className="-me-1 ms-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
            clipRule="evenodd"
          />
        </svg>
      </button> */}
      {/* <div className="px-4 py-6">
      <select className="flex items-center p-2">
        <option className="ml-3 block text-base font-medium text-gray-900" onClick={() changeLanguage('pt')}>PT</option>
        <option className="ml-3 block text-base font-medium text-gray-900" onClick={() changeLanguage('en')}>US</option>
        <option className="ml-3 block text-base font-medium text-gray-900" onClick={() changeLanguage('es')}>ES</option>
      </select>
      </div> */}
    </div>
  );
};

export default SelectLanguage;
