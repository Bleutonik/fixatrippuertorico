import { MessageCircle } from "lucide-react";
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
            style={{ backgroundImage: "url(/images/chef-hero.jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          <div className="container relative z-10 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ff4c00] font-display tracking-tight mb-4">
              FIX CHEF
            </h1>
          </div>
        </section>

        {/* The New Fix a Trip Service */}
        <section className="py-16 sm:py-24">
          <div className="container text-center max-w-4xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display mb-8">
              The New Fix A Trip Service
            </h2>
            <div className="flex justify-center mb-8">
              <img
                src="https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/12/Recurso-8%403x.png?fit=91%2C86&ssl=1"
                alt="Fix a Trip logo icon"
                className="w-20 h-20"
              />
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground font-semibold leading-relaxed max-w-3xl mx-auto">
              Enjoy a high-end personalized culinary experience, with a private chef, created for your budget. All in the tranquility, privacy and comfort of your home!
            </p>
          </div>
        </section>

        {/* Chef image */}
        <section className="pb-8">
          <div className="container max-w-4xl">
            <img
              src="https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/09/istockphoto-1338854758-612x612-1.jpg?fit=1024%2C1024&ssl=1"
              alt="Private chef preparing food"
              className="w-full rounded-2xl shadow-elevated"
              loading="lazy"
            />
          </div>
        </section>

        {/* Packages */}
        <section className="py-16 sm:py-24">
          <div className="container">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-4 text-center">
              Fix A Chef Private Chef Packages
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Custom menus designed to fit your event and budget. Discounts available for multiple meals/days of service – just ask us!
            </p>
            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
              {chefServices.map((service) => (
                <div key={service.name} className="text-center group">
                  <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mx-auto mb-5 liquid-glass transition-all duration-500">
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{service.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works - Step 1 */}
        <section className="py-16 sm:py-24 bg-secondary/50">
          <div className="container max-w-5xl">
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
              <div>
                <img
                  src="https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/09/2-1.jpg?fit=704%2C750&ssl=1"
                  alt="Private chef cooking"
                  className="rounded-2xl shadow-elevated w-full"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">We will cook excellent dishes from your home kitchen.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  <strong>Before</strong> your private dinner, your personal chef will arrive and begin to organize and prepare the agreed menu. You will be able to <strong>watch, learn and enjoy</strong> new recipes from your <strong>professional chef</strong> while you cook your dishes in your home kitchen!
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-16">
              <div className="md:order-2">
                <img
                  src="https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/09/1-1.jpg?fit=704%2C750&ssl=1"
                  alt="Chef serving"
                  className="rounded-2xl shadow-elevated w-full"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4 md:order-1">
                <h3 className="text-xl font-bold text-foreground">We will be preparing and serving each agreed dish</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The chef and his team will take care of everything. Table service, order, cleanliness and they will guide you through all the details involved in each dish so you can have a unique and unforgettable private dining experience in the comfort of your home.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With our discreet and professional service, we guarantee that you and your guests can enjoy the evening with nothing to worry about!
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <img
                  src="https://i0.wp.com/fixatrippr.com/wp-content/uploads/2023/09/3.jpg?fit=704%2C750&ssl=1"
                  alt="Clean kitchen"
                  className="rounded-2xl shadow-elevated w-full"
                  loading="lazy"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground">Your private chef will organize everything and the best, will leave your kitchen impeccable!</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tidiness and cleanliness are essential parts of impeccable service! Before departing, the chef and his team will ensure that all equipment and crockery and setup involved in the service are left as you found them.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  It only remains to relax and enjoy the night calmly and exciting at the same time, knowing that the chef took care of everything.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <div className="container text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-4">Fix a Chef Inquiry</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Contact us via WhatsApp to book your private chef experience. We'll help you design the perfect menu for your event.
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

export default FixAChef;
