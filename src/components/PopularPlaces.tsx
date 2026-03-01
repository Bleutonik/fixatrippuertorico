import { Link } from "react-router-dom";
import { popularPlaces } from "@/data/tours";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const PopularPlaces = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display mb-10 text-center">
          Popular Places
        </h2>

        <div className="px-12">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {popularPlaces.map((place) => (
                <CarouselItem key={place.slug} className="pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5">
                  <Link
                    to={`/tours?location=${place.slug}`}
                    className="group block"
                  >
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                      <img
                        src={place.image}
                        alt={place.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-lg">{place.name}</h3>
                        <p className="text-white/70 text-sm">{place.tourCount} Tour{place.tourCount !== 1 ? "s" : ""}</p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PopularPlaces;
