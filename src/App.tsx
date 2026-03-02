import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";

const Tours = lazy(() => import("./pages/Tours"));
const TourDetail = lazy(() => import("./pages/TourDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const FixABoat = lazy(() => import("./pages/FixABoat"));
const BoatDetail = lazy(() => import("./pages/BoatDetail"));
const FixAChef = lazy(() => import("./pages/FixAChef"));
const FixATransport = lazy(() => import("./pages/FixATransport"));
const FixAWellness = lazy(() => import("./pages/FixAWellness"));
const NotFound = lazy(() => import("./pages/NotFound"));
import BottomNav from "./components/BottomNav";
import RouteScrollToTop from "./components/RouteScrollToTop";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <RouteScrollToTop />
            <div className="pb-16 lg:pb-0">
              <Suspense fallback={<div className="min-h-screen" />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/tours" element={<Tours />} />
                  <Route path="/tour/:slug" element={<TourDetail />} />
                  <Route path="/fix-a-boat" element={<FixABoat />} />
                  <Route path="/fix-a-boat/:slug" element={<BoatDetail />} />
                  <Route path="/fix-a-chef" element={<FixAChef />} />
                  <Route path="/fix-a-transport" element={<FixATransport />} />
                  <Route path="/fix-a-wellness" element={<FixAWellness />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <BottomNav />
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
