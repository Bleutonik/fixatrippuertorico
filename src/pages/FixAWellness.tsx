import { MessageCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import SEOCrossLinks from "@/components/SEOCrossLinks";
import ServiceHero from "@/components/ServiceHero";
import FadeIn from "@/components/motion/FadeIn";
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
    name: "Fix a Wellness - Premium Wellness & Spa Services Puerto Rico",
    description: "Fix a Wellness by Fix a Trip Puerto Rico offers personalized wellness experiences delivered to your accommodation.",
    url: "https://fixatrippuertorico.com/fix-a-wellness",
    provider: { "@type": "TravelAgency", name: "Fix a Trip Puerto Rico", telephone: "+1-787-488-0202" },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Fix a Wellness | Wellness & Spa Services Puerto Rico"
        description="Luxury wellness and spa services in Puerto Rico delivered to your door. Massage, yoga, sound healing, reiki, acupuncture, tarot, and more."
        canonicalPath="/fix-a-wellness"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <ServiceHero
          title="Fix A Wellness"
          subtitle="Personalized wellness experiences, wherever you stay in Puerto Rico"
          eyebrow="Wellness & Spa"
          backgroundImage="/images/wellness-hero.jpg"
        />

        {/* Intro + Services Grid - visible at first impact */}
        <section className="py-16 sm:py-20">
          <div className="container">
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <div className="h-px w-10 bg-primary" />
                  <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Body & Soul</span>
                  <div className="h-px w-10 bg-primary" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display tracking-tighter leading-[0.95] mb-4">
                  {t("wellness.services")}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Enjoy a high-end personalized wellness experience delivered directly to your accommodation. Relax body and soul with our curated services.
                </p>
              </div>
            </FadeIn>

            {/* Services Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {wellnessServices.map((service, index) => (
                <FadeIn key={service.name} delay={0.05 + index * 0.04}>
                  <div className="group relative rounded-2xl overflow-hidden bg-card border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-elevated">
                    <div className="aspect-[4/5] overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="font-semibold text-white text-sm sm:text-base mb-1 drop-shadow-lg">{service.name}</h3>
                      <p className="text-white/70 text-xs line-clamp-2 leading-relaxed hidden sm:block">{service.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 bg-foreground text-background">
          <div className="container">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tighter mb-4">Book Your Wellness Experience</h2>
                <p className="text-background/60 mb-8">
                  Tell us about the service you'd like and we'll arrange a personalized wellness experience for you.
                </p>
                <button
                  onClick={handleInquiry}
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm transition-all duration-300"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat With Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </FadeIn>
          </div>
        </section>
        <SEOCrossLinks />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default FixAWellness;
