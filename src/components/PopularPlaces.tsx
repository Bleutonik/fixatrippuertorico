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
    <section className="py-12 sm:py-20 bg-background">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-display mb-8 sm:mb-10 text-center">
          {t("popular.title")}
        </h2>

        <div className="px-0 sm:px-12">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-3 sm:-ml-4">
              {popularPlaces.map((place) => (
                <CarouselItem key={place.slug} className="pl-3 sm:pl-4 basis-2/5 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <Link
                    to={`/tours?location=${place.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 active:scale-95">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                        <h3 className="text-white font-bold text-sm sm:text-lg">{place.name}</h3>
                        <p className="text-white/70 text-xs sm:text-sm">
                          {place.tourCount} {place.tourCount !== 1 ? t("popular.tours") : t("popular.tour")}
                        </p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PopularPlaces;
