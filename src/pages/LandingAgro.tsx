import { Layout } from "@/components/layout/Layout";
import { PageSEO, breadcrumbSchema } from "@/components/shared/PageSEO";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  Leaf,
  Shield,
  Phone,
  ArrowRight,
  Scale,
  Users,
  CheckCircle,
  TrendingUp,
  Landmark,
  FileText,
  Home,
  Receipt,
  Heart,
  Handshake,
  Search,
  ClipboardList,
  Gavel,
  MessageCircle,
  Clock,
  Award,
  Target,
  Zap,
  TreePine } from
"lucide-react";
import agroHeroAviao from "@/assets/agro-hero-aviao.png";
import heroVideoV3 from "@/assets/agro-hero-video-v8.mp4";
import logoHero from "@/assets/logo-rv-transparent.png";
import agroServiceContracts from "@/assets/agro-service-contracts.jpg";
import agroServiceRural from "@/assets/agro-service-rural.jpg";
import agroServiceLegal from "@/assets/agro-service-legal.jpg";
import agroServiceFamily from "@/assets/agro-service-family.jpg";
import agroAdvogadoProdutor from "@/assets/agro-advogado-produtor.png";

const WHATSAPP_LINK =
"https://wa.me/5511940449696?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20especialista%20sobre%20direito%20do%20agroneg%C3%B3cio.";

const whatsappService = (service: string) =>
`https://wa.me/5511940449696?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20${encodeURIComponent(service)}.%20Podem%20me%20auxiliar%3F`;

export default function LandingAgro() {
  return (
    <Layout>
      <PageSEO
        title="Assessoria Jurídica para o Agronegócio | Rodrigo Vitalino Advogados"
        description="Proteção patrimonial, recuperação judicial, planejamento sucessório e assessoria completa para produtores rurais e empresas do agronegócio. Atendimento em todo o Brasil."
        jsonLd={breadcrumbSchema([
        { name: "Início", url: "/" },
        { name: "Agronegócio", url: "/agronegocio" }]
        )} />
      

      {/* ═══════════════════════════════════════════════
            HERO — Side-by-side text + image
          ═══════════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] md:min-h-screen flex items-start overflow-hidden">
        {/* Full-screen background video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            aria-hidden="true">
            <source src={heroVideoV3} type="video/mp4" />
          </video>
          {/* Subtle gradient — darker at bottom-left for text, transparent at top-right to show plane */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content — bottom-left editorial, smaller text */}
        <div className="container-site relative z-10 pt-32 md:pt-40 pb-16 md:pb-24">
          <div className="max-w-2xl">
            {/* Subtle label */}
            <div
              className="inline-flex items-center gap-2 mb-5 opacity-0"
              style={{ animation: "fade-in 0.8s ease-out 0.3s forwards" }}>
              <Leaf className="h-4 w-4 text-accent" />
              <span className="text-accent/90 text-xs uppercase tracking-[0.2em] font-medium">Direito do Agronegócio</span>
            </div>

            {/* Main heading — smaller, emotional */}
            <h1
              className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-[1.1] mb-5 opacity-0"
              style={{ 
                textShadow: "1px 2px 12px rgba(0,0,0,0.5)",
                animation: "fade-in 1.2s ease-out 0.6s forwards"
              }}>
              Soluções jurídicas para quem{" "}
              <span className="text-accent">produz</span>,{" "}
              <span className="text-accent">transforma</span> e{" "}
              <span className="text-accent">alimenta</span> o Brasil.
            </h1>

            <p
              className="text-sm md:text-base text-white/75 mb-7 max-w-lg leading-relaxed opacity-0"
              style={{ 
                textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
                animation: "fade-in 1s ease-out 1.1s forwards"
              }}>
              Protegemos o patrimônio e impulsionamos os negócios do produtor rural e sua família.
            </p>

            <div
              className="opacity-0"
              style={{ animation: "fade-in 0.8s ease-out 1.5s forwards" }}>
              <Button
                asChild
                size="lg"
                className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-xl text-sm px-6">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  Converse com Nossa Equipe
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent z-[1]" />
      </section>

      {/* ═══════════════════════════════════════════════
            PAIN POINTS — "Como podemos lhe ajudar?"
          ═══════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <AnimatedSection animation="fade-left">
              <h2 className="font-serif text-3xl md:text-4xl mb-6">
                Como podemos lhe ajudar hoje?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                <strong className="text-foreground">Conhecemos de perto</strong> as dificuldades que o{" "}
                <strong className="text-foreground">produtor rural</strong> enfrenta no{" "}
                <strong className="text-foreground">dia a dia</strong>. Desde a pressão para honrar{" "}
                <strong className="text-foreground">compromissos financeiros</strong> com bancos e cooperativas, a necessidade de formalizar{" "}
                <strong className="text-foreground">contratos</strong> que tragam{" "}
                <strong className="text-foreground">segurança</strong> real, até a preocupação com a proteção do{" "}
                <strong className="text-foreground">patrimônio familiar</strong> e o futuro do{" "}
                <strong className="text-foreground">seu legado</strong>.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                No agronegócio, os desafios são constantes — mas você{" "}
                <strong className="text-accent">não precisa enfrentá-los sozinho</strong>.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="fade-right" delay={150}>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={agroServiceRural}
                  alt="Vista aérea de lavoura com colheitadeiras trabalhando ao pôr do sol"
                  className="w-full h-[320px] object-cover"
                  loading="lazy" />
                
              </div>
            </AnimatedSection>
          </div>

          {/* Pain cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
            {
              icon: Landmark,
              text: "Precisa renegociar dívidas agrícolas e lidar com a pressão de instituições financeiras, revendas e tradings."
            },
            {
              icon: TrendingUp,
              text: "Enfrenta incertezas com preços de commodities, custos de insumos e perdas por eventos climáticos."
            },
            {
              icon: Target,
              text: "Tem dificuldades para planejar financeiramente a continuidade da propriedade diante das oscilações do mercado."
            },
            {
              icon: Receipt,
              text: "Está preocupado com a Reforma Tributária e o impacto da taxação sobre heranças na sucessão do negócio."
            },
            {
              icon: Users,
              text: "Deseja evitar conflitos familiares relacionados a inventários, gestão da propriedade e preservação do legado."
            },
            {
              icon: Home,
              text: "Precisa regularizar imóveis rurais para transferências, garantias ou obtenção de crédito financeiro."
            },
            {
              icon: Gavel,
              text: "Teve bens penhorados ou está sofrendo execução por custeio de safra, financiamento de maquinário ou dívidas agrícolas."
            }].
            map(({ icon: Icon, text }, i) =>
            <AnimatedSection
              key={i}
              animation="fade-up"
              delay={i * 80}
              className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
              
                <div className="p-2.5 rounded-xl bg-accent/10 flex-shrink-0">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed no-justify">{text}</p>
              </AnimatedSection>
            )}
          </div>

          <AnimatedSection animation="fade-up" delay={200} className="text-center mt-10">
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
              Nossa assessoria jurídica especializada busca minimizar esses riscos,{" "}
              <strong className="text-foreground">otimizando seu negócio e protegendo seu patrimônio rural</strong>. Trabalhamos para criar um ambiente jurídico favorável para que sua produção prospere.
            </p>
            <Button
              asChild
              size="lg"
              className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg">
              
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2">
                
                <Phone className="h-5 w-5" />
                Falar com Advogado Especialista
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
            SERVICES GRID — with images
          ═══════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary/30">
        <div className="container-site">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
              Nossos Serviços
            </h2>
          </AnimatedSection>

          {/* Featured services with images */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {[
            {
              image: agroServiceLegal,
              icon: Gavel,
              title: "Defesa em Execuções",
              desc: "Proteção contra execuções rurais movidas por bancos, cooperativas, revendas e tradings. Atuação estratégica para preservar seu patrimônio.",
              service: "defesa em execuções rurais",
              alt: "Balança da justiça e martelo sobre documentos legais"
            },
            {
              image: agroServiceFamily,
              icon: Users,
              title: "Planejamento Sucessório",
              desc: "Estruturação de holdings, assessoria em sucessões e otimização tributária para transição entre gerações com segurança.",
              service: "planejamento sucessório",
              alt: "Família rural reunida em propriedade ao pôr do sol"
            },
            {
              image: agroServiceContracts,
              icon: FileText,
              title: "Contratos Rurais",
              desc: "Análise e elaboração de contratos de compra e venda, arrendamento rural e parceria agrícola com proteção real.",
              service: "contratos rurais",
              alt: "Reunião profissional para assinatura de contratos"
            },
            {
              image: agroServiceRural,
              icon: Home,
              title: "Posse e Propriedade",
              desc: "Ações de reintegração, manutenção de posse, usucapião e regularização de imóveis rurais em todo o Brasil.",
              service: "posse e propriedade rural",
              alt: "Vista aérea de propriedade rural com colheitadeiras"
            }].
            map(({ image, icon: Icon, title, desc, service, alt }, i) =>
            <AnimatedSection
              key={title}
              animation="scale"
              delay={i * 100}
              className="group rounded-2xl overflow-hidden bg-card border border-border/60 hover:border-accent/40 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                  src={image}
                  alt={alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy" />
                
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-serif text-lg text-foreground">{title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 no-justify">
                    {desc}
                  </p>
                  <a
                  href={whatsappService(service)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:underline">
                    Saiba Mais
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Remaining services as compact cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
            {
              icon: Receipt,
              title: "Direito Tributário",
              desc: "Defesa em execuções fiscais, recuperação de créditos e planejamento tributário para o agro.",
              service: "direito tributário rural"
            },
            {
              icon: Scale,
              title: "Recuperação Judicial",
              desc: "Reestruturação de dívidas e proteção patrimonial para produtores e empresas rurais em crise.",
              service: "recuperação judicial no agronegócio"
            },
            {
              icon: Heart,
              title: "Família e Sucessões",
              desc: "Divórcio, inventário e proteção do patrimônio familiar ligado à atividade rural.",
              service: "direito de família e sucessões"
            },
            {
              icon: Handshake,
              title: "Negociação de Dívidas",
              desc: "Renegociação estratégica de passivos com instituições financeiras e fornecedores do setor.",
              service: "negociação de dívidas agrícolas"
            }].
            map(({ icon: Icon, title, desc, service }, i) =>
            <AnimatedSection
              key={title}
              animation="fade-up"
              delay={i * 80}
              className="group flex flex-col p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300">
              
                <div className="p-3 rounded-xl bg-accent/10 w-fit mb-4">
                  <Icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 no-justify">
                  {desc}
                </p>
                <a
                href={whatsappService(service)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent text-sm font-medium hover:underline">
                
                  Saiba Mais
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
            PROCESS — 3 Steps
          ═══════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container-site">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">
              Como Funciona Nosso Trabalho
            </h2>
            <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12 no-justify">
              Um processo claro, direto e pensado para quem não tem tempo a perder.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
            {
              step: "01",
              icon: Search,
              title: "Análise do Caso",
              desc: "Primeiro, captamos suas necessidades de forma rápida pelo WhatsApp para que nossos especialistas possam avaliar a situação com agilidade."
            },
            {
              step: "02",
              icon: ClipboardList,
              title: "Estratégia Personalizada",
              desc: "Identificamos os detalhes do problema, reunimos documentos essenciais e elaboramos um plano de ação sob medida — presencial ou online."
            },
            {
              step: "03",
              icon: Gavel,
              title: "Execução e Defesa",
              desc: "Com todas as informações mapeadas, aplicamos nossa experiência para proteger seus interesses e defender seus direitos com máxima eficiência."
            }].
            map(({ step, icon: Icon, title, desc }, i) =>
            <AnimatedSection
              key={step}
              animation="fade-up"
              delay={i * 150}
              className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border/60 hover:border-accent/30 hover:shadow-lg transition-all duration-300">
              
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full">
                  Passo {step}
                </div>
                <div className="p-4 rounded-2xl bg-accent/10 mb-6 mt-2">
                  <Icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed no-justify">{desc}</p>
              </AnimatedSection>
            )}
          </div>

          <AnimatedSection animation="fade-up" delay={300} className="text-center mt-10">
            <Button
              asChild
              size="lg"
              className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg">
              
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2">
                
                <MessageCircle className="h-5 w-5" />
                Fale Conosco pelo WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
            AUTHORITY / EXPERTISE — with photo
          ═══════════════════════════════════════════════ */}
      <section className="section-padding bg-secondary/30 overflow-hidden">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
            {/* Photo side */}
            <AnimatedSection animation="fade-left" duration={900}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-accent/20">
                  <img
                    src={agroAdvogadoProdutor}
                    alt="Advogado e produtor rural juntos em lavoura de soja"
                    className="w-full h-[480px] object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                    loading="lazy" />
                  
                  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-transparent" />
                  <div className="absolute top-6 left-6 right-6 text-center">
                    <p className="text-white font-serif text-lg md:text-xl tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
                      Do campo aos tribunais —{" "}
                      <span className="text-accent font-semibold italic">lado a lado com o produtor.</span>
                    </p>
                    <div className="mt-2 mx-auto w-16 h-[2px] bg-accent/60 rounded-full" />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Text side */}
            <div>
              <AnimatedSection animation="fade-right" delay={100}>
                <h2 className="font-serif text-3xl md:text-4xl mb-6">
                  Quem defende o campo, conhece o campo
                </h2>

                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  Do campo aos tribunais, nossa expertise jurídica abrange todo o ciclo do agronegócio.{" "}
                  <strong className="text-foreground">
                    Há anos atuamos em questões jurídicas complexas que desafiam empresários e produtores rurais
                  </strong>{" "}
                  — de execuções e cobranças a planejamentos sucessórios e tributários.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Navegamos pelo direito bancário para proteger e renegociar dívidas agrícolas. No campo das sucessões, conduzimos inventários e estruturamos holdings rurais. Em cada aspecto do seu empreendimento,{" "}
                  <strong className="text-accent">estamos prontos para proteger seus interesses e impulsionar seu sucesso</strong>.
                </p>
              </AnimatedSection>

              {/* Trust indicators */}
              <div className="grid grid-cols-2 gap-3">
                {[
                { icon: Award, label: "Referência Nacional" },
                { icon: Shield, label: "Sigilo Absoluto" },
                { icon: TreePine, label: "Foco no Agro" },
                { icon: Zap, label: "Agilidade Estratégica" }].
                map(({ icon: Icon, label }, i) =>
                <AnimatedSection
                  key={label}
                  animation="scale"
                  delay={200 + i * 80}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/60 hover:border-accent/30 hover:shadow-md transition-all duration-300">
                  
                    <Icon className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{label}</span>
                  </AnimatedSection>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
            BENEFITS — "Transforme desafios em oportunidades"
          ═══════════════════════════════════════════════ */}
      <section className="section-padding">
        <div className="container-site">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">
              Transforme desafios em oportunidades
            </h2>
            <p className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12 no-justify">
              Com a Rodrigo Vitalino Advogados ao seu lado, você transforma preocupações em terreno fértil para o crescimento.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
            {
              icon: Leaf,
              title: "Foco na Produção",
              desc: "Concentre-se no que faz de melhor: produzir e inovar, sem se preocupar com entraves jurídicos."
            },
            {
              icon: CheckCircle,
              title: "Decisões Seguras",
              desc: "Tome decisões informadas com confiança, respaldado por orientação jurídica especializada."
            },
            {
              icon: Users,
              title: "Legado Protegido",
              desc: "Construa um legado duradouro para as próximas gerações com planejamento sucessório sólido."
            },
            {
              icon: TrendingUp,
              title: "Resultados Concretos",
              desc: "Maximize seus resultados enquanto minimiza riscos com estratégia jurídica personalizada."
            }].
            map(({ icon: Icon, title, desc }, i) =>
            <AnimatedSection
              key={title}
              animation="fade-up"
              delay={i * 100}
              className="text-center p-6 rounded-2xl bg-card border border-border/60 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300">
              
                <div className="inline-flex p-3 rounded-xl bg-accent/10 mb-4">
                  <Icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-serif text-lg text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed no-justify">{desc}</p>
              </AnimatedSection>
            )}
          </div>

          <AnimatedSection animation="scale" delay={200} className="max-w-2xl mx-auto mt-12 p-8 rounded-2xl bg-accent/10 border border-accent/20 text-center">
            <p className="text-foreground/90 text-lg italic font-serif mb-2">
              "Não deixe que desafios legais limitem o potencial do seu negócio."
            </p>
            <p className="text-muted-foreground text-sm">
              Trabalhe com tranquilidade sabendo que seus interesses estão nas mãos de quem realmente entende do assunto.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
            FINAL CTA
          ═══════════════════════════════════════════════ */}
      <section className="py-16 md:py-24 bg-[#d6e7ff]/[0.36]">
        <div className="container-site text-center">
          <AnimatedSection animation="fade-up">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-3">
              Pronto para proteger seu patrimônio rural?
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto mb-8 no-justify">
              Converse com um dos nossos especialistas e descubra como podemos ajudar seu negócio a prosperar com segurança jurídica.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={150}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Button
                asChild
                size="lg"
                className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 h-auto text-base shadow-xl w-full sm:w-auto">
                
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2">
                  
                  <MessageCircle className="h-5 w-5" />
                  Falar com Especialista pelo WhatsApp
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-foreground/20 text-foreground hover:bg-foreground/10 px-8 py-3 h-auto text-base w-full sm:w-auto">
                
                <a href="tel:+5511940449696" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  (11) 94044-9696
                </a>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-foreground/50">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>100% Sigiloso</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Resposta em até 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>Atendimento em todo o Brasil</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>);

}