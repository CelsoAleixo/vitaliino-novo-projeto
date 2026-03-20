import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Detect browser language
function detectBrowserLanguage(): Language {
  const browserLang = navigator.language || (navigator as any).userLanguage || "pt";
  return browserLang.startsWith("en") ? "en" : "pt";
}

// Get stored language or detect from browser
function getInitialLanguage(): Language {
  const stored = localStorage.getItem("rv-language") as Language | null;
  if (stored && (stored === "pt" || stored === "en")) {
    return stored;
  }
  return detectBrowserLanguage();
}

interface LanguageProviderProps {
  children: ReactNode;
  translations: Record<Language, Record<string, string>>;
}

export function LanguageProvider({ children, translations }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("pt");
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initialLang = getInitialLanguage();
    setLanguageState(initialLang);
    setIsInitialized(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("rv-language", lang);
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  };

  const t = (key: string): string => {
    const langTranslations = translations[language];
    return langTranslations?.[key] || translations["pt"]?.[key] || key;
  };

  // Update HTML lang attribute
  useEffect(() => {
    if (isInitialized) {
      document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    }
  }, [language, isInitialized]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
