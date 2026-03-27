import { Link } from "react-router-dom";
import { Star, Clock, MapPin, ArrowUpRight } from "lucide-react";
import { Tour } from "@/hooks/useTours";
import ProgressiveImage from "@/components/motion/ProgressiveImage";

interface TourCardProps {
  tour: Tour;
}

const TourCard = ({ tour }: TourCardProps) => {
  return (
    <Link
      to={`/tour/${tour.slug}`}
      className="group block relative rounded-3xl overflow-hidden aspect-[4/5] shadow-card hover:shadow-elevated transition-all duration-700 hover:-translate-y-1"
    >
      {/* Full-cover image */}
      <ProgressiveImage
        src={tour.image}
        alt={tour.name}
        className="absolute inset-0 w-full h-full"
        imgClassName="transition-transform duration-[1.4s] ease-out group-hover:scale-110"
      />

      {/* Gradient overlay — stronger at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/5 transition-opacity duration-500 group-hover:opacity-90" />

      {/* Top row — rating + price */}
      <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
        {/* Rating */}
        <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/15 shadow-lg">
          <Star className="h-3 w-3 fill-primary text-primary" />
          <span className="text-[11px] font-bold text-white">{tour.rating}</span>
        </div>
        {/* Price pill */}
        <div className="bg-primary/90 backdrop-blur-xl px-3 py-1.5 rounded-full shadow-lg">
          <span className="text-[11px] font-bold text-white">${tour.price}</span>
        </div>
      </div>

      {/* Arrow button on hover */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500">
        <ArrowUpRight className="h-5 w-5 text-white" />
      </div>

      {/* Bottom glass content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent backdrop-blur-sm">
        <h3 className="font-bold text-white text-sm leading-snug line-clamp-2 mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
          {tour.name}
        </h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            <Clock className="h-3 w-3 text-white/70" />
            <span className="text-[10px] font-medium text-white/80">{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
            <MapPin className="h-3 w-3 text-white/70" />
            <span className="text-[10px] font-medium text-white/80">{tour.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
