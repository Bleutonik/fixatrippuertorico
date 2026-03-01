import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const navigate = useNavigate();

  const navItems = [
    { label: t("nav.experiences"), href: "/tours" },
    { label: t("nav.boat"), href: "/tours?category=boat-trips" },
    { label: t("nav.chef"), href: "/tours?category=foodie-culture" },
    { label: t("nav.transport"), href: "/contact" },
    { label: t("nav.wellness"), href: "/tours?category=nature" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container flex h-14 sm:h-16 items-center justify-between gap-2">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="https://fixatrippuertorico.com/wp-content/uploads/2025/09/FIX-A-TRIP-LOGO.webp"
            alt="Fix a Trip Puerto Rico"
            className="h-8 sm:h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-[11px] font-semibold tracking-wide text-foreground hover:text-primary transition-colors"
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
            className="p-2 rounded-full hover:bg-secondary transition-colors flex items-center gap-1"
            aria-label="Toggle language"
            title={lang === "en" ? "Cambiar a Español" : "Switch to English"}
          >
            <Globe className="h-4 w-4 text-foreground" />
            <span className="text-xs font-bold text-foreground hidden sm:inline">{lang.toUpperCase()}</span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4 text-foreground" />
            ) : (
              <Sun className="h-4 w-4 text-foreground" />
            )}
          </button>

          {/* Search */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Search"
          >
            <Search className="h-4 w-4 text-foreground" />
          </button>

          {/* Contact button */}
          <Link to="/contact">
            <Button className="hidden sm:inline-flex rounded-full px-5 font-semibold text-xs h-9">
              {t("nav.contact")}
            </Button>
          </Link>

          {/* Mobile menu */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-border bg-background p-3 sm:p-4">
          <div className="container">
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
                className="flex-1 px-4 py-2.5 rounded-full border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                autoFocus
              />
              <Button type="submit" size="icon" className="rounded-full h-10 w-10">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile menu - full screen overlay for better UX */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-14 z-40 bg-background animate-in slide-in-from-top-2">
          <nav className="container py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-base font-semibold text-foreground hover:text-primary py-3.5 px-4 rounded-xl hover:bg-secondary transition-colors active:bg-secondary"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-border my-3" />
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full rounded-full font-semibold h-12 text-base">
                {t("nav.contact")}
              </Button>
            </Link>
            <div className="flex items-center justify-center gap-4 pt-4">
              <button
                onClick={() => setLang(lang === "en" ? "es" : "en")}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary text-foreground text-sm font-medium"
              >
                <Globe className="h-4 w-4" />
                {lang === "en" ? "Español" : "English"}
              </button>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary text-foreground text-sm font-medium"
              >
                {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                {theme === "light" ? t("theme.dark") : t("theme.light")}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
