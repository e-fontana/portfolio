"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type TLanguage = "en" | "pt-br";
type TTranslations = { [key: string]: string };

interface ILanguageContext {
  locale: TLanguage;
  translations: (key: string) => string;
  setLocale: (locale: TLanguage) => void;
}

interface LanguageProviderProps {
  children: ReactNode;
  initialLocale: TLanguage;
  initialTranslations: TTranslations;
}

const LanguageContext = createContext<ILanguageContext>({
  locale: "en",
  translations: (key) => key,
  setLocale: () => {},
});

function resolvePath(obj: any, path: string): string {
  return path.split(".").reduce((acc, part) => acc?.[part], obj) || path;
}

export function LanguageProvider({
  children,
  initialLocale,
  initialTranslations,
}: LanguageProviderProps) {
  const [locale, setLocaleState] = useState<TLanguage>(initialLocale);
  const [translationsMap, setTranslationsMap] =
    useState<TTranslations>(initialTranslations);

  useEffect(() => {
    sessionStorage.setItem(
      `translations-${locale}`,
      JSON.stringify(translationsMap),
    );
  }, [locale, translationsMap]);

  const setLocale = (newLocale: TLanguage) => {
    setLocaleState(newLocale);

    document.cookie = `NEXT_LOCALE=${newLocale};path=/;expires=${new Date(
      Date.now() + 30 * 24 * 60 * 60 * 1000,
    ).toUTCString()}`;

    const cached = sessionStorage.getItem(`translations-${newLocale}`);
    if (cached) {
      setTranslationsMap(JSON.parse(cached));
      return;
    }

    fetch(`/assets/locales/${newLocale}/common.json`)
      .then((res) => res.json())
      .then((data) => setTranslationsMap(data))
      .catch(console.error);
  };

  const translations = (key: string) => resolvePath(translationsMap, key);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
