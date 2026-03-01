import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import { tours, categories } from "@/data/tours";

const Tours = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "";
  const searchFilter = searchParams.get("search") || "";

  const filteredTours = useMemo(() => {
    return tours.filter((tour) => {
      const matchesCategory = !categoryFilter || tour.category === categoryFilter;
      const matchesSearch =
        !searchFilter ||
        tour.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        tour.location.toLowerCase().includes(searchFilter.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [categoryFilter, searchFilter]);

  const setCategory = (slug: string) => {
    const params = new URLSearchParams(searchParams);
    if (slug) {
      params.set("category", slug);
    } else {
      params.delete("category");
    }
    params.delete("search");
    setSearchParams(params);
  };

  const activeCategory = categories.find((c) => c.slug === categoryFilter);
  const pageTitle = activeCategory
    ? `${activeCategory.name} Tours in Puerto Rico | Fix a Trip`
    : searchFilter
    ? `Search Results for "${searchFilter}" | Fix a Trip Puerto Rico`
    : "All Tours & Experiences in Puerto Rico | Fix a Trip";
  const pageDescription = activeCategory
    ? `Discover the best ${activeCategory.name.toLowerCase()} tours in Puerto Rico. Book unique experiences with expert local guides at Fix a Trip Puerto Rico.`
    : "Browse all tours and experiences in Puerto Rico. From El Yunque rainforest hikes to bioluminescent bay kayaking, island hopping, and cultural walking tours.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    description: pageDescription,
    url: `https://fixatrippuertorico.com/tours${categoryFilter ? `?category=${categoryFilter}` : ""}`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: filteredTours.map((tour, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "TouristTrip",
          name: tour.name,
          description: tour.description,
          url: `https://fixatrippuertorico.com/tour/${tour.slug}`,
          offers: {
            "@type": "Offer",
            price: tour.price,
            priceCurrency: "USD",
          },
        },
      })),
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonicalPath="/tours"
        jsonLd={jsonLd}
      />
      <Header />
      <main className="py-12">
        <div className="container">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-display mb-2">
            {activeCategory ? `${activeCategory.name} Tours` : "Experiences"}
          </h1>
          <p className="text-muted-foreground mb-8">
            {searchFilter
              ? `Results for "${searchFilter}"`
              : "Explore all our tours and activities in Puerto Rico."}
          </p>

          {/* Category filters */}
          <nav aria-label="Tour categories" className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setCategory("")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !categoryFilter
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setCategory(cat.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  categoryFilter === cat.slug
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-primary/10"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </nav>

          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No tours found.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Tours;
