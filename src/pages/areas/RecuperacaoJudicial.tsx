import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { PageSEO, breadcrumbSchema } from "@/components/shared/PageSEO";
import { Building2, Scale, Truck, Leaf, Shield, FileText } from "lucide-react";
import heroImage from "@/assets/areas/recuperacao-judicial-hero.jpg";
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};
export default function RecuperacaoJudicial() {
  return <Layout>
      <PageSEO
        title="Recuperação Judicial"
        description="Especialistas em recuperação judicial e extrajudicial de empresas. Reestruturação de dívidas, negociação com credores e planos de recuperação. Rodrigo Vitalino Advogados."
        jsonLd={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Áreas de Atuação", url: "/atuacao" }, { name: "Recuperação Judicial", url: "/atuacao/recuperacao-judicial" }])}
      />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center image-enhance-strong" style={{
        backgroundImage: `url(${heroImage})`
      }} />
        <div className="absolute inset-0 bg-[#1a2e1a]/65" />
        
        <div className="container-site relative z-10 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <nav className="mb-6 animate-fade-in" aria-label="Breadcrumb">
                <ol className="flex items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm whitespace-nowrap">
                  <li><a href="/" className="text-white/80 hover:text-accent transition-colors drop-shadow-md">Início</a></li>
                  <li className="text-white/60">/</li>
                  <li><a href="/atuacao" className="text-white/80 hover:text-accent transition-colors drop-shadow-md">Áreas de Atuação</a></li>
                  <li className="text-white/60">/</li>
                  <li className="text-accent font-medium drop-shadow-md">Recuperação Judicial</li>
                </ol>
              </nav>
              
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 animate-fade-in" style={{
              textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
            }}>
                Recuperação Judicial
              </h1>
              <p className="text-lg text-white/90 max-w-2xl animate-slide-up mb-8" style={{
              textShadow: '1px 1px 4px rgba(0,0,0,0.4)'
            }}>
                Experiência consolidada na condução de processos de recuperação judicial em diversos setores da economia, com atuação estratégica para preservação de empresas e proteção de credores.
              </p>
              
              {/* Quick Navigation Tags */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 animate-fade-in">
                <button onClick={() => scrollToSection('transporte-publico')} className="group flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-accent/50 rounded-full text-white text-sm font-medium transition-all duration-300 hover:scale-105">
                  <Truck className="h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
                  <span>Transporte Público</span>
                </button>
                <a href="/protecao-rural" className="group flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-accent/50 rounded-full text-white text-sm font-medium transition-all duration-300 hover:scale-105">
                  <Leaf className="h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
                  <span>Agronegócio</span>
                </a>
              </div>
            </div>
            
            <div className="flex-shrink-0">
              
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            
            {/* Introdução */}
            <div className="mb-16">
              <h2 className="font-serif text-3xl mb-6">Experiência em Recuperação Judicial</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-mobile-justified">
                O escritório Rodrigo Vitalino Advogados possui ampla experiência na condução de processos de recuperação judicial, atuando em todas as fases do procedimento — desde a análise de viabilidade e elaboração do plano de recuperação até a negociação com credores e acompanhamento da execução judicial.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed text-mobile-justified">
                Nossa atuação abrange empresas de diversos portes e segmentos, sempre com foco na preservação da atividade empresarial, manutenção dos empregos e cumprimento das obrigações junto aos credores de forma sustentável.
              </p>
            </div>

            {/* Transporte Público */}
            <div id="transporte-publico" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <Truck className="h-8 w-8 text-accent" />
                <h2 className="font-serif text-2xl">Empresas Concessionárias de Transporte Público</h2>
              </div>
              
              <div className="border-l-4 border-accent pl-6 mb-6">
                <p className="text-muted-foreground italic text-lg text-mobile-justified">
                  "A recuperação judicial de empresas de transporte público exige conhecimento técnico especializado, dada a natureza essencial do serviço prestado à população e as peculiaridades regulatórias do setor."
                </p>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-mobile-justified">
                Destacamos nossa atuação especializada junto a <strong>empresas concessionárias de transporte público urbano e rodoviário</strong>, um setor que demanda atenção particular devido à sua relevância social e às complexidades inerentes ao regime de concessão pública.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-mobile-justified">
                Nossa experiência inclui a condução de processos que conciliam as exigências do poder concedente, os direitos dos credores e a necessidade de continuidade do serviço público, garantindo soluções juridicamente seguras e economicamente viáveis.
              </p>

              <div className="bg-muted/50 rounded-lg p-6 mb-6">
                <h4 className="font-semibold mb-4">Principais desafios no setor de transporte público:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Manutenção da continuidade do serviço público essencial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Conciliação entre obrigações contratuais e plano de recuperação</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Negociação com entes públicos e agências reguladoras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                    <span>Proteção dos trabalhadores e garantia de direitos</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Agronegócio */}
            <div id="agronegocio" className="mb-16 scroll-mt-24">
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="h-8 w-8 text-accent" />
                <h2 className="font-serif text-2xl">Recuperação Judicial no Agronegócio</h2>
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-mobile-justified">
                A <strong>Lei 14.112/2020</strong> representou um marco importante ao ampliar significativamente o acesso dos produtores rurais ao instituto da recuperação judicial, reconhecendo as especificidades da atividade agrícola e a necessidade de instrumentos adequados para a reestruturação de dívidas no campo.
              </p>
              
              <div className="border-l-4 border-accent pl-6 mb-6">
                <p className="text-muted-foreground italic text-lg text-mobile-justified">
                  "O produtor rural pessoa física agora pode acessar a recuperação judicial, possibilitando a preservação da atividade produtiva e a manutenção do emprego e renda no campo."
                </p>
              </div>

              <h3 className="font-serif text-xl mb-4">Principais benefícios :</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Scale className="h-6 w-6 text-accent" />
                    <h4 className="font-semibold">Suspensão de Execuções</h4>
                  </div>
                  <p className="text-muted-foreground text-sm text-mobile-justified">
                    Com o deferimento do processamento da recuperação judicial, as execuções e ações contra o produtor são suspensas, proporcionando fôlego para reorganização financeira.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="h-6 w-6 text-accent" />
                    <h4 className="font-semibold">Preservação de Bens Essenciais</h4>
                  </div>
                  <p className="text-muted-foreground text-sm text-mobile-justified">
                    Os bens indispensáveis à atividade rural são protegidos, garantindo a continuidade da produção e evitando a deterioração do patrimônio produtivo.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <Leaf className="h-6 w-6 text-accent" />
                    <h4 className="font-semibold">Manutenção da Produção</h4>
                  </div>
                  <p className="text-muted-foreground text-sm text-mobile-justified">
                    A recuperação judicial permite que o produtor continue suas atividades, mantendo a geração de renda e o ciclo produtivo essencial para quitação das obrigações.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <FileText className="h-6 w-6 text-accent" />
                    <h4 className="font-semibold">Reestruturação de Dívidas</h4>
                  </div>
                  <p className="text-muted-foreground text-sm text-mobile-justified">
                    Possibilidade de negociar prazos, carências e condições de pagamento adequadas à realidade da atividade rural e seus ciclos produtivos.
                  </p>
                </div>
              </div>

              <div className="bg-accent/10 rounded-lg p-6">
                <h4 className="font-semibold mb-3">A importância da orientação jurídica especializada</h4>
                <p className="text-muted-foreground leading-relaxed text-mobile-justified mb-4">
                  O sucesso de um processo de recuperação judicial no agronegócio depende fundamentalmente de uma assessoria jurídica experiente, capaz de elaborar um plano de recuperação viável, conduzir as negociações com credores e acompanhar todas as exigências legais. O escritório Rodrigo Vitalino Advogados oferece o suporte técnico necessário para que o produtor rural atravesse esse momento com segurança jurídica e perspectiva de superação.
                </p>
                <a href="/protecao-rural" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors text-sm">
                  Saiba mais sobre Recuperação Judicial no Agronegócio →
                </a>
              </div>
            </div>

            {/* Outras Áreas */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl mb-6">Atuação em Diversos Setores</h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-mobile-justified">
                Além do transporte público e do agronegócio, o escritório possui experiência em recuperação judicial de empresas dos mais variados segmentos, incluindo:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-accent" />
                  <span>Empresas de mineração</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-accent" />
                  <span>Indústria de alimentos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-accent" />
                  <span>Comércio e varejo</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-accent" />
                  <span>Prestação de serviços</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-accent" />
                  <span>Construção civil</span>
                </li>
                <li className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-accent" />
                  <span>Empresas concessionárias</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <CTASection title="Precisa de assessoria em Recuperação Judicial?" description="Entre em contato para uma análise especializada do seu caso." />
    </Layout>;
}