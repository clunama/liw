"use client";

import type { ReactNode } from 'react';
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { translations, defaultLocale, locales, type AllTranslations, type Translations } from '@/lib/i18n';

export type Locale = 'es' | 'en' | 'de' | 'pt' | 'fr';

interface LanguageContextType {
  language: Locale;
  setLanguage: (language: Locale) => void;
  t: (key: string, replacements?: { [key: string]: string | number }) => string;
  availableLocales: Locale[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    // Attempt to load language from localStorage
    const storedLanguage = localStorage.getItem('lockedinwork-lang') as Locale;
    if (storedLanguage && locales.includes(storedLanguage)) {
      setLanguageState(storedLanguage);
    } else {
      // Fallback to browser language if available and supported, otherwise default
      const browserLang = navigator.language.split('-')[0] as Locale;
      if (locales.includes(browserLang)) {
        setLanguageState(browserLang);
      }
    }
  }, []);

  const setLanguage = useCallback((lang: Locale) => {
    if (locales.includes(lang)) {
      setLanguageState(lang);
      localStorage.setItem('lockedinwork-lang', lang);
      document.documentElement.lang = lang;
    }
  }, []);

  const t = useCallback(
    (key: string, replacements?: { [key: string]: string | number }): string => {
      const langTranslations = translations[language] as Translations || translations[defaultLocale] as Translations;
      
      let text = key.split('.').reduce((obj: any, k: string) => obj && obj[k], langTranslations) as string | undefined;

      if (text === undefined) {
        console.warn(`Translation key "${key}" not found for language "${language}".`);
        // Fallback to default locale if key not found in current language
        const defaultLangTranslations = translations[defaultLocale] as Translations;
        text = key.split('.').reduce((obj: any, k: string) => obj && obj[k], defaultLangTranslations) as string | undefined;
        if (text === undefined) {
          return key; // Return the key itself if not found in default either
        }
      }
      
      if (replacements) {
        Object.keys(replacements).forEach(rKey => {
          const regex = new RegExp(`{${rKey}}`, 'g');
          text = (text as string).replace(regex, String(replacements[rKey]));
        });
      }
      return text as string;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, availableLocales: locales }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
