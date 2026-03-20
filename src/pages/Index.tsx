import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { ManifestoModal } from "@/components/shared/ManifestoModal";
import { TrustIndicators } from "@/components/shared/TrustIndicators";
import { ScrollDownButton } from "@/components/shared/ScrollDownButton";
import { ResponsiveHeroVideo } from "@/components/shared/ResponsiveHeroVideo";
import { PublicationCard } from "@/components/shared/PublicationCard";
import { StorytellingIntro } from "@/components/shared/StorytellingIntro";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageSEO, legalServiceSchema } from "@/components/shared/PageSEO";
import { ArrowRight, Scale, Building2, Phone, BookOpen, Briefcase } from "lucide-react";
import institutionalVideo from "@/assets/institutional-video.mp4";
import { getPublicationsSortedByDate } from "@/data/publications";

// Import area images
import direitoEmpresarialImg from "@/assets/areas/direito-empresarial-hero.jpg";
import negociacaoJuridicaImg from "@/assets/areas/negociacao-juridica-hero.jpg";
import recuperacaoJudicialImg from "@/assets/areas/recuperacao-judicial-hero.jpg";
import direitoTributarioImg from "@/assets/areas/direito-tributario-hero.jpg";

const WHATSAPP_LINK = "https://wa.me/5511974083838?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado.";

export default function Index() {
  const { t, language } = useLanguage();
  const recentPublications = getPublicationsSortedByDate().slice(0, 6);

  const areas = [
  {
    icon: Building2,
    titleKey: "area.corporateLaw",
    descKey: "area.corporateLaw.desc",
    href: "/atuacao/direito-empresarial",
    image: direitoEmpresarialImg
  },
  {
    icon: Scale,
    titleKey: "area.legalNegotiation",
    descKey: "area.legalNegotiation.desc",
    href: "/atuacao/negociacao-juridica",
    image: negociacaoJuridicaImg
  },
  {
    icon: Briefcase,
    titleKey: "area.judicialRecovery",
    descKey: "area.judicialRecovery.desc",
    href: "/atuacao/recuperacao-judicial",
    highlight: true,
    image: recuperacaoJudicialImg
  },
  {
    icon: Scale,
    titleKey: "area.taxLaw",
    descKey: "area.taxLaw.desc",
    href: "/atuacao/direito-tributario",
    image: direitoTributarioImg
  }];


  return (
    <Layout>
      <PageSEO
        title="Rodrigo Vitalino Advogados | Assessoria Jurídica e Consultoria Empresarial"
        description="Assessoria jurídica e consultoria empresarial com atuação prática, eficiente e transparente. Direito empresarial, recuperação judicial, tributário e mais. Atuação no Brasil e Portugal."
        jsonLd={[legalServiceSchema, {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Rodrigo Vitalino Advogados",
          url: "https://rvitalinoadvogados.com.br",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://rvitalinoadvogados.com.br/publicacoes?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }, {
          "@context": "https://schema.org",
          "@type": "SiteNavigationElement",
          name: ["Início", "Áreas de Atuação", "Publicações", "Equipe", "Agronegócio", "Contato"],
          url: [
            "https://rvitalinoadvogados.com.br/",
            "https://rvitalinoadvogados.com.br/atuacao",
            "https://rvitalinoadvogados.com.br/publicacoes",
            "https://rvitalinoadvogados.com.br/equipe",
            "https://rvitalinoadvogados.com.br/agronegocio",
            "https://rvitalinoadvogados.com.br/contato",
          ],
        }]}
      />
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden">
        <ResponsiveHeroVideo
          mp4Src={institutionalVideo}
          overlayClassName="bg-[#1a2e1a]/60 sm:bg-[#1a2e1a]/70"
          playbackRate={1.0}
          priority />

        <div className="container-site relative z-20 py-12 sm:py-16 md:py-24 rounded-none border-0">
          <div className="max-w-2xl">
            <h1 className="text-balance animate-fade-in text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-overlay-strong">
              <span className="block text-accent drop-shadow-lg">
                {t("home.hero.title")}
              </span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-foreground animate-slide-up font-normal text-mobile-justified text-overlay-accessible">
              {t("home.hero.subtitle")}
            </p>
            <div
              className="mt-6 sm:mt-8 md:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 animate-slide-up"
              style={{ animationDelay: "0.1s" }}>

              <Button
                asChild
                size="lg"
                className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full sm:w-auto shadow-lg">

                <Link to="/contato" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  {t("home.hero.contact")}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-foreground/15 border-foreground/40 text-foreground hover:bg-foreground/25 font-medium w-full sm:w-auto shadow-lg">

                <Link to="/atuacao#areas-grid">{t("home.hero.areas")}</Link>
              </Button>
            </div>

            <div className="mt-4 sm:mt-6">
              <ManifestoModal />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-background via-background/80 to-transparent pt-8 sm:pt-16 pb-4 sm:pb-8">
          <div className="container-site flex justify-center">
            <ScrollDownButton targetId="storytelling-section" />
          </div>
        </div>
      </section>

      {/* Trust Indicators Bar */}
      <AnimatedSection animation="fade-up">
        <TrustIndicators variant="light" />
      </AnimatedSection>

      {/* Storytelling Intro */}
      <section id="storytelling-section">
        <StorytellingIntro />
      </section>

      {/* Areas of Practice Section */}
      <section className="section-padding">
        <div className="container-site">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent/10">
                <Briefcase className="h-6 w-6 text-accent" />
              </div>
              <SectionHeading title={t("nav.areas")} />
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {areas.map((area, index) =>
            <AnimatedSection key={index} animation="scale" delay={index * 100}>
              <Link
                to={area.href}
                className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-card min-h-[280px] block">

                <div className="absolute inset-0">
                  <img
                  src={area.image}
                  alt={t(area.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-105 contrast-105"
                  loading="lazy"
                  decoding="async"
                  width={498}
                  height={280} />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                </div>

                {area.highlight &&
              <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                    {t("home.highlight")}
                  </div>
              }

                <div className="relative z-10 p-6 min-h-[280px] flex flex-col justify-end">
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/90 backdrop-blur-sm shadow-lg">
                      <area.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>

                  <h3 className="font-serif text-xl text-foreground mb-2 transition-colors duration-300 group-hover:text-accent drop-shadow-lg">
                    {t(area.titleKey)}
                  </h3>

                  <p className="text-foreground/90 text-sm leading-relaxed mb-4 line-clamp-2 drop-shadow-md no-justify">
                    {t(area.descKey)}
                  </p>

                  <div className="flex items-center gap-2 text-accent text-sm font-medium">
                    <span>{t("home.learnMore")}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </Link>
            </AnimatedSection>
            )}
          </div>

          <AnimatedSection animation="fade-up" delay={200}>
            <div className="text-center">
              <Button asChild variant="outline" className="group">
                <Link to="/atuacao" className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  {t("home.viewAllAreas")}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publicacoes-section" className="section-padding bg-secondary/30">
        <div className="container-site">
          <AnimatedSection animation="fade-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-accent/10">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <SectionHeading title={t("home.publications")} />
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {recentPublications.map((pub, index) =>
            <AnimatedSection key={pub.id} animation="fade-up" delay={index * 100}>
              <PublicationCard publication={pub} variant="compact" />
            </AnimatedSection>
            )}
          </div>

          <AnimatedSection animation="fade-up" delay={300}>
            <div className="text-center">
              <Button asChild variant="outline" className="group">
                <Link to="/publicacoes" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  {t("home.viewAllPublications")}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <AnimatedSection animation="fade-up">
        <CTASection />
      </AnimatedSection>
    </Layout>);

}
