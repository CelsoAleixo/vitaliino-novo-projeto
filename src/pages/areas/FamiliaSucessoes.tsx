import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { PageSEO, breadcrumbSchema } from "@/components/shared/PageSEO";
import heroImage from "@/assets/areas/familia-sucessoes-hero.jpg";
import { Building2, Shield, Scale } from "lucide-react";

export default function FamiliaSucessoes() {
  return (
    <Layout>
      <PageSEO
        title="Família e Sucessões"
        description="Direito de família e sucessões: inventário, partilha de bens, planejamento sucessório e proteção patrimonial. Rodrigo Vitalino Advogados."
        jsonLd={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Áreas de Atuação", url: "/atuacao" }, { name: "Família e Sucessões", url: "/atuacao/familia-e-sucessoes" }])}
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
              <li className="text-foreground">Família e Sucessões</li>
            </ol>
          </nav>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Icon Badge */}
            <div className="w-40 h-40 md:w-52 md:h-52 flex-shrink-0 animate-fade-in">
              <div className="w-full h-full bg-accent/10 border border-accent/30 rounded-2xl flex flex-col items-center justify-center gap-2 p-4">
                <div className="flex gap-3">
                  <Building2 className="w-12 h-12 text-accent" />
                  <Shield className="w-12 h-12 text-accent" />
                </div>
                <Scale className="w-12 h-12 text-accent" />
              </div>
            </div>
            
            {/* Title & Description */}
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-4">
                Planejamento Patrimonial e Sucessório
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
                Estratégia jurídica para proteção e perpetuação do patrimônio empresarial
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
                A continuidade de uma empresa familiar exige mais do que gestão competente: demanda planejamento jurídico estratégico. Nossa atuação em Planejamento Patrimonial e Sucessório é direcionada a empresários e grupos familiares que buscam preservar seu legado, proteger ativos e garantir a transição ordenada do patrimônio empresarial.
              </p>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Planejamento Sucessório Empresarial</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A ausência de um planejamento sucessório adequado representa um dos maiores riscos para a continuidade de empresas familiares. Estruturamos soluções que garantem a transição do controle societário de forma ordenada, minimizando conflitos e preservando o valor do negócio.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Protocolo Familiar:</strong> Elaboração de regras claras para governança, remuneração e participação de herdeiros na gestão.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Acordos de Sócios:</strong> Instrumentos que disciplinam a entrada, permanência e saída de membros familiares na sociedade.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Testamentos Empresariais:</strong> Disposições testamentárias com foco na continuidade operacional e governança corporativa.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Doação com Reserva de Usufruto:</strong> Antecipação patrimonial com manutenção do controle e dos rendimentos pelo doador.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Proteção Patrimonial</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Disputas familiares podem comprometer décadas de trabalho e colocar em risco a própria existência da empresa. Desenvolvemos estruturas jurídicas que blindam o patrimônio empresarial contra litígios, garantindo segurança para o empresário e seus sucessores.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Segregação Patrimonial:</strong> Separação entre patrimônio pessoal e empresarial para mitigação de riscos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Regimes Matrimoniais Estratégicos:</strong> Análise e escolha do regime de bens adequado à proteção dos ativos empresariais.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Pactos Antenupciais:</strong> Instrumentos preventivos para proteção do patrimônio em caso de dissolução conjugal.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Cláusulas de Incomunicabilidade:</strong> Restrições que impedem a transferência de quotas ou ações a terceiros por via familiar.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Estrutura Societária Familiar</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A constituição de veículos societários adequados é fundamental para a organização patrimonial e a eficiência tributária. Estruturamos holdings e demais instrumentos com foco na perpetuação do patrimônio e na governança familiar.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Holdings Familiares:</strong> Constituição e estruturação de sociedades para concentração e gestão do patrimônio.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Governança Corporativa:</strong> Implementação de conselhos, comitês e regras de tomada de decisão.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Acordo de Quotistas:</strong> Instrumentos que regulam direitos, deveres e a dinâmica entre sócios familiares.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Fundos de Investimento Familiar:</strong> Estruturas para gestão profissionalizada de ativos financeiros.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Planejamento Tributário Sucessório</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A transmissão patrimonial possui impacto tributário significativo. A ausência de planejamento pode resultar em carga fiscal excessiva e comprometer a liquidez necessária para a continuidade do negócio. Oferecemos análise constante e estruturação otimizada.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Otimização do ITCMD:</strong> Estratégias para redução lícita da carga tributária na transmissão de bens.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Reorganização Societária:</strong> Reestruturações com foco em eficiência fiscal e planejamento de longo prazo.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Revisão Periódica:</strong> Monitoramento contínuo das estruturas frente às alterações legislativas.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Inventário Estratégico:</strong> Condução de inventários com foco na preservação do patrimônio e celeridade processual.</span>
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-4">
                A preservação do patrimônio empresarial exige <strong className="text-foreground">visão estratégica</strong>, <strong className="text-foreground">conhecimento técnico multidisciplinar</strong> e <strong className="text-foreground">acompanhamento constante</strong>. Atuamos como parceiros de confiança na construção de soluções que garantem segurança jurídica e a perpetuação do legado empresarial.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Proteja o futuro do seu patrimônio empresarial" 
        description="Entre em contato para uma análise estratégica de planejamento sucessório e proteção patrimonial." 
      />
    </Layout>
  );
}
