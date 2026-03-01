import { UtensilsCrossed, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { chefServices } from "@/data/services";
import { useLanguage } from "@/contexts/LanguageContext";

const FixAChef = () => {
  const { t } = useLanguage();

  const handleInquiry = () => {
    const msg = encodeURIComponent("Hello! I'm interested in Fix a Chef private dining service. Could you provide more information and pricing? Thank you!");
    window.open(`https://wa.me/17874880202?text=${msg}`, "_blank");
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fix a Chef - Private Chef Service Puerto Rico",
    description: "Enjoy a high-end personalized culinary experience with a private chef in Puerto Rico.",
    url: "https://fixatrippuertorico.com/fix-a-chef",
    provider: { "@type": "TravelAgency", name: "Fix a Trip Puerto Rico", telephone: "+1-787-488-0202" },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Fix a Chef | Private Chef Service Puerto Rico"
        description="Enjoy a high-end personalized culinary experience with a private chef, created for your budget. All in the tranquility, privacy and comfort of your home!"
        canonicalPath="/fix-a-chef"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-28 sm:py-36 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/09/istockphoto-1338854758-612x612-1.jpg?fit=1024%2C1024&ssl=1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
          <div className="container relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-6">
              <UtensilsCrossed className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white/90">{t("chef.badge")}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display tracking-tight mb-4">
              FIX A CHEF
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-4">
              {t("chef.subtitle")}
            </p>
            <p className="text-white font-medium text-lg sm:text-xl max-w-3xl mx-auto mb-8">
              {t("chef.tagline")}
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 sm:py-24">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-4 text-center">
              {t("chef.packages")}
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              {t("chef.packagesdesc")}
            </p>
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
              {chefServices.map((service) => (
                <div key={service.name} className="text-center group">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mx-auto mb-5 shadow-card group-hover:shadow-elevated transition-all duration-500">
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-16 sm:py-24 bg-secondary/50">
          <div className="container max-w-4xl">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <img
                  src="https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/09/2-1.jpg?fit=704%2C750&ssl=1"
                  alt="Private chef cooking"
                  className="rounded-2xl shadow-elevated w-full"
                  loading="lazy"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-foreground">{t("chef.step1title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("chef.step1desc")}</p>
                <h3 className="text-xl font-bold text-foreground">{t("chef.step2title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("chef.step2desc")}</p>
                <h3 className="text-xl font-bold text-foreground">{t("chef.step3title")}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{t("chef.step3desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <div className="container text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-4">{t("chef.cta")}</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">{t("chef.ctadesc")}</p>
            <Button onClick={handleInquiry} className="rounded-xl px-8 h-12 font-semibold text-base bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2">
              <MessageCircle className="h-5 w-5" />
              {t("chef.chatbook")}
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default FixAChef;
