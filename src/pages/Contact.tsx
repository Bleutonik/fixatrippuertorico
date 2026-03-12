import { useState } from "react";
import { Phone, Mail, MapPin, Check, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import SEOCrossLinks from "@/components/SEOCrossLinks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import FadeIn from "@/components/motion/FadeIn";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://crm-ia-production-c247.up.railway.app/api/webhook/webform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          source: "fixatrippuertorico.com",
        }),
      });
      if (!res.ok) throw new Error("Failed");
      toast({ title: t("contact.sent"), description: t("contact.sentdesc") });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({ title: "Error", description: "Could not send message. Please try again.", variant: "destructive" });
    } finally {
      setSending(false);
    }
  };

  const whyReasons = [
    t("contact.why1"),
    t("contact.why2"),
    t("contact.why3"),
    t("contact.why4"),
    t("contact.why5"),
  ];

  const testimonials = [
    {
      name: "Midaly",
      location: "Puerto Rico",
      text: "Muy puntuales y viaje divertido. Andrew de Comedy on Deck es tremendo anfitrión. Buen desayuno y un buen almuerzo.",
      rating: 5,
    },
    {
      name: "Maribel",
      location: "México",
      text: "Agenda bien organizada, comidas adecuadas, transporte cómodo y limpio, guía y chofer muy amables y profesionales. 100% recomendable.",
      rating: 5,
    },
    {
      name: "Cristian",
      location: "United States",
      text: "Amazing experience from start to finish. The team was incredibly helpful and responsive. Would book again without hesitation!",
      rating: 5,
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Fix a Trip Puerto Rico",
    description: "Get in touch with Fix a Trip Puerto Rico, the island's leading boutique travel concierge, for personalized tour recommendations, private boat charter reservations, luxury transportation bookings, private chef arrangements, and wellness service scheduling.",
    url: "https://fixatrippuertorico.com/contact",
    mainEntity: {
      "@type": "TravelAgency",
      name: "Fix a Trip Puerto Rico",
      telephone: "+1-787-488-0202",
      email: "bookings@fixatrippr.com",
      address: { "@type": "PostalAddress", addressRegion: "PR", addressCountry: "US" },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Us | Fix a Trip Puerto Rico"
        description="Contact Fix a Trip Puerto Rico for personalized travel planning, tour bookings, boat charters, private chef reservations, luxury transport, and wellness services."
        canonicalPath="/contact"
        jsonLd={jsonLd}
      />
      <Header />
      <main className="py-10 sm:py-16">
        <div className="container max-w-5xl">
          {/* Header */}
          <header className="text-center mb-10 sm:mb-14">
            <FadeIn>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display mb-4 tracking-tight">
                {t("contact.title")}
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
                {t("contact.subtitle")}
              </p>
            </FadeIn>
          </header>

          {/* Why Choose Section */}
          <FadeIn delay={0.1}>
            <section className="mb-12 sm:mb-16 p-6 sm:p-8 rounded-3xl bg-primary/5 border border-primary/10">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground font-display mb-5 tracking-tight">
                {t("contact.whychoose")}
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {whyReasons.map((reason, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm sm:text-base">{reason}</span>
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>

          {/* Contact Info + Form */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <FadeIn delay={0.15}>
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">{t("contact.getintouch")}</h2>
                  <p className="text-muted-foreground text-sm mb-4 sm:mb-6">
                    {t("contact.team")}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">{t("contact.callback")}</h3>
                    <a href="tel:+17874880202" className="text-primary hover:underline text-sm sm:text-base">+1 787 488 0202</a>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.25}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">{t("contact.emailus")}</h3>
                    <a href="mailto:bookings@fixatrippr.com" className="text-primary hover:underline text-sm sm:text-base">bookings@fixatrippr.com</a>
                  </div>
                </div>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm sm:text-base">{t("contact.location")}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">Puerto Rico</p>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.35}>
                <div className="pt-2 hidden sm:block">
                  <img
                    src="https://fixatrippuertorico.com/wp-content/uploads/2026/01/FAMILY--971x1024.jpg"
                    alt="Happy family enjoying a Fix a Trip Puerto Rico experience"
                    className="rounded-xl shadow-lg w-full max-w-sm"
                    loading="lazy"
                  />
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">{t("contact.send")}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground block mb-1">{t("contact.name")}</label>
                    <Input
                      id="name"
                      placeholder={t("contact.name")}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="rounded-lg h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground block mb-1">{t("contact.email")}</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="rounded-lg h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="text-sm font-medium text-foreground block mb-1">{t("contact.phone") || "Phone"}</label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 787 000 0000"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="rounded-lg h-11"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-foreground block mb-1">{t("contact.message")}</label>
                    <Textarea
                      id="message"
                      placeholder={t("contact.placeholder")}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      className="rounded-lg"
                    />
                  </div>
                  <Button type="submit" disabled={sending} className="w-full rounded-full font-semibold h-11">
                    {sending ? "..." : t("contact.submit")}
                  </Button>
                </form>
              </div>
            </FadeIn>
          </div>

          {/* Testimonials - Trusted by Travelers */}
          <FadeIn delay={0.3}>
            <section className="mt-16 sm:mt-20">
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display tracking-tight mb-2">
                  Trusted by Travelers Since 2020
                </h2>
                <p className="text-muted-foreground text-sm">Thousands of travelers, one trusted team</p>
              </div>
              <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
                {testimonials.map((review, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-card border border-border/50 space-y-3">
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{review.text}</p>
                    <div className="pt-2 border-t border-border/50">
                      <p className="font-semibold text-foreground text-sm">{review.name}</p>
                      <p className="text-xs text-muted-foreground">{review.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </FadeIn>
        </div>
        <SEOCrossLinks />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
