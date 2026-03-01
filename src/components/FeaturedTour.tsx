import { Link } from "react-router-dom";
import { Star, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tours } from "@/data/tours";

const FeaturedTour = () => {
  const tour = tours.find((t) => t.featured);
  if (!tour) return null;

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-2xl bg-card">
          <div className="relative aspect-[4/3] lg:aspect-auto">
            <img
              src="https://fixatrippuertorico.com/wp-content/uploads/2026/01/YUNQUE-CARTEL.png"
              alt={tour.name}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="p-8 lg:p-12 flex flex-col justify-center space-y-5">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm font-bold text-primary">4.9</span>
              </div>
              <span className="text-xs text-muted-foreground">({tour.ratingCount} rating)</span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-foreground font-display leading-tight">
              Off the Beaten Path<br />El Yunque
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              {tour.description}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-2">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Price From:</p>
                <p className="text-2xl font-bold text-primary">${tour.price}</p>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-xs text-muted-foreground mb-1">Duration</p>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-primary" />
                  <p className="font-semibold text-foreground">{tour.duration}</p>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-xs text-muted-foreground mb-1">Age</p>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-primary" />
                  <p className="font-semibold text-foreground">{tour.age}</p>
                </div>
              </div>
            </div>

            <Link to={`/tour/${tour.slug}`}>
              <Button className="rounded-full px-8 font-semibold mt-2">Discover More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTour;
