import recuperacaoRuralHero from "@/assets/publications/recuperacao-rural-hero.jpg";
import criseClimaticaMtHero from "@/assets/publications/crise-climatica-mt-hero.jpg";
import rodrigoVitalinoAutor from "@/assets/rodrigo-vitalino-autor.png";

export interface Publication {
  id: number;
  slug: string;
  title: string;
  titleEn: string;
  subtitle: string;
  subtitleEn: string;
  excerpt: string;
  excerptEn: string;
  date: string;
  category: string;
  categoryEn: string;
  categorySlug: string;
  heroImage?: string;
  content?: string;
  contentEn?: string;
  authorSection?: {
    name: string;
    description: string;
    descriptionEn: string;
    photo: string;
  };
}

/**
 * Generate URL-friendly slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single
    .replace(/^-|-$/g, "") // Remove leading/trailing hyphens
    .substring(0, 80); // Limit length
}

/**
 * Category slug mapping
 */
export const categorySlugMap: Record<string, string> = {
  "Direito Empresarial": "direito-empresarial",
  "Direito Trabalhista": "direito-trabalhista",
  "Direito Tributário": "direito-tributario",
  "Direito Internacional": "direito-internacional",
  "Direito Rural": "direito-rural",
  "Direito Civil": "direito-civil",
};

export const categoryEnMap: Record<string, string> = {
  "Direito Empresarial": "Corporate Law",
  "Direito Trabalhista": "Labor Law",
  "Direito Tributário": "Tax Law",
  "Direito Internacional": "International Law",
  "Direito Rural": "Agricultural Law",
  "Direito Civil": "Civil Law",
};

export const categoryFromSlug: Record<string, string> = Object.fromEntries(
  Object.entries(categorySlugMap).map(([k, v]) => [v, k])
);

export const categories = [
  "Todas",
  "Direito Empresarial",
  "Direito Trabalhista",
  "Direito Tributário",
  "Direito Internacional",
  "Direito Rural",
];

export const categoriesEn = [
  "All",
  "Corporate Law",
  "Labor Law",
  "Tax Law",
  "International Law",
  "Agricultural Law",
];

/**
 * Publications data with SEO-friendly slugs
 */
export const publications: Publication[] = [
  {
    id: 9,
    slug: "crise-climatica-mato-grosso-safra-2026-impacto-agronegocio",
    title: "Crise Climática em Mato Grosso: O Peso da Safra 2025/26 Sobre o Agronegócio",
    titleEn: "Climate Crisis in Mato Grosso: The Weight of the 2025/26 Harvest on Agribusiness",
    subtitle: "Endividamento, chuvas extremas e o colapso operacional que ameaça produtores rurais",
    subtitleEn: "Debt, extreme rainfall, and the operational collapse threatening rural producers",
    excerpt: "Mato Grosso enfrenta uma tempestade perfeita: endividamento crescente, chuvas recordes e uma colheita que não consegue avançar. O campo está no limite — e cada janela de sol é uma corrida contra o relógio.",
    excerptEn: "Mato Grosso faces a perfect storm: growing debt, record rainfall, and a harvest that cannot advance. The countryside is at its limit — and every window of sunshine is a race against time.",
    date: "2026-02-18",
    category: "Direito Rural",
    categoryEn: "Agricultural Law",
    categorySlug: "direito-rural",
    heroImage: criseClimaticaMtHero,
    content: `## O que veio antes: a crise que já estava formada

Antes mesmo da colheita começar, Mato Grosso já carregava um peso enorme nas costas. O estado vinha de um 2025 turbulento, marcado por endividamento crescente, pedidos recordes de recuperação judicial e um agronegócio operando no limite. Produtores que haviam apostado alto em expansão agora lutavam para manter o fluxo de caixa, renegociar contratos e segurar custos que não paravam de subir.

Era como caminhar sobre um terreno instável — qualquer mudança brusca poderia fazer tudo desmoronar.

E então, 2026 chegou trazendo exatamente o que ninguém queria: um clima imprevisível e implacável.

## O impacto climático — versão mais intensa e narrativa

A Aprosoja MT acendeu o alerta: a colheita da soja 2025/26 está sendo engolida pelo excesso de chuvas. Em apenas quinze dias, regiões inteiras receberam entre 90 mm e 150 mm de precipitação. O campo virou lama, as máquinas pararam, e a safra começou a perder qualidade antes mesmo de sair da lavoura.

O presidente da Aprosoja MT, Lucas Costa Beber, descreve o cenário com precisão: **chuva demais, tempo de menos, e uma colheita que não consegue avançar.**

As consequências são imediatas:

- **Grãos perdendo peso**
- **Soja brotando ainda na vagem**
- **Qualidade comprometida**
- **Janelas de plantio e colheita completamente desorganizadas**
- **Risco direto para o milho segunda safra**

E o drama não para aí.

O diretor administrativo da Aprosoja MT, Diego Bertuol, reforça o que mais dói no bolso do produtor: os contratos não esperam. Com a colheita atrasada, muitos não conseguem entregar o que foi combinado — e isso trava o fluxo de caixa justamente no início da safra, quando cada decisão financeira é crucial para manter a propriedade de pé.

## A voz do campo — o peso real da crise

Em Vera, o produtor Sandro Mick descreve um cenário que parece tirado de um filme de sobrevivência agrícola:

*"Desde domingo ninguém consegue colocar máquina na lavoura. A soja está abrindo vagem, brotando e dando grão avariado. Quando o sol aparece, colhemos com 30% de umidade. Se deixar no campo, ela debulha, brota ou apodrece. Sem armazém, não existe decisão boa — todas são ruins."*

É a realidade nua e crua: **ou colhe com perda, ou perde tudo.**

Sandro ainda lembra que o atraso começou lá atrás, no plantio. Setembro deu uma trégua, mas outubro travou tudo. Quando a chuva voltou, o plantio foi acelerado — e agora, tudo está chegando junto na colheita, criando um gargalo que ninguém consegue resolver.

## O que vem pela frente

O milho já alcançou 28% da área plantada, mas a tendência é de desaceleração. A previsão indica mais chuva — entre 65 mm e 95 mm — o que pode paralisar novamente as máquinas.

A Aprosoja MT segue monitorando cada região, mas o recado é claro: **o momento exige cautela, estratégia e sangue-frio.**

Os produtores estão no limite, enfrentando desafios operacionais, financeiros e fitossanitários ao mesmo tempo. E enquanto o clima não dá trégua, cada janela de sol se torna uma corrida contra o relógio para salvar o que ainda pode ser salvo.

---

::author::`,
    contentEn: `## What came before: the crisis that was already forming

Even before the harvest began, Mato Grosso was already carrying an enormous weight on its shoulders. The state was coming off a turbulent 2025, marked by growing indebtedness, record judicial recovery filings, and an agribusiness sector operating at its limit. Producers who had bet heavily on expansion were now fighting to maintain cash flow, renegotiate contracts, and contain costs that wouldn't stop rising.

It was like walking on unstable ground — any sudden change could make everything collapse.

And then, 2026 arrived bringing exactly what no one wanted: unpredictable and relentless weather.

## The climate impact — a more intense and narrative version

Aprosoja MT raised the alarm: the 2025/26 soybean harvest is being swallowed by excessive rainfall. In just fifteen days, entire regions received between 90 mm and 150 mm of precipitation. The fields turned to mud, machines stopped, and the crop began losing quality before it even left the field.

The president of Aprosoja MT, Lucas Costa Beber, describes the scenario precisely: **too much rain, too little time, and a harvest that cannot advance.**

The consequences are immediate:

- **Grains losing weight**
- **Soybeans sprouting still in the pod**
- **Compromised quality**
- **Planting and harvest windows completely disrupted**
- **Direct risk to the second corn crop**

And the drama doesn't stop there.

The administrative director of Aprosoja MT, Diego Bertuol, reinforces what hurts the producer's pocket the most: contracts don't wait. With the delayed harvest, many cannot deliver what was agreed — and this freezes cash flow right at the start of the season, when every financial decision is crucial to keeping the property standing.

## The voice of the field — the real weight of the crisis

In Vera, producer Sandro Mick describes a scenario that seems taken from an agricultural survival film:

*"Since Sunday, no one has been able to put a machine in the field. The soybeans are opening pods, sprouting, and producing damaged grain. When the sun appears, we harvest at 30% moisture. If left in the field, it shatters, sprouts, or rots. Without storage, there is no good decision — they are all bad."*

It's the raw reality: **either harvest with losses, or lose everything.**

Sandro also remembers that the delay started way back, at planting time. September gave a reprieve, but October stopped everything. When the rain returned, planting was accelerated — and now, everything is arriving at once during harvest, creating a bottleneck that no one can solve.

## What lies ahead

Corn has already reached 28% of the planted area, but the trend is toward deceleration. The forecast indicates more rain — between 65 mm and 95 mm — which could once again paralyze machines.

Aprosoja MT continues monitoring each region, but the message is clear: **the moment demands caution, strategy, and composure.**

Producers are at their limit, facing operational, financial, and phytosanitary challenges simultaneously. And while the weather offers no respite, every window of sunshine becomes a race against the clock to save what can still be saved.

---

::author::`,
    authorSection: {
      name: "Dr. Rodrigo Vitalino",
      description: `A trajetória do Dr. Rodrigo Vitalino no Direito Empresarial e Rural é marcada por uma atuação profundamente conectada à realidade do campo. Ao longo dos anos, ele se especializou em lidar com as dores mais sensíveis do agronegócio: endividamento crescente, risco de perda patrimonial, contratos desbalanceados, pressão de credores e, principalmente, os impactos imprevisíveis do clima sobre a capacidade de pagamento dos produtores.

Sua experiência prática o colocou lado a lado com agricultores, pecuaristas e empresários rurais que enfrentam desde oscilações de mercado até crises severas provocadas por estiagens, excesso de chuvas, pragas e quebras de safra. Em cada caso, o Dr. Rodrigo desenvolveu estratégias jurídicas que vão além do papel — soluções que preservam propriedades, evitam leilões, reestruturam dívidas e garantem fôlego financeiro para que o produtor continue produzindo.

Ele já conduziu processos de Recuperação Judicial envolvendo grupos rurais complexos, renegociações multimilionárias com instituições financeiras, suspensões de leilões extrajudiciais iminentes e defesas técnicas em contratos de barter, CPRs, garantias reais e operações estruturadas. Sua atuação combina conhecimento jurídico sólido com compreensão profunda da dinâmica agrícola: ciclos de plantio, janelas de colheita, sazonalidade de caixa, riscos climáticos e volatilidade de preços.`,
      descriptionEn: `Dr. Rodrigo Vitalino's career in Corporate and Rural Law is marked by a practice deeply connected to the reality of the field. Over the years, he has specialized in addressing the most sensitive pain points of agribusiness: growing indebtedness, risk of asset loss, unbalanced contracts, creditor pressure, and above all, the unpredictable impacts of climate on producers' ability to pay.

His practical experience has placed him side by side with farmers, ranchers, and rural entrepreneurs facing everything from market fluctuations to severe crises caused by droughts, excessive rainfall, pests, and crop failures. In each case, Dr. Rodrigo has developed legal strategies that go beyond paper — solutions that preserve properties, prevent auctions, restructure debts, and ensure financial breathing room so that producers can keep producing.

He has led Judicial Recovery proceedings involving complex rural groups, multimillion-dollar renegotiations with financial institutions, suspensions of imminent extrajudicial auctions, and technical defenses in barter contracts, CPRs, real guarantees, and structured operations. His practice combines solid legal knowledge with deep understanding of agricultural dynamics: planting cycles, harvest windows, cash seasonality, climate risks, and price volatility.`,
      photo: rodrigoVitalinoAutor
    }
  },
  {
    id: 8,
    slug: "recuperacao-judicial-produtor-rural-lei-14112",
    title: "Recuperação Judicial do Produtor Rural – Lei 14.112/20",
    titleEn: "Judicial Recovery for Rural Producers – Law 14.112/20",
    subtitle: "Proteção patrimonial e reestruturação de dívidas no agronegócio",
    subtitleEn: "Asset protection and debt restructuring in agribusiness",
    excerpt: "A Lei 14.112/20 ampliou o acesso à recuperação judicial para produtores rurais, permitindo a preservação de negócios viáveis e a reorganização de obrigações financeiras.",
    excerptEn: "Law 14.112/20 expanded access to judicial recovery for rural producers, enabling the preservation of viable businesses and the reorganization of financial obligations.",
    date: "2026-01-20",
    category: "Direito Rural",
    categoryEn: "Agricultural Law",
    categorySlug: "direito-rural",
    heroImage: recuperacaoRuralHero,
    content: `---


### A Lei 14.112/2020 e o Produtor Rural

A Lei 14.112/2020 trouxe avanços significativos para o agronegócio brasileiro, ampliando o acesso dos produtores rurais ao instituto da recuperação judicial. Antes dessa alteração, muitos agricultores e pecuaristas encontravam barreiras legais para buscar a reestruturação de suas dívidas de forma organizada.

**Principais inovações da lei:**
- Possibilidade de recuperação judicial para produtores rurais pessoa física
- Flexibilização de requisitos de tempo de atividade
- Proteção do patrimônio essencial à continuidade da produção
- Suspensão de ações e execuções contra o devedor

### Quando Considerar a Recuperação Judicial

A recuperação judicial deve ser avaliada quando o produtor rural enfrenta:
- Acúmulo de dívidas bancárias e com fornecedores
- Risco iminente de perda de terras ou maquinário por execução
- Dificuldade de renegociação direta com credores
- Leilões extrajudiciais agendados sobre propriedades

### Benefícios da Recuperação Judicial

**Para o produtor:**
- Suspensão de cobranças e execuções por 180 dias (stay period)
- Oportunidade de apresentar plano de pagamento aos credores
- Preservação dos bens essenciais à atividade rural
- Manutenção da produção e geração de renda durante o processo

**Para a economia:**
- Manutenção de empregos no campo
- Preservação da cadeia produtiva do agronegócio
- Recuperação de créditos de forma ordenada pelos credores

### Atuação Especializada

Nossa atuação abrange todas as etapas do processo de recuperação:

1. **Análise de viabilidade:** Diagnóstico financeiro e jurídico da situação do produtor
2. **Elaboração do pedido:** Preparação da documentação e petição inicial
3. **Negociação com credores:** Mediação para construção do plano de recuperação
4. **Contestação de leilões:** Ação imediata para suspender alienações forçadas
5. **Acompanhamento judicial:** Defesa dos interesses do produtor em todas as instâncias

### Considerações Finais

A recuperação judicial representa uma ferramenta poderosa para produtores rurais que enfrentam crises financeiras, mas desejam manter suas atividades e honrar seus compromissos de forma sustentável.

A orientação jurídica especializada é fundamental para avaliar a viabilidade do pedido e conduzir o processo de forma estratégica, maximizando as chances de êxito na reestruturação das dívidas.

---

::author::`,
    contentEn: `---


### Law 14.112/2020 and the Rural Producer

Law 14.112/2020 brought significant advances for Brazilian agribusiness, expanding rural producers' access to judicial recovery proceedings. Before this amendment, many farmers and ranchers faced legal barriers when seeking to restructure their debts in an organized manner.

**Key innovations of the law:**
- Possibility of judicial recovery for individual rural producers
- Flexibility in activity time requirements
- Protection of assets essential for continuing production
- Suspension of lawsuits and enforcement actions against the debtor

### When to Consider Judicial Recovery

Judicial recovery should be evaluated when the rural producer faces:
- Accumulation of bank debts and debts to suppliers
- Imminent risk of losing land or machinery through enforcement
- Difficulty in direct renegotiation with creditors
- Extrajudicial auctions scheduled on properties

### Benefits of Judicial Recovery

**For the producer:**
- Suspension of collections and enforcements for 180 days (stay period)
- Opportunity to present a payment plan to creditors
- Preservation of assets essential to rural activity
- Maintenance of production and income generation during the process

**For the economy:**
- Maintenance of rural jobs
- Preservation of the agribusiness production chain
- Orderly credit recovery by creditors

### Specialized Practice

Our practice covers all stages of the recovery process:

1. **Viability analysis:** Financial and legal diagnosis of the producer's situation
2. **Filing preparation:** Documentation and initial petition preparation
3. **Creditor negotiation:** Mediation for building the recovery plan
4. **Auction contestation:** Immediate action to suspend forced sales
5. **Judicial monitoring:** Defense of the producer's interests at all levels

### Final Considerations

Judicial recovery represents a powerful tool for rural producers facing financial crises but wishing to maintain their activities and honor their commitments sustainably.

Specialized legal guidance is essential to assess the viability of the application and conduct the process strategically, maximizing the chances of success in debt restructuring.

---

::author::`,
    authorSection: {
      name: "Dr. Rodrigo Vitalino",
      description: `Sou advogado com atuação voltada à Recuperação Judicial de empresas, renegociação e reestruturação de dívidas rurais, além de contestação e suspensão de leilões extrajudiciais.

Minha prática profissional é orientada pelo compromisso de preservar negócios viáveis e assegurar o patrimônio de empresários e produtores que enfrentam dificuldades financeiras.

Com uma abordagem técnica e estratégica, busco soluções jurídicas eficazes que permitam reorganizar obrigações, evitar perdas patrimoniais e restabelecer o equilíbrio econômico, sempre pautado pela ética, transparência e profissionalismo.`,
      descriptionEn: `I am a lawyer focused on Corporate Judicial Recovery, rural debt renegotiation and restructuring, as well as contestation and suspension of extrajudicial auctions.

My professional practice is guided by the commitment to preserve viable businesses and protect the assets of entrepreneurs and producers facing financial difficulties.

With a technical and strategic approach, I seek effective legal solutions that allow reorganizing obligations, avoiding asset losses, and restoring economic balance, always guided by ethics, transparency, and professionalism.`,
      photo: rodrigoVitalinoAutor
    }
  },
  {
    id: 7,
    slug: "semana-internacional-direito-portugal-2026",
    title: "Semana Internacional de Direito em Portugal 2026: Oportunidade para Internacionalizar Sua Carreira",
    titleEn: "International Law Week in Portugal 2026: Opportunity to Internationalize Your Career",
    subtitle: "Evento presencial no Porto com imersão acadêmica e networking global",
    subtitleEn: "In-person event in Porto with academic immersion and global networking",
    excerpt: "Evento presencial no Porto reúne advogados, estudantes e gestores para imersão acadêmica, networking global e certificação internacional em abril de 2026.",
    excerptEn: "In-person event in Porto brings together lawyers, students, and managers for academic immersion, global networking, and international certification in April 2026.",
    date: "2026-01-19",
    category: "Direito Internacional",
    categoryEn: "International Law",
    categorySlug: "direito-internacional",
    authorSection: {
      name: "CJ Arthur Vitalino",
      description: "Especialista em Direito Internacional",
      descriptionEn: "International Law Specialist",
      photo: "/lovable-uploads/arthur-vitalino.png"
    },
    content: `## Internacionalização Jurídica: Por Que Atuar Além das Fronteiras?

A advocacia contemporânea exige competências que ultrapassam os limites territoriais. O mercado jurídico globalizado demanda profissionais capacitados a compreender tratados, convenções internacionais e as dinâmicas de cooperação entre jurisdições. Nesse contexto, eventos de imersão acadêmica e networking internacional ganham relevância estratégica.

A I Semana Internacional de Direito – Portugal, programada para abril de 2026, representa uma dessas oportunidades singulares de desenvolvimento profissional.

### Estrutura do Evento

O programa ocorrerá entre os dias **12 e 17 de abril de 2026**, na cidade do Porto, com atividades presenciais organizadas pela Universidade Portucalense (UPT), em parceria com a Internazionale Juris Academy e a FOL Academy.

**Formato da experiência:**
- 28 horas de aulas e palestras presenciais
- Certificação tripla: UPT, Internazionale Juris Academy e FOL Academy
- Visitas institucionais ao Palácio da Relação do Porto e à Universidade de Coimbra
- Rodadas de negócios entre profissionais do Brasil, Portugal, Europa e EUA

### Principais Temas Abordados

O conteúdo programático abrange áreas essenciais para quem pretende expandir a atuação profissional internacionalmente:

**Direito Internacional e Cooperação:**
- Acordos e Tratados Internacionais Brasil-Portugal
- Crimes Transnacionais e Cooperação Penal Brasil-Europa
- Subtração Internacional de Menores e Convenção de Haia
- Contratos Transnacionais e Mobilidade Profissional

**Planejamento e Gestão:**
- Planejamento Sucessório em Contexto Internacional
- Aposentadoria Especial com Aproveitamento de Tempo Internacional
- Estratégias de Networking e Expansão de Escritórios

**Desenvolvimento Profissional:**
- Ferramentas Tecnológicas para Gestão Jurídica
- Posicionamento e Marca Profissional Global
- Inteligência e Postura em Comunicação

### Considerações Finais

A participação em eventos de imersão internacional representa investimento estratégico na carreira jurídica. A combinação de formação acadêmica, certificação reconhecida e networking qualificado oferece retorno tangível para profissionais que desejam se diferenciar em um mercado cada vez mais competitivo e globalizado.

---

*Publicado por Rodrigo Vitalino Advogados*`,
    contentEn: `## Legal Internationalization: Why Practice Beyond Borders?

Contemporary legal practice requires competencies that transcend territorial boundaries. The globalized legal market demands professionals capable of understanding treaties, international conventions, and the dynamics of cooperation between jurisdictions. In this context, academic immersion and international networking events gain strategic relevance.

The I International Law Week – Portugal, scheduled for April 2026, represents one of these unique professional development opportunities.

### Event Structure

The program will take place between **April 12 and 17, 2026**, in the city of Porto, with in-person activities organized by Portucalense University (UPT), in partnership with the Internazionale Juris Academy and FOL Academy.

**Experience format:**
- 28 hours of in-person classes and lectures
- Triple certification: UPT, Internazionale Juris Academy, and FOL Academy
- Institutional visits to the Porto Court of Appeals and the University of Coimbra
- Business rounds among professionals from Brazil, Portugal, Europe, and the USA

### Main Topics Covered

The curriculum covers essential areas for those intending to expand their professional practice internationally:

**International Law and Cooperation:**
- Brazil-Portugal International Agreements and Treaties
- Transnational Crimes and Brazil-Europe Criminal Cooperation
- International Child Abduction and the Hague Convention
- Transnational Contracts and Professional Mobility

**Planning and Management:**
- Estate Planning in an International Context
- Special Retirement with International Time Credits
- Networking Strategies and Firm Expansion

**Professional Development:**
- Technological Tools for Legal Management
- Global Professional Positioning and Branding
- Intelligence and Communication Posture

### Final Considerations

Participation in international immersion events represents a strategic investment in a legal career. The combination of academic training, recognized certification, and qualified networking offers tangible returns for professionals who wish to differentiate themselves in an increasingly competitive and globalized market.

---

*Published by Rodrigo Vitalino Advogados*`,
  },
  {
    id: 6,
    slug: "obrigacoes-empresariais-2026-guia-gestores",
    title: "Obrigações Empresariais em 2026: Guia Completo para Gestores",
    titleEn: "Business Obligations in 2026: Complete Guide for Managers",
    subtitle: "Adequação fiscal, tecnológica e contábil no novo cenário regulatório",
    subtitleEn: "Tax, technological, and accounting compliance in the new regulatory landscape",
    excerpt: "O novo cenário regulatório exige adequação fiscal, tecnológica e contábil das empresas. Conheça as principais exigências da Reforma Tributária e como se preparar.",
    excerptEn: "The new regulatory landscape requires tax, technological, and accounting compliance from companies. Learn about the main requirements of the Tax Reform and how to prepare.",
    date: "2026-01-19",
    category: "Direito Empresarial",
    categoryEn: "Corporate Law",
    categorySlug: "direito-empresarial",
    content: `## Novo Marco Regulatório Empresarial: Prepare Sua Empresa para 2026

O ano de 2026 inaugura uma nova fase na gestão empresarial brasileira. Com o início da transição da Reforma Tributária e mudanças expressivas nos campos fiscal, contábil e tecnológico, as organizações enfrentam um cenário que demanda não apenas conformidade documental, mas verdadeira reorganização de processos internos.

### 1. Reformulação dos Documentos Fiscais Eletrônicos

Uma das exigências mais imediatas refere-se à atualização dos documentos fiscais. A partir de janeiro de 2026, notas fiscais devem contemplar campos específicos para a CBS (Contribuição sobre Bens e Serviços) e o IBS (Imposto sobre Bens e Serviços).

**Ações necessárias:**
- Atualização dos sistemas emissores de notas fiscais
- Revisão das parametrizações tributárias
- Capacitação das equipes responsáveis pela emissão

### 2. Operação Simultânea de Dois Regimes Tributários

Durante o período de transição (2026-2032), as empresas operam com dois sistemas tributários paralelos: o atual e o novo modelo da Reforma.

### Recomendações para Empresários e Gestores

**Ações imediatas:**
1. Realizar diagnóstico completo da situação fiscal atual
2. Investir na atualização dos sistemas de gestão
3. Capacitar equipes sobre as novas regras
4. Estabelecer rotinas de conferência e compliance
5. Buscar assessoria jurídica especializada para planejamento tributário

---

*Publicado por Rodrigo Vitalino Advogados*`,
    contentEn: `## New Business Regulatory Framework: Prepare Your Company for 2026

The year 2026 marks a new phase in Brazilian business management. With the beginning of the Tax Reform transition and significant changes in fiscal, accounting, and technological fields, organizations face a scenario that demands not only documentary compliance but true reorganization of internal processes.

### 1. Reformulation of Electronic Tax Documents

One of the most immediate requirements relates to updating tax documents. Starting January 2026, invoices must include specific fields for CBS (Contribution on Goods and Services) and IBS (Tax on Goods and Services).

**Required actions:**
- Updating invoice issuing systems
- Reviewing tax parameterizations
- Training teams responsible for issuance

### 2. Simultaneous Operation of Two Tax Regimes

During the transition period (2026-2032), companies operate with two parallel tax systems: the current one and the new Reform model.

### Recommendations for Entrepreneurs and Managers

**Immediate actions:**
1. Conduct a complete diagnosis of the current tax situation
2. Invest in updating management systems
3. Train teams on the new rules
4. Establish compliance and checking routines
5. Seek specialized legal advice for tax planning

---

*Published by Rodrigo Vitalino Advogados*`,
    authorSection: {
      name: "Dra. Deidre Scaranello",
      description: "Advogada especialista em Direito Empresarial",
      descriptionEn: "Corporate Law Specialist Attorney",
      photo: "/lovable-uploads/deidre-scaranello-fixed.png"
    }
  },
  {
    id: 5,
    slug: "mudancas-trabalhistas-2026-portaria-mte",
    title: "Mudanças Trabalhistas a partir de 2026: O Que Sua Empresa Precisa Saber",
    titleEn: "Labor Changes from 2026: What Your Company Needs to Know",
    subtitle: "Portaria MTE nº 1/2025 moderniza fiscalização e consolida eSocial",
    subtitleEn: "MTE Ordinance No. 1/2025 modernizes inspection and consolidates eSocial",
    excerpt: "A Portaria Consolidada MTE nº 1/2025 moderniza as relações de trabalho com fiscalização 100% digital, novos prazos de admissão e consolidação do eSocial.",
    excerptEn: "Consolidated MTE Ordinance No. 1/2025 modernizes labor relations with 100% digital inspection, new hiring deadlines, and eSocial consolidation.",
    date: "2026-01-18",
    category: "Direito Trabalhista",
    categoryEn: "Labor Law",
    categorySlug: "direito-trabalhista",
    authorSection: {
      name: "Dra. Ana Caroline Ianuck",
      description: "Advogada especialista em Direito Empresarial e Recuperação Judicial",
      descriptionEn: "Corporate Law and Judicial Recovery Specialist Attorney",
      photo: "/lovable-uploads/ana-caroline-v3.png"
    },
    content: `## Nova Era das Relações Trabalhistas: Portaria Consolidada MTE nº 1/2025

O cenário das obrigações trabalhistas no Brasil passou por uma transformação significativa. Com a entrada em vigor da Portaria Consolidada MTE nº 1/2025, em 02 de janeiro de 2026, o Ministério do Trabalho e Emprego consolidou regras que impactam diretamente o Departamento Pessoal e o RH das empresas.

### Principais Disposições da Portaria

**Fiscalização Integralmente Digitalizada**

O Domicílio Eletrônico Trabalhista (DET) assume protagonismo como canal exclusivo de comunicação oficial entre o MTE e os empregadores.

**Novas Regras de Admissão e Registro:**
- **Prazo antecipado de registro:** O empregador deve registrar a admissão até o dia anterior ao início efetivo das atividades
- **CPF como identificador único:** O número do CPF passa a ser o dado suficiente para registro na CTPS Digital
- **eSocial como base exclusiva:** Todas as anotações contratuais devem ser realizadas via eSocial

---

*Publicado por Rodrigo Vitalino Advogados*`,
    contentEn: `## New Era of Labor Relations: Consolidated MTE Ordinance No. 1/2025

The landscape of labor obligations in Brazil has undergone a significant transformation. With the entry into force of Consolidated MTE Ordinance No. 1/2025, on January 2, 2026, the Ministry of Labor and Employment consolidated rules that directly impact companies' Personnel Department and HR.

### Main Provisions of the Ordinance

**Fully Digitalized Inspection**

The Electronic Labor Domicile (DET) takes center stage as the exclusive official communication channel between MTE and employers.

**New Hiring and Registration Rules:**
- **Anticipated registration deadline:** The employer must register the hire by the day before the actual start of activities
- **CPF as unique identifier:** The CPF number becomes sufficient data for registration in the Digital Work Card
- **eSocial as exclusive base:** All contractual annotations must be made via eSocial

---

*Published by Rodrigo Vitalino Advogados*`,
  },
  {
    id: 1,
    slug: "reforma-tributaria-lc-227-2026-ibs-itcmd-itbi",
    title: "Reforma Tributária Avança: LC 227/2026 Define Novas Regras para IBS, ITCMD e ITBI",
    titleEn: "Tax Reform Advances: LC 227/2026 Sets New Rules for IBS, ITCMD and ITBI",
    subtitle: "Segunda fase da Reforma estabelece Comitê Gestor e altera transmissão de bens",
    subtitleEn: "Second phase of the Reform establishes Management Committee and changes asset transfers",
    excerpt: "A regulamentação da segunda fase da Reforma Tributária estabelece o Comitê Gestor do IBS e traz mudanças significativas para impostos sobre transmissão de bens.",
    excerptEn: "The regulation of the second phase of the Tax Reform establishes the IBS Management Committee and brings significant changes to asset transfer taxes.",
    date: "2026-01-15",
    category: "Direito Tributário",
    categoryEn: "Tax Law",
    categorySlug: "direito-tributario",
    authorSection: {
      name: "Dra. Elisandra Sousa Barbosa",
      description: "Advogada especialista em Direito Tributário",
      descriptionEn: "Tax Law Specialist Attorney",
      photo: "/lovable-uploads/elisandra-sousa.png"
    },
    content: `## A Nova Etapa da Reforma Tributária Entra em Vigor

O Governo Federal oficializou mais um capítulo importante da Reforma Tributária brasileira. Com a sanção presidencial do Projeto de Lei Complementar nº 108/2024, nasceu a Lei Complementar nº 227/2026.

### O Que Muda na Prática

A principal inovação é a criação do Comitê Gestor do Imposto sobre Bens e Serviços (CG-IBS), responsável por coordenar a arrecadação, fiscalização e distribuição do tributo.

### Transformações no ITCMD

- **Alíquotas progressivas obrigatórias** pelos estados, com limite máximo de 8%
- **Ampliação do conceito de doação**, incluindo perdão de dívidas
- **Tributação de heranças e doações do exterior**, abrangendo estruturas de Trust

---

*Publicado por Rodrigo Vitalino Advogados*`,
    contentEn: `## The New Phase of Tax Reform Takes Effect

The Federal Government has formalized another important chapter of the Brazilian Tax Reform. With the presidential sanction of Complementary Law Bill No. 108/2024, Complementary Law No. 227/2026 was born.

### What Changes in Practice

The main innovation is the creation of the Tax on Goods and Services Management Committee (CG-IBS), responsible for coordinating tax collection, inspection, and distribution.

### Changes in ITCMD

- **Mandatory progressive rates** by states, with a maximum limit of 8%
- **Expansion of the donation concept**, including debt forgiveness
- **Taxation of foreign inheritances and donations**, covering Trust structures

---

*Published by Rodrigo Vitalino Advogados*`,
  },
  {
    id: 2,
    slug: "notas-fiscais-2026-receita-federal-cg-ibs-transicao",
    title: "Notas Fiscais em 2026: Receita Federal e CG-IBS Definem Regras de Transição",
    titleEn: "Tax Invoices in 2026: Federal Revenue and CG-IBS Define Transition Rules",
    subtitle: "Documentos fiscais na transição IBS/CBS com período sem multas",
    subtitleEn: "Tax documents in IBS/CBS transition with penalty-free period",
    excerpt: "Ato Conjunto esclarece como funcionarão os documentos fiscais durante o primeiro ano de implementação do IBS e CBS, com período de adaptação sem multas.",
    excerptEn: "Joint Act clarifies how tax documents will work during the first year of IBS and CBS implementation, with a penalty-free adaptation period.",
    date: "2026-01-12",
    category: "Direito Tributário",
    categoryEn: "Tax Law",
    categorySlug: "direito-tributario",
    authorSection: {
      name: "Dra. Elisandra Sousa Barbosa",
      description: "Advogada especialista em Direito Tributário",
      descriptionEn: "Tax Law Specialist Attorney",
      photo: "/lovable-uploads/elisandra-sousa.png"
    },
    content: `## Transição Tributária: Novas Regras para Documentos Fiscais

A Receita Federal e o Comitê Gestor do IBS publicaram orientações sobre a emissão de documentos fiscais durante o período de transição para o novo sistema tributário.

### Período de Adaptação

Durante os primeiros meses de 2026, as empresas terão um período sem multas para adequação dos sistemas de emissão de notas fiscais aos novos campos exigidos.

---

*Publicado por Rodrigo Vitalino Advogados*`,
    contentEn: `## Tax Transition: New Rules for Tax Documents

The Federal Revenue Service and the IBS Management Committee have published guidelines on the issuance of tax documents during the transition period to the new tax system.

### Adaptation Period

During the first months of 2026, companies will have a penalty-free period to adapt their invoice issuance systems to the new required fields.

---

*Published by Rodrigo Vitalino Advogados*`,
  },
  {
    id: 3,
    slug: "cib-cpf-imoveis-tributacao-iptu-itbi-itcmd",
    title: "CIB: Entenda o 'CPF dos Imóveis' e Seus Reflexos na Tributação",
    titleEn: "CIB: Understanding the 'Property ID' and Its Tax Implications",
    subtitle: "Cadastro unificado de propriedades pode impactar IPTU, ITBI e ITCMD",
    subtitleEn: "Unified property registry may impact property taxes",
    excerpt: "Novo cadastro unificado de propriedades promete maior transparência, mas especialistas alertam para possível aumento na carga tributária de IPTU, ITBI e ITCMD.",
    excerptEn: "New unified property registry promises greater transparency, but experts warn of possible increase in IPTU, ITBI, and ITCMD tax burden.",
    date: "2026-01-08",
    category: "Direito Tributário",
    categoryEn: "Tax Law",
    categorySlug: "direito-tributario",
    authorSection: {
      name: "Dra. Elisandra Sousa Barbosa",
      description: "Advogada especialista em Direito Tributário",
      descriptionEn: "Tax Law Specialist Attorney",
      photo: "/lovable-uploads/elisandra-sousa.png"
    },
    content: `## O Cadastro Imobiliário Brasileiro (CIB)

O novo Cadastro Imobiliário Brasileiro (CIB) funcionará como um "CPF dos imóveis", unificando informações cadastrais de propriedades em todo o território nacional.

### Impactos na Tributação

- **IPTU:** Base de cálculo mais precisa
- **ITBI:** Valores de mercado mais transparentes
- **ITCMD:** Maior controle sobre transmissões

---

*Publicado por Rodrigo Vitalino Advogados*`,
    contentEn: `## The Brazilian Property Registry (CIB)

The new Brazilian Property Registry (CIB) will function as a "Property ID," unifying cadastral information for properties throughout the national territory.

### Tax Impacts

- **IPTU:** More precise calculation base
- **ITBI:** More transparent market values
- **ITCMD:** Greater control over transfers

---

*Published by Rodrigo Vitalino Advogados*`,
  },
  {
    id: 4,
    slug: "ibs-cbs-2026-prazo-estendido-obrigacoes",
    title: "IBS e CBS em 2026: Prazo Estendido para Cumprimento de Obrigações",
    titleEn: "IBS and CBS in 2026: Extended Deadline for Compliance",
    subtitle: "Receita Federal concede 4 meses sem exigência dos novos tributos",
    subtitleEn: "Federal Revenue grants 4 months without new tax requirements",
    excerpt: "Receita Federal e Comitê Gestor concedem até 4 meses sem exigência de destaque ou recolhimento dos novos tributos nos documentos fiscais.",
    excerptEn: "Federal Revenue and Management Committee grant up to 4 months without requiring highlighting or collection of new taxes on tax documents.",
    date: "2025-12-23",
    category: "Direito Tributário",
    categoryEn: "Tax Law",
    categorySlug: "direito-tributario",
    authorSection: {
      name: "Dra. Elisandra Sousa Barbosa",
      description: "Advogada especialista em Direito Tributário",
      descriptionEn: "Tax Law Specialist Attorney",
      photo: "/lovable-uploads/elisandra-sousa.png"
    },
    content: `## Prazo Estendido para Adaptação ao Novo Sistema

A Receita Federal e o Comitê Gestor do IBS concederam prazo adicional de 4 meses para que empresas se adaptem às novas obrigações fiscais relacionadas ao IBS e CBS.

### O Que Isso Significa

Durante este período, não haverá exigência de destaque ou recolhimento dos novos tributos nos documentos fiscais, permitindo que os contribuintes ajustem seus sistemas.

---

*Publicado por Rodrigo Vitalino Advogados*`,
    contentEn: `## Extended Deadline for Adaptation to the New System

The Federal Revenue Service and the IBS Management Committee have granted an additional 4-month period for companies to adapt to the new tax obligations related to IBS and CBS.

### What This Means

During this period, there will be no requirement to highlight or collect the new taxes on tax documents, allowing taxpayers to adjust their systems.

---

*Published by Rodrigo Vitalino Advogados*`,
  },
];

/**
 * Legacy ID to slug mapping for 301 redirects
 */
export const legacyIdToSlug: Record<number, string> = Object.fromEntries(
  publications.map((p) => [p.id, p.slug])
);

/**
 * Find publication by slug
 */
export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find((p) => p.slug === slug);
}

/**
 * Find publication by legacy ID
 */
export function getPublicationById(id: number): Publication | undefined {
  return publications.find((p) => p.id === id);
}

/**
 * Get publication URL
 */
export function getPublicationUrl(publication: Publication): string {
  return `/publicacoes/${publication.slug}`;
}

/**
 * Get all publications sorted by date (newest first)
 */
export function getPublicationsSortedByDate(): Publication[] {
  return [...publications].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
