import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { QuoteBand } from "@/components/shared/QuoteBand";
import { CTASection } from "@/components/shared/CTASection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CheckCircle, Euro, FileText, Building2, Phone, ArrowRight, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageSEO, breadcrumbSchema } from "@/components/shared/PageSEO";
import portugalHero from "@/assets/portugal-hero.jpg";

const WHATSAPP_PORTUGAL = "https://wa.me/351910385021?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20sobre%20servi%C3%A7os%20jur%C3%ADdicos%20em%20Portugal.";

export default function Portugal() {
  const { language } = useLanguage();

  const t = {
    pt: {
      title: "Portugal",
      description: "Atuação internacional com inscrição na Ordem dos Advogados de Portugal.",
      bannerText: "Atendimento em Portugal e União Europeia",
      bannerBadge: "Inscrito na Ordem dos Advogados de Portugal",
      talkToRep: "Falar com Representante",
      intro: "Portugal é um país europeu que vem fazendo grandes esforços para reerguer sua economia e, para isso, estimula a abertura de novas empresas. Abaixo algumas informações sobre como abrir empresa em Portugal sendo brasileiro (estrangeiro).",
      companyTypes: "Tipos de empresa em Portugal",
      companyTypesSubtitle: "Conheça as principais modalidades de constituição empresarial",
      singular: "Empresa Singular",
      collective: "Empresa Coletiva",
      singularItems: ["Nome individual do empresário", "Sociedade Unipessoal por quotas", "Estabelecimento individual de responsabilidade limitada"],
      singularDesc: "Para o empresário em nome individual não há capital mínimo necessário para abertura da empresa. Para uma Sociedade Unipessoal por quotas e Estabelecimento individual de responsabilidade limitada são necessários pelo menos €5.000,00 de capital.",
      collectiveItems: ["Sociedade por quotas", "Sociedade Anônima (S.A.)", "Sociedade em nome coletivo", "Sociedade em Comandita", "Cooperativa"],
      collectiveDesc: "Capital mínimo varia conforme o tipo societário escolhido. Consulte-nos para orientação específica sobre a melhor estrutura para seu negócio.",
      empresaNaHora: "Empresa na Hora",
      empresaNaHoraDesc: "O serviço 'Empresa na Hora' permite constituir uma empresa de forma rápida e simplificada em Portugal. É possível criar uma sociedade comercial num único atendimento presencial.",
      requiredDocs: "Documentos Necessários",
      docs: ["NIF (Número de Identificação Fiscal)", "Documento de identificação válido", "Número de Segurança Social (se aplicável)", "Dados do contador certificado"],
      costs: "Quanto custa abrir empresa em Portugal",
      taxesAndFees: "Impostos e Taxas",
      ircDesc: "25% sobre o lucro tributável",
      derramaDesc: "até 1,5% (varia por município)",
      ivaDesc: "IVA (Imposto sobre Valor Acrescentado)",
      ivaNormal: "Taxa normal: 23%",
      ivaIntermediate: "Taxa intermédia: 13%",
      ivaReduced: "Taxa reduzida: 6% (bens essenciais)",
      receivedDocs: "Documentos Recebidos",
      receivedDocsList: ["Pacto Social", "Códigos de acesso ao Portal das Finanças", "Número de Segurança Social da empresa"],
      nextSteps: "Próximos passos:",
      nextStepsList: ["Contratar contador certificado", "Depósito do capital social (até 5 dias úteis)"],
      quote: "Teu dever é lutar pelo direito, mas no dia em que encontrares o direito em conflito com a justiça, luta pela justiça.",
      ctaTitle: "Quer abrir empresa em Portugal?",
      ctaDesc: "Entre em contato para uma consulta sobre internacionalização.",
    },
    en: {
      title: "Portugal",
      description: "International practice with registration at the Portuguese Bar Association.",
      bannerText: "Service in Portugal and the European Union",
      bannerBadge: "Registered with the Portuguese Bar Association",
      talkToRep: "Talk to Representative",
      intro: "Portugal is a European country that has been making great efforts to rebuild its economy and, for this reason, encourages the opening of new companies. Below is some information on how to open a company in Portugal as a Brazilian (foreigner).",
      companyTypes: "Types of companies in Portugal",
      companyTypesSubtitle: "Learn about the main types of business incorporation",
      singular: "Sole Proprietorship",
      collective: "Collective Company",
      singularItems: ["Individual entrepreneur name", "Single-member limited company", "Individual limited liability establishment"],
      singularDesc: "For a sole proprietor, there is no minimum capital required to open the company. For a Single-member Limited Company and Individual Limited Liability Establishment, at least €5,000.00 in capital is required.",
      collectiveItems: ["Limited liability company", "Corporation (S.A.)", "General partnership", "Limited partnership", "Cooperative"],
      collectiveDesc: "Minimum capital varies according to the type of company chosen. Contact us for specific guidance on the best structure for your business.",
      empresaNaHora: "Company in an Hour",
      empresaNaHoraDesc: "The 'Company in an Hour' service allows you to set up a company quickly and easily in Portugal. It is possible to create a commercial company in a single in-person appointment.",
      requiredDocs: "Required Documents",
      docs: ["NIF (Tax Identification Number)", "Valid identification document", "Social Security Number (if applicable)", "Certified accountant information"],
      costs: "How much does it cost to open a company in Portugal",
      taxesAndFees: "Taxes and Fees",
      ircDesc: "25% on taxable profit",
      derramaDesc: "up to 1.5% (varies by municipality)",
      ivaDesc: "VAT (Value Added Tax)",
      ivaNormal: "Standard rate: 23%",
      ivaIntermediate: "Intermediate rate: 13%",
      ivaReduced: "Reduced rate: 6% (essential goods)",
      receivedDocs: "Documents Received",
      receivedDocsList: ["Articles of Association", "Access codes to the Tax Portal", "Company Social Security Number"],
      nextSteps: "Next steps:",
      nextStepsList: ["Hire a certified accountant", "Deposit share capital (up to 5 business days)"],
      quote: "Your duty is to fight for the law, but on the day you find the law in conflict with justice, fight for justice.",
      ctaTitle: "Want to open a company in Portugal?",
      ctaDesc: "Get in touch for a consultation on internationalization.",
    },
  };

  const text = t[language];

  return (
    <Layout>
      <PageSEO
        title="Portugal – Assessoria Jurídica Internacional"
        description="Assessoria jurídica para brasileiros em Portugal. Abertura de empresas, Golden Visa, planejamento tributário e representação legal na União Europeia."
        jsonLd={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Portugal", url: "/portugal" }])}
      />
      <PageHero title={text.title} description={text.description} breadcrumb={[{ label: text.title }]} backgroundImage={portugalHero} />

      {/* Quick Contact Banner */}
      <AnimatedSection animation="fade">
        <section className="bg-accent/10 border-b border-accent/20 py-4">
          <div className="container-site">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Globe className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">{text.bannerText}</span>
                <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="w-3 h-3" />
                  <span>{text.bannerBadge}</span>
                </div>
              </div>
              <Button asChild size="sm" className="group">
                <a href={WHATSAPP_PORTUGAL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  {text.talkToRep}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Intro with Image */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-left">
              <div className="max-w-xl">
                <p className="text-lg text-muted-foreground leading-relaxed">{text.intro}</p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-right" delay={150}>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img alt="Modern business district in Lisbon, Portugal" className="w-full h-64 object-cover image-enhance" src="/lovable-uploads/d1806986-e5a9-4a5c-8bc6-8e36418af95e.png" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Company Types */}
      <section className="section-padding bg-secondary">
        <div className="container-site">
          <AnimatedSection animation="fade-up">
            <SectionHeading title={text.companyTypes} subtitle={text.companyTypesSubtitle} />
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl">
            <AnimatedSection animation="fade-left" delay={100}>
              <div className="bg-background rounded-lg p-8 border border-border h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="h-8 w-8 text-accent" />
                  <h3 className="font-serif text-xl">{text.singular}</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  {text.singularItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground leading-relaxed">{text.singularDesc}</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-right" delay={200}>
              <div className="bg-background rounded-lg p-8 border border-border h-full">
                <div className="flex items-center gap-3 mb-6">
                  <Building2 className="h-8 w-8 text-accent" />
                  <h3 className="font-serif text-xl">{text.collective}</h3>
                </div>
                <ul className="space-y-3 mb-6">
                  {text.collectiveItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground leading-relaxed">{text.collectiveDesc}</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Empresa na Hora */}
      <section className="section-padding">
        <div className="container-site">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl">
              <SectionHeading title={text.empresaNaHora} />
              <p className="text-muted-foreground leading-relaxed mb-6">{text.empresaNaHoraDesc}</p>

              <div className="bg-card rounded-lg p-6 border border-border mb-8">
                <h4 className="font-serif text-lg mb-4 flex items-center gap-2">
                  <FileText className="h-5 w-5 text-accent" />
                  {text.requiredDocs}
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  {text.docs.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Costs */}
      <section className="section-padding bg-secondary">
        <div className="container-site">
          <AnimatedSection animation="fade-up">
            <div className="max-w-3xl">
              <SectionHeading title={text.costs} />

              <div className="bg-background rounded-lg p-6 border border-border mb-8">
                <h4 className="font-serif text-lg mb-4 flex items-center gap-2">
                  <Euro className="h-5 w-5 text-accent" />
                  {text.taxesAndFees}
                </h4>
                <ul className="space-y-4 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">IRC:</strong> {text.ircDesc}
                  </li>
                  <li>
                    <strong className="text-foreground">Derrama:</strong> {text.derramaDesc}
                  </li>
                  <li>
                    <strong className="text-foreground">{text.ivaDesc}:</strong>
                    <ul className="mt-2 ml-4 space-y-1">
                      <li>• {text.ivaNormal}</li>
                      <li>• {text.ivaIntermediate}</li>
                      <li>• {text.ivaReduced}</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="bg-background rounded-lg p-6 border border-border">
                <h4 className="font-serif text-lg mb-4">{text.receivedDocs}</h4>
                <ul className="space-y-2 text-muted-foreground">
                  {text.receivedDocsList.map((doc, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-1" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-border">
                  <h5 className="font-medium mb-2">{text.nextSteps}</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {text.nextStepsList.map((step, index) => (
                      <li key={index}>• {step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quote */}
      <AnimatedSection animation="blur-in">
        <QuoteBand quote={text.quote} author="Eduardo Couture" />
      </AnimatedSection>

      <AnimatedSection animation="fade-up">
        <CTASection title={text.ctaTitle} description={text.ctaDesc} />
      </AnimatedSection>
    </Layout>
  );
}
