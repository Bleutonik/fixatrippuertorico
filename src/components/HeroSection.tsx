import { useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/tours?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <section className="relative h-[85vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://fixatrippuertorico.com/wp-content/uploads/2026/01/1-3-1.webp)`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 font-display leading-tight">
          Book Unique Experiences
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8">
          Explore, connect, and enjoy—anytime, anywhere.
        </p>
        <form onSubmit={handleSearch} className="max-w-xl mx-auto">
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-2xl">
            <Search className="h-5 w-5 text-muted-foreground ml-5" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search experiences, tours, or activities..."
              className="flex-1 px-4 py-4 text-foreground bg-transparent focus:outline-none text-sm sm:text-base"
            />
            <button
              type="submit"
              className="m-1.5 p-3 rounded-full bg-primary hover:bg-primary/90 transition-colors"
            >
              <ArrowRight className="h-5 w-5 text-primary-foreground" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;
