import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useLanguage } from "@/contexts/LanguageContext";
import rodrigoVitalinoBrasilia from "@/assets/rodrigo-vitalino-brasilia.png";

export function ManifestoModal() {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();

  const content = {
    pt: {
      buttonText: '"Não existe por acaso, nem coincidência"',
      title: '"Não Existe por Acaso, Nem Coincidência"',
      subtitle: "Um Manifesto Filosófico-Jurídico",
      intro: "Há mais de dois mil anos, Aristóteles nos ensinou que tudo o que existe possui uma causa final — um propósito. Nada ocorre por mero acaso; cada ação, cada escolha, cada caminho tem uma razão de ser. É com essa convicção que o escritório Rodrigo Vitalino Advogados construiu sua trajetória: não por coincidência, mas por vocação.",
      legalValues: "Valores Jurídicos",
      justice: { title: "Justiça", desc: "Não como abstração, mas como equilíbrio concreto entre direitos e deveres. A justiça que buscamos não é cega — ela enxerga as nuances de cada caso." },
      responsibility: { title: "Responsabilidade", desc: "Cada palavra proferida, cada documento assinado, cada conselho dado carrega o peso da confiança depositada. Não há espaço para negligência onde há compromisso." },
      freedom: { title: "Liberdade", desc: "O Direito existe para garantir a autonomia do indivíduo frente ao Estado e à sociedade. Defendemos a liberdade como fundamento de uma vida digna." },
      humanValues: "Valores Humanos",
      dignity: { title: "Dignidade", desc: "Cada cliente que nos procura traz consigo uma história única. Tratamos cada pessoa com o respeito que sua singularidade merece, porque a dignidade humana é inegociável." },
      solidarity: { title: "Solidariedade", desc: "Compreendemos que nossas ações reverberam além do processo judicial. O que fazemos por um cliente impacta famílias, empresas e comunidades inteiras." },
      respect: { title: "Respeito", desc: "Ouvir antes de falar. Entender antes de agir. O respeito é o fundamento de toda relação duradoura entre advogado e cliente." },
      socialValues: "Valores Sociais",
      equity: { title: "Equidade", desc: "Tratar os desiguais na medida de sua desigualdade é o caminho para uma sociedade verdadeiramente justa. Não buscamos igualdade formal, mas material." },
      order: { title: "Ordem", desc: "Não a ordem que oprime, mas aquela que organiza e harmoniza. O Direito é instrumento de paz social, não de dominação." },
      progress: { title: "Progresso", desc: "Acreditamos que o Direito deve evoluir com a sociedade. Estamos comprometidos com a construção de um futuro mais justo e sustentável." },
      conclusion1: "Esta é a nossa causa final, nosso propósito aristotélico: ser instrumento de justiça, guardião de direitos e parceiro na construção de um mundo mais equânime.",
      conclusion2: "Não existe por acaso, nem coincidência. Existe por vocação, por propósito e por compromisso inabalável com aqueles que confiam em nosso trabalho.",
      since: "Desde 2008",
    },
    en: {
      buttonText: '"Nothing happens by chance or coincidence"',
      title: '"Nothing Happens by Chance or Coincidence"',
      subtitle: "A Philosophical-Legal Manifesto",
      intro: "Over two thousand years ago, Aristotle taught us that everything that exists has a final cause — a purpose. Nothing happens by mere chance; every action, every choice, every path has a reason. It is with this conviction that Rodrigo Vitalino Advogados has built its trajectory: not by coincidence, but by vocation.",
      legalValues: "Legal Values",
      justice: { title: "Justice", desc: "Not as an abstraction, but as a concrete balance between rights and duties. The justice we seek is not blind — it sees the nuances of each case." },
      responsibility: { title: "Responsibility", desc: "Every word spoken, every document signed, every advice given carries the weight of the trust placed in us. There is no room for negligence where there is commitment." },
      freedom: { title: "Freedom", desc: "The Law exists to guarantee the autonomy of the individual against the State and society. We defend freedom as the foundation of a dignified life." },
      humanValues: "Human Values",
      dignity: { title: "Dignity", desc: "Each client who seeks us brings a unique story. We treat each person with the respect their uniqueness deserves, because human dignity is non-negotiable." },
      solidarity: { title: "Solidarity", desc: "We understand that our actions reverberate beyond the judicial process. What we do for a client impacts families, companies and entire communities." },
      respect: { title: "Respect", desc: "Listen before speaking. Understand before acting. Respect is the foundation of every lasting relationship between lawyer and client." },
      socialValues: "Social Values",
      equity: { title: "Equity", desc: "Treating unequals according to their inequality is the path to a truly just society. We do not seek formal equality, but material equality." },
      order: { title: "Order", desc: "Not the order that oppresses, but the one that organizes and harmonizes. The Law is an instrument of social peace, not domination." },
      progress: { title: "Progress", desc: "We believe that the Law must evolve with society. We are committed to building a more just and sustainable future." },
      conclusion1: "This is our final cause, our Aristotelian purpose: to be an instrument of justice, guardian of rights and partner in building a more equitable world.",
      conclusion2: "Nothing happens by chance or coincidence. It exists by vocation, purpose and unwavering commitment to those who trust our work.",
      since: "Since 2008",
    },
  };

  const t = content[language];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={language === "en" ? "Open manifesto" : "Abrir manifesto"}
        style={{
          WebkitTapHighlightColor: "rgba(0,0,0,0.1)",
          touchAction: "manipulation",
        }}
        className="inline-flex items-center gap-2 min-h-[56px] bg-accent/10 rounded-full text-accent hover:bg-accent/20 active:bg-accent/30 active:scale-95 transition-all cursor-pointer select-none py-px px-4 text-sm font-semibold border-4 border-solid border-muted-foreground"
      >
        <span className="w-2 h-2 bg-accent rounded-full animate-pulse flex-shrink-0" aria-hidden="true" />
        <span>{t.buttonText}</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden bg-background border-accent/20">
          <ScrollArea className="max-h-[90vh]">
            <div className="p-6 md:p-8">
              {/* Header with Photo */}
              <DialogHeader className="mb-6">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-accent/30 shadow-lg">
                      <img src={rodrigoVitalinoBrasilia} alt="Dr. Rodrigo Vitalino" className="w-full h-full object-cover object-top" />
                    </div>
                  </div>
                  <div className="text-center md:text-left">
                    <DialogTitle className="font-serif text-2xl md:text-3xl text-accent mb-2">
                      {t.title}
                    </DialogTitle>
                    <p className="text-muted-foreground text-sm">{t.subtitle}</p>
                    <p className="text-foreground font-medium mt-2">Dr. Rodrigo Vitalino</p>
                  </div>
                </div>
              </DialogHeader>

              {/* Content */}
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <div className="bg-secondary/50 rounded-lg p-4 md:p-6 border-l-4 border-accent mx-0">
                  <p className="italic text-foreground md:text-base leading-relaxed text-base text-justify">
                    {t.intro}
                  </p>
                </div>

                {/* Legal Values */}
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-accent" />
                    {t.legalValues}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[t.justice, t.responsibility, t.freedom].map((val, idx) => (
                      <div key={idx} className="bg-card rounded-lg p-4 border border-border">
                        <h4 className="font-semibold text-accent mb-2">{val.title}</h4>
                        <p className="text-sm">{val.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Human Values */}
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-accent" />
                    {t.humanValues}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[t.dignity, t.solidarity, t.respect].map((val, idx) => (
                      <div key={idx} className="bg-card rounded-lg p-4 border border-border">
                        <h4 className="font-semibold text-accent mb-2">{val.title}</h4>
                        <p className="text-sm">{val.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social Values */}
                <div>
                  <h3 className="font-serif text-xl text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-0.5 bg-accent" />
                    {t.socialValues}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[t.equity, t.order, t.progress].map((val, idx) => (
                      <div key={idx} className="bg-card rounded-lg p-4 border border-border">
                        <h4 className="font-semibold text-accent mb-2">{val.title}</h4>
                        <p className="text-sm">{val.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conclusion */}
                <div className="bg-secondary/50 rounded-lg p-4 md:p-6 border-l-4 border-accent mt-8 mx-0">
                  <p className="text-foreground font-medium mb-4 text-sm md:text-base leading-relaxed text-center">
                    {t.conclusion1}
                  </p>
                  <p className="text-foreground italic text-sm md:text-base leading-relaxed text-center">
                    {t.conclusion2}
                  </p>
                </div>

                {/* Signature */}
                <div className="text-right pt-4 border-t border-border">
                  <p className="font-serif text-lg text-foreground">Rodrigo Vitalino Advogados</p>
                  <p className="text-sm text-muted-foreground">{t.since}</p>
                </div>
              </div>
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
