import { Car, MessageCircle, Phone, MapPin, Shield, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const FixATransport = () => {
  const { t } = useLanguage();

  const handleInquiry = () => {
    const msg = encodeURIComponent("Hello! I'm interested in Fix a Transport services. Could you provide more information and pricing? Thank you!");
    window.open(`https://wa.me/17874880202?text=${msg}`, "_blank");
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fix a Transport - Transportation Services Puerto Rico",
    description: "Reliable transportation services in Puerto Rico. Airport transfers, private tours, and custom itineraries.",
    url: "https://fixatrippuertorico.com/fix-a-transport",
    provider: { "@type": "TravelAgency", name: "Fix a Trip Puerto Rico", telephone: "+1-787-488-0202" },
  };

  const services = [
    { icon: Car, title: t("transport.airport"), desc: t("transport.airportdesc") },
    { icon: MapPin, title: t("transport.private"), desc: t("transport.privatedesc") },
    { icon: Clock, title: t("transport.hourly"), desc: t("transport.hourlydesc") },
    { icon: Shield, title: t("transport.vip"), desc: t("transport.vipdesc") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Fix a Transport | Transportation Services Puerto Rico"
        description="Reliable transportation services in Puerto Rico. Airport transfers, private tours, hourly rentals, and VIP service. Book with Fix a Trip Puerto Rico."
        canonicalPath="/fix-a-transport"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 sm:py-28 bg-gradient-to-br from-primary/10 via-background to-primary-glow/5 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary rounded-full blur-[100px]" />
          </div>
          <div className="container relative text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Car className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t("transport.badge")}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-display tracking-tight mb-4">
              FIX A TRANSPORT
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-8">
              {t("transport.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button onClick={handleInquiry} className="rounded-xl px-8 h-12 font-semibold text-base bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2">
                <MessageCircle className="h-5 w-5" />
                {t("transport.chat")}
              </Button>
              <Button
                onClick={() => window.open("tel:+17874880202", "_self")}
                variant="outline"
                className="rounded-xl px-8 h-12 font-semibold text-base gap-2"
              >
                <Phone className="h-5 w-5" />
                +1 787 488 0202
              </Button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 sm:py-24">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-10 text-center">
              {t("transport.our")}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <div key={i} className="bg-card rounded-2xl p-6 border border-border/50 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center mx-auto mb-5 shadow-soft">
                    <s.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-secondary/50">
          <div className="container text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-4">{t("transport.cta")}</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t("transport.ctadesc")}</p>
            <Button onClick={handleInquiry} className="rounded-xl px-8 h-12 font-semibold text-base bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2">
              <MessageCircle className="h-5 w-5" />
              {t("transport.chatbook")}
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default FixATransport;
