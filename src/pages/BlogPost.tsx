import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Calendar, User, ArrowLeft, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SEOHead from "@/components/SEOHead";
import SEOCrossLinks from "@/components/SEOCrossLinks";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  category: string;
  author: string;
  created_at: string;
}

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();

      if (!error && data) {
        setPost(data);
        // Fetch related
        const { data: related } = await supabase
          .from("blog_posts")
          .select("id, title, slug, excerpt, image_url, category, author, created_at, content")
          .eq("published", true)
          .eq("category", data.category)
          .neq("id", data.id)
          .limit(3);
        if (related) setRelatedPosts(related);
      }
      setLoading(false);
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container max-w-3xl py-20 animate-pulse space-y-6">
          <div className="h-8 bg-muted rounded w-3/4" />
          <div className="h-64 bg-muted rounded-2xl" />
          <div className="space-y-3">
            <div className="h-4 bg-muted rounded w-full" />
            <div className="h-4 bg-muted rounded w-5/6" />
            <div className="h-4 bg-muted rounded w-4/6" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-primary font-semibold hover:underline">← Back to Blog</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // Convert markdown-like content to HTML paragraphs
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2 key={i} className="text-2xl font-bold text-foreground mt-10 mb-4 font-display">
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("### ")) {
        return (
          <h3 key={i} className="text-xl font-bold text-foreground mt-8 mb-3">
            {block.replace("### ", "")}
          </h3>
        );
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
            {items.map((item, j) => (
              <li key={j} className="leading-relaxed">
                {item.replace("- ", "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").split("<strong>").map((part, k) => {
                  if (part.includes("</strong>")) {
                    const [bold, rest] = part.split("</strong>");
                    return <span key={k}><strong className="text-foreground">{bold}</strong>{rest}</span>;
                  }
                  return part;
                })}
              </li>
            ))}
          </ul>
        );
      }
      return (
        <p key={i} className="text-muted-foreground leading-relaxed mb-4">
          {block}
        </p>
      );
    });
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image_url,
    datePublished: post.created_at,
    author: { "@type": "Organization", name: post.author },
    publisher: { "@type": "TravelAgency", name: "Fix a Trip Puerto Rico" },
    url: `https://fixatrippuertorico.com/blog/${post.slug}`,
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${post.title} | Fix a Trip Puerto Rico Blog`}
        description={post.excerpt}
        canonicalPath={`/blog/${post.slug}`}
        jsonLd={jsonLd}
      />
      <Header />
      <main>
        {/* Hero Image */}
        <div className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
          <img src={post.image_url} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>

        {/* Article */}
        <article className="container max-w-3xl -mt-20 relative z-10 pb-16">
          <div className="liquid-glass rounded-2xl p-6 sm:p-10">
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-primary font-semibold mb-6 hover:gap-2.5 transition-all">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>

            <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-display tracking-tight mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-6 border-b border-border">
              <span className="flex items-center gap-1.5">
                <User className="h-4 w-4" /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {new Date(post.created_at).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            <div className="prose-custom">{renderContent(post.content)}</div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-foreground font-display mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedPosts.map((rp) => (
                  <Link
                    key={rp.id}
                    to={`/blog/${rp.slug}`}
                    className="group rounded-2xl overflow-hidden liquid-glass hover:shadow-card transition-all duration-300"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img src={rp.image_url} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground text-sm group-hover:text-primary transition-colors line-clamp-2">
                        {rp.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>

        <SEOCrossLinks />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BlogPostPage;
