import { MessageCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import SEOCrossLinks from "@/components/SEOCrossLinks";
import ServiceHero from "@/components/ServiceHero";
import FadeIn from "@/components/motion/FadeIn";
import ParallaxImage from "@/components/motion/ParallaxImage";
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
    description: "Fix a Wellness by Fix a Trip Puerto Rico offers a comprehensive suite of luxury wellness and spa services.",
    url: "https://fixatrippuertorico.com/fix-a-wellness",
    provider: { "@type": "TravelAgency", name: "Fix a Trip Puerto Rico", telephone: "+1-787-488-0202" },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Fix a Wellness | Wellness & Spa Services Puerto Rico"
        description="Luxury wellness and spa services in Puerto Rico delivered to your door. Swedish massage, deep tissue, hot stone therapy, yoga, sound healing, reiki, acupuncture, and more."
        canonicalPath="/fix-a-wellness"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <ServiceHero
          title="Fix A Wellness"
          subtitle="Enjoy a high-end personalized relax experience — all the relaxation body & soul"
          eyebrow="Wellness & Spa"
          backgroundImage="/images/wellness-hero.jpg"
        />

        {/* Intro */}
        <section className="py-20 sm:py-28">
          <div className="container text-center max-w-3xl">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4 justify-center">
                <div className="h-px w-10 bg-primary" />
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Body & Soul</span>
                <div className="h-px w-10 bg-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display tracking-tighter leading-[0.95] mb-6">
                The New Fix A Trip Service
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Enjoy a high-end personalized relax experience. All the relaxation Body-Soul delivered directly to your accommodation.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Services - Editorial Alternating */}
        <section className="py-0 pb-20 sm:pb-28">
          <div className="container max-w-6xl">
            <div className="space-y-24 sm:space-y-32">
              {wellnessServices.map((service, index) => (
                <FadeIn key={service.name} delay={0.05}>
                  <div className={`grid md:grid-cols-2 gap-10 lg:gap-20 items-center`}>
                    <div className={index % 2 === 1 ? "md:order-2" : ""}>
                      <ParallaxImage
                        src={service.image}
                        alt={service.name}
                        className="rounded-3xl aspect-square"
                        speed={-20}
                      />
                    </div>
                    <div className={`space-y-5 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <span className="text-5xl font-display font-bold text-primary/15 tracking-tighter">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground font-display tracking-tight">{service.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
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
                <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tighter mb-4">Book Your Wellness</h2>
                <p className="text-background/60 mb-8">
                  Contact us via WhatsApp to book your wellness experience. We'll help you choose the perfect service.
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
