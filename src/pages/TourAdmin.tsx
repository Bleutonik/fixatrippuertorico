import { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Pencil, Trash2, Eye, ArrowLeft, Save, Star, X, Upload } from "lucide-react";
import { toast } from "sonner";
import { useToursAdmin, useCreateTour, useUpdateTour, useDeleteTour, useSeedTours, Tour } from "@/hooks/useTours";
import { tours as staticTours } from "@/data/tours";

const EMPTY: Partial<Tour> = {
  name: '', slug: '', price: 0, duration: '', location: '', rating: 5,
  rating_count: 0, age: '', image: '', gallery: [], category: 'adventure',
  description: '', highlights: [], experience: '', included: [], not_included: [],
  featured: false, item_code: '', fareharbor_item_id: '', active: true, sort_order: 0,
};

const CATEGORIES = ['adventure', 'cultural', 'food', 'water', 'nature', 'nightlife', 'family', 'luxury'];

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function TourAdmin() {
  const { data: tours = [], isLoading } = useToursAdmin();
  const createTour = useCreateTour();
  const updateTour = useUpdateTour();
  const deleteTour = useDeleteTour();
  const seedTours  = useSeedTours();

  const [modal, setModal] = useState<'create' | 'edit' | null>(null);
  const [form, setForm] = useState<Partial<Tour>>(EMPTY);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [seeding, setSeeding] = useState(false);
  const [token, setToken] = useState('');
  const [authed, setAuthed] = useState(!!localStorage.getItem('crm_token'));

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('https://crm-ia-production-c247.up.railway.app/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'admin@crm.com', password: token }),
    });
    const data = await res.json();
    if (data.token) {
      localStorage.setItem('crm_token', data.token);
      setAuthed(true);
    } else {
      toast.error('Contraseña incorrecta');
    }
  };

  const openCreate = () => { setForm(EMPTY); setModal('create'); };
  const openEdit = (t: Tour) => { setForm(t); setModal('edit'); };
  const closeModal = () => { setModal(null); setForm(EMPTY); };

  const set = (key: keyof Tour, value: unknown) =>
    setForm(prev => ({ ...prev, [key]: value }));

  const handleSave = async () => {
    if (!form.name) return toast.error('El nombre es requerido');
    if (!form.slug) form.slug = slugify(form.name!);
    try {
      if (modal === 'create') {
        await createTour.mutateAsync(form);
        toast.success('Tour creado');
      } else {
        await updateTour.mutateAsync(form as Tour & { id: number });
        toast.success('Tour actualizado');
      }
      closeModal();
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTour.mutateAsync(id);
      toast.success('Tour eliminado');
      setDeleting(null);
    } catch {
      toast.error('Error eliminando tour');
    }
  };

  const handleSeed = async () => {
    setSeeding(true);
    try {
      const result = await seedTours.mutateAsync(staticTours as any[]);
      toast.success(`${result.inserted} tours importados de la base de datos estática`);
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setSeeding(false);
    }
  };

  if (!authed) {
    return (
      <div style={{ minHeight: '100vh', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <form onSubmit={login} style={{ background: '#1e293b', borderRadius: 16, padding: 32, width: 360, border: '1px solid #334155' }}>
          <h2 style={{ color: '#fff', fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Admin — Tours</h2>
          <input type="password" placeholder="Contraseña admin" value={token} onChange={e => setToken(e.target.value)}
            style={{ width: '100%', padding: '10px 14px', borderRadius: 8, border: '1px solid #475569', background: '#0f172a', color: '#fff', fontSize: 14, marginBottom: 14, boxSizing: 'border-box' }} />
          <button type="submit" style={{ width: '100%', padding: '10px 0', background: '#2563eb', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600, cursor: 'pointer', fontSize: 14 }}>
            Entrar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#0f172a', color: '#e2e8f0', fontFamily: 'system-ui, sans-serif' }}>
      {/* Header */}
      <div style={{ background: '#1e293b', borderBottom: '1px solid #334155', padding: '16px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
        <Link to="/" style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: 6, textDecoration: 'none', fontSize: 13 }}>
          <ArrowLeft size={16} /> Volver al sitio
        </Link>
        <div style={{ flex: 1 }} />
        <span style={{ color: '#94a3b8', fontSize: 13 }}>{tours.length} tours</span>
        <button onClick={handleSeed} disabled={seeding}
          style={{ padding: '8px 14px', background: '#7c3aed20', border: '1px solid #7c3aed60', color: '#a78bfa', borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Upload size={14} />{seeding ? 'Importando...' : 'Importar tours estáticos'}
        </button>
        <button onClick={openCreate}
          style={{ padding: '8px 16px', background: '#2563eb', border: 'none', color: '#fff', borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
          <Plus size={14} /> Nuevo tour
        </button>
      </div>

      {/* List */}
      <div style={{ padding: 24, maxWidth: 1200, margin: '0 auto' }}>
        {isLoading ? (
          <div style={{ textAlign: 'center', color: '#64748b', padding: 60 }}>Cargando tours...</div>
        ) : tours.length === 0 ? (
          <div style={{ textAlign: 'center', color: '#64748b', padding: 60 }}>
            <p style={{ fontSize: 16, marginBottom: 16 }}>No hay tours todavía.</p>
            <p style={{ fontSize: 13 }}>Haz clic en "Importar tours estáticos" para migrar los 30 tours existentes.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
            {tours.map(tour => (
              <div key={tour.id} style={{ background: '#1e293b', border: `1px solid ${tour.active ? '#334155' : '#451010'}`, borderRadius: 12, overflow: 'hidden' }}>
                <div style={{ position: 'relative', height: 160 }}>
                  <img src={tour.image} alt={tour.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: 8, right: 8, display: 'flex', gap: 6 }}>
                    {tour.featured && <span style={{ background: '#f59e0b', color: '#000', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 10 }}>FEATURED</span>}
                    {!tour.active && <span style={{ background: '#ef4444', color: '#fff', fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 10 }}>INACTIVO</span>}
                  </div>
                </div>
                <div style={{ padding: '14px 16px' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#f1f5f9', marginBottom: 4 }}>{tour.name}</div>
                  <div style={{ display: 'flex', gap: 12, fontSize: 12, color: '#94a3b8', marginBottom: 12 }}>
                    <span>${tour.price}</span>
                    <span>·</span>
                    <span>{tour.location}</span>
                    <span>·</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}><Star size={10} fill="#f59e0b" color="#f59e0b" />{tour.rating}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8 }}>
                    <a href={`/tour/${tour.slug}`} target="_blank" rel="noreferrer"
                      style={{ flex: 1, padding: '7px 0', background: 'transparent', border: '1px solid #334155', color: '#94a3b8', borderRadius: 7, cursor: 'pointer', fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, textDecoration: 'none' }}>
                      <Eye size={12} /> Ver
                    </a>
                    <button onClick={() => openEdit(tour)}
                      style={{ flex: 1, padding: '7px 0', background: '#2563eb20', border: '1px solid #2563eb50', color: '#60a5fa', borderRadius: 7, cursor: 'pointer', fontSize: 12, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                      <Pencil size={12} /> Editar
                    </button>
                    <button onClick={() => setDeleting(tour.id)}
                      style={{ padding: '7px 10px', background: '#ef444420', border: '1px solid #ef444450', color: '#f87171', borderRadius: 7, cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                      <Trash2 size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Edit/Create Modal */}
      {modal && (
        <div onClick={closeModal} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#1e293b', border: '1px solid #334155', borderRadius: 16, width: '100%', maxWidth: 700, maxHeight: '90vh', overflow: 'auto', padding: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: '#f1f5f9', margin: 0 }}>{modal === 'create' ? 'Nuevo tour' : 'Editar tour'}</h2>
              <button onClick={closeModal} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}><X size={20} /></button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              <Field label="Nombre" required>
                <input value={form.name || ''} onChange={e => { set('name', e.target.value); if (modal === 'create') set('slug', slugify(e.target.value)); }} style={iStyle} />
              </Field>
              <Field label="Slug (URL)">
                <input value={form.slug || ''} onChange={e => set('slug', e.target.value)} style={iStyle} />
              </Field>
              <Field label="Precio ($)">
                <input type="number" value={form.price || 0} onChange={e => set('price', +e.target.value)} style={iStyle} />
              </Field>
              <Field label="Duración">
                <input value={form.duration || ''} onChange={e => set('duration', e.target.value)} placeholder="7 Hours" style={iStyle} />
              </Field>
              <Field label="Ubicación">
                <input value={form.location || ''} onChange={e => set('location', e.target.value)} placeholder="San Juan" style={iStyle} />
              </Field>
              <Field label="Edad mínima">
                <input value={form.age || ''} onChange={e => set('age', e.target.value)} placeholder="+8" style={iStyle} />
              </Field>
              <Field label="Categoría">
                <select value={form.category || 'adventure'} onChange={e => set('category', e.target.value)} style={iStyle}>
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </Field>
              <Field label="FareHarbor Item ID">
                <input value={form.fareharbor_item_id || ''} onChange={e => set('fareharbor_item_id', e.target.value)} placeholder="12345" style={iStyle} />
              </Field>
              <Field label="Imagen principal (URL)" style={{ gridColumn: '1 / -1' }}>
                <input value={form.image || ''} onChange={e => set('image', e.target.value)} placeholder="https://..." style={iStyle} />
              </Field>
              <Field label="Descripción" style={{ gridColumn: '1 / -1' }}>
                <textarea value={form.description || ''} onChange={e => set('description', e.target.value)} rows={4} style={{ ...iStyle, resize: 'vertical' }} />
              </Field>
              <Field label="Highlights (uno por línea)" style={{ gridColumn: '1 / -1' }}>
                <textarea value={(form.highlights || []).join('\n')} onChange={e => set('highlights', e.target.value.split('\n').filter(Boolean))} rows={4} style={{ ...iStyle, resize: 'vertical' }} />
              </Field>
              <Field label="Incluye (uno por línea)" style={{ gridColumn: '1 / -1' }}>
                <textarea value={(form.included || []).join('\n')} onChange={e => set('included', e.target.value.split('\n').filter(Boolean))} rows={3} style={{ ...iStyle, resize: 'vertical' }} />
              </Field>
              <Field label="No incluye (uno por línea)" style={{ gridColumn: '1 / -1' }}>
                <textarea value={(form.not_included || []).join('\n')} onChange={e => set('not_included', e.target.value.split('\n').filter(Boolean))} rows={3} style={{ ...iStyle, resize: 'vertical' }} />
              </Field>
            </div>

            <div style={{ display: 'flex', gap: 20, marginTop: 16 }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 13, color: '#94a3b8' }}>
                <input type="checkbox" checked={!!form.featured} onChange={e => set('featured', e.target.checked)} />
                Destacado
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', fontSize: 13, color: '#94a3b8' }}>
                <input type="checkbox" checked={form.active !== false} onChange={e => set('active', e.target.checked)} />
                Activo
              </label>
            </div>

            <div style={{ display: 'flex', gap: 10, marginTop: 24, justifyContent: 'flex-end' }}>
              <button onClick={closeModal} style={{ padding: '9px 20px', background: 'transparent', border: '1px solid #334155', color: '#94a3b8', borderRadius: 8, cursor: 'pointer', fontSize: 13 }}>Cancelar</button>
              <button onClick={handleSave} disabled={createTour.isPending || updateTour.isPending}
                style={{ padding: '9px 20px', background: '#2563eb', border: 'none', color: '#fff', borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Save size={14} />{createTour.isPending || updateTour.isPending ? 'Guardando...' : 'Guardar'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete confirm */}
      {deleting && (
        <div onClick={() => setDeleting(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div onClick={e => e.stopPropagation()} style={{ background: '#1e293b', border: '1px solid #ef444450', borderRadius: 12, padding: 28, maxWidth: 360, textAlign: 'center' }}>
            <p style={{ color: '#f1f5f9', fontSize: 15, marginBottom: 20 }}>¿Eliminar este tour?</p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
              <button onClick={() => setDeleting(null)} style={{ padding: '8px 20px', background: 'transparent', border: '1px solid #334155', color: '#94a3b8', borderRadius: 8, cursor: 'pointer', fontSize: 13 }}>Cancelar</button>
              <button onClick={() => handleDelete(deleting)} style={{ padding: '8px 20px', background: '#ef4444', border: 'none', color: '#fff', borderRadius: 8, cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>Eliminar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const iStyle: React.CSSProperties = {
  width: '100%', padding: '9px 12px', background: '#0f172a', border: '1px solid #334155',
  borderRadius: 8, color: '#f1f5f9', fontSize: 13, outline: 'none', boxSizing: 'border-box',
  fontFamily: 'inherit',
};

function Field({ label, children, required, style }: { label: string; children: React.ReactNode; required?: boolean; style?: React.CSSProperties }) {
  return (
    <div style={style}>
      <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 6 }}>
        {label}{required && <span style={{ color: '#ef4444', marginLeft: 3 }}>*</span>}
      </label>
      {children}
    </div>
  );
}
