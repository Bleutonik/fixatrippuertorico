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
    name: "Fix a Wellness - Premium Wellness & Spa Services Puerto Rico",
    description: "Fix a Wellness by Fix a Trip Puerto Rico offers a comprehensive suite of luxury wellness and spa services designed to rejuvenate your body, mind, and spirit during your stay on the island. Our certified wellness practitioners bring premium spa experiences directly to your vacation rental, hotel, resort, or private villa, eliminating the need to travel to a spa facility. Services include Swedish massage, deep tissue massage, hot stone therapy, aromatherapy massage, couples massage, prenatal massage, sports recovery massage, reflexology, and Thai massage. Beyond traditional massage therapy, Fix a Wellness offers transformative holistic experiences including private yoga sessions on the beach or at your accommodation, guided meditation, breathwork workshops, sound healing with crystal singing bowls and Tibetan instruments, reiki energy healing, acupuncture, cupping therapy, and personalized wellness coaching. Each session is tailored to your individual needs, preferences, and health goals. Our therapists use premium organic oils, locally sourced botanical products, and professional-grade equipment to ensure a five-star spa experience in complete privacy and comfort. Fix a Wellness also provides group wellness packages perfect for bachelorette parties, corporate wellness retreats, family vacation relaxation days, and couples romantic getaway packages. Multi-session discounts and customized wellness itineraries are available for extended stays. All practitioners are licensed, insured, and extensively trained in their specialties. Experience the healing power of the Caribbean combined with world-class wellness expertise. Contact Fix a Wellness via WhatsApp to schedule your personalized wellness experience in Puerto Rico today.",
    url: "https://fixatrippuertorico.com/fix-a-wellness",
    provider: { "@type": "TravelAgency", name: "Fix a Trip Puerto Rico", telephone: "+1-787-488-0202" },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Fix a Wellness | Wellness & Spa Services Puerto Rico"
        description="Luxury wellness and spa services in Puerto Rico delivered to your door. Swedish massage, deep tissue, hot stone therapy, yoga, sound healing, reiki, acupuncture, and more. Certified practitioners, organic products, couples and group packages. Book with Fix a Trip Puerto Rico."
        canonicalPath="/fix-a-wellness"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-28 sm:py-36 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/wellness-hero.jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          <div className="container relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ff4c00] font-display tracking-tight mb-4">
              FIX A WELLNESS
            </h1>
          </div>
        </section>

        {/* The New Fix a Trip Service */}
        <section className="py-16 sm:py-24">
          <div className="container text-center max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display mb-8">
              The New Fix A Trip Service
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              Enjoy a high-end personalized relax experience.
            </p>
            <p className="text-lg text-muted-foreground">
              All the relaxation Body-Soul in Fix a Wellness
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-24 bg-secondary/50">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-10 text-center">
              Our Services
            </h2>
            <div className="space-y-16">
              {wellnessServices.map((service, index) => (
                <div
                  key={service.name}
                  className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:order-2" : ""}>
                    <div className="w-full max-w-md mx-auto">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full rounded-2xl shadow-card"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? "md:order-1" : ""}>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{service.name}</h3>
                    <p className="text-muted-foreground leading-relaxed font-medium">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <div className="container text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-4">Booking Fix a Wellness Now!!</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contact us via WhatsApp to book your wellness experience. We'll help you choose the perfect service.
            </p>
            <Button onClick={handleInquiry} className="rounded-xl px-8 h-12 font-semibold text-base bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2">
              <MessageCircle className="h-5 w-5" />
              Chat With Us
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
