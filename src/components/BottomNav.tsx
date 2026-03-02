import { NavLink, useLocation } from "react-router-dom";
import { Home, Ship, ChefHat, Car, Heart, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BottomNav = () => {
  const { t } = useLanguage();
  const location = useLocation();

  const items = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Ship, label: "Boat", href: "/fix-a-boat" },
    { icon: ChefHat, label: "Chef", href: "/fix-a-chef" },
    { icon: Car, label: "Transport", href: "/fix-a-transport" },
    { icon: Heart, label: "Wellness", href: "/fix-a-wellness" },
    { icon: BookOpen, label: "Blog", href: "/blog" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 lg:hidden glass safe-bottom">
      <div className="flex items-center justify-around h-16">
        {items.map((item) => {
          const isActive =
            item.href === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.href);
          return (
            <NavLink
              key={item.href}
              to={item.href}
              className="flex flex-col items-center justify-center gap-0.5 flex-1 h-full transition-colors"
            >
              <item.icon
                className={`h-5 w-5 transition-all duration-200 ${
                  isActive
                    ? "text-primary scale-110"
                    : "text-muted-foreground"
                }`}
                strokeWidth={isActive ? 2.5 : 1.8}
              />
              <span
                className={`text-[10px] font-medium transition-colors ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </span>
              {isActive && (
                <div className="absolute top-0 w-8 h-0.5 rounded-full bg-primary" />
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
