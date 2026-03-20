import { MessageCircle, X } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_LINK = "https://wa.me/5511940449696?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista.";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show button after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Show tooltip after 4 seconds
    const tooltipTimer = setTimeout(() => {
      if (!dismissed) {
        setShowTooltip(true);
      }
    }, 4000);

    // Hide tooltip after 10 seconds (longer for better engagement)
    const hideTooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
      clearTimeout(hideTooltipTimer);
    };
  }, [dismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3 sm:gap-4">
      {/* Desktop Tooltip - optimized text and visual performance */}
      {showTooltip && !dismissed && (
        <div 
          className="relative animate-fade-in hidden sm:block"
          role="tooltip"
          aria-label="Iniciar conversa pelo WhatsApp"
        >
          <div className="bg-card rounded-xl shadow-2xl p-4 max-w-[240px] border border-accent/40 backdrop-blur-sm">
            <button 
              onClick={() => {
                setShowTooltip(false);
                setDismissed(true);
              }}
              className="absolute -top-2 -right-2 w-6 h-6 bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground rounded-full flex items-center justify-center transition-colors shadow-md"
              aria-label="Fechar tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-accent" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-foreground leading-tight">
                  Tire suas dúvidas agora
                </p>
                <p className="text-xs text-muted-foreground leading-snug">
                  Fale com especialista
                </p>
              </div>
            </div>
          </div>
          {/* Triangle pointer */}
          <div 
            className="absolute -bottom-2 right-8 w-4 h-4 bg-card border-r border-b border-accent/40 rotate-45" 
            aria-hidden="true"
          />
        </div>
      )}

      {/* Mobile Tooltip - compact and non-intrusive */}
      {showTooltip && !dismissed && (
        <div 
          className="relative animate-fade-in sm:hidden"
          role="tooltip"
          aria-label="Iniciar conversa"
        >
          <div className="bg-card/95 rounded-lg shadow-xl px-3 py-2.5 max-w-[180px] border border-accent/30 backdrop-blur-sm">
            <button 
              onClick={() => {
                setShowTooltip(false);
                setDismissed(true);
              }}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-muted hover:bg-accent text-muted-foreground hover:text-accent-foreground rounded-full flex items-center justify-center transition-colors shadow-sm"
              aria-label="Fechar"
            >
              <X className="w-2.5 h-2.5" />
            </button>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-3.5 h-3.5 text-accent flex-shrink-0" />
              <p className="text-xs font-medium text-foreground leading-tight">
                Fale conosco!
              </p>
            </div>
          </div>
          {/* Triangle pointer */}
          <div 
            className="absolute -bottom-1.5 right-5 w-3 h-3 bg-card/95 border-r border-b border-accent/30 rotate-45" 
            aria-hidden="true"
          />
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-accent rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 animate-fade-in focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
        aria-label="Contato via WhatsApp"
      >
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" aria-hidden="true" />
        
        {/* WhatsApp Icon */}
        <svg 
          viewBox="0 0 24 24" 
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-accent-foreground relative z-10"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
