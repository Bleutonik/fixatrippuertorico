import { useParams, Link } from "react-router-dom";
import { Star, Clock, MapPin, Users, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { tours } from "@/data/tours";

const TourDetail = () => {
  const { slug } = useParams();
  const tour = tours.find((t) => t.slug === slug);

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Image */}
        <div className="relative h-[50vh] min-h-[300px]">
          <img
            src={tour.image}
            alt={tour.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        <div className="container py-12">
          <Link
            to="/tours"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Tours
          </Link>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="font-bold text-primary">{tour.rating}</span>
                </div>
                <span className="text-sm text-muted-foreground">{tour.category}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-display">
                {tour.name}
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {tour.description}
              </p>
            </div>

            {/* Booking sidebar */}
            <div className="lg:col-span-1">
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
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default TourDetail;
