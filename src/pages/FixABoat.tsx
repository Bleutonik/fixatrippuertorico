import { MapPin, Clock, MessageCircle, Users, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import SEOCrossLinks from "@/components/SEOCrossLinks";
import ServiceHero from "@/components/ServiceHero";
import FadeIn from "@/components/motion/FadeIn";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import { boats } from "@/data/services";
import { useLanguage } from "@/contexts/LanguageContext";

const FixABoat = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "13+", label: "Vessels" },
    { value: "100+", label: "Group Capacity" },
    { value: "4.9★", label: "Avg Rating" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fix a Boat - Private Boat Charters Puerto Rico",
    description: "Fix a Boat by Fix a Trip Puerto Rico offers an exclusive fleet of private boat charters, luxury catamarans, high-performance powerboats, and elegant yachts departing from Fajardo, San Juan, and other premier marinas across Puerto Rico.",
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
        description="Choose your perfect private boat charter in Puerto Rico. Luxury catamarans, yachts, and powerboats departing from Fajardo. Snorkeling, sunset cruises, island hopping to Culebra, Icacos, and Palomino."
        canonicalPath="/fix-a-boat"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <ServiceHero
          title="Fix A Boat"
          subtitle="Private charters, luxury catamarans & yachts departing from Fajardo"
          eyebrow="Private Boat Charters"
          backgroundImage="/images/boat-hero.jpg"
        />

        {/* Stats */}
        <section className="py-0 -mt-10 relative z-20">
          <div className="container">
            <FadeIn>
              <div className="flex items-center gap-8 sm:gap-14 bg-card/80 backdrop-blur-xl rounded-2xl border border-border/50 px-8 py-6 max-w-fit">
                {stats.map((stat, i) => (
                  <div key={i} className="relative">
                    {i > 0 && (
                      <div className="absolute -left-4 sm:-left-7 top-1/2 -translate-y-1/2 h-8 w-px bg-border" />
                    )}
                    <AnimatedCounter value={stat.value} className="text-2xl sm:text-3xl font-bold text-foreground font-display tracking-tight block" />
                    <p className="text-[11px] sm:text-xs text-muted-foreground mt-1 tracking-wide uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Boat Grid */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <FadeIn className="mb-14">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-10 bg-primary" />
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Our Fleet</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display tracking-tighter leading-[0.95]">
                    {t("boat.choose")}
                  </h2>
                </div>
                <button
                  onClick={() => {
                    const msg = encodeURIComponent("Hello! I'm interested in booking a private boat charter. Can you help me choose the right boat?");
                    window.open(`https://wa.me/17874880202?text=${msg}`, "_blank");
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm transition-all duration-300"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t("boat.chat")}
                </button>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {boats.map((boat, i) => (
                <FadeIn key={boat.slug} delay={i * 0.05}>
                  <Link
                    to={`/fix-a-boat/${boat.slug}`}
                    className="group block rounded-2xl sm:rounded-3xl overflow-hidden bg-card border border-border/50 hover:border-primary/20 hover:shadow-elevated transition-all duration-500"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={boat.image}
                        alt={boat.name}
                        className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <ArrowUpRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <div className="p-5 space-y-2.5">
                      <h3 className="font-bold text-foreground text-base leading-snug group-hover:text-primary transition-colors font-display tracking-tight">
                        {boat.name}
                      </h3>
                      <div className="flex items-center gap-4 text-muted-foreground text-xs">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5" />
                          {boat.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {boat.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5" />
                          {boat.groupSize}
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
        <SEOCrossLinks />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default FixABoat;
