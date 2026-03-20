import { useState, useMemo } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { PublicationCard } from "@/components/shared/PublicationCard";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Input } from "@/components/ui/input";
import { ScrollDownButton } from "@/components/shared/ScrollDownButton";
import { Search, BookOpen } from "lucide-react";
import publicationsHero from "@/assets/publications-hero.jpg";
import { 
  categories,
  categoriesEn,
  getPublicationsSortedByDate 
} from "@/data/publications";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageSEO, breadcrumbSchema } from "@/components/shared/PageSEO";

export default function Publicacoes() {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState(language === 'pt' ? "Todas" : "All");

  const sortedPosts = useMemo(() => getPublicationsSortedByDate(), []);

  const filteredPosts = useMemo(() => {
    const allLabel = language === 'pt' ? "Todas" : "All";
    return sortedPosts.filter((post) => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = activeCategory === allLabel || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [sortedPosts, searchTerm, activeCategory, language]);

  const featuredPost = filteredPosts[0];
  const remainingPosts = filteredPosts.slice(1);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const displayCategories = language === 'pt' ? categories : categoriesEn;

  return (
    <Layout>
      <PageSEO
        title="Publicações"
        description="Artigos, análises jurídicas e informações sobre direito empresarial, recuperação judicial, tributário e mais. Conteúdo produzido pelos especialistas do escritório Rodrigo Vitalino Advogados."
        jsonLd={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Publicações", url: "/publicacoes" }])}
      />
      <div className="relative">
        <PageHero
          title={t("publications.heroTitle")}
          description={t("publications.heroDesc")}
          breadcrumb={[{ label: t("publications.title") }]}
          backgroundImage={publicationsHero}
        />
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center">
          <ScrollDownButton targetId="publicacoes-content" />
        </div>
      </div>

      <section id="publicacoes-content" className="section-padding">
        <div className="container-site">
          {/* Search and Filter Bar */}
          <AnimatedSection animation="fade-up">
            <div className="mb-12 space-y-6">
              <div className="relative max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder={t("publications.search")}
                  className="pl-11 h-12 bg-card border-border rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {displayCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeCategory === category
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Results Count */}
          <div className="flex items-center gap-2 mb-8 text-muted-foreground">
            <BookOpen className="h-4 w-4" />
            <span className="text-sm">
              {filteredPosts.length} {filteredPosts.length === 1 ? t("publications.found") : t("publications.foundPlural")}
            </span>
          </div>

          {filteredPosts.length > 0 ? (
            <>
              {featuredPost && (
                <AnimatedSection animation="fade-up">
                  <div id="primeira-publicacao" className="mb-12">
                    <PublicationCard 
                      publication={featuredPost} 
                      variant="featured"
                      onCategoryClick={handleCategoryClick}
                    />
                  </div>
                </AnimatedSection>
              )}

              {remainingPosts.length > 0 && (
                <div className="grid md:grid-cols-2 gap-6">
                  {remainingPosts.map((post, index) => (
                    <AnimatedSection key={post.id} animation="fade-up" delay={index * 80}>
                      <PublicationCard
                        publication={post}
                        variant="default"
                        onCategoryClick={handleCategoryClick}
                      />
                    </AnimatedSection>
                  ))}
                </div>
              )}
            </>
          ) : (
            <AnimatedSection animation="scale">
              <div className="text-center py-16 bg-secondary/30 rounded-lg border border-border">
                <BookOpen className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
                <p className="text-muted-foreground text-lg mb-2">
                  {t("publications.noResults")}
                </p>
                <p className="text-muted-foreground/70 text-sm">
                  {t("publications.noResultsDesc")}
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setActiveCategory(language === 'pt' ? "Todas" : "All");
                  }}
                  className="mt-4 text-accent hover:underline text-sm font-medium"
                >
                  {t("publications.clearFilters")}
                </button>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      <AnimatedSection animation="fade-up">
        <CTASection />
      </AnimatedSection>
    </Layout>
  );
}
