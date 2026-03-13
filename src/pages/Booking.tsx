import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, MessageCircle, Phone } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const { lang } = useLanguage();
  const { toast } = useToast();
  const isEs = lang === "es";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState<Date>();
  const [guests, setGuests] = useState("");
  const [notes, setNotes] = useState("");
  const [smsConsent, setSmsConsent] = useState(false);

  const buildWhatsAppMessage = () => {
    const dateStr = date ? format(date, "MMMM d, yyyy") : "Not selected";
    const msg = `Hello! I'd like to book an experience:\n\n👤 Name: ${name}\n📧 Email: ${email}\n📱 Phone: ${phone}\n📅 Date: ${dateStr}\n👥 Guests: ${guests}\n📝 Notes: ${notes}\n\nSMS Consent: ${smsConsent ? "Yes" : "No"}\n\nPlease confirm availability. Thank you!`;
    return encodeURIComponent(msg);
  };

  const handleWhatsApp = () => {
    if (!name || !phone) {
      toast({
        title: isEs ? "Campos requeridos" : "Required fields",
        description: isEs ? "Por favor ingrese su nombre y teléfono." : "Please enter your name and phone number.",
        variant: "destructive",
      });
      return;
    }
    window.open(`https://wa.me/17874880202?text=${buildWhatsAppMessage()}`, "_blank");
  };

  const handleCall = () => {
    window.open("tel:+17874880202", "_self");
  };

  return (
    <>
      <SEOHead
        title={isEs ? "Reservar | Fix a Trip" : "Book Now | Fix a Trip"}
        description={isEs ? "Reserve su experiencia en Puerto Rico con Fix a Trip" : "Book your Puerto Rico experience with Fix a Trip"}
      />
      <Header />
      <main className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold font-display text-foreground mb-2 text-center">
            {isEs ? "Reservar Experiencia" : "Book Your Experience"}
          </h1>
          <p className="text-muted-foreground text-center mb-8">
            {isEs
              ? "Complete el formulario y nos pondremos en contacto para confirmar su reserva."
              : "Fill out the form and we'll get in touch to confirm your booking."}
          </p>

          <div className="space-y-5">
            {/* Name */}
            <div className="space-y-2">
              <Label htmlFor="name">{isEs ? "Nombre completo *" : "Full name *"}</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={isEs ? "Su nombre" : "Your name"}
                className="h-12 rounded-xl"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">{isEs ? "Correo electrónico" : "Email"}</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
                className="h-12 rounded-xl"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone">{isEs ? "Teléfono *" : "Phone number *"}</Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 (787) 000-0000"
                className="h-12 rounded-xl"
              />
            </div>

            {/* Date */}
            <div className="space-y-2">
              <Label>{isEs ? "Fecha preferida" : "Preferred date"}</Label>
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
                    {date ? format(date, "PPP") : (isEs ? "Seleccionar fecha" : "Select a date")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(d) => d < new Date()}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>

            {/* Guests */}
            <div className="space-y-2">
              <Label htmlFor="guests">{isEs ? "Número de personas" : "Number of guests"}</Label>
              <Input
                id="guests"
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder="2"
                className="h-12 rounded-xl"
              />
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <Label htmlFor="notes">{isEs ? "Notas adicionales" : "Additional notes"}</Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={isEs ? "Tours de interés, preferencias especiales..." : "Tours of interest, special preferences..."}
                className="rounded-xl min-h-[80px]"
              />
            </div>

            {/* SMS Consent Checkbox */}
            <div className="flex items-start gap-3 p-4 rounded-xl border border-border bg-muted/30">
              <Checkbox
                id="sms-consent"
                checked={smsConsent}
                onCheckedChange={(checked) => setSmsConsent(checked === true)}
                className="mt-0.5"
              />
              <label htmlFor="sms-consent" className="text-sm text-foreground/90 leading-relaxed cursor-pointer">
                {isEs ? (
                  <>
                    Acepto recibir mensajes de texto SMS de Fix A Trip PR al número proporcionado anteriormente con respecto a confirmaciones de reserva, recordatorios de actividades, actualizaciones de viaje y mensajes de seguimiento. Pueden aplicarse tarifas de mensajes y datos. Responda STOP para cancelar la suscripción en cualquier momento. Vea nuestra{" "}
                    <Link to="/privacy-policy" className="text-primary underline font-medium">
                      Política de Privacidad
                    </Link>.
                  </>
                ) : (
                  <>
                    I agree to receive SMS text messages from Fix A Trip PR at the number provided above regarding booking confirmations, activity reminders, trip updates, and follow-up messages. Message &amp; data rates may apply. Reply STOP to unsubscribe at any time. View our{" "}
                    <Link to="/privacy-policy" className="text-primary underline font-medium">
                      Privacy Policy
                    </Link>.
                  </>
                )}
              </label>
              <p className="text-xs text-muted-foreground mt-1 ml-0">
                {isEs
                  ? "(Este campo es obligatorio para completar su reserva.)"
                  : "(This field is required to complete your booking.)"}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <Button
                onClick={handleWhatsApp}
                className="w-full rounded-xl h-12 font-semibold text-base bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                {isEs ? "Reservar por WhatsApp" : "Book via WhatsApp"}
              </Button>
              <Button
                onClick={handleCall}
                variant="outline"
                className="w-full rounded-xl h-12 font-semibold text-base gap-2"
              >
                <Phone className="h-5 w-5" />
                {isEs ? "Llamar para reservar" : "Call to Book"}
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground">
              {isEs
                ? "No se realizará ningún cargo hasta confirmar la disponibilidad. Cancelación gratuita."
                : "No charges until availability is confirmed. Free cancellation."}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Booking;
