import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/tours";
import { useLanguage } from "@/contexts/LanguageContext";

const ReviewsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 sm:py-20 bg-secondary">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-display mb-8 sm:mb-10 text-center">
          {t("reviews.title")}
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-card p-5 sm:p-6 rounded-xl shadow-md border border-border space-y-3 sm:space-y-4"
            >
              <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-primary/30" />
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{review.text}</p>
              <div className="flex items-center gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-primary text-primary" />
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm sm:text-base">{review.name}</p>
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
