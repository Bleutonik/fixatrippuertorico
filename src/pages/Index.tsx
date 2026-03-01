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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
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
