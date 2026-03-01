import { Link } from "react-router-dom";
import { Star, Clock, MapPin } from "lucide-react";
import { Tour } from "@/data/tours";
import { useLanguage } from "@/contexts/LanguageContext";

interface TourCardProps {
  tour: Tour;
}

const TourCard = ({ tour }: TourCardProps) => {
  const { t } = useLanguage();

  return (
    <Link
      to={`/tour/${tour.slug}`}
      className="group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] border border-border"
    >
      <div className="relative aspect-[3/2] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
          <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-primary text-primary" />
          <span className="text-[10px] sm:text-xs font-bold text-foreground">{tour.rating}</span>
        </div>
      </div>
      <div className="p-3 sm:p-4 space-y-1.5 sm:space-y-2">
        <h3 className="font-semibold text-foreground text-xs sm:text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
          {tour.name}
        </h3>
        <div className="flex items-center gap-1 text-muted-foreground">
          <span className="text-[10px] sm:text-xs">{tour.age} {t("card.ages")}</span>
          <span className="text-[10px] sm:text-xs">•</span>
          <Clock className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
          <span className="text-[10px] sm:text-xs">{tour.duration}</span>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <MapPin className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
          <span className="text-[10px] sm:text-xs">{tour.location}</span>
        </div>
        <p className="text-primary font-bold text-base sm:text-lg">${tour.price}</p>
      </div>
    </Link>
  );
};

export default TourCard;
