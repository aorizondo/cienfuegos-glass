'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import translations, { Lang, Translations } from './translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations.en as unknown as Translations,
});

function detectBrowserLang(): Lang {
  if (typeof navigator === 'undefined') return 'en';
  const browserLang = navigator.language || (navigator as any).userLanguage || 'en';
  return browserLang.startsWith('es') ? 'es' : 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    // Check localStorage first, then fall back to browser detection
    const saved = localStorage.getItem('cg-lang') as Lang | null;
    const resolved = saved && (saved === 'en' || saved === 'es') ? saved : detectBrowserLang();
    setLangState(resolved);
  }, []);

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('cg-lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] as unknown as Translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
