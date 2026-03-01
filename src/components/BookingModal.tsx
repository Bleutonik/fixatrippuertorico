import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Users, Minus, Plus, X, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Tour } from "@/data/tours";
import { useLanguage } from "@/contexts/LanguageContext";

interface BookingModalProps {
  tour: Tour;
  open: boolean;
  onClose: () => void;
}

const BookingModal = ({ tour, open, onClose }: BookingModalProps) => {
  const { t } = useLanguage();
  const [date, setDate] = useState<Date>();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  if (!open) return null;

  const totalGuests = adults + children;
  const totalPrice = adults * tour.price + children * Math.round(tour.price * 0.7);

  const buildWhatsAppMessage = () => {
    const dateStr = date ? format(date, "MMMM d, yyyy") : "Not selected yet";
    const msg = `Hello! I'd like to book:\n\n🎯 *${tour.name}*\n📅 Date: ${dateStr}\n👥 Adults: ${adults} | Children: ${children}\n💰 Estimated Total: $${totalPrice}\n\nPlease confirm availability. Thank you!`;
    return encodeURIComponent(msg);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/17874880202?text=${buildWhatsAppMessage()}`, "_blank");
  };

  const handleCall = () => {
    window.open("tel:+17874880202", "_self");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-md bg-card border border-border rounded-t-3xl sm:rounded-3xl shadow-elevated p-6 sm:p-8 animate-fade-up max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-secondary transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5 text-muted-foreground" />
        </button>

        <h3 className="text-xl font-bold text-foreground font-display mb-1">{t("booking.title")}</h3>
        <p className="text-sm text-muted-foreground mb-6 line-clamp-1">{tour.name}</p>

        {/* Date picker */}
        <div className="space-y-4 mb-6">
          <label className="text-sm font-semibold text-foreground block">{t("booking.date")}</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal h-12 rounded-xl",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : t("booking.selectdate")}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(d) => d < new Date()}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Guests */}
        <div className="space-y-4 mb-6">
          <label className="text-sm font-semibold text-foreground block">{t("booking.guests")}</label>
          
          <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-secondary/30">
            <div>
              <p className="text-sm font-medium text-foreground">{t("booking.adults")}</p>
              <p className="text-xs text-muted-foreground">${tour.price} {t("booking.each")}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setAdults(Math.max(1, adults - 1))}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-40"
                disabled={adults <= 1}
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-6 text-center font-semibold text-foreground">{adults}</span>
              <button
                onClick={() => setAdults(Math.min(20, adults + 1))}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 rounded-xl border border-border bg-secondary/30">
            <div>
              <p className="text-sm font-medium text-foreground">{t("booking.children")}</p>
              <p className="text-xs text-muted-foreground">${Math.round(tour.price * 0.7)} {t("booking.each")}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setChildren(Math.max(0, children - 1))}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors disabled:opacity-40"
                disabled={children <= 0}
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-6 text-center font-semibold text-foreground">{children}</span>
              <button
                onClick={() => setChildren(Math.min(10, children + 1))}
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Total */}
        <div className="flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/20 mb-6">
          <div>
            <p className="text-xs text-muted-foreground">{t("booking.estimated")}</p>
            <p className="text-2xl font-bold gradient-text">${totalPrice}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted-foreground">{totalGuests} {t("booking.gueststotal")}</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="space-y-3">
          <Button
            onClick={handleWhatsApp}
            className="w-full rounded-xl h-12 font-semibold text-base bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
          >
            <MessageCircle className="h-5 w-5" />
            {t("booking.whatsapp")}
          </Button>
          <Button
            onClick={handleCall}
            variant="outline"
            className="w-full rounded-xl h-12 font-semibold text-base gap-2"
          >
            <Phone className="h-5 w-5" />
            {t("booking.call")}
          </Button>
        </div>

        <p className="text-xs text-center text-muted-foreground mt-4">
          {t("detail.freecancel")}
        </p>
      </div>
    </div>
  );
};

export default BookingModal;
