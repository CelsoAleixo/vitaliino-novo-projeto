import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/shared/LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const WHATSAPP_LINK = "https://wa.me/5511940449696?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista.";

// Areas will use translations
const areasDeAtuacaoKeys = [
{ key: "area.corporateLaw", href: "/atuacao/direito-empresarial" },
{ key: "area.legalNegotiation", href: "/atuacao/negociacao-juridica" },
{ key: "area.judicialRecovery", href: "/atuacao/recuperacao-judicial" },
{ key: "area.taxLaw", href: "/atuacao/direito-tributario" },
{ key: "area.laborLaw", href: "/atuacao/direito-trabalhista" },
{ key: "area.familySuccession", href: "/atuacao/familia-e-sucessoes" },
{ key: "area.civilLaw", href: "/atuacao/direito-civil" },
{ key: "area.carbonCredit", href: "/atuacao/credito-de-carbono" },
{ key: "area.judicialRecoveryAgro", href: "/protecao-rural" }];


const navigationKeys = [
{ key: "nav.home", href: "/" },
{ key: "nav.office", href: "/escritorio" },
{ key: "nav.team", href: "/equipe" },
{ key: "nav.agro", href: "/agronegocio" },
{ key: "nav.publications", href: "/publicacoes" },
{ key: "nav.portugal", href: "/portugal" },
{ key: "nav.contact", href: "/contato" }];


export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);
  const [isAreasHovered, setIsAreasHovered] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container-site">
        <div className="flex h-20 md:h-24 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 md:gap-4 group -ml-1" aria-label="Rodrigo Vitalino Advogados - Página Inicial">
            <div className="relative flex-shrink-0">
              <img
                alt="Rodrigo Vitalino Advogados"
                className="h-14 md:h-16 lg:h-[4.5rem] w-auto object-contain transition-all duration-300 group-hover:scale-[1.03] border-0 border-primary"
                width="72"
                height="72"
                fetchPriority="high"
                decoding="async" src="/lovable-uploads/dc472574-eab5-4830-b6d7-55c5b5234743.png" />


            </div>
            <div className="flex flex-col justify-center">
              <span className="font-serif font-semibold tracking-tight text-accent transition-colors duration-300 group-hover:text-accent/90 text-xl md:text-2xl lg:text-[1.6rem] leading-tight">
                Rodrigo Vitalino
              </span>
              <div className="flex items-center mt-0.5 md:mt-1 gap-1.5 md:gap-2 max-w-[90%]">
                <span className="w-4 md:w-6 h-px bg-foreground/50"></span>
                <span className="text-[8px] md:text-[10px] font-medium text-accent/80 tracking-[0.2em] md:tracking-[0.3em] uppercase whitespace-nowrap">
                  Advogados
                </span>
                <span className="w-4 md:w-6 h-px bg-foreground/50"></span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {navigationKeys.slice(0, 2).map((item) =>
            <Link
              key={item.key}
              to={item.href}
              className={`text-sm font-medium transition-colors link-underline ${isActive(item.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>

                {t(item.key)}
              </Link>
            )}
            
            {/* Áreas de Atuação Dropdown - Hover */}
            <div className="relative" onMouseEnter={() => setIsAreasHovered(true)} onMouseLeave={() => setIsAreasHovered(false)}>
              <Link
                to="/atuacao"
                className={`text-sm font-medium transition-colors flex items-center gap-1 ${isActive("/atuacao") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>

                {t("nav.areas")}
                <ChevronDown className={`h-4 w-4 transition-transform ${isAreasHovered ? "rotate-180" : ""}`} />
              </Link>
              
              {/* Dropdown Menu */}
              {isAreasHovered &&
              <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-56 bg-background border border-border rounded-lg shadow-lg py-2 animate-fade-in">
                    {areasDeAtuacaoKeys.map((area) =>
                  <Link
                    key={area.href}
                    to={area.href}
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">

                        {t(area.key)}
                      </Link>
                  )}
                  </div>
                </div>
              }
            </div>

            {navigationKeys.slice(2).map((item) =>
            <Link
              key={item.key}
              to={item.href}
              className={`text-sm font-medium transition-colors link-underline ${isActive(item.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>

                {t(item.key)}
              </Link>
            )}
            
            {/* Language Toggle */}
            <LanguageToggle />
            
            <Button asChild size="sm" className="ml-2">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                {t("nav.talkToUs")}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button + Language Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageToggle />
            <button
              type="button"
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}>

              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen &&
        <div className="lg:hidden border-t border-border py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navigationKeys.slice(0, 2).map((item) =>
            <Link
              key={item.key}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-2 transition-colors ${isActive(item.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>

                  {t(item.key)}
                </Link>
            )}
              
              {/* Mobile Áreas de Atuação */}
              <div>
                <button
                onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
                className={`text-base font-medium py-2 transition-colors flex items-center gap-1 w-full ${isActive("/atuacao") ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>

                  {t("nav.areas")}
                  <ChevronDown className={`h-4 w-4 transition-transform ${mobileAreasOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileAreasOpen &&
              <div className="pl-4 space-y-2 mt-2">
                    {areasDeAtuacaoKeys.map((area) =>
                <Link
                  key={area.href}
                  to={area.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-1 text-sm text-muted-foreground hover:text-foreground">

                        {t(area.key)}
                      </Link>
                )}
                  </div>
              }
              </div>

              {navigationKeys.slice(2).map((item) =>
            <Link
              key={item.key}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium py-2 transition-colors ${isActive(item.href) ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>

                  {t(item.key)}
                </Link>
            )}
              
              <Button asChild className="w-full mt-4">
                <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2">

                  <MessageCircle className="h-5 w-5" />
                  {t("nav.talkToUs")}
                </a>
              </Button>
            </div>
          </div>
        }
      </nav>
    </header>);

}