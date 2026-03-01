import { Link } from "react-router-dom";
import { popularPlaces } from "@/data/tours";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const PopularPlaces = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Destinations</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display tracking-tight">
            {t("popular.title")}
          </h2>
        </div>

        <div className="px-0 sm:px-14">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-3 sm:-ml-5">
              {popularPlaces.map((place) => (
                <CarouselItem key={place.slug} className="pl-3 sm:pl-5 basis-[45%] sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <Link
                    to={`/tours?location=${place.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 active:scale-[0.97]">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                      <div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5">
                        <h3 className="text-white font-bold text-base sm:text-lg tracking-tight">{place.name}</h3>
                        <p className="text-white/60 text-xs sm:text-sm mt-0.5">
                          {place.tourCount} {place.tourCount !== 1 ? t("popular.tours") : t("popular.tour")}
                        </p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex -left-4 shadow-card" />
            <CarouselNext className="hidden sm:flex -right-4 shadow-card" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PopularPlaces;
