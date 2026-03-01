import { Heart, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { wellnessServices } from "@/data/services";
import { useLanguage } from "@/contexts/LanguageContext";

const FixAWellness = () => {
  const { t } = useLanguage();

  const handleInquiry = () => {
    const msg = encodeURIComponent("Hello! I'm interested in Fix a Wellness services. Could you provide more information and pricing? Thank you!");
    window.open(`https://wa.me/17874880202?text=${msg}`, "_blank");
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fix a Wellness - Wellness Services Puerto Rico",
    description: "Enjoy a high-end personalized relax experience in Puerto Rico. Massage, yoga, sound therapy, and more.",
    url: "https://fixatrippuertorico.com/fix-a-wellness",
    provider: { "@type": "TravelAgency", name: "Fix a Trip Puerto Rico", telephone: "+1-787-488-0202" },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Fix a Wellness | Wellness & Spa Services Puerto Rico"
        description="Enjoy a high-end personalized relax experience. Massage, therapeutic massage, yoga, sound therapy, acupuncture, reiki and more in Puerto Rico."
        canonicalPath="/fix-a-wellness"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 sm:py-28 bg-gradient-to-br from-primary/10 via-background to-primary-glow/5 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-20 w-64 h-64 bg-primary rounded-full blur-[100px]" />
          </div>
          <div className="container relative text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Heart className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t("wellness.badge")}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-display tracking-tight mb-4">
              FIX A WELLNESS
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-4">
              {t("wellness.subtitle")}
            </p>
            <p className="text-foreground font-medium text-lg max-w-xl mx-auto mb-8">
              {t("wellness.tagline")}
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-24">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-10 text-center">
              {t("wellness.services")}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {wellnessServices.map((service) => (
                <div key={service.name} className="bg-card rounded-2xl p-6 border border-border/50 shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1 text-center group">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mx-auto mb-5 shadow-card">
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{service.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-secondary/50">
          <div className="container text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-4">{t("wellness.cta")}</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t("wellness.ctadesc")}</p>
            <Button onClick={handleInquiry} className="rounded-xl px-8 h-12 font-semibold text-base bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2">
              <MessageCircle className="h-5 w-5" />
              {t("wellness.chatbook")}
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default FixAWellness;
