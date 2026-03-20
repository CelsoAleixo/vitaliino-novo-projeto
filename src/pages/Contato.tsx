import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { PageHero } from "@/components/shared/PageHero";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, CheckCircle, Clock, Shield, MessageCircle, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { PageSEO, legalServiceSchema, breadcrumbSchema } from "@/components/shared/PageSEO";

const WHATSAPP_LINK = "https://wa.me/5511940449696?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado.";

export default function Contato() {
  const { toast } = useToast();
  const { language } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const t = {
    pt: {
      title: "Contato",
      description: "Entre em contato conosco para uma consulta jurídica.",
      availableNow: "Atendimento disponível agora",
      responseInMinutes: "Resposta em minutos via WhatsApp",
      immediateResponse: "Resposta Imediata",
      sendMessage: "Envie sua mensagem",
      name: "Nome",
      namePlaceholder: "Seu nome completo",
      phone: "Telefone",
      email: "E-mail",
      message: "Mensagem",
      messagePlaceholder: "Descreva brevemente sua necessidade jurídica...",
      submit: "Enviar Mensagem",
      submitting: "Enviando...",
      confidentiality: "Sigilo garantido",
      responseTime: "Resposta em 24h",
      oabRegular: "OAB Regular",
      contactInfo: "Informações de Contato",
      emailLabel: "E-mail",
      phoneLabel: "Telefone",
      addressBrazil: "Endereço Brasil",
      addressPortugal: "Endereço Comercial Portugal",
      phonePortugal: "Telefone Portugal",
      emailPortugal: "E-mail Portugal",
      officeHours: "Horário de Atendimento",
      hours: "Segunda a Sexta: 9h às 18h",
      saturday: "Sábado: Mediante agendamento",
      messageSent: "Mensagem Enviada!",
      thankYou: "Obrigado pelo seu contato. Nossa equipe responderá em breve.",
      sendNew: "Enviar nova mensagem",
      toastTitle: "Mensagem enviada!",
      toastDesc: "Entraremos em contato em breve.",
    },
    en: {
      title: "Contact",
      description: "Get in touch with us for a legal consultation.",
      availableNow: "Service available now",
      responseInMinutes: "Response in minutes via WhatsApp",
      immediateResponse: "Immediate Response",
      sendMessage: "Send your message",
      name: "Name",
      namePlaceholder: "Your full name",
      phone: "Phone",
      email: "Email",
      message: "Message",
      messagePlaceholder: "Briefly describe your legal needs...",
      submit: "Send Message",
      submitting: "Sending...",
      confidentiality: "Guaranteed confidentiality",
      responseTime: "Response within 24h",
      oabRegular: "OAB Regular",
      contactInfo: "Contact Information",
      emailLabel: "Email",
      phoneLabel: "Phone",
      addressBrazil: "Brazil Address",
      addressPortugal: "Portugal Business Address",
      phonePortugal: "Portugal Phone",
      emailPortugal: "Portugal Email",
      officeHours: "Office Hours",
      hours: "Monday to Friday: 9am to 6pm",
      saturday: "Saturday: By appointment",
      messageSent: "Message Sent!",
      thankYou: "Thank you for contacting us. Our team will respond shortly.",
      sendNew: "Send new message",
      toastTitle: "Message sent!",
      toastDesc: "We will contact you soon.",
    },
  };

  const text = t[language];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
    setIsSubmitted(true);
    toast({
      title: text.toastTitle,
      description: text.toastDesc,
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <PageSEO title="Contato" description="Entre em contato com o escritório Rodrigo Vitalino Advogados." />
        <PageHero title={text.title} description={text.description} breadcrumb={[{ label: text.title }]} />
        <section className="section-padding">
          <div className="container-site">
            <AnimatedSection animation="scale">
              <div className="max-w-xl mx-auto text-center">
                <div className="bg-secondary rounded-lg p-12">
                  <CheckCircle className="h-16 w-16 text-accent mx-auto mb-6" />
                  <h2 className="font-serif text-2xl mb-4">{text.messageSent}</h2>
                  <p className="text-muted-foreground mb-8">{text.thankYou}</p>
                  <Button onClick={() => setIsSubmitted(false)}>{text.sendNew}</Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageSEO
        title="Contato"
        description="Entre em contato com o escritório Rodrigo Vitalino Advogados. Atendimento em São Paulo e Portugal. Agende uma consulta jurídica."
        jsonLd={[
          breadcrumbSchema([{ name: "Início", url: "/" }, { name: "Contato", url: "/contato" }]),
          legalServiceSchema,
        ]}
      />
      <PageHero title={text.title} description={text.description} breadcrumb={[{ label: text.title }]} />

      {/* Quick Contact Banner */}
      <AnimatedSection animation="fade">
        <section className="bg-accent/10 border-b border-accent/20 py-4">
          <div className="container-site">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-2.5 h-2.5 bg-accent rounded-full animate-ping opacity-75" />
                  <span className="relative w-2.5 h-2.5 bg-accent rounded-full" />
                </div>
                <span className="text-sm font-medium">{text.availableNow}</span>
                <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{text.responseInMinutes}</span>
                </div>
              </div>
              <Button asChild size="sm" className="group">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  {text.immediateResponse}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <AnimatedSection animation="fade-left">
              <div>
                <h2 className="font-serif text-2xl mb-6">{text.sendMessage}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{text.name} *</Label>
                      <Input id="name" name="name" required placeholder={text.namePlaceholder} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{text.phone}</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="(11) 99999-9999" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">{text.email} *</Label>
                    <Input id="email" name="email" type="email" required placeholder="seu@email.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{text.message} *</Label>
                    <Textarea id="message" name="message" required placeholder={text.messagePlaceholder} rows={6} />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button type="submit" size="lg" disabled={isLoading} className="flex-1">
                      {isLoading ? text.submitting : text.submit}
                    </Button>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="w-4 h-4 text-accent" />
                      <span>{text.confidentiality}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-accent" />
                      <span>{text.responseTime}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>{text.oabRegular}</span>
                    </div>
                  </div>
                </form>
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection animation="fade-right" delay={150}>
              <div className="lg:pl-8">
                <h2 className="font-serif text-2xl mb-6">{text.contactInfo}</h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">{text.emailLabel}</h4>
                      <a href="mailto:contato@rvitalinoadvogados.com.br" className="text-muted-foreground hover:text-foreground transition-colors">
                        contato@rvitalinoadvogados.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">{text.phoneLabel}</h4>
                      <a href="tel:+551156100812" className="text-muted-foreground hover:text-foreground transition-colors">
                        +55 (11) 5610-0812
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">{text.addressBrazil}</h4>
                      <p className="text-muted-foreground">
                        Rua Manoel de Oliveira, 269, Sala 412, Torre 1,<br />
                        Patteo Mogilar-Sky Mall,<br />
                        Mogi das Cruzes-SP, CEP: 08773-130
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">{text.addressPortugal}</h4>
                      <p className="text-muted-foreground font-medium text-left">
                        Avenida da Liberdade, nº 706 – 1º andar, lado esquerdo<br />
                        Código Postal 4710-249, Braga – Distrito de Braga<br />
                        Portugal
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">{text.phonePortugal}</h4>
                      <a
                        href="https://wa.me/351910385021"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +351 910 385 021
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium mb-1">{text.emailPortugal}</h4>
                      <a href="mailto:arthur@rvitalinoadvogados.com.br" className="text-muted-foreground hover:text-foreground transition-colors">
                        arthur@rvitalinoadvogados.com.br
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-border">
                  <h4 className="font-medium mb-3">{text.officeHours}</h4>
                  <p className="text-muted-foreground">
                    {text.hours}
                    <br />
                    {text.saturday}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
