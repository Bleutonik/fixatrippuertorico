import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CategoriesSection from "@/components/CategoriesSection";
import FeaturedTour from "@/components/FeaturedTour";
import BestSellingTours from "@/components/BestSellingTours";
import PopularPlaces from "@/components/PopularPlaces";
import ReviewsSection from "@/components/ReviewsSection";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Fix a Trip Puerto Rico",
    description: "Boutique experience concierge helping travelers discover Puerto Rico with personalized tours, boat trips, chef experiences, and wellness activities.",
    url: "https://fixatrippuertorico.com",
    telephone: "+1-787-488-0202",
    email: "bookings@fixatrippr.com",
    address: {
      "@type": "PostalAddress",
      addressRegion: "PR",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.facebook.com/fixatrippr/",
    ],
    priceRange: "$45 - $165",
    areaServed: {
      "@type": "Place",
      name: "Puerto Rico",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Fix a Trip Puerto Rico | Book Unique Tours & Experiences"
        description="Book unique tours and experiences in Puerto Rico. Explore El Yunque rainforest, bioluminescent bays, Culebra Island, Old San Juan walking tours, and more. Expert local guides, seamless booking."
        canonicalPath="/"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CategoriesSection />
        <FeaturedTour />
        <BestSellingTours />
        <PopularPlaces />
        <ReviewsSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
