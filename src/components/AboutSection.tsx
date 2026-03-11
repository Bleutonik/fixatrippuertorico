import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import FadeIn from "@/components/motion/FadeIn";
import ParallaxImage from "@/components/motion/ParallaxImage";

const AboutSection = () => {
  const { t } = useLanguage();

  const features = [
    { number: "01", title: t("about.experts"), desc: t("about.experts.desc") },
    { number: "02", title: t("about.guidelines"), desc: t("about.guidelines.desc") },
  ];

  return (
    <section className="py-24 sm:py-36 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 space-y-8">
            <FadeIn>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-primary" />
                <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">About Us</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-display leading-[0.95] tracking-tighter">
                {t("about.title")}
              </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-lg">
                {t("about.subtitle")}
              </p>
            </FadeIn>

            <div className="space-y-6 pt-4">
              {features.map((feature, i) => (
                <FadeIn key={i} delay={0.15 + i * 0.1}>
                  <div className="flex gap-5 group">
                    <span className="text-4xl font-display font-bold text-primary/20 group-hover:text-primary/40 transition-colors tracking-tighter">
                      {feature.number}
                    </span>
                    <div className="pt-1.5">
                      <h4 className="font-semibold text-foreground text-base mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.35}>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <Link
                  to="/tours"
                  className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-foreground text-background font-semibold text-sm hover:bg-foreground/90 transition-all duration-300"
                >
                  {t("about.explore")}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <a
                  href="tel:+17874880202"
                  className="text-foreground font-bold text-lg hover:text-primary transition-colors font-display tracking-tight"
                >
                  +1 787 488 0202
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Image Grid with Parallax */}
          <FadeIn direction="right" delay={0.2} className="lg:col-span-6 hidden sm:block">
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <ParallaxImage
                    src="https://fixatrippuertorico.com/wp-content/uploads/2026/01/a.webp"
                    alt="Puerto Rico experience"
                    className="rounded-3xl aspect-[3/4]"
                    speed={-30}
                  />
                </div>
                <div className="space-y-4 pt-12">
                  <ParallaxImage
                    src="https://fixatrippuertorico.com/wp-content/uploads/2026/01/BIOLUM.webp"
                    alt="Bioluminescent bay"
                    className="rounded-3xl aspect-[3/4]"
                    speed={-50}
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-primary/10 blur-3xl" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
