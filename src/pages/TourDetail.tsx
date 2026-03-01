import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star, Clock, MapPin, Users, ArrowLeft, Check, X as XIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { tours } from "@/data/tours";

const TourDetail = () => {
  const { slug } = useParams();
  const tour = tours.find((t) => t.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!tour) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Tour not found</h1>
          <Link to="/tours">
            <Button variant="outline" className="rounded-full">
              <ArrowLeft className="h-4 w-4 mr-2" /> Back to Tours
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const allImages = tour.gallery.length > 0 ? tour.gallery : [tour.image];

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
          <div className="container py-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
              <div className="lg:col-span-2 relative aspect-[16/10] rounded-xl overflow-hidden">
                <img
                  src={allImages[activeImage]}
                  alt={`${tour.name} - Photo ${activeImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 lg:grid-cols-2 gap-2">
                {allImages.slice(0, 4).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
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

        <div className="container py-10">
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors text-sm"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tours
          </Link>

          <div className="grid lg:grid-cols-3 gap-10">
            <article className="lg:col-span-2 space-y-8">
              <header>
                <div className="flex items-center gap-3 flex-wrap mb-3">
                  <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="font-bold text-primary">{tour.rating}</span>
                  </div>
                  {tour.ratingCount && (
                    <span className="text-sm text-muted-foreground">({tour.ratingCount} reviews)</span>
                  )}
                  <span className="text-sm text-muted-foreground capitalize">{tour.category.replace("-", " / ")}</span>
                  {tour.itemCode && (
                    <span className="text-xs text-muted-foreground">Item Code: {tour.itemCode}</span>
                  )}
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-display leading-tight">
                  {tour.name}
                </h1>
              </header>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">About this Experience</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{tour.description}</p>
              </section>

              {tour.highlights.length > 0 && (
                <section>
                  <h2 className="text-xl font-bold text-foreground mb-3">Tour Highlights</h2>
                  <ul className="space-y-3">
                    {tour.highlights.map((h, i) => (
                      <li key={i} className="flex gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{h}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section>
                <h2 className="text-xl font-bold text-foreground mb-3">The Experience</h2>
                <p className="text-muted-foreground leading-relaxed">{tour.experience}</p>
              </section>

              <div className="grid sm:grid-cols-2 gap-6">
                {tour.included.length > 0 && (
                  <section>
                    <h3 className="font-bold text-foreground mb-2">What's Included</h3>
                    <ul className="space-y-2">
                      {tour.included.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
                {tour.notIncluded.length > 0 && (
                  <section>
                    <h3 className="font-bold text-foreground mb-2">What's Not Included</h3>
                    <ul className="space-y-2">
                      {tour.notIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <XIcon className="h-4 w-4 text-destructive flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </article>

            {/* Booking sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-lg sticky top-24 space-y-5">
                <div>
                  <p className="text-xs text-muted-foreground">Price From</p>
                  <p className="text-4xl font-bold text-primary">${tour.price}</p>
                  <p className="text-xs text-muted-foreground">per person</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="font-semibold text-foreground">{tour.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Location</p>
                      <p className="font-semibold text-foreground">{tour.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-xs text-muted-foreground">Age Requirement</p>
                      <p className="font-semibold text-foreground">{tour.age}</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full rounded-full py-3 font-semibold text-base">
                  Book Now
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Free cancellation available
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TourDetail;
