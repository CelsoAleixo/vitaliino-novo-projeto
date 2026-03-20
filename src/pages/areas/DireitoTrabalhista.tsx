import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { PageSEO, breadcrumbSchema } from "@/components/shared/PageSEO";
import heroImage from "@/assets/areas/direito-trabalhista-hero.jpg";
import { Users, Gavel, FileText } from "lucide-react";

export default function DireitoTrabalhista() {
  return (
    <Layout>
      <PageSEO
        title="Direito Trabalhista"
        description="Assessoria trabalhista para empresas e empregadores. Defesa em reclamações, compliance trabalhista e consultoria preventiva. Rodrigo Vitalino Advogados."
        jsonLd={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Áreas de Atuação", url: "/atuacao" }, { name: "Direito Trabalhista", url: "/atuacao/direito-trabalhista" }])}
      />
      {/* Hero Section com imagem de fundo */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat image-enhance-strong" 
          style={{ backgroundImage: `url(${heroImage})` }} 
        />
        {/* Overlay - reduced opacity for more image visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/40" />
        
        {/* Content */}
        <div className="container-site relative z-10 py-20">
          <nav className="mb-8 text-xs sm:text-sm text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 whitespace-nowrap">
              <li>
                <a href="/" className="hover:text-foreground transition-colors">Início</a>
              </li>
              <li className="text-muted-foreground/60">/</li>
              <li>
                <a href="/atuacao" className="hover:text-foreground transition-colors">Áreas de Atuação</a>
              </li>
              <li className="text-muted-foreground/60">/</li>
              <li className="text-foreground">Direito Trabalhista</li>
            </ol>
          </nav>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Icon Badge */}
            <div className="w-40 h-40 md:w-52 md:h-52 flex-shrink-0 animate-fade-in">
              <div className="w-full h-full bg-accent/10 border border-accent/30 rounded-2xl flex flex-col items-center justify-center gap-2 p-4">
                <div className="flex gap-3">
                  <Users className="w-12 h-12 text-accent" />
                  <Gavel className="w-12 h-12 text-accent" />
                </div>
                <FileText className="w-12 h-12 text-accent" />
              </div>
            </div>
            
            {/* Title & Description */}
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-4">
                Direito Trabalhista
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
                Assessoria jurídica especializada e exclusiva para empresas
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">

            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed text-lg italic border-l-4 border-accent pl-4">
                Nossa atuação em Direito Trabalhista é voltada exclusivamente para empregadores. Oferecemos suporte jurídico estratégico para empresas que buscam segurança nas relações de trabalho, redução de passivos e conformidade com a legislação vigente.
              </p>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Foco Empresarial</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Entendemos que a gestão de pessoas é um dos maiores desafios do ambiente corporativo. Por isso, nossa assessoria trabalhista é inteiramente direcionada às necessidades das empresas, auxiliando na estruturação de políticas internas, na adequação de contratos e na prevenção de conflitos antes que se tornem demandas judiciais.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Consultoria Preventiva</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Atuamos de forma preventiva para minimizar riscos trabalhistas, analisando processos internos, revisando documentos e orientando a tomada de decisões que impactem a relação com colaboradores. A prevenção é sempre mais eficaz e econômica do que a correção de problemas já instalados.
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Nossos Serviços para Empresas</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Defesa Empresarial:</strong> Representação de empresas em reclamações trabalhistas e recursos em todas as instâncias.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Assessoria Preventiva:</strong> Elaboração e revisão de contratos de trabalho, políticas internas e regulamentos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Compliance Trabalhista:</strong> Adequação às normas da CLT, convenções coletivas e legislação setorial.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Gestão de Passivos:</strong> Análise e estratégias para redução de contingências trabalhistas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Negociações Coletivas:</strong> Apoio em negociações com sindicatos e acordos coletivos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Reestruturações:</strong> Suporte jurídico em processos de demissão, terceirização e reorganização societária.</span>
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-4">
                Nosso compromisso é proporcionar <strong className="text-foreground">segurança jurídica</strong> e <strong className="text-foreground">tranquilidade operacional</strong> para sua empresa, permitindo que você foque no crescimento do seu negócio enquanto cuidamos das questões trabalhistas com expertise e dedicação.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Sua empresa precisa de assessoria trabalhista?" 
        description="Entre em contato para uma consultoria especializada e exclusiva para empregadores." 
      />
    </Layout>
  );
}
