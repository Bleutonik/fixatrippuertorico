import { Star, Quote } from "lucide-react";
import { reviews } from "@/data/tours";
import { useLanguage } from "@/contexts/LanguageContext";
import FadeIn from "@/components/motion/FadeIn";

const ReviewsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 sm:py-36 bg-secondary/30 overflow-hidden">
      <div className="container">
        <FadeIn className="mb-14 sm:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-primary" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-primary">Testimonials</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-display tracking-tighter leading-[0.95]">
              {t("reviews.title")}
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review, i) => (
            <FadeIn key={review.id} delay={i * 0.1}>
              <div className="group relative p-7 sm:p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-elevated h-full flex flex-col">
                {/* Large quote mark */}
                <div className="text-6xl font-serif text-primary/15 leading-none mb-4 select-none">"</div>

                <p className="text-foreground/80 leading-relaxed text-[15px] flex-1">
                  {review.text}
                </p>

                <div className="mt-6 pt-6 border-t border-border/50 flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{review.tour}</p>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
