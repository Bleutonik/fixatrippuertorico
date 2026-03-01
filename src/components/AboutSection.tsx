import { Compass, BookOpen, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-5 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-display leading-tight">
              {t("about.title")}
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg">
              {t("about.subtitle")}
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 pt-2 sm:pt-4">
              <div className="space-y-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Compass className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm sm:text-base">{t("about.experts")}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {t("about.experts.desc")}
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground text-sm sm:text-base">{t("about.guidelines")}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {t("about.guidelines.desc")}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">{t("about.callus")}</p>
                <a href="tel:+17874880202" className="font-bold text-foreground text-base sm:text-lg hover:text-primary transition-colors">+1 787 488 0202</a>
              </div>
            </div>

            <Link to="/tours">
              <Button className="rounded-full px-6 sm:px-8 py-3 font-semibold text-sm sm:text-base mt-2">
                {t("about.explore")}
              </Button>
            </Link>
          </div>

          <div className="relative hidden sm:block">
            <div className="w-full max-w-md mx-auto">
              <div className="relative">
                <img
                  src="https://fixatrippuertorico.com/wp-content/uploads/2026/01/a.webp"
                  alt="Puerto Rico flag"
                  className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full mx-auto shadow-2xl"
                />
                <img
                  src="https://fixatrippuertorico.com/wp-content/uploads/2026/01/BIOLUM.webp"
                  alt="Bioluminescent bay"
                  className="absolute -bottom-6 -left-6 w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-2xl shadow-xl border-4 border-background"
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
