import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { PageSEO, breadcrumbSchema } from "@/components/shared/PageSEO";
import heroImage from "@/assets/areas/direito-tributario-hero.jpg";
import { Calculator, FileText, Shield } from "lucide-react";

export default function DireitoTributario() {
  return (
    <Layout>
      <PageSEO
        title="Direito Tributário"
        description="Planejamento tributário, defesa fiscal e consultoria em impostos para empresas. Reduza riscos e otimize sua carga tributária. Rodrigo Vitalino Advogados."
        jsonLd={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Áreas de Atuação", url: "/atuacao" }, { name: "Direito Tributário", url: "/atuacao/direito-tributario" }])}
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
              <li className="text-foreground">Direito Tributário</li>
            </ol>
          </nav>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Icon Badge */}
            <div className="w-40 h-40 md:w-52 md:h-52 flex-shrink-0 animate-fade-in">
              <div className="w-full h-full bg-accent/10 border border-accent/30 rounded-2xl flex flex-col items-center justify-center gap-2 p-4">
                <div className="flex gap-3">
                  <Calculator className="w-12 h-12 text-accent" />
                  <Shield className="w-12 h-12 text-accent" />
                </div>
                <FileText className="w-12 h-12 text-accent" />
              </div>
            </div>
            
            {/* Title & Description */}
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-4">
                Direito Tributário
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
                Gestão fiscal estratégica e defesa em litígios tributários
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
                Atuamos em demandas consultivas e contenciosas tributárias, com abordagem estratégica voltada à identificação de riscos e oportunidades para apoiar decisões empresariais.
              </p>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Consultoria e Planejamento</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Consultoria Tributária:</strong> Elaboração de pareceres jurídicos e revisão de procedimentos fiscais.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Planejamento Fiscal:</strong> Planejamento fiscal e tributário para otimização da carga tributária.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Recuperação de Créditos:</strong> Identificação e recuperação de créditos tributários.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Planejamento Imobiliário:</strong> Planejamento tributário de pessoas físicas e jurídicas nas operações de compra e venda de imóveis.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Contencioso Tributário</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Defesa Administrativa:</strong> Atendimento no contencioso administrativo e judicial.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Autos de Infração:</strong> Defesa em autos de infração, notificações e execuções fiscais com acompanhamento em todas as instâncias.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Fiscalização:</strong> Acompanhamento de fiscalização e auditoria.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Assessoria Estratégica</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Comitês:</strong> Participação em reuniões de diretoria e em comitês tributários.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Responsabilização:</strong> Análise e orientação em questões relacionadas à responsabilização tributária, de pessoas físicas e jurídicas, em sucessão originada de alterações societárias.</span>
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-4">
                Nossa abordagem é focada na <strong className="text-foreground">prevenção</strong> e na <strong className="text-foreground">identificação de oportunidades</strong>, sempre buscando a melhor solução para cada caso específico.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Precisa de consultoria tributária?" 
        description="Entre em contato para uma análise especializada da sua situação fiscal." 
      />
    </Layout>
  );
}
