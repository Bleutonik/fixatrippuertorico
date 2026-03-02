import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Lock, Plus, Pencil, Trash2, Eye, ArrowLeft, Save, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import SEOHead from "@/components/SEOHead";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url: string;
  category: string;
  author: string;
  published: boolean;
  created_at: string;
}

const emptyPost: Omit<BlogPost, "id" | "created_at"> = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  image_url: "",
  category: "",
  author: "Fix a Trip PR",
  published: true,
};

const BlogAdmin = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [storedPassword, setStoredPassword] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [creating, setCreating] = useState(false);
  const [formData, setFormData] = useState(emptyPost);

  const callApi = useCallback(
    async (action: string, post?: any) => {
      const { data, error } = await supabase.functions.invoke("blog-admin", {
        body: { action, password: storedPassword, post },
      });
      if (error) throw new Error(error.message);
      if (data?.error) throw new Error(data.error);
      return data;
    },
    [storedPassword]
  );

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const result = await callApi("list");
      setPosts(result.data || []);
    } catch (e: any) {
      toast.error(e.message);
    }
    setLoading(false);
  }, [callApi]);

  useEffect(() => {
    if (authenticated) fetchPosts();
  }, [authenticated, fetchPosts]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setStoredPassword(password);
    try {
      const { data, error } = await supabase.functions.invoke("blog-admin", {
        body: { action: "list", password },
      });
      if (error || data?.error) {
        toast.error("Contraseña incorrecta");
        return;
      }
      setAuthenticated(true);
      setPosts(data.data || []);
    } catch {
      toast.error("Error de conexión");
    }
  };

  const handleSave = async () => {
    try {
      if (creating) {
        await callApi("create", formData);
        toast.success("Artículo creado");
      } else if (editing) {
        await callApi("update", { ...formData, id: editing.id });
        toast.success("Artículo actualizado");
      }
      setCreating(false);
      setEditing(null);
      setFormData(emptyPost);
      fetchPosts();
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("¿Estás seguro de eliminar este artículo?")) return;
    try {
      await callApi("delete", { id });
      toast.success("Artículo eliminado");
      fetchPosts();
    } catch (e: any) {
      toast.error(e.message);
    }
  };

  const startEdit = (post: BlogPost) => {
    setEditing(post);
    setCreating(false);
    setFormData({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      image_url: post.image_url,
      category: post.category,
      author: post.author,
      published: post.published,
    });
  };

  const startCreate = () => {
    setCreating(true);
    setEditing(null);
    setFormData(emptyPost);
  };

  const autoSlug = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();

  // LOGIN SCREEN
  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <SEOHead title="Blog Admin" description="Admin panel" canonicalPath="/admin/blog" />
        <div className="w-full max-w-sm liquid-glass rounded-2xl p-8">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Lock className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold text-foreground font-display">Blog Admin</h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="password"
              placeholder="Contraseña de administrador"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl"
              required
            />
            <Button type="submit" className="w-full rounded-xl bg-primary">
              Acceder
            </Button>
          </form>
          <Link to="/" className="block text-center text-sm text-muted-foreground mt-4 hover:text-primary">
            ← Volver al sitio
          </Link>
        </div>
      </div>
    );
  }

  // EDITOR FORM
  if (creating || editing) {
    return (
      <div className="min-h-screen bg-background">
        <SEOHead title="Blog Admin - Editor" description="Admin panel" canonicalPath="/admin/blog" />
        <div className="sticky top-0 z-50 glass border-b border-border">
          <div className="container flex items-center justify-between h-14">
            <button
              onClick={() => { setCreating(false); setEditing(null); setFormData(emptyPost); }}
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" /> Volver
            </button>
            <h1 className="font-semibold text-foreground">
              {creating ? "Nuevo Artículo" : "Editar Artículo"}
            </h1>
            <Button onClick={handleSave} size="sm" className="rounded-xl gap-1.5 bg-primary">
              <Save className="h-4 w-4" /> Guardar
            </Button>
          </div>
        </div>

        <div className="container max-w-3xl py-8 space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Título</Label>
              <Input
                value={formData.title}
                onChange={(e) => {
                  const title = e.target.value;
                  setFormData((f) => ({
                    ...f,
                    title,
                    slug: creating ? autoSlug(title) : f.slug,
                  }));
                }}
                className="rounded-xl"
                placeholder="Título del artículo"
              />
            </div>
            <div className="space-y-2">
              <Label>Slug (URL)</Label>
              <Input
                value={formData.slug}
                onChange={(e) => setFormData((f) => ({ ...f, slug: e.target.value }))}
                className="rounded-xl"
                placeholder="titulo-del-articulo"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label>Categoría</Label>
              <Input
                value={formData.category}
                onChange={(e) => setFormData((f) => ({ ...f, category: e.target.value }))}
                className="rounded-xl"
                placeholder="Beaches, Nature, Culture..."
              />
            </div>
            <div className="space-y-2">
              <Label>Autor</Label>
              <Input
                value={formData.author}
                onChange={(e) => setFormData((f) => ({ ...f, author: e.target.value }))}
                className="rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>URL de Imagen</Label>
            <Input
              value={formData.image_url}
              onChange={(e) => setFormData((f) => ({ ...f, image_url: e.target.value }))}
              className="rounded-xl"
              placeholder="https://..."
            />
            {formData.image_url && (
              <img src={formData.image_url} alt="Preview" className="h-40 w-full object-cover rounded-xl mt-2" />
            )}
          </div>

          <div className="space-y-2">
            <Label>Extracto (resumen corto)</Label>
            <Textarea
              value={formData.excerpt}
              onChange={(e) => setFormData((f) => ({ ...f, excerpt: e.target.value }))}
              className="rounded-xl"
              rows={2}
              placeholder="Breve descripción del artículo..."
            />
          </div>

          <div className="space-y-2">
            <Label>Contenido (usa ## para subtítulos, - para listas)</Label>
            <Textarea
              value={formData.content}
              onChange={(e) => setFormData((f) => ({ ...f, content: e.target.value }))}
              className="rounded-xl font-mono text-sm"
              rows={20}
              placeholder="Escribe el contenido del artículo..."
            />
          </div>

          <div className="flex items-center gap-3">
            <Switch
              checked={formData.published}
              onCheckedChange={(v) => setFormData((f) => ({ ...f, published: v }))}
            />
            <Label>Publicado</Label>
          </div>
        </div>
      </div>
    );
  }

  // POST LIST
  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Blog Admin" description="Admin panel" canonicalPath="/admin/blog" />
      <div className="sticky top-0 z-50 glass border-b border-border">
        <div className="container flex items-center justify-between h-14">
          <h1 className="font-bold text-foreground text-lg font-display">Blog Admin</h1>
          <div className="flex items-center gap-2">
            <Button onClick={startCreate} size="sm" className="rounded-xl gap-1.5 bg-primary">
              <Plus className="h-4 w-4" /> Nuevo
            </Button>
            <Button
              onClick={() => { setAuthenticated(false); setStoredPassword(""); }}
              variant="ghost"
              size="sm"
              className="rounded-xl"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <p className="text-sm text-muted-foreground mb-6">{posts.length} artículos</p>

        {loading ? (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-muted rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="liquid-glass rounded-xl p-4 flex items-center gap-4"
              >
                <img
                  src={post.image_url}
                  alt=""
                  className="h-16 w-24 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground text-sm truncate">{post.title}</h3>
                    {!post.published && (
                      <span className="text-[10px] bg-yellow-500/20 text-yellow-600 px-2 py-0.5 rounded-full font-semibold">
                        Borrador
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground truncate">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">
                      {post.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <Link
                    to={`/blog/${post.slug}`}
                    target="_blank"
                    className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Eye className="h-4 w-4" />
                  </Link>
                  <button
                    onClick={() => startEdit(post)}
                    className="p-2 rounded-lg hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="p-2 rounded-lg hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogAdmin;
