import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ChevronUp, ChevronDown, SlidersHorizontal, Search, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import SEOCrossLinks from "@/components/SEOCrossLinks";
import ServiceHero from "@/components/ServiceHero";
import FadeIn from "@/components/motion/FadeIn";
import { categories } from "@/data/tours";
import { useTours } from "@/hooks/useTours";
import { useLanguage } from "@/contexts/LanguageContext";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type SortOption = "title" | "price" | "rating" | "availability";

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

const Tours = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFilter = searchParams.get("search") || "";
  const { t } = useLanguage();
  const { data: tours = [], isLoading: toursLoading } = useTours();

  const [sortBy, setSortBy] = useState<SortOption>("title");
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
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const allLocations = useMemo(() => {
    const locs = [...new Set(tours.map((t) => t.location))];
    return locs.sort();
  }, [tours]);

  const priceMin = useMemo(() => tours.length ? Math.min(...tours.map((t) => t.price)) : 0, [tours]);
  const priceMax = useMemo(() => tours.length ? Math.max(...tours.map((t) => t.price)) : 500, [tours]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

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

  const activeFilterCount =
    selectedLocations.length +
    selectedCategories.length +
    (priceRange[0] > priceMin || priceRange[1] < priceMax ? 1 : 0);

  const pageTitle = "Booking - Fix A Trip Puerto Rico Tours & Experiences";
  const pageDescription =
    "Browse and book the best tours and experiences in Puerto Rico with Fix a Trip. Explore guided adventures through El Yunque National Rainforest, kayak the bioluminescent bays of Vieques and La Parguera, snorkel in crystal-clear Caribbean waters, and discover the historic charm of Old San Juan on expert-led walking tours.";

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

  const filtersContent = (
    <>
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
          onValueChange={(val) => setPriceRange(val as [number, number])}
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
    </>
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

      {/* Cinematic Hero */}
      <ServiceHero
        title="Tours & Experiences"
        subtitle="Find your perfect Puerto Rico adventure"
        eyebrow="Booking"
        backgroundImage="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=1920&q=80"
      />

      {/* Floating Search Bar */}
      <div className="relative z-10 -mt-8">
        <div className="container max-w-2xl">
          <FadeIn delay={0.3}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center bg-card border border-border/50 rounded-2xl overflow-hidden shadow-elevated backdrop-blur-sm"
            >
              <Search className="h-5 w-5 text-muted-foreground ml-5 flex-shrink-0" />
              <input
                type="text"
                value={searchFilter}
                onChange={(e) => {
                  const params = new URLSearchParams(searchParams);
                  if (e.target.value) {
                    params.set("search", e.target.value);
                  } else {
                    params.delete("search");
                  }
                  setSearchParams(params);
                }}
                placeholder={t("hero.search")}
                className="flex-1 px-4 py-4 text-foreground bg-transparent focus:outline-none text-sm min-w-0 placeholder:text-muted-foreground"
              />
              {searchFilter && (
                <button
                  type="button"
                  onClick={() => {
                    const params = new URLSearchParams(searchParams);
                    params.delete("search");
                    setSearchParams(params);
                  }}
                  className="p-2 mr-3 rounded-lg hover:bg-secondary transition-colors"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
            </form>
          </FadeIn>
        </div>
      </div>

      <main className="py-10 sm:py-14">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-[280px] flex-shrink-0">
              <FadeIn delay={0.4} direction="left">
                <div className="sticky top-24">
                  {filtersContent}
                </div>
              </FadeIn>
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">
              {/* Top bar */}
              <FadeIn delay={0.3}>
                <div className="flex items-center justify-between mb-8 gap-3">
                  <Sheet open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen}>
                    <SheetTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="lg:hidden flex items-center gap-2 rounded-xl"
                      >
                        <SlidersHorizontal className="h-4 w-4" />
                        Filters
                        {activeFilterCount > 0 && (
                          <span className="bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {activeFilterCount}
                          </span>
                        )}
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] overflow-y-auto">
                      <SheetHeader>
                        <SheetTitle>Filters</SheetTitle>
                      </SheetHeader>
                      <div className="mt-6">
                        {filtersContent}
                      </div>
                    </SheetContent>
                  </Sheet>

                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      {filteredTours.length}
                    </span>{" "}
                    Tours Results
                  </p>
                  <div className="flex items-center gap-2 ml-auto">
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
              </FadeIn>

              {/* Tour grid */}
              {filteredTours.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {filteredTours.map((tour, idx) => (
                    <FadeIn key={tour.id} delay={0.1 + (idx % 4) * 0.08}>
                      <TourCard tour={tour} />
                    </FadeIn>
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
        <SEOCrossLinks />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Tours;
