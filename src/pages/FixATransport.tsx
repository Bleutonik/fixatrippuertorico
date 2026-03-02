import { Car, MessageCircle, Phone } from "lucide-react";
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
        <section className="relative py-28 sm:py-36 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/images/transport-hero.jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          <div className="container relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ff4c00] font-display tracking-tight mb-4">
              FIX A TRANSPORT
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-24">
          <div className="container max-w-4xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-display mb-8 text-center">
              Start Your Trips With The Security Of Fix A Transport.
            </h2>

            <div className="space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed text-center">
              <p className="font-semibold">
                Dock into the San Juan Cruise Piers, or simply need transportation services on the island, your friendly driver will meet you and drive you on this shared service directly to your San Juan destination.
              </p>
              <p className="font-semibold">
                Whether you're traveling individually, with a partner or in a group, your ground transport needs will be covered by our transport services.
              </p>
              <p className="font-semibold">
                Avoid the confusion of taxis or public transport. Approximately 24-48 hours prior to your service, you will be required to reconfirm exact pick-up time and place in order to be advised if there are any adjustments in time in order to accommodate all passengers during this shared service.
              </p>
            </div>

            <div className="mt-12">
              <img
                src="https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/09/6.jpg?fit=1024%2C1024&ssl=1"
                alt="Fix a Transport service"
                className="w-full rounded-2xl shadow-elevated"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-secondary/50">
          <div className="container text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-4">Booking your Fix a Transport now!</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Contact us via WhatsApp or phone to book your transportation service.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button onClick={handleInquiry} className="rounded-xl px-8 h-12 font-semibold text-base bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2">
                <MessageCircle className="h-5 w-5" />
                Chat With Us
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
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default FixATransport;
