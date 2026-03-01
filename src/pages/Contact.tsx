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

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you soon." });
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
      address: {
        "@type": "PostalAddress",
        addressRegion: "PR",
        addressCountry: "US",
      },
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
      <main className="py-16">
        <div className="container max-w-4xl">
          <header className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground font-display mb-4">
              We'd Love to Hear From You
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              <strong>Fix a Trip Puerto Rico</strong> is a boutique experience concierge, created to help travelers discover the island in a more personal, authentic, and seamless way. Tell us about your trip, your group, and what you'd like to experience in Puerto Rico.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-4">Get in Touch</h2>
                <p className="text-muted-foreground text-sm mb-6">
                  We're a small team with years of experience designing tailor-made itineraries for families, couples, and groups of friends—always focused on quality, trust, and local insight.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Request a Call Back</h3>
                  <a href="tel:+17874880202" className="text-primary hover:underline">+1 787 488 0202</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Email Us</h3>
                  <a href="mailto:bookings@fixatrippr.com" className="text-primary hover:underline">bookings@fixatrippr.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground">Puerto Rico</p>
                </div>
              </div>

              <div className="pt-4">
                <img
                  src="https://fixatrippuertorico.com/wp-content/uploads/2026/01/FAMILY--971x1024.jpg"
                  alt="Happy family enjoying a Fix a Trip Puerto Rico experience"
                  className="rounded-xl shadow-lg w-full max-w-sm"
                  loading="lazy"
                />
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-4">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-foreground block mb-1">Your Name</label>
                  <Input
                    id="name"
                    placeholder="Full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground block mb-1">Your Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground block mb-1">Your Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your trip, your group, and what you'd like to experience..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    rows={5}
                    className="rounded-lg"
                  />
                </div>
                <Button type="submit" className="w-full rounded-full font-semibold">
                  Send Message
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
