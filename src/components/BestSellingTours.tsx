import { tours } from "@/data/tours";
import TourCard from "./TourCard";

const BestSellingTours = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display mb-3">
            Our <span className="text-primary">best-selling</span> tours
          </h2>
          <p className="text-muted-foreground">
            Explore the tours chosen and recommended by a multitude of travelers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellingTours;
