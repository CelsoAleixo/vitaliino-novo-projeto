import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Scale, Users, Building2, Globe, Award, History, Heart } from "lucide-react";
import escritorioHero from "@/assets/escritorio-hero.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageSEO, breadcrumbSchema } from "@/components/shared/PageSEO";

const clientesInternacionais = [
  "Proview Electronics Co Ltd – Taipei / Taiwan",
  "RED International Group – Taipei / Taiwan",
  "Proview LED Lighting Co. Ltd – Taipei / Taiwan",
  "New Era Investment Inc. – Panama / Panama",
  "Reit Investment Corp. – Panama / Panama",
  "North Capital Holding – Copenhagen / Denmark",
  "Dti Korea Co. Ltd – Coreia do Sul"
];

export default function Escritorio() {
  const { t } = useLanguage();

  const valores = [
    t("office.valor1"),
    t("office.valor2"),
    t("office.valor3"),
    t("office.valor4"),
    t("office.valor5"),
    t("office.valor6"),
    t("office.valor7"),
    t("office.valor8")
  ];

  const clientesNacionais = [
    t("office.nationalClient1"),
    t("office.nationalClient2"),
    t("office.nationalClient3"),
    t("office.nationalClient4"),
    t("office.nationalClient5")
  ];

  const diferenciais = [{
    icon: Scale,
    title: t("office.specialization"),
    description: t("office.specializationDesc")
  }, {
    icon: Users,
    title: t("office.excellence"),
    description: t("office.excellenceDesc")
  }];

  return (
    <Layout>
      <PageSEO
        title="O Escritório"
        description="Conheça o escritório Rodrigo Vitalino Advogados: história, valores, missão e atuação internacional em direito empresarial e recuperação judicial."
        jsonLd={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "O Escritório", url: "/escritorio" }])}
      />
      {/* Premium Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[#0d1a0d] overflow-hidden">
          <OptimizedImage
            src={escritorioHero}
            alt="Escritório Rodrigo Vitalino Advogados"
            className="w-full h-full object-cover object-center image-enhance-strong"
            priority={true}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1a0d]/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1a0d]/30 via-transparent to-transparent" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-accent/30" />
        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-accent/30" />

        {/* Content */}
        <div className="container-site relative z-10">
          <div className="max-w-xl">
            <nav className="flex items-center gap-2 text-sm mb-8 animate-fade-in">
              <Link to="/" className="text-foreground/80 hover:text-accent transition-colors drop-shadow-md">
                {t("common.home")}
              </Link>
              <span className="text-foreground/60 drop-shadow-md">/</span>
              <span className="text-accent font-medium drop-shadow-md">{t("office.title")}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 mb-6 backdrop-blur-sm animate-fade-in">
              <Scale className="w-4 h-4 text-accent" />
              <span className="text-accent text-sm font-semibold">{t("office.since")}</span>
            </div>

            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
            }}>
              {t("office.title")}
            </h1>

            <div className="flex flex-wrap gap-8 md:gap-12 animate-slide-up">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-accent drop-shadow-lg">17+</div>
                <div className="text-foreground/80 text-sm mt-1 drop-shadow-md">{t("office.yearsExperience")}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-accent drop-shadow-lg">500+</div>
                <div className="text-foreground/80 text-sm mt-1 drop-shadow-md">{t("office.clientsServed")}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-serif font-bold text-accent drop-shadow-lg">17</div>
                <div className="text-foreground/80 text-sm mt-1 drop-shadow-md">{t("office.countriesOperation")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion Sections */}
      <section className="section-padding">
        <div className="container-site max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            <AnimatedSection animation="fade-up" delay={0}>
              <AccordionItem value="sobre-nos" className="border border-border rounded-xl overflow-hidden bg-card">
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <History className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-serif text-xl font-semibold">{t("office.aboutUs")}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-6">
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>{t("office.aboutUsText1")}</p>
                      <p>{t("office.aboutUsText2")}</p>
                      <p>{t("office.aboutUsText3")}</p>
                    </div>
                    
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      <OptimizedImage
                        src="/lovable-uploads/d8c139b1-7ccc-4be4-8400-a2fc92806d89.png"
                        alt="Sala de reuniões do escritório Rodrigo Vitalino Advogados"
                        className="w-full h-64 object-cover"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-xl border border-accent/20">
                      <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg">
                        <div className="text-2xl font-serif font-bold">2008</div>
                        <div className="text-xs uppercase tracking-wider">{t("office.foundation")}</div>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {t("office.foundationBadgeText")}
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={100}>
              <AccordionItem value="diferenciais" className="border border-border rounded-xl overflow-hidden bg-card">
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Award className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-serif text-xl font-semibold">{t("office.ourDifferentials")}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      {diferenciais.map((item, index) => (
                        <div key={index} className="bg-secondary/50 rounded-xl p-6 border border-border">
                          <item.icon className="h-8 w-8 text-accent mb-4" />
                          <h4 className="font-serif text-lg font-semibold mb-3">{item.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-[#1a2e1a] rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 rounded-lg bg-accent/10">
                          <Heart className="w-5 h-5 text-accent" />
                        </div>
                        <h4 className="font-serif text-xl font-semibold text-foreground">
                          {t("office.principles")}
                        </h4>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        {valores.map((valor, index) => (
                          <div 
                            key={index} 
                            className="flex items-start gap-3 bg-foreground/5 backdrop-blur-sm rounded-lg p-4 border border-foreground/10"
                          >
                            <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-foreground/90 text-sm leading-relaxed">{valor}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <AccordionItem value="clientes" className="border border-border rounded-xl overflow-hidden bg-card">
                <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-secondary/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-accent/10">
                      <Users className="h-5 w-5 text-accent" />
                    </div>
                    <span className="font-serif text-xl font-semibold">{t("office.clientsServedSection")}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-secondary/50 rounded-xl p-6 border border-border">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-accent" />
                        </div>
                        <h4 className="font-serif text-lg font-semibold">{t("office.nationalCompanies")}</h4>
                      </div>
                      <ul className="space-y-3 text-muted-foreground text-sm">
                        {clientesNacionais.map((cliente, index) => (
                          <li key={index} className="border-l-2 border-accent pl-4">
                            {cliente}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-secondary/50 rounded-xl p-6 border border-border">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                          <Globe className="h-6 w-6 text-accent" />
                        </div>
                        <h4 className="font-serif text-lg font-semibold">{t("office.internationalCompanies")}</h4>
                      </div>
                      <ul className="space-y-3 text-muted-foreground text-sm">
                        {clientesInternacionais.map((cliente, index) => (
                          <li key={index} className="border-l-2 border-accent pl-4">
                            {cliente}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </AnimatedSection>
          </Accordion>
        </div>
      </section>

      <AnimatedSection animation="fade-up">
        <CTASection />
      </AnimatedSection>
    </Layout>
  );
}
