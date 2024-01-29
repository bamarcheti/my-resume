const defaultLocale = 'en-US';
const langs = [defaultLocale, 'pt-BR', 'es-ES'] as const;

const locales = langs as unknown as string[];
export const i18n = { defaultLocale, locales, localeDetection: true };

export type Locale = (typeof langs)[number];
