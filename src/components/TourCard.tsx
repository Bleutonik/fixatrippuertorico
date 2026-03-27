import { Link } from "react-router-dom";
import { Star, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { Tour } from "@/hooks/useTours";
import { useLanguage } from "@/contexts/LanguageContext";
import ProgressiveImage from "@/components/motion/ProgressiveImage";

interface TourCardProps {
  tour: Tour;
}

const TourCard = ({ tour }: TourCardProps) => {
  const { t } = useLanguage();

  return (
    <Link
      to={`/tour/${tour.slug}`}
      className="group block relative rounded-3xl overflow-hidden bg-card border border-border/50 hover:border-primary/20 transition-all duration-700 hover:shadow-elevated"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <ProgressiveImage
          src={tour.image}
          alt={tour.name}
          className="absolute inset-0 w-full h-full"
          imgClassName="transition-transform duration-[1.2s] ease-out group-hover:scale-110"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Rating badge */}
        <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
          <Star className="h-3 w-3 fill-primary text-primary" />
          <span className="text-[11px] font-bold text-white">{tour.rating}</span>
        </div>

        {/* Price - bottom of image */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div>
            <p className="text-white/60 text-[10px] uppercase tracking-wider mb-0.5">From</p>
            <p className="text-2xl font-bold text-white font-display">${tour.price}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight className="h-4 w-4 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h3 className="font-semibold text-foreground text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors duration-300 tracking-tight">
          {tour.name}
        </h3>
        <div className="flex items-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            <span className="text-xs">{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            <span className="text-xs">{tour.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
