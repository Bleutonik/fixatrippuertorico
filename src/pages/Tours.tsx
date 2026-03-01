import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import { tours, categories } from "@/data/tours";
import { useLanguage } from "@/contexts/LanguageContext";

const Tours = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "";
  const searchFilter = searchParams.get("search") || "";
  const { t } = useLanguage();

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
          offers: { "@type": "Offer", price: tour.price, priceCurrency: "USD" },
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
      <main className="py-10 sm:py-16">
        <div className="container">
          <div className="mb-8 sm:mb-10">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-2">Explore</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display tracking-tight mb-3">
              {activeCategory ? `${activeCategory.name} Tours` : t("tours.title")}
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base max-w-lg">
              {searchFilter
                ? `${t("tours.results")} "${searchFilter}"`
                : t("tours.subtitle")}
            </p>
          </div>

          {/* Category filters */}
          <nav
            aria-label="Tour categories"
            className="flex gap-2 mb-10 sm:mb-12 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide"
          >
            <button
              onClick={() => setCategory("")}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                !categoryFilter
                  ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-soft"
                  : "bg-card text-foreground/70 border border-border/50 hover:bg-secondary hover:border-primary/20"
              }`}
            >
              {t("tours.all")}
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setCategory(cat.slug)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                  categoryFilter === cat.slug
                    ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-soft"
                    : "bg-card text-foreground/70 border border-border/50 hover:bg-secondary hover:border-primary/20"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </nav>

          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-muted-foreground text-lg">{t("tours.notours")}</p>
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
