import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Link } from "react-router-dom";
import { Building2, Handshake, TrendingUp, Calculator, Briefcase, Heart, Scale, Leaf, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageSEO, breadcrumbSchema } from "@/components/shared/PageSEO";

// Import area images
import direitoEmpresarialImg from "@/assets/areas/direito-empresarial-hero.jpg";
import negociacaoJuridicaImg from "@/assets/areas/negociacao-juridica-hero.jpg";
import recuperacaoJudicialImg from "@/assets/areas/recuperacao-judicial-hero.jpg";
import direitoTributarioImg from "@/assets/areas/direito-tributario-hero.jpg";
import direitoTrabalhistaImg from "@/assets/areas/direito-trabalhista-hero.jpg";
import familiaSucessoesImg from "@/assets/areas/familia-sucessoes-hero.jpg";
import direitoCivilImg from "@/assets/areas/direito-civil-hero.jpg";
import creditoCarbonoImg from "@/assets/areas/credito-carbono-hero.jpg";

const WHATSAPP_LINK = "https://wa.me/5511974083838?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado.";

export default function Atuacao() {
  const location = useLocation();
  const { t } = useLanguage();

  const areas = [{
    icon: Building2,
    title: t("area.corporateLaw"),
    description: t("area.corporateLaw.desc"),
    href: "/atuacao/direito-empresarial",
    highlight: false,
    image: direitoEmpresarialImg
  }, {
    icon: Handshake,
    title: t("area.legalNegotiation"),
    description: t("area.legalNegotiation.desc"),
    href: "/atuacao/negociacao-juridica",
    highlight: false,
    image: negociacaoJuridicaImg
  }, {
    icon: TrendingUp,
    title: t("area.judicialRecovery"),
    description: t("area.judicialRecovery.desc"),
    href: "/atuacao/recuperacao-judicial",
    highlight: true,
    image: recuperacaoJudicialImg
  }, {
    icon: Calculator,
    title: t("area.taxLaw"),
    description: t("area.taxLaw.desc"),
    href: "/atuacao/direito-tributario",
    highlight: false,
    image: direitoTributarioImg
  }, {
    icon: Briefcase,
    title: t("area.laborLaw"),
    description: t("area.laborLaw.desc"),
    href: "/atuacao/direito-trabalhista",
    highlight: false,
    image: direitoTrabalhistaImg
  }, {
    icon: Heart,
    title: t("area.familySuccession"),
    description: t("area.familySuccession.desc"),
    href: "/atuacao/familia-e-sucessoes",
    highlight: false,
    image: familiaSucessoesImg
  }, {
    icon: Scale,
    title: t("area.civilLaw"),
    description: t("area.civilLaw.desc"),
    href: "/atuacao/direito-civil",
    highlight: false,
    image: direitoCivilImg
  }, {
    icon: Leaf,
    title: t("area.carbonCredit"),
    description: t("area.carbonCredit.desc"),
    href: "/atuacao/credito-de-carbono",
    highlight: true,
    image: creditoCarbonoImg
  }];

  const benefits = [
    t("areas.benefit1"),
    t("areas.benefit2"),
    t("areas.benefit3"),
    t("areas.benefit4"),
    t("areas.benefit5")
  ];

  useEffect(() => {
    if (location.hash === "#areas-grid") {
      setTimeout(() => {
        const element = document.getElementById("areas-grid");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <Layout>
      <PageSEO
        title="Áreas de Atuação"
        description="Áreas de atuação do escritório Rodrigo Vitalino Advogados: direito empresarial, recuperação judicial, tributário, trabalhista, família e sucessões, crédito de carbono e mais."
        jsonLd={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Áreas de Atuação", url: "/atuacao" }])}
      />
      {/* Quick Contact Banner */}
      <AnimatedSection animation="fade">
        <section className="bg-accent/10 border-b border-accent/20 py-4">
          <div className="container-site">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-2.5 h-2.5 bg-accent rounded-full animate-ping opacity-75" />
                  <span className="relative w-2.5 h-2.5 bg-accent rounded-full" />
                </div>
                <span className="text-sm font-medium">{t("areas.needGuidance")}</span>
              </div>
              <Button asChild size="sm" className="group">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {t("areas.talkToSpecialist")}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Areas Grid with Images */}
      <section id="areas-grid" className="py-24 bg-background scroll-mt-[-20px]">
        <div className="container-site">
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-16">
              <span className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4 block">
                {t("areas.ourSpecialties")}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
                {t("areas.discoverAreas")}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                {t("areas.discoverAreasDesc")}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 80}>
                <Link 
                  to={area.href} 
                  className="group relative rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl bg-card block"
                >
                  <div className="absolute inset-0">
                    <img 
                      src={area.image} 
                      alt={area.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-105 contrast-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  </div>

                  {area.highlight && (
                    <div className="absolute top-4 right-4 z-10 bg-accent text-[#1a2e1a] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                      {t("areas.highlight")}
                    </div>
                  )}

                  <div className="relative z-10 p-6 min-h-[320px] flex flex-col justify-end">
                    <div className="absolute top-4 left-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/90 backdrop-blur-sm shadow-lg">
                        <area.icon className="h-6 w-6 text-[#1a2e1a]" />
                      </div>
                    </div>

                    <h3 className="font-serif text-xl md:text-2xl text-white mb-2 transition-colors duration-300 group-hover:text-accent drop-shadow-lg">
                      {area.title}
                    </h3>
                    
                    <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-2 drop-shadow-md">
                      {area.description}
                    </p>

                    <div className="flex items-center gap-2 text-accent text-sm font-medium">
                      <span>{t("areas.learnMore")}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <AnimatedSection animation="blur-in">
        <section className="py-24 bg-[#1a2e1a] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
          
          <div className="container-site relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-accent text-7xl font-serif mb-8 opacity-60">"</div>
              <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-10 font-light">
                {t("areas.quote")}
              </blockquote>
              <div className="flex items-center justify-center gap-6">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent/50" />
                <div className="text-center">
                  <span className="text-accent font-semibold text-lg block">Rodrigo Vitalino</span>
                  <span className="text-white/50 text-sm">{t("areas.founderLawyer")}</span>
                </div>
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent/50" />
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose Us */}
      <section className="py-24 bg-background">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-left">
              <div>
                <span className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-6 block">
                  {t("areas.whyChooseUs")}
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight">
                  {t("areas.excellenceCommitment")}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
                  {t("areas.excellenceCommitmentDesc")}
                </p>
                
                <div className="space-y-5">
                  {benefits.map((item, index) => (
                    <AnimatedSection key={index} animation="fade-up" delay={index * 80}>
                      <div className="flex items-center gap-4 group">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:from-accent/30 group-hover:to-accent/20 transition-all duration-300">
                          <div className="w-2 h-2 rounded-full bg-accent" />
                        </div>
                        <span className="text-foreground text-lg">{item}</span>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={200}>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-[#1a2e1a] via-[#243824] to-[#1a2e1a] rounded-3xl p-10 flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="relative mb-8">
                      <Scale className="h-28 w-28 text-accent mx-auto opacity-30" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-accent/10 animate-pulse" />
                      </div>
                    </div>
                    <div className="font-serif text-6xl lg:text-7xl bg-gradient-to-r from-accent via-[#d4b65c] to-accent bg-clip-text text-transparent font-semibold mb-3">
                      2008
                    </div>
                    <div className="text-white/60 text-lg">{t("areas.firmFoundation")}</div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 w-28 h-28 border-2 border-accent/20 rounded-3xl" />
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/5 rounded-full blur-3xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <AnimatedSection animation="fade-up">
        <CTASection title={t("areas.ctaTitle")} description={t("areas.ctaDesc")} />
      </AnimatedSection>
    </Layout>
  );
}
