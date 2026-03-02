import { Link } from "react-router-dom";
import { Star, Clock, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tours } from "@/data/tours";
import { useLanguage } from "@/contexts/LanguageContext";
import FadeIn from "@/components/motion/FadeIn";

const FeaturedTour = () => {
  const { t } = useLanguage();
  const tour = tours.find((t) => t.featured);
  if (!tour) return null;

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container">
        <FadeIn duration={0.6}>
          <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden liquid-glass-elevated">
            <div className="relative aspect-[4/3] lg:aspect-auto min-h-[280px]">
              <img
                src="https://fixatrippuertorico.com/wp-content/uploads/2026/01/YUNQUE-CARTEL.png"
                alt={tour.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-bold tracking-wide uppercase shadow-soft">
                  Featured
                </span>
              </div>
            </div>
            <div className="p-7 sm:p-10 lg:p-14 flex flex-col justify-center space-y-5 sm:space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 bg-primary/10 px-3.5 py-1.5 rounded-xl">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm font-bold text-primary">4.9</span>
                </div>
                <span className="text-xs text-muted-foreground">({tour.ratingCount} {t("featured.rating")})</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-display leading-[1.1] tracking-tight">
                Off the Beaten Path<br />El Yunque
              </h2>

              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base line-clamp-3">
                {tour.description}
              </p>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 py-2">
                <div className="p-3 rounded-xl liquid-glass-subtle">
                  <p className="text-[10px] sm:text-xs text-muted-foreground mb-1 uppercase tracking-wide">{t("featured.price")}</p>
                  <p className="text-xl sm:text-2xl font-bold gradient-text">${tour.price}</p>
                </div>
                <div className="p-3 rounded-xl liquid-glass-subtle">
                  <p className="text-[10px] sm:text-xs text-muted-foreground mb-1 uppercase tracking-wide">{t("featured.duration")}</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Clock className="h-4 w-4 text-primary" />
                    <p className="font-semibold text-foreground text-sm">{tour.duration}</p>
                  </div>
                </div>
                <div className="p-3 rounded-xl liquid-glass-subtle">
                  <p className="text-[10px] sm:text-xs text-muted-foreground mb-1 uppercase tracking-wide">{t("featured.age")}</p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Users className="h-4 w-4 text-primary" />
                    <p className="font-semibold text-foreground text-sm">{tour.age}</p>
                  </div>
                </div>
              </div>

              <Link to={`/tour/${tour.slug}`}>
                <Button className="rounded-xl px-7 h-12 font-semibold bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity shadow-soft gap-2 group">
                  {t("featured.discover")}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeaturedTour;
