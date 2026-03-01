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
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 hover:-translate-y-1.5 active:scale-[0.98] border border-border/50"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex items-center gap-1.5 glass-dark px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl border border-white/10">
          <Star className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-primary text-primary" />
          <span className="text-[10px] sm:text-xs font-bold text-white">{tour.rating}</span>
        </div>
      </div>
      <div className="p-3.5 sm:p-5 space-y-2 sm:space-y-2.5">
        <h3 className="font-semibold text-foreground text-[13px] sm:text-[15px] leading-snug line-clamp-2 group-hover:text-primary transition-colors tracking-tight">
          {tour.name}
        </h3>
        <div className="flex items-center gap-3 text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            <span className="text-[10px] sm:text-xs">{tour.duration}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
          <span className="text-[10px] sm:text-xs">{tour.age}+</span>
        </div>
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
          <span className="text-[10px] sm:text-xs">{tour.location}</span>
        </div>
        <div className="pt-1 sm:pt-2 border-t border-border/50">
          <p className="font-bold text-lg sm:text-xl gradient-text">${tour.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
