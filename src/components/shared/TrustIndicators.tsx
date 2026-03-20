import { Shield, Award, Users, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface TrustIndicatorsProps {
  variant?: "light" | "dark";
  compact?: boolean;
}

export function TrustIndicators({ variant = "light", compact = false }: TrustIndicatorsProps) {
  const { language } = useLanguage();
  const isDark = variant === "dark";

  const indicators = [
    {
      icon: Shield,
      title: language === "en" ? "Active OAB" : "OAB Ativo",
      description: language === "en" ? "Regular Registration" : "Registro Regular",
    },
    {
      icon: Award,
      title: language === "en" ? "17+ Years" : "17+ Anos",
      description: language === "en" ? "Consolidated Experience" : "Experiência Consolidada",
    },
    {
      icon: Users,
      title: language === "en" ? "500+ Clients" : "500+ Clientes",
      description: language === "en" ? "Companies Served" : "Empresas Atendidas",
    },
    {
      icon: Clock,
      title: language === "en" ? "Fast Response" : "Resposta Rápida",
      description: language === "en" ? "Within 24h" : "Em até 24h",
    },
  ];

  if (compact) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
        {indicators.map((item, index) => (
          <div
            key={index}
            className={`flex items-center gap-2 ${isDark ? "text-white/70" : "text-muted-foreground"}`}
          >
            <item.icon className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">{item.title}</span>
          </div>
        ))}
      </div>
    );
  }

  return null;
}
