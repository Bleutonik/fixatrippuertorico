import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import ScrollToTop from "@/components/ScrollToTop";
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <div className="container">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-display mb-2">
            Experiences
          </h1>
          <p className="text-muted-foreground mb-8">
            {searchFilter
              ? `Results for "${searchFilter}"`
              : "Explore all our tours and activities in Puerto Rico."}
          </p>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-10">
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
          </div>

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
