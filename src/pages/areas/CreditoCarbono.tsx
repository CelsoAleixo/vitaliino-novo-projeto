import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { PageSEO, breadcrumbSchema } from "@/components/shared/PageSEO";
import heroImage from "@/assets/areas/credito-carbono-hero.jpg";
import carbonIcon from "@/assets/areas/credito-carbono-icon.png";
export default function CreditoCarbono() {
  return <Layout>
      <PageSEO
        title="Crédito de Carbono"
        description="Assessoria jurídica em crédito de carbono e mercado de carbono. Regulamentação, projetos ambientais e compliance ESG. Rodrigo Vitalino Advogados."
        jsonLd={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Áreas de Atuação", url: "/atuacao" }, { name: "Crédito de Carbono", url: "/atuacao/credito-de-carbono" }])}
      />
      {/* Hero Section com imagem de fundo */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat image-enhance-strong" style={{
        backgroundImage: `url(${heroImage})`
      }} />
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
              <li className="text-foreground">Crédito de Carbono</li>
            </ol>
          </nav>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            {/* Icon */}
            <div className="w-40 h-40 md:w-52 md:h-52 flex-shrink-0">
              <img alt="Ícone Crédito de Carbono" className="w-full h-full object-contain animate-fade-in" src={carbonIcon} />
            </div>
            
            {/* Title & Description */}
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-4">
                Crédito de Carbono
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
                Conexão entre sustentabilidade e conformidade legal
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
                Crédito de carbono é um certificado que representa uma tonelada de CO₂ (dióxido de carbono) que deixou de ser emitida ou foi removida da atmosfera, gerado por projetos sustentáveis como reflorestamento ou energias renováveis, e comercializado para compensar emissões, atuando como ferramenta econômica para combater mudanças climáticas e atingir metas de descarbonização. No Brasil, o Sistema Brasileiro de Comércio de Emissões (SBCE) regulamenta esse mercado, criando um ambiente para empresas cumprirem obrigações e compensarem seus GEE.
              </p>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Como funciona</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Geração de créditos:</strong> Projetos (florestais, energéticos, etc.) que reduzem ou capturam GEE geram créditos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Certificação:</strong> Esses projetos passam por auditorias e certificações independentes para garantir a validade dos créditos.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Comercialização:</strong> Empresas ou indivíduos compram esses créditos para compensar suas próprias emissões, tornando-se "Carbono Neutro" ou reduzindo sua pegada.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Mercados:</strong> Existem mercados regulados (obrigatórios por lei) e voluntários (opcionais).</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Importância</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Incentivo:</strong> Monetiza a conservação ambiental, dando valor financeiro à proteção da natureza.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Metas climáticas:</strong> Ajuda países e empresas a cumprirem compromissos de redução de emissões.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong className="text-foreground">Inovação:</strong> Estimula o desenvolvimento de tecnologias e práticas sustentáveis.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">No Brasil</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    O país está implementando seu mercado regulado (SBCE).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Setores com grandes emissões (acima de 25 mil tCO₂/ano) terão metas de redução e poderão comprar créditos.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    O setor de mudanças no uso da terra e agricultura tem grande potencial de geração de créditos.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Exemplos de projetos geradores</h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Preservação e restauração de florestas (como REDD+)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Uso de fontes de energia limpa (solar, eólica)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Melhora na eficiência energética
                  </li>
                </ul>
              </div>

              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-4">
                Nosso escritório mantém contato com <strong className="text-foreground">governos</strong> e <strong className="text-foreground">empresas</strong> altamente reconhecidas no mercado, em especial na <strong className="text-foreground">Europa</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Interesse em projetos de crédito de carbono?" description="Entre em contato para uma consultoria especializada em sustentabilidade e compliance." />
    </Layout>;
}