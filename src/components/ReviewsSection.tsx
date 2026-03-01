import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/tours";

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display mb-10 text-center">
          Real reviews from real travelers
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-card p-6 rounded-xl shadow-md border border-border space-y-4"
            >
              <Quote className="h-8 w-8 text-primary/30" />
              <p className="text-muted-foreground leading-relaxed">{review.text}</p>
              <div className="flex items-center gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.tour}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
