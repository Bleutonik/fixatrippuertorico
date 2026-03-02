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
    description: "Fix a Trip Puerto Rico is the island's premier boutique experience concierge, specializing in curated tours, private boat charters, personal chef experiences, luxury transportation, and wellness retreats across the enchanting island of Puerto Rico. Whether you dream of hiking through the lush El Yunque National Rainforest, kayaking through the magical bioluminescent bays of Vieques and La Parguera, island-hopping to the pristine beaches of Culebra and Flamenco Beach, or exploring the cobblestone streets and colorful history of Old San Juan, Fix a Trip Puerto Rico crafts unforgettable adventures tailored to every traveler. Our expert local guides bring deep knowledge of Puerto Rican culture, cuisine, history, and natural wonders, ensuring each tour is immersive and authentic. We offer small-group and private tour options for families, couples, solo travelers, and corporate groups. From snorkeling crystal-clear Caribbean waters and sailing luxury catamarans to enjoying gourmet private dining prepared by professional chefs in your vacation rental, every experience is designed for comfort, safety, and lasting memories. Fix a Trip Puerto Rico also provides reliable airport transfers, VIP ground transportation, and holistic wellness services including massage therapy, yoga sessions, sound healing, and reiki. Book online or contact us via WhatsApp for personalized travel planning and seamless reservations. Discover why thousands of travelers trust Fix a Trip Puerto Rico as their go-to concierge for authentic Caribbean experiences.",
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
        description="Book unique tours and experiences in Puerto Rico with Fix a Trip. Explore El Yunque rainforest, bioluminescent bays, Culebra Island, Old San Juan walking tours, private boat charters, personal chef services, luxury transport, and wellness retreats. Expert local guides, seamless booking, and unforgettable Caribbean adventures await you."
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
