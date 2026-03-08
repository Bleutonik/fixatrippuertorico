import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, BookOpen, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import SEOCrossLinks from "@/components/SEOCrossLinks";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import { useBlogTranslation } from "@/hooks/useBlogTranslation";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image_url: string;
  category: string;
  created_at: string;
  author: string;
}

const Blog = () => {
  const { t, lang } = useLanguage();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("__all__");

  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, slug, excerpt, image_url, category, created_at, author")
        .eq("published", true)
        .order("created_at", { ascending: false });

      if (!error && data) setPosts(data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const { translatedPosts, translating } = useBlogTranslation(posts);
  const categoryValues = ["__all__", ...Array.from(new Set(translatedPosts.map((p) => p.category)))];
  const filtered = activeCategory === "__all__" ? translatedPosts : translatedPosts.filter((p) => p.category === activeCategory);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Fix a Trip Puerto Rico Travel Blog",
    description:
      "Explore expert travel guides, tips, and insider knowledge about Puerto Rico. From hidden beaches and bioluminescent bays to local cuisine, nightlife, adventure sports, and destination weddings — your ultimate resource for planning an unforgettable Puerto Rico experience with Fix a Trip.",
    url: "https://fixatrippuertorico.com/blog",
    publisher: { "@type": "TravelAgency", name: "Fix a Trip Puerto Rico", telephone: "+1-787-488-0202" },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Puerto Rico Travel Blog | Tips, Guides & Insider Knowledge"
        description="Expert travel guides about Puerto Rico — beaches, bioluminescent bays, El Yunque, Old San Juan, local food, nightlife, water sports, weddings & more. Plan your trip with Fix a Trip."
        canonicalPath="/blog"
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/30">
          <div className="container relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
              <BookOpen className="h-4 w-4" />
              {t("blog.badge")}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-display tracking-tight mb-4">
              {t("blog.hero")}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("blog.herodesc")}
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="py-6 border-b border-border">
          <div className="container">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categoryValues.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  }`}
                >
                  {cat === "__all__" ? t("blog.all") : cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 sm:py-24">
          <div className="container">
            {translating && (
              <div className="flex items-center justify-center gap-2 mb-6 text-sm text-muted-foreground">
                <Loader2 className="h-4 w-4 animate-spin" />
                Traduciendo artículos...
              </div>
            )}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden liquid-glass animate-pulse">
                    <div className="aspect-[16/10] bg-muted" />
                    <div className="p-5 space-y-3">
                      <div className="h-4 bg-muted rounded w-1/4" />
                      <div className="h-6 bg-muted rounded w-3/4" />
                      <div className="h-4 bg-muted rounded w-full" />
                    </div>
                  </div>
                ))}
              </div>
            ) : filtered.length === 0 ? (
              <p className="text-center text-muted-foreground text-lg">{t("blog.noarticles")}</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filtered.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group rounded-2xl overflow-hidden liquid-glass hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5 sm:p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(post.created_at).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h2 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                        {t("blog.readmore")} <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        <SEOCrossLinks />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Blog;
