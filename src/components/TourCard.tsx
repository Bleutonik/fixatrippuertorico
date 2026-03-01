import { Link } from "react-router-dom";
import { Star, Clock, MapPin } from "lucide-react";
import { Tour } from "@/data/tours";

interface TourCardProps {
  tour: Tour;
}

const TourCard = ({ tour }: TourCardProps) => {
  return (
    <Link
      to={`/tour/${tour.slug}`}
      className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2.5 py-1 rounded-full">
          <Star className="h-3.5 w-3.5 fill-primary text-primary" />
          <span className="text-xs font-bold text-foreground">{tour.rating}</span>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-foreground text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {tour.name}
        </h3>
        <div className="flex items-center gap-1 text-muted-foreground">
          <span className="text-xs">{tour.age} Ages</span>
          <span className="text-xs">•</span>
          <Clock className="h-3 w-3" />
          <span className="text-xs">{tour.duration}</span>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <MapPin className="h-3 w-3" />
          <span className="text-xs">{tour.location}</span>
        </div>
        <p className="text-primary font-bold text-lg">${tour.price}</p>
      </div>
    </Link>
  );
};

export default TourCard;
