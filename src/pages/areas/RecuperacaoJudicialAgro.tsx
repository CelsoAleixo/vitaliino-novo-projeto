import { Layout } from "@/components/layout/Layout";
import { PageSEO, breadcrumbSchema } from "@/components/shared/PageSEO";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Shield,
  TrendingUp,
  Phone,
  ArrowRight,
  Scale,
  Lock,
  Users,
  CheckCircle,
  Lightbulb,
  Heart,
} from "lucide-react";
import heroImage from "@/assets/areas/agronegocio-landing-hero.jpg";

const WHATSAPP_LINK =
  "https://wa.me/5511972196010?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20sobre%20recupera%C3%A7%C3%A3o%20judicial%20no%20agroneg%C3%B3cio.";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function RecuperacaoJudicialAgro() {
  return (
    <Layout>
      <PageSEO
        title="Proteção Rural | Recuperação Judicial no Agronegócio"
        description="Proteção rural e recuperação judicial especializada para produtores rurais e empresas do agronegócio. Lei 14.112, proteção patrimonial e reestruturação de dívidas. Rodrigo Vitalino Advogados."
        jsonLd={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Áreas de Atuação", url: "/atuacao" }, { name: "Proteção Rural", url: "/protecao-rural" }])}
      />
      {/* ── Hero ── */}
      <section className="relative min-h-[75vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center image-enhance-strong"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f0d]/85 via-[#1a2e1a]/75 to-[#1a2e1a]/50" />

        <div className="container-site relative z-10 py-20 md:py-28">
          <nav className="mb-6 animate-fade-in" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs sm:text-sm">
              <li>
                <a href="/" className="text-foreground/70 hover:text-accent transition-colors drop-shadow-md">
                  Início
                </a>
              </li>
              <li className="text-foreground/50">/</li>
              <li>
                <a href="/atuacao" className="text-foreground/70 hover:text-accent transition-colors drop-shadow-md">
                  Áreas de Atuação
                </a>
              </li>
              <li className="text-foreground/50">/</li>
              <li>
                <a
                  href="/atuacao/recuperacao-judicial"
                  className="text-foreground/70 hover:text-accent transition-colors drop-shadow-md"
                >
                  Recuperação Judicial
                </a>
              </li>
              <li className="text-foreground/50">/</li>
              <li className="text-accent font-medium drop-shadow-md">Agronegócio</li>
            </ol>
          </nav>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 backdrop-blur-sm mb-6 animate-fade-in">
              <Leaf className="h-4 w-4 text-accent" />
              <span className="text-accent text-sm font-medium">Agronegócio</span>
            </div>

            <h1
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-accent leading-tight mb-6 animate-fade-in text-balance"
              style={{ textShadow: "2px 3px 12px rgba(0,0,0,0.5)" }}
            >
              Recuperação Judicial no Agronegócio
            </h1>

            <p
              className="text-lg md:text-xl text-foreground/90 mb-8 animate-slide-up max-w-xl"
              style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.4)" }}
            >
              Confiança, sigilo e estratégia para proteger sua empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.15s" }}>
              <Button
                asChild
                size="lg"
                className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg"
              >
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Phone className="h-5 w-5" />
                  Agendar Consulta Gratuita
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-foreground/10 border-foreground/30 text-foreground hover:bg-foreground/20 shadow-lg"
                onClick={() => scrollToSection("oque-e")}
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>

        {/* gradient fade to bg */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ── Trust bar ── */}
      <section className="bg-secondary/40 border-y border-border/40">
        <div className="container-site py-6">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent" />
              <span>Sigilo Total</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span>Consulta Inicial Gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-accent" />
              <span>Referência Nacional</span>
            </div>
            <div className="flex items-center gap-2">
              <Scale className="h-5 w-5 text-accent" />
              <span>Atuação Estratégica</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Block 1 – O que é ── */}
      <section id="oque-e" className="section-padding scroll-mt-24">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 p-4 rounded-2xl bg-accent/10 border border-accent/20">
                <Leaf className="h-10 w-10 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">O que é Recuperação Judicial?</h2>
                <p className="text-muted-foreground text-lg leading-relaxed text-mobile-justified">
                  A Recuperação Judicial não é falência. É uma ferramenta legal que dá fôlego às empresas, suspende
                  cobranças e renegocia dívidas. No agronegócio, pode ser a diferença entre perder tudo ou recomeçar
                  com segurança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Block 2 – Diferencial ── */}
      <section className="section-padding bg-secondary/30">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 p-4 rounded-2xl bg-accent/10 border border-accent/20">
                <Shield className="h-10 w-10 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Nosso Diferencial</h2>
                <p className="text-muted-foreground text-lg leading-relaxed text-mobile-justified">
                  Na Rodrigo Vitalino Advogados fazemos diferente: oferecemos consulta inicial gratuita e um raio-x
                  completo da sua empresa para mostrar todas as soluções possíveis. Atuamos com total sigilo e ética,
                  garantindo que cada informação seja tratada com máxima confidencialidade.
                </p>

                {/* mini-cards */}
                <div className="grid sm:grid-cols-3 gap-4 mt-8">
                  {[
                    { icon: CheckCircle, label: "Consulta Gratuita" },
                    { icon: Lock, label: "Sigilo Absoluto" },
                    { icon: Scale, label: "Raio-X Jurídico" },
                  ].map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/60"
                    >
                      <Icon className="h-6 w-6 text-accent flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Block 3 – Por que escolher ── */}
      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 p-4 rounded-2xl bg-accent/10 border border-accent/20">
                <TrendingUp className="h-10 w-10 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Por que escolher nossa equipe?</h2>
                <p className="text-muted-foreground text-lg leading-relaxed text-mobile-justified">
                  Somos referência nacional em recuperação judicial para o agronegócio. Nossa atuação estratégica
                  busca preservar o patrimônio e assegurar a continuidade das atividades. Trabalhamos para que sua
                  empresa supere qualquer transtorno financeiro com segurança jurídica e planejamento sólido.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Preservação do patrimônio rural",
                    "Continuidade das atividades produtivas",
                    "Segurança jurídica em todas as etapas",
                    "Planejamento estratégico personalizado",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Block 4 – Desmistificando ── */}
      <section className="section-padding bg-secondary/30">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0 p-4 rounded-2xl bg-accent/10 border border-accent/20">
                <Lightbulb className="h-10 w-10 text-accent" />
              </div>
              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4">Desmistificando</h2>
                <p className="text-muted-foreground text-lg leading-relaxed text-mobile-justified">
                  A Recuperação Judicial não é um problema, é uma solução. É a chance de reorganizar dívidas,
                  proteger sua empresa e construir um novo futuro. Com a orientação certa, ela se torna o caminho
                  para salvar negócios e fortalecer o agronegócio.
                </p>

                <div className="mt-8 p-6 rounded-2xl bg-accent/10 border border-accent/20">
                  <div className="flex items-start gap-3">
                    <Heart className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-foreground/90 italic font-serif text-lg">
                      "Com a orientação certa, a Recuperação Judicial se torna o caminho para salvar negócios e
                      fortalecer o agronegócio."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-16 md:py-24 bg-[#d6e7ff]/[0.36]">
        <div className="container-site text-center">
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-3">
            Está enfrentando dificuldades financeiras?
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-8 no-justify">
            Clique abaixo e agende sua consulta jurídica agora mesmo.
          </p>

          <Button
            asChild
            size="lg"
            className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 h-auto text-base shadow-xl"
          >
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Agendar Consulta Gratuita
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mt-6 text-sm text-foreground/50">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4" />
              <span>100% Sigiloso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Consulta Gratuita</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
