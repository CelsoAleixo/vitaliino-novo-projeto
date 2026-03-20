import { Link } from "react-router-dom";
import { Calendar, ArrowRight, User } from "lucide-react";
import { Publication, getPublicationUrl } from "@/data/publications";
import { useLanguage } from "@/contexts/LanguageContext";

// Default author when publication doesn't have a specific authorSection
const DEFAULT_AUTHOR = {
  name: "Dra. Ana Caroline Ianuck",
  shortName: "Ana Caroline Ianuck",
  photo: "/lovable-uploads/ana-caroline-v3.png",
};

interface PublicationCardProps {
  publication: Publication;
  variant?: "default" | "featured" | "compact";
  onCategoryClick?: (category: string) => void;
}

export function PublicationCard({ publication, variant = "default", onCategoryClick }: PublicationCardProps) {
  const { language, t } = useLanguage();
  const authorName = publication.authorSection?.name || DEFAULT_AUTHOR.name;
  const authorPhoto = publication.authorSection?.photo || DEFAULT_AUTHOR.photo;
  
  // Get localized content
  const title = language === 'en' ? publication.titleEn : publication.title;
  const subtitle = language === 'en' ? publication.subtitleEn : publication.subtitle;
  const excerpt = language === 'en' ? publication.excerptEn : publication.excerpt;
  const category = language === 'en' ? publication.categoryEn : publication.category;
  
  const formattedDate = new Date(publication.date).toLocaleDateString(language === 'en' ? "en-US" : "pt-BR", {
    day: "numeric",
    month: variant === "featured" ? "long" : "short",
    year: "numeric",
  });

  if (variant === "featured") {
    return (
      <article className="group bg-card rounded-xl border border-border overflow-hidden hover:border-accent/40 transition-all duration-300">
        <div className="p-8 md:p-10">
          {/* Author Banner */}
          <div className="flex items-center gap-4 mb-6 pb-5 border-b border-border">
            <img
              src={authorPhoto}
              alt={authorName}
              className="w-14 h-14 rounded-full object-cover object-top border-2 border-accent/30 shadow-md flex-shrink-0"
            />
            <div>
              <p className="text-foreground font-medium text-sm">{authorName}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                <Calendar className="h-3 w-3" />
                <span>{formattedDate}</span>
                <span className="text-muted-foreground/40">•</span>
                <span className="text-accent font-medium uppercase tracking-wider">{category}</span>
              </div>
            </div>
          </div>

          {/* Title */}
          <Link to={getPublicationUrl(publication)}>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl mb-4 text-foreground group-hover:text-accent transition-colors leading-tight cursor-pointer">
              {title}
            </h2>
          </Link>

          {/* Subtitle */}
          {subtitle && <p className="text-lg text-accent/80 font-medium mb-4">{subtitle}</p>}

          {/* Excerpt */}
          <p className="text-muted-foreground leading-relaxed text-lg mb-6 max-w-3xl">{excerpt}</p>

          {/* Footer */}
          <div className="flex flex-wrap items-center justify-end gap-4">
            <Link
              to={getPublicationUrl(publication)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded font-medium hover:bg-accent/90 transition-colors"
            >
              {language === 'en' ? 'Read full article' : 'Ler artigo completo'}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  if (variant === "compact") {
    return (
      <Link
        to={getPublicationUrl(publication)}
        className="group bg-card rounded-xl border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg flex flex-col h-full overflow-hidden"
      >
        {/* Author Banner Header */}
        <div className="flex items-center gap-3 px-5 py-4 bg-secondary/50 border-b border-border">
          <img
            src={authorPhoto}
            alt={authorName}
            className="w-10 h-10 rounded-full object-cover object-top border-2 border-accent/20 shadow-sm flex-shrink-0"
          />
          <div className="min-w-0 flex-1">
            <p className="text-foreground font-medium text-xs truncate">{authorName}</p>
            <span className="text-[11px] text-muted-foreground">{formattedDate}</span>
          </div>
          <span className="text-[10px] font-semibold text-accent uppercase tracking-wider bg-accent/10 px-2 py-1 rounded flex-shrink-0">{category}</span>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-serif text-lg mb-3 group-hover:text-accent transition-colors line-clamp-2 flex-grow">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{excerpt}</p>

          {/* Read more */}
          <div className="flex items-center justify-end gap-2 pt-3 border-t border-border mt-auto">
            <div className="flex items-center gap-2 text-accent text-sm font-medium">
              <span>{language === 'en' ? 'Read more' : 'Ler mais'}</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Default variant
  return (
    <article className="group bg-card rounded-xl border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden">
      {/* Author Banner Header */}
      <div className="flex items-center gap-3 px-5 py-4 bg-secondary/50 border-b border-border">
        <img
          src={authorPhoto}
          alt={authorName}
          className="w-10 h-10 rounded-full object-cover object-top border-2 border-accent/20 shadow-sm flex-shrink-0"
        />
        <div className="min-w-0 flex-1">
          <p className="text-foreground font-medium text-xs truncate">{authorName}</p>
          <span className="text-[11px] text-muted-foreground">{formattedDate}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Category */}
        <div className="mb-3">
          {onCategoryClick ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                onCategoryClick(publication.category);
              }}
              className="text-[10px] font-semibold text-accent uppercase tracking-wider bg-accent/10 px-2 py-1 rounded hover:bg-accent/20 transition-colors"
            >
              {category}
            </button>
          ) : (
            <span className="text-[10px] font-semibold text-accent uppercase tracking-wider bg-accent/10 px-2 py-1 rounded">
              {category}
            </span>
          )}
        </div>

        {/* Title */}
        <Link to={getPublicationUrl(publication)}>
          <h3 className="font-serif text-lg md:text-xl mb-3 text-foreground group-hover:text-accent transition-colors leading-snug cursor-pointer line-clamp-2">
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">{excerpt}</p>

        {/* Read more */}
        <div className="flex items-center justify-end gap-2 pt-4 border-t border-border mt-auto">
          <Link
            to={getPublicationUrl(publication)}
            className="inline-flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all"
          >
            {language === 'en' ? 'Read more' : 'Ler mais'}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
