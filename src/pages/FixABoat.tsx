import { MapPin, Clock, MessageCircle, Anchor } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { boats } from "@/data/services";
import { useLanguage } from "@/contexts/LanguageContext";

const FixABoat = () => {
  const { t } = useLanguage();

  const handleInquiry = (boatName: string) => {
    const msg = encodeURIComponent(`Hello! I'm interested in booking the ${boatName}. Could you provide pricing and availability? Thank you!`);
    window.open(`https://wa.me/17874880202?text=${msg}`, "_blank");
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fix a Boat - Private Boat Charters Puerto Rico",
    description: "Choose from our fleet of private boats, yachts, and catamarans for your Puerto Rico adventure.",
    url: "https://fixatrippuertorico.com/fix-a-boat",
    provider: {
      "@type": "TravelAgency",
      name: "Fix a Trip Puerto Rico",
      telephone: "+1-787-488-0202",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Fix a Boat | Private Boat Charters Puerto Rico"
        description="Choose your perfect boat for a private charter in Puerto Rico. Catamarans, yachts, and powerboats available in Fajardo. Book with Fix a Trip Puerto Rico."
        canonicalPath="/fix-a-boat"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-28 sm:py-36 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(https://i0.wp.com/fixatrippr.com/wp-content/uploads/2025/10/PORTADA-.jpg?fit=600%2C400&ssl=1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
          <div className="container relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-6">
              <Anchor className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white/90">{t("boat.badge")}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display tracking-tight mb-4">
              {t("boat.title")}
            </h1>
            <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto mb-8">
              {t("boat.subtitle")}
            </p>
            <Button
              onClick={() => {
                const msg = encodeURIComponent("Hello! I'm interested in booking a private boat charter. Can you help me choose the right boat?");
                window.open(`https://wa.me/17874880202?text=${msg}`, "_blank");
              }}
              className="rounded-xl px-8 h-12 font-semibold text-base bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              {t("boat.chat")}
            </Button>
          </div>
        </section>

        {/* Boat Grid */}
        <section className="py-16 sm:py-24">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-10 text-center">
              {t("boat.choose")}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {boats.map((boat) => (
                <div
                  key={boat.slug}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1.5 border border-border/50 cursor-pointer"
                  onClick={() => handleInquiry(boat.name)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={boat.image}
                      alt={boat.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 sm:p-5 space-y-2">
                    <h3 className="font-semibold text-foreground text-[13px] sm:text-[15px] leading-snug group-hover:text-primary transition-colors">
                      {boat.name}
                    </h3>
                    <div className="flex items-center gap-3 text-muted-foreground text-xs sm:text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {boat.location}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {boat.duration}
                      </span>
                    </div>
                    <div className="pt-2 border-t border-border/50">
                      <p className="text-sm font-semibold text-primary">{t("boat.inquire")}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default FixABoat;
