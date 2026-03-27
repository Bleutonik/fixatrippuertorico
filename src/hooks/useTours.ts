import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const API = 'https://crm-ia-production-c247.up.railway.app/api';

export interface Tour {
  id: number;
  name: string;
  slug: string;
  price: number;
  duration: string;
  location: string;
  rating: number;
  rating_count: number;
  age: string;
  image: string;
  gallery: string[];
  category: string;
  description: string;
  highlights: string[];
  experience: string;
  included: string[];
  not_included: string[];
  featured: boolean;
  item_code: string;
  fareharbor_item_id: string;
  active: boolean;
  sort_order: number;
}

function getToken() {
  return typeof window !== 'undefined' ? localStorage.getItem('crm_token') || '' : '';
}

// ── Public hooks (no auth) ────────────────────────────────────────────────────

export function useTours() {
  return useQuery<Tour[]>({
    queryKey: ['tours'],
    queryFn: async () => {
      const res = await fetch(`${API}/public/tours`);
      if (!res.ok) throw new Error('Error cargando tours');
      return res.json();
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useTour(slug: string) {
  return useQuery<Tour>({
    queryKey: ['tour', slug],
    queryFn: async () => {
      const res = await fetch(`${API}/public/tours/${slug}`);
      if (!res.ok) throw new Error('Tour no encontrado');
      return res.json();
    },
    enabled: !!slug,
    staleTime: 5 * 60 * 1000,
  });
}

// ── Admin hooks (auth required) ───────────────────────────────────────────────

export function useToursAdmin() {
  return useQuery<Tour[]>({
    queryKey: ['tours-admin'],
    queryFn: async () => {
      const res = await fetch(`${API}/tours`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (!res.ok) throw new Error('Error cargando tours');
      return res.json();
    },
  });
}

export function useCreateTour() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (data: Partial<Tour>) => {
      const res = await fetch(`${API}/tours`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Error creando tour');
      }
      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['tours'] });
      qc.invalidateQueries({ queryKey: ['tours-admin'] });
    },
  });
}

export function useUpdateTour() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, ...data }: Partial<Tour> & { id: number }) => {
      const res = await fetch(`${API}/tours/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Error actualizando tour');
      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['tours'] });
      qc.invalidateQueries({ queryKey: ['tours-admin'] });
    },
  });
}

export function useDeleteTour() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      const res = await fetch(`${API}/tours/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (!res.ok) throw new Error('Error eliminando tour');
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['tours'] });
      qc.invalidateQueries({ queryKey: ['tours-admin'] });
    },
  });
}

export function useSeedTours() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (tours: object[]) => {
      const res = await fetch(`${API}/tours/seed`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
        body: JSON.stringify({ tours }),
      });
      if (!res.ok) throw new Error('Error importando tours');
      return res.json();
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['tours'] });
      qc.invalidateQueries({ queryKey: ['tours-admin'] });
    },
  });
}
