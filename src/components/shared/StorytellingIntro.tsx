import { useLanguage } from "@/contexts/LanguageContext";
import { Shield, Flame, ChevronRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import hopeImg from "@/assets/storytelling-hope.jpg";
import renewalImg from "@/assets/storytelling-renewal.jpg";

export function StorytellingIntro() {
  const { language } = useLanguage();
  const isEn = language === "en";
  const subtitle = isEn ? "Where law meets the real life of businesses" : "Onde o Direito encontra a vida real das empresas";
  const label = isEn ? "Our Story" : "Nossa História";
  const block1 = isEn ? ["Throughout our journey, we strengthened partnerships, structured startups that now attract investments, shielded brands that became market leaders, and implemented governance that transformed entire operations. In every area of Corporate Law, we leave a trail of security, strategy and growth.", "And when the challenge was greater, we were even better. We led Judicial Recoveries that saved companies, preserved jobs and gave a future back to businesses many had already given up on. We turned crises into restructuring, and restructuring into new cycles of prosperity."] : ["Ao longo da nossa trajetória, fortalecemos sociedades, estruturamos startups que hoje atraem investimentos, blindamos marcas que se tornaram líderes em seus mercados e implementamos governança que transformou operações inteiras. Em cada área do Direito Empresarial, deixamos um rastro de segurança, estratégia e crescimento.", "E quando o desafio foi maior, fomos ainda melhores. Conduzimos Recuperações Judiciais que salvaram empresas e devolveram futuro a negócios que muitos já davam por perdidos. Transformamos crises em reestruturação, e reestruturação em novos ciclos de prosperidade."];
  const block2Title = isEn ? "Real stories, real impact" : "Histórias reais, impacto real";
  const block2Text = isEn ? "None of this is theory. These are real stories we witnessed firsthand — and they shaped how we see Corporate Law." : "Nada disso é teoria. São histórias reais que acompanhamos de perto — e que moldaram a forma como enxergamos o Direito Empresarial.";
  const block3Text = isEn ? "Living these scenarios side by side with entrepreneurs, we understood our role goes far beyond interpreting laws. It lies in anticipating risks before they become crises, structuring partnerships to prevent conflicts, building contracts that protect present and future, shielding brands and intellectual assets, strengthening governance, guiding startups through their first steps, and redesigning paths when a company needs to breathe to be reborn." : "Foi vivendo esses cenários, lado a lado com empresários, que entendemos que nosso papel vai muito além de interpretar leis. Ele está em antecipar riscos antes que se tornem crises, estruturar sociedades para evitar conflitos, construir contratos que protegem o presente e o futuro, blindar marcas e ativos intelectuais, fortalecer a governança, orientar startups em seus primeiros passos e redesenhar caminhos quando a empresa precisa respirar para renascer.";
  const highlightText = isEn ? "We are not just lawyers. We are guardians of what you've built — and architects of what you will build next." : "Não somos apenas advogados. Somos guardiões do que você construiu — e arquitetos do que você ainda vai construir.";
  const closingText = isEn ? "Our expertise was forged in practice: in late-night calls, in restructurings that saved companies, in strategies that turned risk into growth. We exist because we learned that Corporate Law isn't about putting out fires — it's about making sure they never start." : "Nossa expertise foi forjada na prática: nas ligações de madrugada, nas reestruturações que salvaram empresas, nas estratégias que transformaram risco em crescimento. Existimos porque aprendemos que o Direito Empresarial não é sobre apagar incêndios — é sobre garantir que eles nunca comecem.";
  const ctaText = isEn ? "Schedule a legal consultation" : "Agendar consulta jurídica";

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="container-site relative z-10 max-w-5xl">
        {/* Label */}
        <AnimatedSection animation="fade-up">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-accent border border-accent/20 rounded-full px-4 py-1.5 bg-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              {label}
            </span>
          </div>
        </AnimatedSection>

        {/* Title */}
        <AnimatedSection animation="fade-up" delay={100}>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center leading-[1.15] mb-14">
            <span className="text-accent">{subtitle}</span>
          </h2>
        </AnimatedSection>

        {/* Block 1: Image + Text */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <AnimatedSection animation="fade-left" delay={200} className="h-full">
            <div className="relative rounded-2xl overflow-hidden min-h-[220px] md:min-h-[280px] h-full">
              <img src={hopeImg} alt={isEn ? "Business partnership and hope" : "Parceria empresarial e esperança"} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" width={800} height={544} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-serif text-lg md:text-xl text-foreground drop-shadow-lg">
                  {block2Title}
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-right" delay={300} className="h-full">
            <div className="rounded-2xl bg-secondary/30 border border-border/30 p-6 md:p-8 flex flex-col justify-center space-y-4 h-full">
              {block1.map((text, i) => (
                <p key={i} className="text-base md:text-lg text-muted-foreground leading-relaxed text-mobile-justified">
                  {text}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>

        {/* Block 2: Statement + Image */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <AnimatedSection animation="fade-left" delay={200} className="order-2 md:order-1 h-full">
            <div className="rounded-2xl bg-secondary/30 border border-border/30 p-6 md:p-8 flex flex-col justify-center space-y-4 h-full">
              <p className="text-base md:text-lg text-foreground/90 font-medium leading-relaxed">
                {block2Text}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-mobile-justified">
                {block3Text}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-right" delay={300} className="order-1 md:order-2 h-full">
            <div className="relative rounded-2xl overflow-hidden min-h-[220px] md:min-h-[280px] h-full">
              <img src={renewalImg} alt={isEn ? "Corporate renewal and growth" : "Renovação e crescimento empresarial"} className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" width={800} height={544} />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </AnimatedSection>
        </div>

        {/* Highlight card */}
        <AnimatedSection animation="blur-in" delay={200}>
          <div className="relative rounded-2xl overflow-hidden mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10" />
            <div className="absolute inset-0 border border-accent/20 rounded-2xl" />
            <div className="relative px-6 md:px-8 py-6 md:py-7 flex items-start gap-4 md:gap-5">
              <div className="shrink-0 mt-1 p-2.5 rounded-xl bg-accent/15">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <p className="text-lg md:text-xl lg:text-2xl font-serif text-foreground leading-relaxed">
                {highlightText}
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="flex justify-center">
            <Button asChild size="lg" className="group bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg">
              <Link to="/contato" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                {ctaText}
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
