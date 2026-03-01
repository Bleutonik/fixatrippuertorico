import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Clock, MapPin, Users, ArrowLeft, Check, X as XIcon, Share2, MessageCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
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
  const isWhatsApp = !tour.fareHarborItemId;
  const whatsAppUrl = `https://wa.me/17874880202?text=${encodeURIComponent(`Hi! I'd like to book: ${tour.name} ($${tour.price}/person)`)}`;
  const bookingUrl = tour.fareHarborItemId
    ? `https://fareharbor.com/embeds/book/${FAREHARBOR_SHORTNAME}/items/${tour.fareHarborItemId}/?flow=no`
    : whatsAppUrl;

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({ title: tour.name, url });
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: tour.description,
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
        {/* Image Gallery */}
        <section className="bg-secondary">
          <div className="container py-3 sm:py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-3">
              <div className="lg:col-span-2 relative aspect-[16/10] rounded-xl overflow-hidden">
                <img
                  src={allImages[activeImage]}
                  alt={`${tour.name} - Photo ${activeImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 lg:grid-cols-2 gap-1.5 sm:gap-2">
                {allImages.slice(0, 4).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all active:scale-95 ${
                      activeImage === idx ? "border-primary" : "border-transparent hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${tour.name} - Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="container py-6 sm:py-10">
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <Link
              to="/tours"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
            >
              <ArrowLeft className="h-4 w-4" /> {t("detail.back")}
            </Link>
            <button
              onClick={handleShare}
              className="p-2.5 rounded-xl hover:bg-secondary transition-colors"
              aria-label="Share"
            >
              <Share2 className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>

          {/* Mobile: Booking card on top */}
          <div className="lg:hidden mb-6">
            <div className="bg-card border border-border rounded-2xl p-5 shadow-lg flex items-center justify-between gap-4">
              <div>
                <p className="text-xs text-muted-foreground">{t("detail.pricefrom")}</p>
                <p className="text-3xl font-bold text-primary">${tour.price}</p>
                <p className="text-xs text-muted-foreground">{t("detail.perperson")}</p>
              </div>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                <Button className={`rounded-full px-6 font-semibold h-11 ${isWhatsApp ? "bg-[#25D366] hover:bg-[#1da851] text-white" : ""}`}>
                  {isWhatsApp && <MessageCircle className="h-4 w-4 mr-2" />}
                  {isWhatsApp ? "WhatsApp" : t("detail.booknow")}
                </Button>
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10">
            <article className="lg:col-span-2 space-y-6 sm:space-y-8">
              <header>
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap mb-3">
                  <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-bold text-primary">{tour.rating}</span>
                  </div>
                  {tour.ratingCount && (
                    <span className="text-xs sm:text-sm text-muted-foreground">({tour.ratingCount} {t("detail.reviews")})</span>
                  )}
                  {tour.itemCode && (
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                      #{tour.itemCode}
                    </span>
                  )}
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-display leading-tight">
                  {tour.name}
                </h1>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {tour.duration}</span>
                  <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {tour.location}</span>
                  <span className="flex items-center gap-1"><Users className="h-4 w-4" /> {tour.age}</span>
                </div>
              </header>

              <section>
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{t("detail.about")}</h2>
                <p className="text-muted-foreground text-sm sm:text-lg leading-relaxed">{tour.description}</p>
              </section>

              {tour.highlights.length > 0 && (
                <section>
                  <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{t("detail.highlights")}</h2>
                  <ul className="space-y-2.5 sm:space-y-3">
                    {tour.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2.5 sm:gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm sm:text-base">{h}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section>
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">{t("detail.experience")}</h2>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{tour.experience}</p>
              </section>

              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {tour.included.length > 0 && (
                  <section>
                    <h3 className="font-bold text-foreground mb-2 text-sm sm:text-base">{t("detail.included")}</h3>
                    <ul className="space-y-2">
                      {tour.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
                {tour.notIncluded.length > 0 && (
                  <section>
                    <h3 className="font-bold text-foreground mb-2 text-sm sm:text-base">{t("detail.notincluded")}</h3>
                    <ul className="space-y-2">
                      {tour.notIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <XIcon className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </article>

            {/* Desktop booking sidebar */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg sticky top-24 space-y-5">
                <div>
                  <p className="text-xs text-muted-foreground">{t("detail.pricefrom")}</p>
                  <p className="text-4xl font-bold text-primary">${tour.price}</p>
                  <p className="text-xs text-muted-foreground">{t("detail.perperson")}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">{t("detail.duration")}</p>
                      <p className="font-semibold text-foreground">{tour.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">{t("detail.location")}</p>
                      <p className="font-semibold text-foreground">{tour.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">{t("detail.agerequirement")}</p>
                      <p className="font-semibold text-foreground">{tour.age}</p>
                    </div>
                  </div>
                </div>

                <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                  <Button className={`w-full rounded-full py-3 font-semibold text-base ${isWhatsApp ? "bg-[#25D366] hover:bg-[#1da851] text-white" : ""}`}>
                    {isWhatsApp && <MessageCircle className="h-5 w-5 mr-2" />}
                    {isWhatsApp ? "💬 Book via WhatsApp" : t("detail.booknow")}
                  </Button>
                </a>

                <p className="text-xs text-center text-muted-foreground">
                  {t("detail.freecancel")}
                </p>
              </div>
            </aside>
          </div>

          {/* Related tours */}
          {relatedTours.length > 0 && (
            <section className="mt-12 sm:mt-16">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground font-display mb-6">{t("detail.related")}</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {relatedTours.map((rt) => (
                  <TourCard key={rt.id} tour={rt} />
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
