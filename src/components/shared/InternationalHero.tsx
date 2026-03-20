import { Link } from "react-router-dom";
import internationalBg from "@/assets/publications/direito-internacional-hero.jpg";
import { Globe, Scale } from "lucide-react";
interface InternationalHeroProps {
  title: string;
  subtitle: string;
}
export function InternationalHero({
  title,
  subtitle
}: InternationalHeroProps) {
  return <section className="relative min-h-[320px] md:min-h-[400px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={internationalBg} alt="Conferência internacional de direito" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70" />
      </div>

      {/* Content */}
      <div className="container-site relative z-10 py-16 md:py-20">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-muted-foreground" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link to="/" className="hover:text-primary transition-colors">
                Início
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span>/</span>
              <Link to="/publicacoes" className="hover:text-primary transition-colors">
                Publicações
              </Link>
            </li>
            <li className="flex items-center gap-2">
              <span>/</span>
              <span className="text-primary">Direito Internacional</span>
            </li>
          </ol>
        </nav>

        <div className="flex flex-col md:flex-row items-start gap-8">
          {/* Icon Group */}
          <div className="flex-shrink-0 hidden md:flex">
            <div className="relative">
              <div className="w-24 h-24 flex items-center justify-center">
                <Globe className="w-16 h-16 text-primary" strokeWidth={1.5} />
              </div>
              
              <div className="absolute -top-1 -right-4">
                
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full border border-primary/30">
                <Globe className="w-4 h-4" />
                Direito Internacional
              </span>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight animate-fade-in">
              {title}
            </h1>
            
            {subtitle && <p className="mt-4 text-lg md:text-xl text-primary font-medium animate-slide-up">
                {subtitle}
              </p>}
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8">
        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
      </div>
    </section>;
}