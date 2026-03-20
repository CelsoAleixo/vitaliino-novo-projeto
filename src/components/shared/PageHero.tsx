import { Scale, Handshake, Settings } from "lucide-react";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumb?: { label: string; href?: string }[];
  backgroundImage?: string;
  showIcons?: boolean;
}

export function PageHero({ title, description, breadcrumb, backgroundImage, showIcons }: PageHeroProps) {
  const hasBackground = !!backgroundImage;
  
  return (
    <section 
      className={`relative py-20 md:py-28 lg:py-36 ${hasBackground ? 'min-h-[500px] md:min-h-[600px] flex items-center' : 'bg-secondary'}`}
    >
      {hasBackground && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat image-enhance-strong"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          {/* Reduced opacity for better image visibility */}
          <div className="absolute inset-0 bg-[#1a2e1a]/60" />
        </>
      )}
      
      <div className={`container-site relative z-10 ${hasBackground ? 'text-white' : ''}`}>
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className={`mb-8 text-sm ${hasBackground ? 'text-white/70' : 'text-muted-foreground'}`} aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li>
                <a href="/" className={`transition-colors ${hasBackground ? 'hover:text-white' : 'hover:text-foreground'}`}>
                  Início
                </a>
              </li>
              {breadcrumb.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span>/</span>
                  {item.href ? (
                    <a href={item.href} className={`transition-colors ${hasBackground ? 'hover:text-white' : 'hover:text-foreground'}`}>
                      {item.label}
                    </a>
                  ) : (
                    <span className={hasBackground ? 'text-accent font-medium' : 'text-foreground'}>{item.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        
        <div className="flex items-center gap-8">
          {showIcons && (
            <div className="hidden md:block">
              <div className="grid grid-cols-2 gap-2 p-3 bg-accent/10 border border-accent/30 rounded-xl backdrop-blur-sm">
                <div className="p-3 flex items-center justify-center">
                  <Handshake className="w-10 h-10 text-accent" />
                </div>
                <div className="p-3 flex items-center justify-center">
                  <Scale className="w-10 h-10 text-accent" />
                </div>
                <div className="col-span-2 p-3 flex items-center justify-center border-t border-accent/20">
                  <Settings className="w-10 h-10 text-accent" />
                </div>
              </div>
            </div>
          )}
          
          <div>
            <h1 className={`text-balance max-w-4xl animate-fade-in ${hasBackground ? 'text-accent' : ''}`}>
              {title}
            </h1>
            {description && (
              <p className={`mt-4 text-lg md:text-xl max-w-2xl animate-slide-up ${hasBackground ? 'text-white/90' : 'text-muted-foreground'}`}>
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
