import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, Moon, Sun, Globe, ChevronRight } from "lucide-react";
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
    { label: t("nav.boat"), href: "/fix-a-boat" },
    { label: t("nav.chef"), href: "/fix-a-chef" },
    { label: t("nav.transport"), href: "/fix-a-transport" },
    { label: t("nav.wellness"), href: "/fix-a-wellness" },
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="container flex h-16 sm:h-[72px] items-center justify-between gap-3">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 group">
          <img
            src="https://fixatrippuertorico.com/wp-content/uploads/2025/09/FIX-A-TRIP-LOGO.webp"
            alt="Fix a Trip Puerto Rico"
            className="h-9 sm:h-11 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="relative px-3.5 py-2 text-[13px] font-medium tracking-wide text-foreground/80 hover:text-foreground transition-colors rounded-lg hover:bg-secondary/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-0.5">
          {/* Language toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "es" : "en")}
            className="p-2.5 rounded-xl hover:bg-secondary transition-all duration-200 flex items-center gap-1.5 focus-ring"
            aria-label="Toggle language"
            title={lang === "en" ? "Cambiar a Español" : "Switch to English"}
          >
            <Globe className="h-[18px] w-[18px] text-foreground/70" />
            <span className="text-xs font-semibold text-foreground/70 hidden sm:inline">{lang.toUpperCase()}</span>
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl hover:bg-secondary transition-all duration-200 focus-ring"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Moon className="h-[18px] w-[18px] text-foreground/70" />
            ) : (
              <Sun className="h-[18px] w-[18px] text-foreground/70" />
            )}
          </button>

          {/* Search */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2.5 rounded-xl hover:bg-secondary transition-all duration-200 focus-ring"
            aria-label="Search"
          >
            <Search className="h-[18px] w-[18px] text-foreground/70" />
          </button>

          {/* Contact button */}
          <Link to="/contact" className="hidden sm:block ml-2">
            <Button className="rounded-xl px-5 font-semibold text-xs h-10 bg-gradient-to-r from-primary to-primary-glow hover:opacity-90 transition-opacity shadow-soft">
              {t("nav.contact")}
            </Button>
          </Link>

          {/* Mobile menu */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-xl hover:bg-secondary transition-all duration-200 -mr-1 focus-ring"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl p-4 animate-fade-up">
          <div className="container max-w-xl">
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
                className="flex-1 px-5 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 text-sm transition-all"
                autoFocus
              />
              <Button type="submit" className="rounded-xl h-[46px] px-5 bg-gradient-to-r from-primary to-primary-glow">
                <Search className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-background/98 backdrop-blur-2xl animate-fade-in">
          <nav className="container py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center justify-between text-[15px] font-medium text-foreground py-4 px-5 rounded-2xl hover:bg-secondary transition-all active:scale-[0.98]"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
            <div className="border-t border-border/50 my-4" />
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full rounded-2xl font-semibold h-14 text-base bg-gradient-to-r from-primary to-primary-glow shadow-elevated">
                {t("nav.contact")}
              </Button>
            </Link>
            <div className="flex items-center justify-center gap-3 pt-6">
              <button
                onClick={() => setLang(lang === "en" ? "es" : "en")}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-secondary text-foreground text-sm font-medium active:scale-95 transition-transform"
              >
                <Globe className="h-4 w-4" />
                {lang === "en" ? "Español" : "English"}
              </button>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-secondary text-foreground text-sm font-medium active:scale-95 transition-transform"
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
