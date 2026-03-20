import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { InternationalHero } from "@/components/shared/InternationalHero";
import { CTASection } from "@/components/shared/CTASection";
import { Calendar, Tag, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  getPublicationBySlug, 
  getPublicationById,
  getPublicationUrl,
  Publication 
} from "@/data/publications";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageSEO, breadcrumbSchema } from "@/components/shared/PageSEO";

export default function PublicacaoDetalhe() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  
  // Scroll to top when navigating to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Try to find by slug first, then check if it's a legacy numeric ID
  let post: Publication | undefined;
  let shouldRedirect = false;
  let redirectUrl = "";
  
  if (slug) {
    post = getPublicationBySlug(slug);
    
    // If not found by slug, check if it's a numeric ID (legacy URL)
    if (!post) {
      const numericId = parseInt(slug, 10);
      if (!isNaN(numericId)) {
        const legacyPost = getPublicationById(numericId);
        if (legacyPost) {
          shouldRedirect = true;
          redirectUrl = getPublicationUrl(legacyPost);
        }
      }
    }
  }

  // Handle legacy URL redirect
  useEffect(() => {
    if (shouldRedirect && redirectUrl) {
      navigate(redirectUrl, { replace: true });
    }
  }, [shouldRedirect, redirectUrl, navigate]);

  // Show loading during redirect
  if (shouldRedirect) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted-foreground">Redirecionando...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <Layout>
        <div className="section-padding min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl mb-4">Publicação não encontrada</h1>
            <Link to="/publicacoes" className="text-accent hover:underline">
              Voltar para publicações
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  // Get localized content
  const title = language === 'en' ? post.titleEn : post.title;
  const subtitle = language === 'en' ? post.subtitleEn : post.subtitle;
  const excerpt = language === 'en' ? post.excerptEn : post.excerpt;
  const category = language === 'en' ? post.categoryEn : post.category;
  const content = language === 'en' ? (post.contentEn || post.content) : post.content;
  const authorDescription = post.authorSection 
    ? (language === 'en' ? post.authorSection.descriptionEn : post.authorSection.description)
    : '';

  // Simple markdown-like rendering
  const renderContent = (contentText: string) => {
    const lines = contentText.split('\n');
    return lines.map((line, index) => {
      // Author section marker
      if (line.trim() === '::author::') {
        if (post?.authorSection) {
          const author = post.authorSection;
          return (
            <div key={index} className="mt-12 p-6 bg-muted/30 rounded-lg border border-border">
              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <img 
                  src={author.photo} 
                  alt={author.name}
                  className="w-24 h-24 rounded-full object-cover object-top border-2 border-accent shadow-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <h4 className="font-serif text-xl text-foreground mb-3">{author.name}</h4>
                  <div className="text-muted-foreground text-sm leading-relaxed space-y-2">
                    {authorDescription.split('\n\n').map((paragraph: string, i: number) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        }
        return null;
      }
      // Headers
      if (line.startsWith('### ')) {
        return <h3 key={index} className="font-serif text-xl mt-8 mb-4 text-foreground">{line.replace('### ', '')}</h3>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="font-serif text-2xl mt-10 mb-5 text-foreground">{line.replace('## ', '')}</h2>;
      }
      // Horizontal rule
      if (line.startsWith('---')) {
        return <hr key={index} className="my-8 border-border" />;
      }
      // Numbered list items
      if (/^\d+\.\s/.test(line)) {
        const match = line.match(/^\d+\.\s\*\*(.+?)\*\*(.*)$/);
        if (match) {
          return (
            <li key={index} className="ml-4 mb-2 text-muted-foreground list-decimal">
              <strong className="text-foreground">{match[1]}</strong>{match[2]}
            </li>
          );
        }
        return <li key={index} className="ml-4 mb-2 text-muted-foreground list-decimal">{line.replace(/^\d+\.\s/, '')}</li>;
      }
      // List items
      if (line.startsWith('- **')) {
        const match = line.match(/- \*\*(.+?)\*\*(.*)/) ;
        if (match) {
          return (
            <li key={index} className="ml-4 mb-2 text-muted-foreground">
              <strong className="text-foreground">{match[1]}</strong>{match[2]}
            </li>
          );
        }
      }
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-4 mb-2 text-muted-foreground">{line.replace('- ', '')}</li>;
      }
      // Bold text in paragraphs
      if (line.includes('**')) {
        const parts = line.split(/\*\*(.+?)\*\*/g);
        return (
          <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
            {parts.map((part, i) => 
              i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
            )}
          </p>
        );
      }
      // Italic (signature)
      if (line.startsWith('*') && line.endsWith('*')) {
        return <p key={index} className="text-accent italic mt-8">{line.replace(/\*/g, '')}</p>;
      }
      // Regular paragraphs
      if (line.trim()) {
        return <p key={index} className="text-muted-foreground mb-4 leading-relaxed">{line}</p>;
      }
      return null;
    });
  };

  const isInternational = post.category === "Direito Internacional";
  const hasHeroImage = !!post.heroImage;

  return (
    <Layout>
      <PageSEO
        title={title}
        description={excerpt.slice(0, 155)}
        jsonLd={[
          breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Publicações", url: "/publicacoes" }, { name: title, url: `/publicacoes/${post.slug}` }]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description: excerpt,
            datePublished: post.date,
            author: { "@type": "Organization", name: "Rodrigo Vitalino Advogados" },
            publisher: { "@type": "Organization", name: "Rodrigo Vitalino Advogados", logo: { "@type": "ImageObject", url: "https://rvitalinoadvogados.com.br/og-image.png" } },
          },
        ]}
      />
      {isInternational ? (
        <InternationalHero
          title={title}
          subtitle={subtitle}
        />
      ) : hasHeroImage ? (
        <PageHero
          title={title}
          description={subtitle}
          breadcrumb={[
            { label: t("publications.title"), href: "/publicacoes" },
            { label: category },
          ]}
          backgroundImage={post.heroImage}
          showIcons
        />
      ) : (
        <PageHero
          title={title}
          description={subtitle}
          breadcrumb={[
            { label: t("publications.title"), href: "/publicacoes" },
            { label: category },
          ]}
        />
      )}

      <section className="section-padding">
        <div className="container-site">
          <article className="max-w-3xl mx-auto">
            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-6 border-b border-border">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString(language === 'en' ? "en-US" : "pt-BR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                {category}
              </span>
            </div>

            {/* Article title */}
            <h1 className="font-serif text-3xl md:text-4xl mb-6 text-foreground leading-tight">
              {title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-muted-foreground mb-8 font-medium border-l-4 border-accent pl-4">
              {excerpt}
            </p>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {content && renderContent(content)}
            </div>

            {/* Share and back */}
            <div className="flex flex-wrap justify-between items-center gap-4 mt-12 pt-8 border-t border-border">
              <Link to="/publicacoes">
                <Button variant="outline" className="gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  {language === 'en' ? 'Back to Publications' : 'Voltar para Publicações'}
                </Button>
              </Link>
              <Button
                variant="ghost"
                className="gap-2"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: title,
                      text: excerpt,
                      url: window.location.href,
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                  }
                }}
              >
                <Share2 className="h-4 w-4" />
                {language === 'en' ? 'Share' : 'Compartilhar'}
              </Button>
            </div>
          </article>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
