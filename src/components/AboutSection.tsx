import { Compass, BookOpen, Phone, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">About Us</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display leading-[1.1] tracking-tight">
                {t("about.title")}
              </h2>
            </div>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {t("about.subtitle")}
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-5 rounded-2xl liquid-glass space-y-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-soft">
                  <Compass className="h-5 w-5 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground text-sm sm:text-[15px]">{t("about.experts")}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {t("about.experts.desc")}
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl liquid-glass space-y-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center shadow-soft">
                  <BookOpen className="h-5 w-5 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-foreground text-sm sm:text-[15px]">{t("about.guidelines")}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {t("about.guidelines.desc")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl liquid-glass-subtle">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{t("about.callus")}</p>
                <a href="tel:+17874880202" className="font-bold text-foreground text-lg hover:text-primary transition-colors">+1 787 488 0202</a>
              </div>
            </div>

            <Link to="/tours">
              <Button className="rounded-xl px-7 py-3 h-12 font-semibold text-sm bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity shadow-soft gap-2 group">
                {t("about.explore")}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Link>
          </div>

          <div className="relative hidden sm:block">
            <div className="w-full max-w-md mx-auto">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-primary-glow/10 rounded-full blur-3xl" />
                <img
                  src="https://fixatrippuertorico.com/wp-content/uploads/2026/01/a.webp"
                  alt="Puerto Rico flag"
                  className="relative w-72 h-72 sm:w-80 sm:h-80 object-cover rounded-[2rem] mx-auto shadow-elevated"
                />
                <img
                  src="https://fixatrippuertorico.com/wp-content/uploads/2026/01/BIOLUM.webp"
                  alt="Bioluminescent bay"
                  className="absolute -bottom-6 -left-4 w-36 h-36 sm:w-44 sm:h-44 object-cover rounded-2xl shadow-card border-4 border-background animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
