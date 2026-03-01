import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:bookings@fixatrippr.com?subject=${subject}&body=${body}`;
    toast({ title: t("contact.sent"), description: t("contact.sentdesc") });
    setForm({ name: "", email: "", message: "" });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Fix a Trip Puerto Rico",
    description: "Get in touch with Fix a Trip Puerto Rico for personalized travel recommendations and tour bookings.",
    url: "https://fixatrippuertorico.com/contact",
    mainEntity: {
      "@type": "TravelAgency",
      name: "Fix a Trip Puerto Rico",
      telephone: "+1-787-488-0202",
      email: "bookings@fixatrippr.com",
      address: { "@type": "PostalAddress", addressRegion: "PR", addressCountry: "US" },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Us | Fix a Trip Puerto Rico"
        description="Contact Fix a Trip Puerto Rico for personalized travel recommendations, tour bookings, and trip planning. Call +1 787 488 0202 or email bookings@fixatrippr.com."
        canonicalPath="/contact"
        jsonLd={jsonLd}
      />
      <Header />
      <main className="py-10 sm:py-16">
        <div className="container max-w-4xl">
          <header className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground font-display mb-3 sm:mb-4">
              {t("contact.title")}
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
              {t("contact.subtitle")}
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">{t("contact.getintouch")}</h2>
                <p className="text-muted-foreground text-sm mb-4 sm:mb-6">
                  {t("contact.team")}
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">{t("contact.callback")}</h3>
                  <a href="tel:+17874880202" className="text-primary hover:underline text-sm sm:text-base">+1 787 488 0202</a>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">{t("contact.emailus")}</h3>
                  <a href="mailto:bookings@fixatrippr.com" className="text-primary hover:underline text-sm sm:text-base">bookings@fixatrippr.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base">{t("contact.location")}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">Puerto Rico</p>
                </div>
              </div>

              <div className="pt-2 hidden sm:block">
                <img
                  src="https://fixatrippuertorico.com/wp-content/uploads/2026/01/FAMILY--971x1024.jpg"
                  alt="Happy family enjoying a Fix a Trip Puerto Rico experience"
                  className="rounded-xl shadow-lg w-full max-w-sm"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">{t("contact.send")}</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground block mb-1">{t("contact.name")}</label>
                  <Input
                    id="name"
                    placeholder={t("contact.name")}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="rounded-lg h-11"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground block mb-1">{t("contact.email")}</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="rounded-lg h-11"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground block mb-1">{t("contact.message")}</label>
                  <Textarea
                    id="message"
                    placeholder={t("contact.placeholder")}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="rounded-lg"
                  />
                </div>
                <Button type="submit" className="w-full rounded-full font-semibold h-11">
                  {t("contact.submit")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
