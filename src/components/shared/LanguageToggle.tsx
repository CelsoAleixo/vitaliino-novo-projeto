import { useLanguage, Language } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang: Language = language === "pt" ? "en" : "pt";
    setLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-secondary/80 hover:bg-secondary border border-border/50 transition-all duration-200 hover:scale-105"
      aria-label={language === "pt" ? "Switch to English" : "Mudar para Português"}
      title={language === "pt" ? "Switch to English" : "Mudar para Português"}
    >
      <Globe className="h-3.5 w-3.5 text-muted-foreground" />
      <span className="text-muted-foreground">{language === "pt" ? "PT" : "EN"}</span>
      <span className="text-foreground/40">|</span>
      <span className="text-accent font-semibold">{language === "pt" ? "EN" : "PT"}</span>
    </button>
  );
}
