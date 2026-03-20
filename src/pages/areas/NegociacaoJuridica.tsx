import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { PageSEO, breadcrumbSchema } from "@/components/shared/PageSEO";
import heroImage from "@/assets/areas/negociacao-juridica-hero.jpg";
import { Scale, Handshake, Settings } from "lucide-react";

export default function NegociacaoJuridica() {
  return (
    <Layout>
      <PageSEO
        title="Negociação Jurídica"
        description="Negociação jurídica estratégica para resolução de conflitos empresariais. Mediação, arbitragem e acordos extrajudiciais. Rodrigo Vitalino Advogados."
        jsonLd={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Áreas de Atuação", url: "/atuacao" }, { name: "Negociação Jurídica", url: "/atuacao/negociacao-juridica" }])}
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
              <li className="text-foreground">Negociação Jurídica</li>
            </ol>
          </nav>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Icon Badge */}
            <div className="w-40 h-40 md:w-52 md:h-52 flex-shrink-0 animate-fade-in">
              <div className="w-full h-full bg-accent/10 border border-accent/30 rounded-2xl flex flex-col items-center justify-center gap-2 p-4">
                <div className="flex gap-3">
                  <Handshake className="w-12 h-12 text-accent" />
                  <Scale className="w-12 h-12 text-accent" />
                </div>
                <Settings className="w-12 h-12 text-accent" />
              </div>
            </div>
            
            {/* Title & Description */}
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-4">
                Negociação Jurídica
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
                Resolução estratégica de conflitos e estruturação de acordos
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
                Negociação Jurídica é uma área estratégica do Direito focada na resolução de conflitos e na estruturação de acordos extrajudiciais ou judiciais, visando eficiência, segurança jurídica e economia de tempo/recursos. Ela vai além do litígio tradicional, utilizando técnicas avançadas para transformar impasses em oportunidades vantajosas, sendo essencial em renegociações de dívidas, disputas empresariais e familiares.
              </p>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">O que define um Especialista em Negociação Jurídica</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Foco na Solução (Extrajudicial):</strong> Atuação voltada a evitar processos judiciais demorados, priorizando mediação e conciliação.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Gestão de Conflitos e Dívidas:</strong> Expertise em renegociação, revisão de contratos e acordos financeiros.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Advocacia Estratégica:</strong> Aplicação de ferramentas de negociação tanto antes quanto durante o processo judicial (contencioso).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Pilar Técnico:</strong> Baseia-se em análise aprofundada, comunicação eficaz e gestão estratégica de concessões.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Técnicas e Habilidades Fundamentais</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Escuta Ativa:</strong> Essencial para entender os interesses subjacentes da outra parte, superando apenas as posições declaradas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Preparação (BATNA):</strong> Conhecer profundamente o caso e a "Melhor Alternativa a um Acordo Negociado" (BATNA - Best Alternative to a Negotiated Agreement).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Inteligência Emocional:</strong> Capacidade de manter a calma e gerenciar emoções em negociações de alto risco.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Criatividade:</strong> Encontrar soluções que maximizem os ganhos para ambas as partes (ganha-ganha).</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Diferenciais da Especialidade</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Segurança Jurídica:</strong> Garantir que o acordo firmado seja legalmente sólido.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Agilidade:</strong> Resolver disputas mais rapidamente que o sistema judiciário.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Redução de Custos:</strong> Evitar gastos com longos processos judiciais.</span>
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-4">
                O papel do negociador jurídico tem se tornado essencial no futuro do Direito, dada a necessidade de métodos mais ágeis e menos impositivos para a solução de conflitos, nas áreas do <strong className="text-foreground">Agronegócio</strong>, <strong className="text-foreground">Transportes de Encomendas</strong>, <strong className="text-foreground">Transportes de Passageiros</strong>, <strong className="text-foreground">Parceria Público Privada (PPP)</strong>, <strong className="text-foreground">Indústrias e Comércios em Geral</strong> (em âmbito nacional e internacional), <strong className="text-foreground">Infraestrutura</strong> e <strong className="text-foreground">Novos Negócios</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Precisa de apoio em negociações?" 
        description="Entre em contato para uma consultoria especializada em Negociação Jurídica." 
      />
    </Layout>
  );
}
