import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Clock, MapPin, Users, ArrowLeft, Check, X as XIcon, Share2, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import FadeIn from "@/components/motion/FadeIn";
import { Button } from "@/components/ui/button";
import { tours } from "@/data/tours";
import { useLanguage } from "@/contexts/LanguageContext";
import TourCard from "@/components/TourCard";

const FAREHARBOR_SHORTNAME = "fixatrippuertorico";

const TourDetail = () => {
  const { slug } = useParams();
  const tour = tours.find((t) => t.slug === slug);
  const [activeImage, setActiveImage] = useState(0);
  const { t } = useLanguage();

  if (!tour) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">{t("detail.notfound")}</h1>
          <Link to="/tours">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="h-4 w-4 mr-2" /> {t("detail.back")}
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const allImages = tour.gallery.length > 0 ? tour.gallery : [tour.image];
  const relatedTours = tours.filter((t) => t.category === tour.category && t.id !== tour.id).slice(0, 4);
  const whatsAppUrl = `https://wa.me/17874880202?text=${encodeURIComponent(`Hi! I'd like to book: ${tour.name} ($${tour.price}/person)`)}`;
  const fareHarborUrl = tour.fareHarborItemId
    ? `https://fareharbor.com/embeds/book/${FAREHARBOR_SHORTNAME}/items/${tour.fareHarborItemId}/?flow=no`
    : `https://fareharbor.com/embeds/book/${FAREHARBOR_SHORTNAME}/?flow=no`;

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: tour.name, url });
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  const richDescription = `${tour.description} This tour departs from ${tour.location} and lasts approximately ${tour.duration}. Suitable for ${tour.age}. ${tour.experience || ""} ${tour.highlights.length > 0 ? `Highlights include: ${tour.highlights.join(", ")}.` : ""} ${tour.included.length > 0 ? `Price includes: ${tour.included.join(", ")}.` : ""} Book this unforgettable Puerto Rico experience with Fix a Trip Puerto Rico.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: richDescription,
    image: allImages,
    url: `https://fixatrippuertorico.com/tour/${tour.slug}`,
    touristType: "Adventure traveler",
    offers: {
      "@type": "Offer",
      price: tour.price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@type": "TravelAgency",
      name: "Fix a Trip Puerto Rico",
      telephone: "+1-787-488-0202",
      url: "https://fixatrippuertorico.com",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tour.rating,
      bestRating: 5,
      ratingCount: tour.ratingCount || 50,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${tour.name} | Fix a Trip Puerto Rico`}
        description={tour.description}
        canonicalPath={`/tour/${tour.slug}`}
        ogImage={tour.image}
        ogType="product"
        jsonLd={jsonLd}
      />
      <Header />

      <main>
        {/* Cinematic Image Gallery */}
        <section className="relative bg-secondary/50">
          <div className="container py-4 sm:py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-3">
              {/* Main Image */}
              <motion.div
                className="lg:col-span-2 relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer group"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={allImages[activeImage]}
                  alt={`${tour.name} - Photo ${activeImage + 1}`}
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 lg:grid-cols-2 gap-1.5 sm:gap-2">
                {allImages.slice(0, 4).map((img, idx) => (
                  <motion.button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all active:scale-95 ${
                      activeImage === idx ? "border-primary ring-2 ring-primary/20" : "border-transparent hover:border-primary/50"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.08 }}
                  >
                    <img
                      src={img}
                      alt={`${tour.name} - Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      loading="lazy"
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="container py-8 sm:py-12">
          <FadeIn delay={0.1}>
            <div className="flex items-center justify-between mb-6">
              <Link
                to="/tours"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm group"
              >
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> {t("detail.back")}
              </Link>
              <button
                onClick={handleShare}
                className="p-2.5 rounded-xl hover:bg-secondary transition-colors"
                aria-label="Share"
              >
                <Share2 className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </FadeIn>

          {/* Mobile: Booking card on top */}
          <div className="lg:hidden mb-8">
            <FadeIn delay={0.2}>
              <div className="liquid-glass-elevated rounded-2xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">{t("detail.pricefrom")}</p>
                    <p className="text-3xl font-bold text-primary font-display">${tour.price}</p>
                    <p className="text-xs text-muted-foreground">{t("detail.perperson")}</p>
                  </div>
                  <div className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full">
                    <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                    <span className="font-bold text-sm text-primary">{tour.rating}</span>
                  </div>
                </div>
                <a href={fareHarborUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full rounded-full font-semibold h-12 text-base">
                    {t("detail.booknow")}
                  </Button>
                </a>
                <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full rounded-full font-semibold h-11 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <article className="lg:col-span-2 space-y-8 sm:space-y-10">
              {/* Header */}
              <FadeIn delay={0.2}>
                <header>
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap mb-4">
                    <div className="flex items-center gap-1 bg-primary/10 px-3 py-1.5 rounded-full">
                      <Star className="h-4 w-4 fill-primary text-primary" />
                      <span className="font-bold text-primary">{tour.rating}</span>
                    </div>
                    {tour.ratingCount && (
                      <span className="text-xs sm:text-sm text-muted-foreground">({tour.ratingCount} {t("detail.reviews")})</span>
                    )}
                    {tour.itemCode && (
                      <span className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-full">
                        #{tour.itemCode}
                      </span>
                    )}
                  </div>
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display leading-[1.05] tracking-tight">
                    {tour.name}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-primary" /> {tour.duration}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-primary" /> {tour.location}</span>
                    <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-primary" /> {tour.age}</span>
                  </div>
                </header>
              </FadeIn>

              {/* Description */}
              <FadeIn delay={0.3}>
                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 font-display">{t("detail.about")}</h2>
                  <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">{tour.description}</p>
                </section>
              </FadeIn>

              {/* Highlights */}
              {tour.highlights.length > 0 && (
                <FadeIn delay={0.35}>
                  <section>
                    <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 font-display">{t("detail.highlights")}</h2>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {tour.highlights.map((h, i) => (
                        <li key={i} className="flex gap-3 p-3 rounded-xl bg-secondary/50 border border-border/50">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                </FadeIn>
              )}

              {/* Experience */}
              <FadeIn delay={0.4}>
                <section>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 font-display">{t("detail.experience")}</h2>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{tour.experience}</p>
                </section>
              </FadeIn>

              {/* Included / Not Included */}
              <FadeIn delay={0.45}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {tour.included.length > 0 && (
                    <section className="p-5 rounded-2xl bg-primary/5 border border-primary/10">
                      <h3 className="font-bold text-foreground mb-3 text-base font-display">{t("detail.included")}</h3>
                      <ul className="space-y-2.5">
                        {tour.included.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                  {tour.notIncluded.length > 0 && (
                    <section className="p-5 rounded-2xl bg-destructive/5 border border-destructive/10">
                      <h3 className="font-bold text-foreground mb-3 text-base font-display">{t("detail.notincluded")}</h3>
                      <ul className="space-y-2.5">
                        {tour.notIncluded.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                            <XIcon className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                </div>
              </FadeIn>
            </article>

            {/* Desktop booking sidebar */}
            <aside className="hidden lg:block lg:col-span-1">
              <FadeIn delay={0.3} direction="right">
                <div className="liquid-glass-elevated rounded-2xl p-6 sticky top-24 space-y-6">
                  <div>
                    <p className="text-xs text-muted-foreground">{t("detail.pricefrom")}</p>
                    <p className="text-4xl font-bold text-primary font-display">${tour.price}</p>
                    <p className="text-xs text-muted-foreground">{t("detail.perperson")}</p>
                  </div>

                  <div className="space-y-4 py-4 border-y border-border/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{t("detail.duration")}</p>
                        <p className="font-semibold text-foreground text-sm">{tour.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{t("detail.location")}</p>
                        <p className="font-semibold text-foreground text-sm">{tour.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{t("detail.agerequirement")}</p>
                        <p className="font-semibold text-foreground text-sm">{tour.age}</p>
                      </div>
                    </div>
                  </div>

                  <a href={fareHarborUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button className="w-full rounded-full py-3 font-semibold text-base h-12">
                      {t("detail.booknow")}
                    </Button>
                  </a>
                  <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer" className="block">
                    <Button variant="outline" className="w-full rounded-full py-3 font-semibold text-base border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white">
                      <MessageCircle className="h-5 w-5 mr-2" />
                      WhatsApp
                    </Button>
                  </a>

                  <p className="text-xs text-center text-muted-foreground">
                    {t("detail.freecancel")}
                  </p>
                </div>
              </FadeIn>
            </aside>
          </div>

          {/* Related tours */}
          {relatedTours.length > 0 && (
            <section className="mt-16 sm:mt-20">
              <FadeIn>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground font-display mb-8">{t("detail.related")}</h2>
              </FadeIn>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {relatedTours.map((rt, idx) => (
                  <FadeIn key={rt.id} delay={0.1 + idx * 0.08}>
                    <TourCard tour={rt} />
                  </FadeIn>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TourDetail;
