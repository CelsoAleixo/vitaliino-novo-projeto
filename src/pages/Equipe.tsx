import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { OptimizedImage } from "@/components/shared/OptimizedImage";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Users, Shield, FileText, Scale, Building2, Landmark } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageSEO, breadcrumbSchema } from "@/components/shared/PageSEO";

const advogados = [{
  nome: "Rodrigo Vitalino",
  cargo: "Sócio Fundador",
  cargoEn: "Founding Partner",
  especialidade: "(Reestruturação de Empresas)",
  especialidadeEn: "(Corporate Restructuring)",
  email: "rodrigo@rvitalinoadvogados.com.br",
  foto: "/lovable-uploads/d699caab-0157-4f29-ab67-c28d2b8cdcd7.png"
}, {
  nome: "Deidre Scaranello",
  cargo: "Diretora Jurídica",
  cargoEn: "Legal Director",
  especialidade: "(Operações Estratégicas em Insolvência)",
  especialidadeEn: "(Strategic Insolvency Operations)",
  email: "deidre@rvitalinoadvogados.com.br",
  foto: "/lovable-uploads/deidre-scaranello-v4.png"
}, {
  nome: "Ana Caroline Ianuck",
  cargo: "Advogada Empresarial",
  cargoEn: "Corporate Lawyer",
  especialidade: "(Especialista em recuperação judicial)",
  especialidadeEn: "(Judicial Recovery Specialist)",
  email: "ana.caroline@rvitalinoadvogados.com.br",
  foto: "/lovable-uploads/ana-caroline-v3.png"
}, {
  nome: "Arthur Vitalino",
  cargo: "Business Manager",
  cargoEn: "Business Manager",
  especialidade: "(Formado em Toronto, Canadá)",
  especialidadeEn: "(Graduated in Toronto, Canada)",
  email: "arthur@rvitalinoadvogados.com.br",
  foto: "/lovable-uploads/arthur-vitalino-v4.png"
}, {
  nome: "Elisandra Sousa Barbosa",
  cargo: "Advogada Empresarial",
  cargoEn: "Corporate Lawyer",
  especialidade: "(Especialista em recuperação judicial)",
  especialidadeEn: "(Judicial Recovery Specialist)",
  email: "elisandra.sousa@rvitalinoadvogados.com.br",
  foto: "/lovable-uploads/elisandra-sousa-v4.png"
}];

export default function Equipe() {
  const { t, language } = useLanguage();

  return (
    <Layout>
      <PageSEO
        title="Equipe"
        description="Conheça os advogados e especialistas do escritório Rodrigo Vitalino Advogados. Profissionais experientes em direito empresarial, recuperação judicial e mais."
        jsonLd={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Equipe", url: "/equipe" }])}
      />
      {/* Team Section */}
      <section className="section-padding bg-secondary">
        <div className="max-w-[1600px] mx-auto px-3 md:px-4 lg:px-6">
          {/* Header */}
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-accent text-sm font-medium uppercase tracking-wider">{t("team.title")}</span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                {t("team.subtitle")}
              </h1>
            </div>
          </AnimatedSection>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
            {advogados.map((advogado, index) => (
              <AnimatedSection key={index} animation="scale" delay={index * 100}>
                <div className="bg-background rounded-xl p-6 lg:p-7 border border-border hover:border-accent/30 hover:shadow-xl transition-all duration-300 text-center group flex flex-col items-center h-full">
                  <div className="w-40 h-40 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full overflow-hidden mb-5 ring-2 ring-border group-hover:ring-accent/40 transition-all duration-300 shadow-lg flex-shrink-0">
                    <OptimizedImage 
                      src={advogado.foto} 
                      alt={`${advogado.nome} - ${language === 'pt' ? advogado.cargo : advogado.cargoEn}`} 
                      className={`w-full h-full object-cover ${advogado.nome === "Deidre Scaranello" ? "object-[center_20%]" : advogado.nome === "Elisandra Sousa Barbosa" ? "object-[center_15%]" : ""}`} 
                      loading="lazy" 
                      sizes="(max-width: 640px) 112px, (max-width: 1024px) 128px, 144px" 
                    />
                  </div>
                  <h3 className="font-serif font-bold text-sm lg:text-base text-foreground mb-1 leading-tight">
                    {advogado.nome}
                  </h3>
                  <p className="text-accent font-semibold text-[9px] lg:text-[10px] uppercase tracking-wider mb-1 text-justify">
                    {language === 'pt' ? advogado.cargo : advogado.cargoEn}
                  </p>
                  <div className="min-h-[32px] flex items-start justify-center">
                    {advogado.especialidade && (
                      <p className="text-muted-foreground text-[10px] lg:text-xs leading-tight text-center">
                        {language === 'pt' ? advogado.especialidade : advogado.especialidadeEn}
                      </p>
                    )}
                  </div>
                  <a 
                    href={`mailto:${advogado.email}`} 
                    className="text-muted-foreground hover:text-accent transition-colors text-[8px] truncate block w-full mt-auto pt-2 lg:text-xs"
                  >
                    {advogado.email}
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Especialização da Equipe */}
      <section className="section-padding bg-[#1a2e1a]">
        <div className="container-site">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
                  <Shield className="w-4 h-4 text-accent" />
                  <span className="text-accent text-sm font-medium uppercase tracking-wider">
                    {language === 'pt' ? 'Especialização' : 'Expertise'}
                  </span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">
                  {language === 'pt' 
                    ? 'Por Que Nossa Equipe Faz a Diferença?' 
                    : 'Why Does Our Team Make the Difference?'}
                </h2>
              </div>
            </AnimatedSection>

            {/* Q&A Blocks */}
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Scale, titlePt: 'Prevenir ou remediar?', titleEn: 'Prevent or remedy?', descPt: 'Atuamos antes que o problema surja. Assessoria contínua, compliance e governança corporativa garantem que cada decisão esteja juridicamente respaldada — transformando a advocacia em vantagem competitiva.', descEn: 'We act before the problem arises. Ongoing advisory, compliance, and corporate governance ensure every decision is legally supported — turning legal practice into competitive advantage.' },
                { icon: FileText, titlePt: 'Seus contratos protegem ou expõem?', titleEn: 'Do your contracts protect or expose?', descPt: 'Contratos genéricos são uma das maiores fontes de conflito corporativo. Elaboramos cláusulas personalizadas, acordos de sócios e estruturações societárias que blindam sua operação.', descEn: 'Generic contracts are one of the greatest sources of corporate conflict. We draft customized clauses, shareholder agreements, and corporate structures that shield your operations.' },
                { icon: Building2, titlePt: 'Crise financeira ou reestruturação?', titleEn: 'Financial crisis or restructuring?', descPt: 'Recuperação judicial e extrajudicial exigem estratégia, não desespero. Desenvolvemos planos viáveis de reestruturação, captação de investimentos e due diligence para retomar o crescimento.', descEn: 'Judicial and extrajudicial recovery require strategy, not desperation. We develop viable restructuring plans, investment raising, and due diligence to resume growth.' },
                { icon: Landmark, titlePt: 'Seu legado está protegido?', titleEn: 'Is your legacy protected?', descPt: 'Para empresas familiares, oferecemos planejamento sucessório, holdings e prevenção de conflitos entre herdeiros. Protegemos marcas, patentes e propriedade intelectual com visão de longo prazo.', descEn: 'For family businesses, we offer succession planning, holdings, and prevention of conflicts among heirs. We protect trademarks, patents, and intellectual property with a long-term vision.' },
              ].map((block, i) => (
                <AnimatedSection key={i} animation={i % 2 === 0 ? "fade-left" : "fade-right"} delay={i * 100}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 border border-white/10 hover:border-accent/30 transition-all duration-300 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-accent/10">
                        <block.icon className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-accent">
                        {language === 'pt' ? block.titlePt : block.titleEn}
                      </h3>
                    </div>
                    <p className="text-white/75 leading-relaxed text-sm">
                      {language === 'pt' ? block.descPt : block.descEn}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection animation="fade-up">
        <CTASection />
      </AnimatedSection>
    </Layout>
  );
}
