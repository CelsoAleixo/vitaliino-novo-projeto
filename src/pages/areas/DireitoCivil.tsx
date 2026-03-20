import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { PageSEO, breadcrumbSchema } from "@/components/shared/PageSEO";
import heroImage from "@/assets/areas/direito-civil-hero.jpg";
import { Scale, FileText, Shield, Building2, HandshakeIcon, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";
export default function DireitoCivil() {
  return <Layout>
      <PageSEO
        title="Assessoria Jurídica Empresarial"
        description="Assessoria jurídica empresarial completa: contratos, responsabilidade civil, consultoria preventiva e contencioso cível. Rodrigo Vitalino Advogados."
        jsonLd={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Áreas de Atuação", url: "/atuacao" }, { name: "Assessoria Jurídica Empresarial", url: "/atuacao/direito-civil" }])}
      />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat image-enhance-strong" style={{
        backgroundImage: `url(${heroImage})`
      }} />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/60 to-background/40" />
        
        <div className="container-site relative z-10 py-20">
          <nav className="mb-8 text-xs sm:text-sm text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 whitespace-nowrap">
              <li><a href="/" className="hover:text-foreground transition-colors">Início</a></li>
              <li className="text-muted-foreground/60">/</li>
              <li><a href="/atuacao" className="hover:text-foreground transition-colors">Áreas de Atuação</a></li>
              <li className="text-muted-foreground/60">/</li>
              <li className="text-foreground">Direito Civil Empresarial</li>
            </ol>
          </nav>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="w-40 h-40 md:w-52 md:h-52 flex-shrink-0 animate-fade-in">
              <div className="w-full h-full bg-accent/10 border border-accent/30 rounded-2xl flex flex-col items-center justify-center gap-2 p-4">
                <div className="flex gap-3">
                  <Scale className="w-12 h-12 text-accent" />
                  <Building2 className="w-12 h-12 text-accent" />
                </div>
                <Shield className="w-12 h-12 text-accent" />
              </div>
            </div>
            
            <div className="animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-4">
                Assessoria Jurídica Empresarial
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
                Proteção jurídica estratégica para empresas que pensam grande
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-4xl mx-auto space-y-12">

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg italic border-l-4 border-accent pl-6">
                No mundo dos negócios, cada contrato assinado, cada parceria firmada e cada decisão patrimonial carrega consigo riscos e oportunidades. O Direito Empresarial é a ferramenta que transforma incertezas em segurança — e problemas em soluções.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">Mais do que resolver conflitos, atuamos para preveni-los. Nossa abordagem é orientada a resultados:  fortalecer suas relações comerciais e garantir que sua empresa cresça sobre bases jurídicas sólidas.<strong className="text-foreground">preveni-los</strong>. Nossa abordagem é orientada a resultados: proteger o que você construiu, fortalecer suas relações comerciais e garantir que sua empresa cresça sobre bases jurídicas sólidas.
              </p>
            </div>

            {/* Por que isso importa */}
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-accent" />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl">Por que isso importa para sua empresa?</h2>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Contratos mal elaborados custam caro.</strong>
                    <span className="text-muted-foreground"> Um contrato frágil pode gerar prejuízos milionários. Revisá-los com rigor técnico é investir na perenidade do negócio.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Inadimplência mina o fluxo de caixa.</strong>
                    <span className="text-muted-foreground"> Estratégias jurídicas eficientes de cobrança e recuperação de créditos mantêm a saúde financeira da sua operação.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Conflitos sem gestão viram litígios.</strong>
                    <span className="text-muted-foreground"> A prevenção e a negociação inteligente economizam tempo, dinheiro e desgaste emocional.</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Patrimônio desprotegido é patrimônio em risco.</strong>
                    <span className="text-muted-foreground"> Blindagem patrimonial e gestão estratégica de garantias protegem o que levou anos para construir.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Áreas de Atuação */}
            <div>
              <h2 className="font-serif text-2xl md:text-3xl mb-8 text-center">Nossa Atuação Estratégica</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {/* Card 1 */}
                <div className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <FileText className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl text-foreground">Contratos Empresariais</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" /><span>Elaboração, revisão e negociação de contratos comerciais</span></li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" /><span>Contratos de prestação de serviços, franquias e distribuição</span></li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" /><span>Contratos imobiliários corporativos e de locação</span></li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" /><span>Distratos e rescisões estratégicas</span></li>
                  </ul>
                </div>

                {/* Card 2 */}
                

                {/* Card 3 */}
                <div className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl text-foreground">Cobrança e Recuperação de Créditos</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" /><span>Execuções e cumprimento forçado de obrigações</span></li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" /><span>Ações de cobrança e ações monitórias</span></li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" /><span>Busca e apreensão de bens</span></li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" /><span>Negociação estratégica de dívidas empresariais</span></li>
                  </ul>
                </div>

                {/* Card 4 */}
                <div className="group bg-card border border-border rounded-2xl p-6 hover:border-accent/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <Building2 className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl text-foreground">Gestão Patrimonial e Garantias</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" /><span>Blindagem e proteção patrimonial empresarial</span></li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" /><span>Estruturação de garantias reais e fidejussórias</span></li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" /><span>Planejamento sucessório empresarial</span></li>
                    <li className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" /><span>Gestão de riscos patrimoniais</span></li>
                  </ul>
                </div>

                {/* Card 5 - full width */}
                <div className="group md:col-span-2 bg-card border border-border rounded-2xl p-6 hover:border-accent/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <HandshakeIcon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl text-foreground">Procedimentos, Defesas e Notificações</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2 text-muted-foreground text-sm">
                    <div className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" /><span>Contestações e recursos em todas as instâncias</span></div>
                    <div className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" /><span>Notificações extrajudiciais estratégicas</span></div>
                    <div className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" /><span>Interpelações judiciais e procurações</span></div>
                    <div className="flex items-start gap-2"><ArrowRight className="w-3.5 h-3.5 text-accent mt-1 flex-shrink-0" /><span>Mediação e arbitragem empresarial</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nosso Diferencial */}
            <div className="bg-[#1a2e1a] rounded-2xl p-8 md:p-10 text-white">
              <h2 className="font-serif text-2xl md:text-3xl mb-6 text-accent">Como protegemos e fortalecemos seu negócio</h2>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Não acreditamos em soluções genéricas. Cada empresa tem sua realidade, seus desafios e suas metas. Por isso, nosso trabalho começa com uma <strong className="text-white">escuta atenta</strong> e uma <strong className="text-white">análise profunda</strong> do cenário jurídico do seu negócio.
                </p>
                <p>
                  Atuamos de forma <strong className="text-white">preventiva e consultiva</strong>, antecipando riscos antes que se tornem problemas. E quando o conflito é inevitável, entramos com <strong className="text-white">estratégia, agilidade e determinação</strong> para defender os interesses da sua empresa em todas as instâncias.
                </p>
                <p>
                  Nosso compromisso é ser mais do que um escritório de advocacia — queremos ser o <strong className="text-white">parceiro jurídico estratégico</strong> que sua empresa precisa para crescer com segurança e confiança.
                </p>
              </div>
            </div>

            {/* Fechamento */}
            <p className="text-muted-foreground leading-relaxed text-lg italic border-l-4 border-accent pl-6 text-center">Sua empresa tem direito a uma assessoria jurídica que entende de negócios, fala a sua língua e está comprometida com os seus resultados. Vamos conversar?<strong className="text-foreground">Vamos conversar?</strong>
            </p>
          </div>
        </div>
      </section>

      <CTASection title="Proteja e fortaleça sua empresa com quem entende de Direito Civil" description="Entre em contato para uma consultoria estratégica e personalizada." />
    </Layout>;
}