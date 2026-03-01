import { Compass, BookOpen, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display leading-tight">
              Fix a Trip to Puerto Rico: Enjoy the Perfect Vacation.
            </h2>
            <p className="text-muted-foreground text-lg">
              Seamless travel planning for your Island of Enchantment.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Compass className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Expert Travel Agents</h4>
                <p className="text-sm text-muted-foreground">
                  Experienced local experts to craft a perfect and personalized itinerary.
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground">Travel Guidelines</h4>
                <p className="text-sm text-muted-foreground">
                  Essential tips and updated information for your journey.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <p className="text-xs text-muted-foreground">Call Us</p>
                <p className="font-bold text-foreground text-lg">+1 787 488 0202</p>
              </div>
            </div>

            <Link to="/tours">
              <Button className="rounded-full px-8 py-3 font-semibold text-base mt-2">
                Explore Activities
              </Button>
            </Link>
          </div>

          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <div className="relative">
                <img
                  src="https://fixatrippuertorico.com/wp-content/uploads/2026/01/a.webp"
                  alt="Puerto Rico flag"
                  className="w-80 h-80 object-cover rounded-full mx-auto shadow-2xl"
                />
                <img
                  src="https://fixatrippuertorico.com/wp-content/uploads/2026/01/BIOLUM.webp"
                  alt="Bioluminescent bay"
                  className="absolute -bottom-6 -left-6 w-40 h-40 object-cover rounded-2xl shadow-xl border-4 border-background"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
