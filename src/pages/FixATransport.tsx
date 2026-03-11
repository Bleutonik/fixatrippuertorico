import { MessageCircle, Phone, ArrowRight, Shield, Clock, Car } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import SEOCrossLinks from "@/components/SEOCrossLinks";
import ServiceHero from "@/components/ServiceHero";
import FadeIn from "@/components/motion/FadeIn";
import ParallaxImage from "@/components/motion/ParallaxImage";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import { useLanguage } from "@/contexts/LanguageContext";

const FixATransport = () => {
  const { t } = useLanguage();

  const handleInquiry = () => {
    const msg = encodeURIComponent("Hello! I'm interested in Fix a Transport services. Could you provide more information and pricing? Thank you!");
    window.open(`https://wa.me/17874880202?text=${msg}`, "_blank");
  };

  const features = [
    { icon: Shield, title: "Licensed & Insured", desc: "Professional bilingual drivers with full insurance coverage" },
    { icon: Clock, title: "24/7 Availability", desc: "Flexible scheduling for airport transfers and island tours" },
    { icon: Car, title: "Premium Fleet", desc: "Mercedes-Benz sedans, luxury SUVs, and spacious vans" },
  ];

  const stats = [
    { value: "24/7", label: "Available" },
    { value: "20+", label: "Passengers" },
    { value: "5★", label: "Service" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Fix a Transport - Luxury Transportation Services Puerto Rico",
    description: "Fix a Transport by Fix a Trip Puerto Rico provides premium luxury ground transportation services across the entire island.",
    url: "https://fixatrippuertorico.com/fix-a-transport",
    provider: { "@type": "TravelAgency", name: "Fix a Trip Puerto Rico", telephone: "+1-787-488-0202" },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Fix a Transport | Luxury Transportation Puerto Rico"
        description="Premium luxury transportation in Puerto Rico. Airport transfers from SJU, cruise port pickups, private chauffeur service, executive SUVs and Mercedes-Benz sedans."
        canonicalPath="/fix-a-transport"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <ServiceHero
          title="Fix A Transport"
          subtitle="Start your trips with the security and luxury of Fix a Transport"
          eyebrow="VIP Ground Transportation"
          backgroundImage="/images/luxury-interior-hero.jpg"
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

        {/* Content */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="space-y-8">
                <FadeIn>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px w-10 bg-primary" />
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Our Service</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display tracking-tighter leading-[0.95]">
                    Premium Ground Transportation
                  </h2>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Whether you're traveling individually, with a partner or in a group, your ground transport needs will be covered by our transport services. Avoid the confusion of taxis or public transport.
                  </p>
                </FadeIn>

                <div className="space-y-5 pt-2">
                  {features.map((feature, i) => (
                    <FadeIn key={i} delay={0.15 + i * 0.1}>
                      <div className="flex gap-4 group">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <feature.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-sm mb-1">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>

              <FadeIn direction="right" delay={0.2}>
                <ParallaxImage
                  src="https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=800&q=80&auto=format&fit=crop"
                  alt="Fix a Transport service"
                  className="rounded-3xl aspect-[4/5]"
                  speed={-30}
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 sm:py-28 bg-foreground text-background">
          <div className="container">
            <FadeIn>
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tighter mb-4">Book Your Transport</h2>
                <p className="text-background/60 mb-8">
                  Contact us via WhatsApp or phone to book your transportation service.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleInquiry}
                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm transition-all duration-300"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat With Us
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <a
                    href="tel:+17874880202"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-background/20 text-background font-semibold text-sm hover:bg-background/10 transition-all duration-300"
                  >
                    <Phone className="h-4 w-4" />
                    +1 787 488 0202
                  </a>
                </div>
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

export default FixATransport;
