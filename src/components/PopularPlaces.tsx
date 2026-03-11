import { Link } from "react-router-dom";
import { popularPlaces } from "@/data/tours";
import { useLanguage } from "@/contexts/LanguageContext";
import FadeIn from "@/components/motion/FadeIn";
import { ArrowUpRight } from "lucide-react";

const PopularPlaces = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-36 bg-background">
      <div className="container">
        <FadeIn className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Destinations</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-display tracking-tighter leading-[0.95]">
            {t("popular.title")}
          </h2>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {popularPlaces.map((place, i) => (
            <FadeIn key={place.slug} delay={i * 0.08}>
              <Link
                to={`/tours?location=${place.slug}`}
                className="group block relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4]"
              >
                <img
                  src={place.image}
                  alt={place.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent group-hover:from-black/90 transition-all duration-500" />

                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <h3 className="text-white font-bold text-base sm:text-xl font-display tracking-tight">{place.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-white/50 text-xs sm:text-sm">
                      {place.tourCount} {place.tourCount !== 1 ? t("popular.tours") : t("popular.tour")}
                    </p>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <ArrowUpRight className="h-3.5 w-3.5 text-white" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPlaces;
