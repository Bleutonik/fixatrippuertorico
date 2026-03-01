import { MapPin, Clock, MessageCircle, Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { boats } from "@/data/services";
import { useLanguage } from "@/contexts/LanguageContext";

const FixABoat = () => {
  const { t } = useLanguage();

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
            style={{ backgroundImage: "url(/images/boat-hero.jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          <div className="container relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display tracking-tight mb-4">
              {t("boat.heroTitle")}
            </h1>
          </div>
        </section>

        {/* Boat Grid */}
        <section className="py-16 sm:py-24">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-10">
              {t("boat.choose")}
            </h2>
            <div className="flex justify-end mb-6">
              <Button
                onClick={() => {
                  const msg = encodeURIComponent("Hello! I'm interested in booking a private boat charter. Can you help me choose the right boat?");
                  window.open(`https://wa.me/17874880202?text=${msg}`, "_blank");
                }}
                className="rounded-xl px-6 h-10 font-semibold text-sm bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                {t("boat.chat")}
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {boats.map((boat) => (
                <Link
                  key={boat.slug}
                  to={`/fix-a-boat/${boat.slug}`}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1.5 border border-border/50"
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
                    <div className="flex items-center gap-1 text-muted-foreground text-xs">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{boat.location}</span>
                    </div>
                    <h3 className="font-semibold text-foreground text-[15px] leading-snug group-hover:text-primary transition-colors">
                      {boat.name}
                    </h3>
                    <div className="flex items-center gap-1 text-muted-foreground text-xs pt-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{boat.duration}</span>
                    </div>
                  </div>
                </Link>
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
