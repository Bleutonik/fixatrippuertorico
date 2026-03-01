import { useParams, Link } from "react-router-dom";
import { Clock, X, Users, Calendar, MapPin, MessageCircle, ChevronLeft, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { boats } from "@/data/services";
import { useState } from "react";

const BoatDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const boat = boats.find((b) => b.slug === slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!boat) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Boat not found</h1>
          <Link to="/fix-a-boat" className="text-primary hover:underline">
            ← Back to all boats
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleInquiry = () => {
    const msg = encodeURIComponent(
      `Hello! I'm interested in booking the ${boat.name}. Could you provide pricing and availability? Thank you!`
    );
    window.open(`https://wa.me/17874880202?text=${msg}`, "_blank");
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: boat.name,
    description: boat.description,
    url: `https://fixatrippuertorico.com/fix-a-boat/${boat.slug}`,
    brand: { "@type": "Organization", name: "Fix a Trip Puerto Rico" },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${boat.name} | Fix a Trip Puerto Rico`}
        description={boat.description.substring(0, 160)}
        canonicalPath={`/fix-a-boat/${boat.slug}`}
        jsonLd={jsonLd}
      />
      <Header />

      <main>
        {/* Breadcrumb */}
        <div className="container py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>›</span>
            <Link to="/fix-a-boat" className="hover:text-primary transition-colors">Fix a Boat</Link>
            <span>›</span>
            <span className="text-foreground">{boat.name}</span>
          </nav>
        </div>

        {/* Title */}
        <div className="container pb-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">{boat.name}</h1>
          <div className="flex items-center gap-2 mt-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{boat.location}</span>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="container pb-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 rounded-2xl overflow-hidden">
            {boat.gallery.slice(0, 6).map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden cursor-pointer group ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  alt={`${boat.name} photo ${i + 1}`}
                  className="w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-500"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                {i === 5 && boat.gallery.length > 6 && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      All photos ({boat.gallery.length})
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Info Bar + Content */}
        <div className="container pb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Stats Bar */}
              <div className="flex flex-wrap gap-6 py-4 border-y border-border">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Duration</p>
                    <p className="text-sm font-semibold text-foreground">{boat.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <X className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Cancellation</p>
                    <p className="text-sm font-semibold text-foreground">{boat.cancellation}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Group Size</p>
                    <p className="text-sm font-semibold text-foreground">{boat.groupSize}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Age</p>
                    <p className="text-sm font-semibold text-foreground">{boat.age}</p>
                  </div>
                </div>
              </div>

              {/* About */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">About this Boat</h2>
                <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {boat.description}
                </div>
              </div>

              {/* YouTube Video */}
              {boat.youtubeVideoId && (
                <div>
                  <div className="aspect-video rounded-xl overflow-hidden">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${boat.youtubeVideoId}`}
                      title={`${boat.name} video`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              )}

              {/* Included/Excluded */}
              {boat.included.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">Included/Excluded</h2>
                  <ul className="space-y-2">
                    {boat.included.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Boat Location */}
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">Boat Location</h2>
                <p className="text-muted-foreground">{boat.location}</p>
              </div>
            </div>

            {/* Right: Inquiry Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card border border-border rounded-2xl p-6 shadow-card space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-bold text-foreground mb-2">{boat.name}</h3>
                  <p className="text-sm text-muted-foreground">{boat.location} · {boat.duration}</p>
                </div>

                <Button
                  onClick={handleInquiry}
                  className="w-full rounded-xl h-12 font-semibold text-base bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Book Now
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Contact us via WhatsApp for pricing and availability
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt={boat.name}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BoatDetail;
