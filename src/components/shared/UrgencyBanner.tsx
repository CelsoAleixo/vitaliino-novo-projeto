import { Clock, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_LINK = "https://wa.me/5511940449696?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista.";

interface UrgencyBannerProps {
  message?: string;
  ctaText?: string;
}

export function UrgencyBanner({ 
  message = "Atendimento disponível agora",
  ctaText = "Falar com Advogado"
}: UrgencyBannerProps) {
  return (
    <div className="bg-accent/10 border-y border-accent/20">
      <div className="container-site py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center">
              <span className="absolute w-2.5 h-2.5 bg-accent rounded-full animate-ping opacity-75" />
              <span className="relative w-2.5 h-2.5 bg-accent rounded-full" />
            </div>
            <span className="text-sm font-medium text-foreground">
              {message}
            </span>
            <div className="hidden sm:flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              <span>Resposta em minutos</span>
            </div>
          </div>
          
          <Button asChild size="sm" className="group">
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {ctaText}
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
