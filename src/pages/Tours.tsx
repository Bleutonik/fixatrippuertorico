import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, ArrowUpDown, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import { tours, categories } from "@/data/tours";
import { useLanguage } from "@/contexts/LanguageContext";

type SortOption = "default" | "price-asc" | "price-desc" | "rating" | "duration";

const Tours = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "";
  const searchFilter = searchParams.get("search") || "";
  const locationFilter = searchParams.get("location") || "";
  const { t } = useLanguage();

  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [showFilters, setShowFilters] = useState(false);

  const allLocations = useMemo(() => {
    const locs = [...new Set(tours.map((t) => t.location))];
    return locs.sort();
  }, []);

  const filteredTours = useMemo(() => {
    let result = tours.filter((tour) => {
      const matchesCategory = !categoryFilter || tour.category === categoryFilter;
      const matchesSearch =
        !searchFilter ||
        tour.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        tour.location.toLowerCase().includes(searchFilter.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchFilter.toLowerCase());
      const matchesLocation =
        !locationFilter ||
        tour.location.toLowerCase().includes(locationFilter.toLowerCase());
      const matchesPrice = tour.price >= priceRange[0] && tour.price <= priceRange[1];
      return matchesCategory && matchesSearch && matchesLocation && matchesPrice;
    });

    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "duration":
        result.sort((a, b) => parseInt(a.duration) - parseInt(b.duration));
        break;
    }

    return result;
  }, [categoryFilter, searchFilter, locationFilter, priceRange, sortBy]);

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

  const setLocation = (loc: string) => {
    const params = new URLSearchParams(searchParams);
    if (loc) {
      params.set("location", loc);
    } else {
      params.delete("location");
    }
    setSearchParams(params);
  };

  const clearAllFilters = () => {
    setSearchParams({});
    setSortBy("default");
    setPriceRange([0, 300]);
  };

  const hasActiveFilters = categoryFilter || searchFilter || locationFilter || sortBy !== "default" || priceRange[0] > 0 || priceRange[1] < 300;

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
                : locationFilter
                ? `${t("tours.locationresults")} ${locationFilter}`
                : t("tours.subtitle")}
            </p>
          </div>

          {/* Category filters */}
          <nav
            aria-label="Tour categories"
            className="flex gap-2 mb-6 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide"
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

          {/* Filter bar */}
          <div className="flex items-center gap-2 mb-8 sm:mb-10 flex-wrap">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                showFilters ? "bg-primary text-primary-foreground border-primary" : "bg-card text-foreground/70 border-border/50 hover:bg-secondary"
              }`}
            >
              <SlidersHorizontal className="h-4 w-4" />
              {t("tours.filters")}
            </button>

            {/* Sort dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2.5 rounded-xl text-sm font-medium border border-border/50 bg-card text-foreground/70 hover:bg-secondary transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              <option value="default">{t("tours.sortdefault")}</option>
              <option value="price-asc">{t("tours.sortpriceasc")}</option>
              <option value="price-desc">{t("tours.sortpricedesc")}</option>
              <option value="rating">{t("tours.sortrating")}</option>
              <option value="duration">{t("tours.sortduration")}</option>
            </select>

            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium text-destructive border border-destructive/30 hover:bg-destructive/10 transition-all"
              >
                <X className="h-3.5 w-3.5" />
                {t("tours.clearall")}
              </button>
            )}

            <span className="text-sm text-muted-foreground ml-auto">
              {filteredTours.length} {filteredTours.length === 1 ? "tour" : "tours"}
            </span>
          </div>

          {/* Expanded filters */}
          {showFilters && (
            <div className="mb-8 p-5 rounded-2xl bg-card border border-border/50 shadow-card animate-fade-up">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Location filter */}
                <div>
                  <label className="text-sm font-semibold text-foreground block mb-2">{t("tours.filterlocation")}</label>
                  <select
                    value={locationFilter}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl text-sm border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="">{t("tours.alllocs")}</option>
                    {allLocations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                </div>

                {/* Price range */}
                <div>
                  <label className="text-sm font-semibold text-foreground block mb-2">
                    {t("tours.filterprice")}: ${priceRange[0]} - ${priceRange[1]}
                  </label>
                  <div className="flex items-center gap-3">
                    <input
                      type="range"
                      min={0}
                      max={300}
                      step={5}
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="flex-1 accent-primary"
                    />
                    <input
                      type="range"
                      min={0}
                      max={300}
                      step={5}
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="flex-1 accent-primary"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {filteredTours.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredTours.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <p className="text-muted-foreground text-lg mb-4">{t("tours.notours")}</p>
              <button
                onClick={clearAllFilters}
                className="text-primary font-semibold hover:underline"
              >
                {t("tours.clearall")}
              </button>
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
