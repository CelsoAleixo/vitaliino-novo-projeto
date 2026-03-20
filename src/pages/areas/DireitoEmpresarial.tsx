import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { PageSEO, breadcrumbSchema } from "@/components/shared/PageSEO";
import heroImage from "@/assets/areas/direito-empresarial-hero.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { 
  Scale, ShieldCheck, FileText, Rocket, Fingerprint, ClipboardCheck, Users, 
  ArrowDown, ArrowRight, Handshake, TrendingUp, Calculator, Briefcase, Heart, Building2
} from "lucide-react";

export default function DireitoEmpresarial() {
  const { language } = useLanguage();

  const otherAreas = [
    {
      icon: Handshake,
      title: language === "en" ? "Legal Negotiation" : "Negociação Jurídica",
      description: language === "en" 
        ? "Strategic negotiation to resolve disputes before they reach court, saving time and resources."
        : "Negociação estratégica para resolver conflitos antes que cheguem ao Judiciário, economizando tempo e recursos.",
      href: "/atuacao/negociacao-juridica",
    },
    {
      icon: Calculator,
      title: language === "en" ? "Tax Law" : "Direito Tributário",
      description: language === "en"
        ? "Tax planning, defense in tax proceedings and strategies to reduce the tax burden legally."
        : "Planejamento tributário, defesa em processos fiscais e estratégias para reduzir a carga tributária de forma legal.",
      href: "/atuacao/direito-tributario",
    },
    {
      icon: Briefcase,
      title: language === "en" ? "Labor Law" : "Direito Trabalhista",
      description: language === "en"
        ? "Prevention of labor lawsuits, compliance with labor laws and strategic defense of companies."
        : "Prevenção de reclamações trabalhistas, adequação à legislação e defesa estratégica de empresas.",
      href: "/atuacao/direito-trabalhista",
    },
    {
      icon: Heart,
      title: language === "en" ? "Family & Succession" : "Família e Sucessões",
      description: language === "en"
        ? "Estate planning, prenuptial agreements and protection of family assets across generations."
        : "Planejamento patrimonial, acordos pré-nupciais e proteção de bens familiares entre gerações.",
      href: "/atuacao/familia-e-sucessoes",
    },
    {
      icon: Scale,
      title: language === "en" ? "Civil Law" : "Direito Civil",
      description: language === "en"
        ? "Civil contracts, liability, credit recovery and judicial defense for companies and individuals."
        : "Contratos civis, responsabilidade civil, recuperação de créditos e defesa judicial para empresas e pessoas.",
      href: "/atuacao/direito-civil",
    },
    {
      icon: TrendingUp,
      title: language === "en" ? "Judicial Recovery" : "Recuperação Judicial",
      description: language === "en"
        ? "Restructuring plans, creditor negotiation and strategies to keep viable businesses alive."
        : "Planos de reestruturação, negociação com credores e estratégias para manter empresas viáveis em operação.",
      href: "/atuacao/recuperacao-judicial",
    },
  ];

  return (
    <Layout>
      <PageSEO
        title="Direito Empresarial"
        description="Assessoria jurídica empresarial completa: contratos, societário, compliance, M&A e governança corporativa. Escritório Rodrigo Vitalino Advogados."
        jsonLd={breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Áreas de Atuação", url: "/atuacao" }, { name: "Direito Empresarial", url: "/atuacao/direito-empresarial" }])}
      />
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat image-enhance-strong" 
          style={{ backgroundImage: `url(${heroImage})` }} 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        
        <div className="container-site relative z-10 py-20">
          <nav className="mb-8 text-xs sm:text-sm text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 whitespace-nowrap">
              <li><a href="/" className="hover:text-foreground transition-colors">Início</a></li>
              <li className="text-muted-foreground/60">/</li>
              <li><a href="/atuacao" className="hover:text-foreground transition-colors">Áreas de Atuação</a></li>
              <li className="text-muted-foreground/60">/</li>
              <li className="text-foreground">Direito Empresarial</li>
            </ol>
          </nav>
          
          <div className="max-w-3xl animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-accent mb-6 leading-tight">
              Direito Empresarial
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {language === "en"
                ? "Strategic legal protection for companies that want to grow with security, prevent risks and turn challenges into competitive advantages."
                : "Proteção jurídica estratégica para empresas que querem crescer com segurança, prevenir riscos e transformar desafios em vantagem competitiva."}
            </p>
          </div>
        </div>
      </section>

      {/* Intro Summary */}
      <section className="section-padding bg-muted/30">
        <div className="container-site">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <Building2 className="text-accent shrink-0 mt-1" size={32} />
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4">
                  {language === "en" ? "What is Business Law?" : "O que é Direito Empresarial?"}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  {language === "en"
                    ? "Business Law is the area of law that structures, protects and drives companies at every stage — from founding to expansion, from contracts to crisis resolution. It's the legal intelligence behind every decision that defines the future of a business."
                    : "O Direito Empresarial é a área do Direito que estrutura, protege e impulsiona empresas em todas as fases — da fundação à expansão, dos contratos à resolução de crises. É a inteligência jurídica por trás de cada decisão que define o futuro de um negócio."}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {language === "en"
                    ? "Without specialized legal support, companies expose themselves to avoidable risks: poorly drafted contracts, disorganized corporate structures, compliance failures and million-dollar disputes. Below, see how each pillar of Business Law works to protect your company."
                    : "Sem assessoria jurídica especializada, empresas se expõem a riscos evitáveis: contratos mal redigidos, estruturas societárias desorganizadas, falhas de compliance e disputas milionárias. Abaixo, veja como cada pilar do Direito Empresarial atua para proteger a sua empresa."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-3xl mx-auto space-y-14">

            {/* 1 - Prevenção de Riscos */}
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheck className="text-accent shrink-0" size={28} />
                <h2 className="font-serif text-2xl md:text-3xl text-accent">Prevenção de Riscos e Atuação Preventiva</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-4">
                Por que prevenir custa menos do que remediar?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A maioria dos litígios empresariais que chegam ao Judiciário poderiam ter sido evitados. Contratos mal redigidos, ausência de governança, processos internos frágeis — problemas que parecem pequenos até gerarem prejuízos milionários.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A assessoria jurídica preventiva identifica vulnerabilidades antes que se tornem crises. Implementa programas de compliance, estrutura processos de governança e garante que cada decisão do negócio esteja juridicamente sustentada.
              </p>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-5">
                Ter um advogado empresarial ao lado do negócio não é despesa — é o investimento que separa empresas que crescem com segurança daquelas que vivem apagando incêndios.
              </p>
            </div>

            {/* 2 - Contratos */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="text-accent shrink-0" size={28} />
                <h2 className="font-serif text-2xl md:text-3xl text-accent">Contratos Empresariais</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-4">
                Por que um contrato genérico pode destruir seu negócio?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Modelos prontos da internet ignoram a realidade específica de cada empresa. Cláusulas de rescisão mal redigidas, ausência de penalidades, omissão sobre propriedade intelectual e falta de definição sobre foro competente são erros que custam fortunas quando o conflito aparece.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Um contrato personalizado prevê o que pode dar errado, distribui responsabilidades com clareza e cria mecanismos de resolução antes que qualquer disputa precise de um juiz. Cada negociação é única — o contrato que a protege também precisa ser.
              </p>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-5">
                Nossos contratos não são documentos jurídicos genéricos. São ferramentas de proteção desenhadas sob medida para a realidade de cada operação.
              </p>
            </div>

            {/* 3 - Startups */}
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="text-accent shrink-0" size={28} />
                <h2 className="font-serif text-2xl md:text-3xl text-accent">Startups e Estruturação Societária</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-4">
                Por que startups promissoras fracassam por falta de estrutura jurídica?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Três fundadores criam um produto inovador, captam investimento e, meses depois, discordam sobre participação, vesting e poder de decisão. Sem acordo de sócios, sem cláusula de não competição, o investidor recua e o negócio trava. Isso acontece todos os dias.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Estruturação societária, acordo de sócios, due diligence e captação de investimentos são os alicerces que permitem ao negócio escalar sem implodir. O advogado empresarial não é obstáculo à inovação — é o arquiteto da viabilidade do projeto.
              </p>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-5">
                Atuamos desde a constituição da sociedade até rodadas de investimento, garantindo que o crescimento aconteça sobre bases jurídicas sólidas.
              </p>
            </div>

            {/* 4 - Propriedade Intelectual */}
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-3 mb-4">
                <Fingerprint className="text-accent shrink-0" size={28} />
                <h2 className="font-serif text-2xl md:text-3xl text-accent">Propriedade Intelectual e Proteção de Marca</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-4">
                Por que sua marca é seu patrimônio mais vulnerável?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Uma empresa consolida sua marca ao longo de anos e descobre que um concorrente registrou nome semelhante no INPI. A disputa judicial custa mais do que o registro preventivo jamais teria custado. Marcas, patentes, direitos autorais e segredos industriais precisam de proteção ativa e contínua.
              </p>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-5">
                Registrar sua marca não é formalidade — é a certidão de nascimento da identidade do seu negócio. Sem proteção, qualquer um pode reivindicar o que você construiu. Cuidamos do registro, monitoramento e defesa da sua propriedade intelectual.
              </p>
            </div>

            {/* 5 - Compliance */}
            <div className="animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="flex items-center gap-3 mb-4">
                <ClipboardCheck className="text-accent shrink-0" size={28} />
                <h2 className="font-serif text-2xl md:text-3xl text-accent">Compliance e Governança Corporativa</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-4">
                Por que compliance não é opcional?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Programas de compliance deixaram de ser diferenciais — são exigências do mercado, dos investidores e da legislação. A responsabilidade dos administradores é pessoal e pode ultrapassar os limites da empresa. Um problema de governança não afeta apenas o balanço: destrói relações comerciais, afasta talentos e compromete a reputação de forma duradoura.
              </p>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-5">
                Implementamos programas de compliance sob medida, treinamos equipes e criamos mecanismos de controle que protegem a empresa e as pessoas que a conduzem.
              </p>
            </div>

            {/* 6 - Sucessório */}
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-accent shrink-0" size={28} />
                <h2 className="font-serif text-2xl md:text-3xl text-accent">Planejamento Sucessório e Empresas Familiares</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-4">
                Por que menos de um terço das empresas familiares sobrevivem à segunda geração?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conflitos entre herdeiros, ausência de holdings, governança improvisada e patrimônio misturado com pessoa física destroem em meses o que foi construído em décadas. Planejamento sucessório não é sobre herança — é sobre continuidade. É garantir que o negócio prospere nas mãos de quem o dará sequência.
              </p>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-5">
                Estruturamos holdings, definimos regras de governança familiar e criamos mecanismos que previnem disputas e garantem a perenidade do negócio.
              </p>
            </div>

            {/* 7 - Recuperação Judicial */}
            <div className="animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-accent shrink-0" size={28} />
                <h2 className="font-serif text-2xl md:text-3xl text-accent">Recuperação Judicial e Extrajudicial</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium mb-4">
                Por que isso importa para sua empresa?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Quando a crise financeira bate à porta, muitos empresários acreditam que o fim é inevitável. Não é. A recuperação judicial existe para permitir que empresas viáveis reorganizem suas dívidas, preservem empregos e retomem a operação — sem encerrar as atividades.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A diferença entre recuperação e falência é, acima de tudo, uma questão de tempo e estratégia. A falência encerra. A recuperação reconstrói. E a recuperação extrajudicial permite negociar diretamente com credores, de forma mais ágil e discreta, sem a exposição de um processo público.
              </p>
              <p className="text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-5">
                O papel do advogado empresarial aqui é decisivo: elaborar um plano de reestruturação sólido, negociar condições viáveis e transformar credores em aliados da recuperação. Empresas que agem rápido e com orientação especializada sobrevivem. As que hesitam, perdem essa janela.
              </p>
            </div>

            {/* Closing - Why Us */}
            <div className="animate-fade-in border-t border-accent/20 pt-10" style={{ animationDelay: "0.8s" }}>
              <h2 className="font-serif text-2xl md:text-3xl text-accent mb-4">Por que contar com a nossa equipe?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Porque não oferecemos apenas soluções jurídicas — oferecemos visão de negócio. Nossa equipe pensa a empresa do cliente como um todo: entende a operação, antecipa riscos, desenha estratégias e constrói a arquitetura legal que transforma vulnerabilidade em vantagem competitiva.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Atuamos de forma preventiva e estratégica, lado a lado com empresários, gestores e departamentos jurídicos que entendem que o Direito Empresarial não é sobre leis — é sobre decisões que definem o futuro do negócio.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-semibold">
                Sua empresa merece uma assessoria que evolua com ela.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Other Practice Areas */}
      <section className="section-padding bg-muted/30">
        <div className="container-site">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-accent text-sm font-medium uppercase tracking-[0.2em] mb-4 block">
              {language === "en" ? "Complete Legal Protection" : "Proteção Jurídica Completa"}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-accent mb-4">
              {language === "en" ? "Explore our other practice areas" : "Conheça nossas demais áreas de atuação"}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === "en"
                ? "Business Law is just one of the pillars that protect your company. Our team acts across complementary areas to ensure complete legal security."
                : "O Direito Empresarial é apenas um dos pilares que protegem a sua empresa. Nossa equipe atua em áreas complementares para garantir segurança jurídica completa."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {otherAreas.map((area, index) => (
              <Link
                key={index}
                to={area.href}
                className="group bg-card border border-border/50 rounded-2xl p-6 hover:border-accent/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                    <area.icon className="text-accent" size={20} />
                  </div>
                  <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">
                    {area.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {area.description}
                </p>
                <div className="flex items-center gap-1 text-accent text-sm font-medium">
                  <span>{language === "en" ? "Learn more" : "Saiba mais"}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title={language === "en" ? "Ready to protect and grow your business?" : "Pronto para proteger e fazer seu negócio evoluir?"} 
        description={language === "en" 
          ? "Talk to our specialists and discover how strategic legal counsel can transform your company's future."
          : "Fale com nossos especialistas e descubra como a assessoria jurídica estratégica pode transformar o futuro da sua empresa."} 
      />
    </Layout>
  );
}
