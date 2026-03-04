import thTranslations from '../locales/th.json';
import enTranslations from '../locales/en.json';

export const translations = {
  th: thTranslations,
  en: enTranslations,
} as const;

export type Language = keyof typeof translations;
export type TranslationKeys = typeof translations.th;
