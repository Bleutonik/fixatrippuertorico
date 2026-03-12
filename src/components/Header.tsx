import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, Moon, Sun, Globe, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: t("nav.experiences"), href: "/tours" },
    { label: t("nav.boat"), href: "/fix-a-boat" },
    { label: t("nav.chef"), href: "/fix-a-chef" },
    { label: t("nav.transport"), href: "/fix-a-transport" },
    { label: t("nav.wellness"), href: "/fix-a-wellness" },
    { label: t("nav.blog"), href: "/blog" },
  ];

  const headerBg = isHome && !scrolled
    ? "bg-transparent border-transparent"
    : "glass border-border/50";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${headerBg}`}
      >
        <div className="container flex h-16 sm:h-[72px] items-center justify-between gap-3">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <img
              src="https://fixatrippuertorico.com/wp-content/uploads/2025/09/FIX-A-TRIP-LOGO.webp"
              alt="Fix a Trip Puerto Rico"
              className={`h-9 sm:h-11 w-auto transition-all duration-500 group-hover:scale-105 ${
                isHome && !scrolled ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`relative px-3.5 py-2 text-[13px] font-semibold tracking-[0.05em] uppercase transition-colors rounded-lg hover:bg-secondary/80 ${
                  isHome && !scrolled
                    ? "text-white/90 hover:text-white hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-1">
            {/* Language toggle */}
            <button
              onClick={() => setLang(lang === "en" ? "es" : "en")}
              className={`p-2.5 rounded-xl transition-all duration-200 flex items-center gap-1.5 focus-ring ${
                isHome && !scrolled ? "hover:bg-white/10" : "hover:bg-secondary"
              }`}
              aria-label="Toggle language"
            >
              <Globe className={`h-[18px] w-[18px] ${isHome && !scrolled ? "text-white/70" : "text-foreground/70"}`} />
              <span className={`text-xs font-semibold hidden sm:inline ${isHome && !scrolled ? "text-white/70" : "text-foreground/70"}`}>
                {lang.toUpperCase()}
              </span>
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl transition-all duration-200 focus-ring ${
                isHome && !scrolled ? "hover:bg-white/10" : "hover:bg-secondary"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className={`h-[18px] w-[18px] ${isHome && !scrolled ? "text-white/70" : "text-foreground/70"}`} />
              ) : (
                <Sun className={`h-[18px] w-[18px] ${isHome && !scrolled ? "text-white/70" : "text-foreground/70"}`} />
              )}
            </button>

            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className={`p-2.5 rounded-xl transition-all duration-200 focus-ring ${
                isHome && !scrolled ? "hover:bg-white/10" : "hover:bg-secondary"
              }`}
              aria-label="Search"
            >
              <Search className={`h-[18px] w-[18px] ${isHome && !scrolled ? "text-white/70" : "text-foreground/70"}`} />
            </button>

            {/* Contact button */}
            <Link to="/contact" className="hidden sm:block ml-3">
              <Button className="rounded-full px-6 font-semibold text-xs h-10 bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-soft">
                {t("nav.contact")}
              </Button>
            </Link>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-2.5 rounded-xl transition-all duration-200 focus-ring ${
                isHome && !scrolled ? "hover:bg-white/10" : "hover:bg-secondary"
              }`}
              aria-label="Menu"
            >
              {menuOpen ? (
                <X className={`h-5 w-5 ${isHome && !scrolled ? "text-white" : "text-foreground"}`} />
              ) : (
                <Menu className={`h-5 w-5 ${isHome && !scrolled ? "text-white" : "text-foreground"}`} />
              )}
            </button>
          </div>
        </div>

        {/* Search bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl"
            >
              <div className="container max-w-xl py-4">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (searchQuery.trim()) {
                      navigate(`/tours?search=${encodeURIComponent(searchQuery)}`);
                      setSearchOpen(false);
                    }
                  }}
                  className="flex gap-2"
                >
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t("hero.search")}
                    className="flex-1 px-5 py-3 rounded-full border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm transition-all"
                    autoFocus
                  />
                  <Button type="submit" className="rounded-full h-[46px] px-5 bg-primary text-primary-foreground">
                    <Search className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-6">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={item.href}
                    className="text-2xl font-display font-bold text-foreground hover:text-primary transition-colors tracking-tight"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 }}
              >
                <Link to="/contact">
                  <Button className="rounded-full px-10 py-3 h-12 font-semibold bg-primary text-primary-foreground mt-4">
                    {t("nav.contact")}
                  </Button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
