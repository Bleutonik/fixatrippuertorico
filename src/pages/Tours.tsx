import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronUp, ChevronDown, Users, Clock, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import { tours, categories } from "@/data/tours";
import { useLanguage } from "@/contexts/LanguageContext";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

type SortOption = "title" | "price" | "rating" | "availability";

const Tours = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFilter = searchParams.get("search") || "";
  const { t } = useLanguage();

  const [sortBy, setSortBy] = useState<SortOption>("title");
  const [priceRange, setPriceRange] = useState<[number, number]>([45, 975]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    () => {
      const cat = searchParams.get("category");
      return cat ? [cat] : [];
    }
  );
  const [showPrice, setShowPrice] = useState(true);
  const [showLocation, setShowLocation] = useState(true);
  const [showCategories, setShowCategories] = useState(true);

  const allLocations = useMemo(() => {
    const locs = [...new Set(tours.map((t) => t.location))];
    return locs.sort();
  }, []);

  const priceMin = useMemo(() => Math.min(...tours.map((t) => t.price)), []);
  const priceMax = useMemo(() => Math.max(...tours.map((t) => t.price)), []);

  const filteredTours = useMemo(() => {
    let result = tours.filter((tour) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(tour.category);
      const matchesSearch =
        !searchFilter ||
        tour.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
        tour.location.toLowerCase().includes(searchFilter.toLowerCase()) ||
        tour.description.toLowerCase().includes(searchFilter.toLowerCase());
      const matchesLocation =
        selectedLocations.length === 0 ||
        selectedLocations.includes(tour.location);
      const matchesPrice =
        tour.price >= priceRange[0] && tour.price <= priceRange[1];
      return matchesCategory && matchesSearch && matchesLocation && matchesPrice;
    });

    switch (sortBy) {
      case "title":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "price":
        result.sort((a, b) => a.price - b.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
    }

    return result;
  }, [selectedCategories, searchFilter, selectedLocations, priceRange, sortBy]);

  const toggleLocation = (loc: string) => {
    setSelectedLocations((prev) =>
      prev.includes(loc) ? prev.filter((l) => l !== loc) : [...prev, loc]
    );
  };

  const toggleCategory = (slug: string) => {
    setSelectedCategories((prev) => {
      const next = prev.includes(slug)
        ? prev.filter((c) => c !== slug)
        : [...prev, slug];
      const params = new URLSearchParams(searchParams);
      if (next.length === 1) {
        params.set("category", next[0]);
      } else {
        params.delete("category");
      }
      setSearchParams(params);
      return next;
    });
  };

  const pageTitle = "Booking - Fix A Trip";
  const pageDescription =
    "Browse all tours and experiences in Puerto Rico. From El Yunque rainforest hikes to bioluminescent bay kayaking, island hopping, and cultural walking tours.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    description: pageDescription,
    url: "https://fixatrippuertorico.com/tours",
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

  const SidebarSection = ({
    title,
    open,
    onToggle,
    children,
  }: {
    title: string;
    open: boolean;
    onToggle: () => void;
    children: React.ReactNode;
  }) => (
    <div className="border-b border-border pb-5 mb-5">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full text-left"
      >
        <h3 className="text-base font-bold text-foreground">{title}</h3>
        {open ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </button>
      {open && <div className="mt-4">{children}</div>}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        canonicalPath="/tours"
        jsonLd={jsonLd}
      />
      <Header />
      <main className="py-6 sm:py-10">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-[280px] lg:flex-shrink-0">
              {/* Price */}
              <SidebarSection
                title="Price"
                open={showPrice}
                onToggle={() => setShowPrice(!showPrice)}
              >
                <Slider
                  min={priceMin}
                  max={priceMax}
                  step={5}
                  value={priceRange}
                  onValueChange={(val) =>
                    setPriceRange(val as [number, number])
                  }
                  className="mb-4"
                />
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 border border-border rounded-lg px-3 py-2 bg-background">
                    <span className="text-sm text-muted-foreground">$</span>
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([Number(e.target.value), priceRange[1]])
                      }
                      className="w-12 text-sm bg-transparent text-foreground outline-none"
                    />
                    <span className="text-xs text-muted-foreground">min</span>
                  </div>
                  <span className="text-muted-foreground">—</span>
                  <div className="flex items-center gap-1 border border-border rounded-lg px-3 py-2 bg-background">
                    <span className="text-sm text-muted-foreground">$</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], Number(e.target.value)])
                      }
                      className="w-12 text-sm bg-transparent text-foreground outline-none"
                    />
                    <span className="text-xs text-muted-foreground">max</span>
                  </div>
                </div>
              </SidebarSection>

              {/* Location */}
              <SidebarSection
                title="Location"
                open={showLocation}
                onToggle={() => setShowLocation(!showLocation)}
              >
                <div className="space-y-3">
                  {allLocations.map((loc) => (
                    <label
                      key={loc}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <Checkbox
                        checked={selectedLocations.includes(loc)}
                        onCheckedChange={() => toggleLocation(loc)}
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {loc}
                      </span>
                    </label>
                  ))}
                </div>
              </SidebarSection>

              {/* Categories */}
              <SidebarSection
                title="Categories"
                open={showCategories}
                onToggle={() => setShowCategories(!showCategories)}
              >
                <div className="space-y-3">
                  {categories.map((cat) => (
                    <label
                      key={cat.slug}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <Checkbox
                        checked={selectedCategories.includes(cat.slug)}
                        onCheckedChange={() => toggleCategory(cat.slug)}
                      />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        {cat.name}
                      </span>
                    </label>
                  ))}
                </div>
              </SidebarSection>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              {/* Top bar: count + sort */}
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    {filteredTours.length}
                  </span>{" "}
                  Tours Results
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground hidden sm:inline">
                    Sort by
                  </span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="px-4 py-2 rounded-lg text-sm border border-border bg-card text-foreground cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    <option value="title">Title</option>
                    <option value="price">Price</option>
                    <option value="rating">Rating</option>
                    <option value="availability">Availability date</option>
                  </select>
                </div>
              </div>

              {/* Tour grid */}
              {filteredTours.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredTours.map((tour) => (
                    <TourCard key={tour.id} tour={tour} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-24">
                  <p className="text-muted-foreground text-lg mb-4">
                    {t("tours.notours")}
                  </p>
                  <button
                    onClick={() => {
                      setSelectedLocations([]);
                      setSelectedCategories([]);
                      setPriceRange([priceMin, priceMax]);
                      setSearchParams({});
                    }}
                    className="text-primary font-semibold hover:underline"
                  >
                    {t("tours.clearall")}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Tours;
