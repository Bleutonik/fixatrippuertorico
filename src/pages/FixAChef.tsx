import { MessageCircle, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import SEOCrossLinks from "@/components/SEOCrossLinks";
import ServiceHero from "@/components/ServiceHero";
import FadeIn from "@/components/motion/FadeIn";
import ParallaxImage from "@/components/motion/ParallaxImage";
import { chefServices } from "@/data/services";
import { useLanguage } from "@/contexts/LanguageContext";

const FixAChef = () => {
  const { t } = useLanguage();

  const handleInquiry = () => {
    const msg = encodeURIComponent("Hello! I'm interested in Fix a Chef private dining service. Could you provide more information and pricing? Thank you!");
    window.open(`https://wa.me/17874880202?text=${msg}`, "_blank");
  };

  const steps = [
    {
      number: "01",
      title: "We will cook excellent dishes from your home kitchen.",
      desc: "Before your private dinner, your personal chef will arrive and begin to organize and prepare the agreed menu. You will be able to watch, learn and enjoy new recipes from your professional chef while you cook your dishes in your home kitchen!",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80&auto=format&fit=crop",
    },
    {
      number: "02",
      title: "We will be preparing and serving each agreed dish",
      desc: "The chef and his team will take care of everything. Table service, order, cleanliness and they will guide you through all the details involved in each dish so you can have a unique and unforgettable private dining experience in the comfort of your home.",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80&auto=format&fit=crop",
    },
    {
      number: "03",
      title: "Your private chef will leave your kitchen impeccable!",
      desc: "Tidiness and cleanliness are essential parts of impeccable service! Before departing, the chef and his team will ensure that all equipment and crockery are left as you found them. It only remains to relax and enjoy the night.",
      image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=800&q=80&auto=format&fit=crop",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fix a Chef - Private Chef Service Puerto Rico",
    description: "Fix a Chef by Fix a Trip Puerto Rico delivers an extraordinary private dining experience directly to your vacation rental.",
    url: "https://fixatrippuertorico.com/fix-a-chef",
    provider: { "@type": "TravelAgency", name: "Fix a Trip Puerto Rico", telephone: "+1-787-488-0202" },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Fix a Chef | Private Chef Service Puerto Rico"
        description="Book a private chef in Puerto Rico for a luxury dining experience at your vacation rental. Custom multi-course menus, locally sourced ingredients, professional table service."
        canonicalPath="/fix-a-chef"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <ServiceHero
          title="Fix A Chef"
          subtitle="Enjoy a high-end personalized culinary experience with a private chef, created for your budget"
          eyebrow="Private Dining"
          backgroundImage="https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=1920&q=80&auto=format&fit=crop"
        />

        {/* Packages */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <FadeIn className="mb-14 sm:mb-20 text-center">
              <div className="flex items-center gap-3 mb-4 justify-center">
                <div className="h-px w-10 bg-primary" />
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Packages</span>
                <div className="h-px w-10 bg-primary" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display tracking-tighter leading-[0.95]">
                Private Chef Packages
              </h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                Custom menus designed to fit your event and budget. Discounts available for multiple meals/days of service.
              </p>
            </FadeIn>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
              {chefServices.map((service, i) => (
                <FadeIn key={service.name} delay={i * 0.1}>
                  <div className="group text-center">
                    <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden mx-auto mb-6 border-2 border-border/50 group-hover:border-primary/30 transition-all duration-500">
                      <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 font-display">{service.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">{service.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* How it works - Editorial Steps */}
        <section className="py-20 sm:py-28 bg-foreground text-background">
          <div className="container max-w-6xl">
            <FadeIn className="mb-16 sm:mb-20">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-primary" />
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">How It Works</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display tracking-tighter leading-[0.95]">
                The Experience
              </h2>
            </FadeIn>

            <div className="space-y-20 sm:space-y-28">
              {steps.map((step, index) => (
                <FadeIn key={step.number} delay={0.1}>
                  <div className={`grid md:grid-cols-2 gap-10 lg:gap-20 items-center ${index % 2 === 1 ? "" : ""}`}>
                    <div className={index % 2 === 1 ? "md:order-2" : ""}>
                      <ParallaxImage
                        src={step.image}
                        alt={step.title}
                        className="rounded-3xl aspect-[4/5]"
                        speed={-25}
                      />
                    </div>
                    <div className={`space-y-5 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <span className="text-6xl font-display font-bold text-primary/20 tracking-tighter">{step.number}</span>
                      <h3 className="text-2xl sm:text-3xl font-bold font-display tracking-tight leading-tight">{step.title}</h3>
                      <p className="text-background/60 leading-relaxed text-base">{step.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display tracking-tighter mb-4">Fix a Chef Inquiry</h2>
                <p className="text-muted-foreground mb-8">
                  Contact us via WhatsApp to book your private chef experience. We'll help you design the perfect menu.
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

export default FixAChef;
