import { Link } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import { useTours } from "@/hooks/useTours";
import { useLanguage } from "@/contexts/LanguageContext";
import FadeIn from "@/components/motion/FadeIn";
import ParallaxImage from "@/components/motion/ParallaxImage";

const FeaturedTour = () => {
  const { t } = useLanguage();
  const { data: tours = [] } = useTours();
  const tour = tours.find((t) => t.featured);
  if (!tour) return null;

  return (
    <section className="py-0 bg-foreground text-background relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
        {/* Image Side with Parallax */}
        <div className="relative">
          <div className="absolute inset-0">
            <ParallaxImage
              src="https://fixatrippuertorico.com/wp-content/uploads/2026/01/YUNQUE-CARTEL.png"
              alt={tour.name}
              className="h-full"
              speed={-30}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-foreground/20 lg:to-foreground hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground to-transparent lg:hidden" />
          </div>

          <div className="absolute top-6 left-6 sm:top-8 sm:left-8 z-10">
            <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-[11px] font-bold tracking-[0.15em] uppercase">
              Featured
            </span>
          </div>
        </div>

        {/* Content Side */}
        <div className="relative flex items-center p-8 sm:p-12 lg:p-20">
          <div className="max-w-lg space-y-8">
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm text-background/50">({tour.rating_count} {t("featured.rating")})</span>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display leading-[0.95] tracking-tighter">
                Off the Beaten Path
                <span className="block text-primary">El Yunque</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.4}>
              <p className="text-background/60 leading-relaxed text-base line-clamp-3">
                {tour.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex items-center gap-8 py-4 border-y border-background/10">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-background/40 mb-1">{t("featured.price")}</p>
                  <p className="text-3xl font-bold font-display text-primary">${tour.price}</p>
                </div>
                <div className="h-10 w-px bg-background/10" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-background/40 mb-1">{t("featured.duration")}</p>
                  <p className="font-semibold text-lg">{tour.duration}</p>
                </div>
                <div className="h-10 w-px bg-background/10" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.15em] text-background/40 mb-1">{t("featured.age")}</p>
                  <p className="font-semibold text-lg">{tour.age}+</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.6}>
              <Link
                to={`/tour/${tour.slug}`}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all duration-300"
              >
                {t("featured.discover")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTour;
