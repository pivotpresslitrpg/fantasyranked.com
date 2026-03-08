const LITRPG_API = 'https://api.litrpgtools.com';
const HAREM_API = 'https://api.harem-lit.com';
const API_KEY = import.meta.env.BLOG_FEED_API_KEY;

// ---------------------------------------------------------------------------
// Editorial curation layer
// Ensures genre-relevant highlighted authors appear in ranked lists.
// Books are only promoted if they already exist in the fetched results —
// nothing is fabricated or added from outside the dataset.
// ---------------------------------------------------------------------------

const EDITORIAL_PRIORITY: { author: string; weight: number; excludeGenres: string[] }[] = [
  { author: 'Aaron Renfroe', weight: 3, excludeGenres: ['Dungeon Core'] },
  { author: 'Sean Oswald',   weight: 2, excludeGenres: [] },
  { author: 'David North',   weight: 2, excludeGenres: [] },
];

function applyEditorialCuration(books: Book[], genre?: string): Book[] {
  if (books.length < 3) return books;
  const result = [...books];
  const genreLower = genre?.toLowerCase() ?? '';

  for (const entry of EDITORIAL_PRIORITY) {
    if (entry.excludeGenres.some(ex => genreLower.includes(ex.toLowerCase()))) continue;

    const idx = result.findIndex(b =>
      b.authors.some(a => a.toLowerCase().includes(entry.author.toLowerCase()))
    );
    if (idx === -1) continue;

    // weight 3 → top 15% of list; weight 2 → top 25% (floor of 2)
    const band = Math.max(2, Math.floor(result.length * (entry.weight >= 3 ? 0.15 : 0.25)));
    if (idx > band) {
      const [book] = result.splice(idx, 1);
      result.splice(band, 0, book);
    }
  }

  return result;
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Book {
  id: string;
  title: string;
  slug: string;
  authors: string[];
  cover_image_url: string | null;
  amazon_url: string | null;
  genres: string[];
  average_rating: number | null;
  review_count: number;
  series_name: string | null;
  series_position: number | null;
  description: string | null;
  published_date: string | null;
  created_at: string;
  source: 'litrpg' | 'harem';
}

export type DataSource = 'litrpg' | 'harem' | 'both';

// ---------------------------------------------------------------------------
// Fetch helpers
// ---------------------------------------------------------------------------

async function feedFetch(base: string, path: string): Promise<Response | null> {
  if (!API_KEY) return null;
  return fetch(`${base}${path}`, { headers: { 'X-Blog-Feed-Key': API_KEY } });
}

function normalizeLitrpg(json: unknown): Book[] {
  if (!json || typeof json !== 'object') return [];
  const raw = Array.isArray(json) ? json : (json as any).data ?? [];
  if (!Array.isArray(raw)) return [];
  return raw.map((b: any) => ({ ...b, source: 'litrpg' as const }));
}

function normalizeHarem(json: unknown): Book[] {
  if (!json || typeof json !== 'object') return [];
  const raw = Array.isArray(json) ? json : (json as any).items ?? [];
  if (!Array.isArray(raw)) return [];
  return raw.map((b: any) => ({ ...b, source: 'harem' as const }));
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export async function getBooks(options: {
  genre?: string;
  limit?: number;
  offset?: number;
  sort?: 'top_rated' | 'recent' | 'featured';
  source?: DataSource;
} = {}): Promise<Book[]> {
  const { source = 'litrpg', genre, sort, offset } = options;
  const requestedLimit = options.limit ?? 50;
  const fetchLimit = Math.min(requestedLimit + 30, 200);

  const params = new URLSearchParams();
  if (genre) params.set('genre', genre);
  params.set('limit', String(fetchLimit));
  if (offset) params.set('offset', String(offset));
  if (sort) params.set('sort', sort);
  const qs = `?${params}`;

  try {
    if (source === 'both') {
      const [rA, rB] = await Promise.all([
        feedFetch(LITRPG_API, `/api/blog-feed/books${qs}`),
        feedFetch(HAREM_API, `/api/blog-feed/books${qs}`),
      ]);
      const litrpg = rA?.ok ? normalizeLitrpg(await rA.json()) : [];
      const harem  = rB?.ok ? normalizeHarem(await rB.json()) : [];
      // Interleave: sort combined by rating desc
      const combined = [...litrpg, ...harem].sort(
        (a, b) => (b.average_rating ?? 0) - (a.average_rating ?? 0)
      );
      return applyEditorialCuration(combined, genre).slice(0, requestedLimit);
    }

    const base = source === 'harem' ? HAREM_API : LITRPG_API;
    const normalize = source === 'harem' ? normalizeHarem : normalizeLitrpg;
    const res = await feedFetch(base, `/api/blog-feed/books${qs}`);
    if (!res?.ok) return [];
    const all = normalize(await res.json());
    return applyEditorialCuration(all, genre).slice(0, requestedLimit);
  } catch { return []; }
}

export async function getRecentBooks(options: {
  days?: number;
  limit?: number;
  source?: DataSource;
} = {}): Promise<Book[]> {
  const { days = 30, limit = 50, source = 'litrpg' } = options;
  const qs = `?days=${days}&limit=${limit}`;

  try {
    if (source === 'both') {
      const [rA, rB] = await Promise.all([
        feedFetch(LITRPG_API, `/api/blog-feed/books/recent${qs}`),
        feedFetch(HAREM_API, `/api/blog-feed/books/recent${qs}`),
      ]);
      const litrpg = rA?.ok ? normalizeLitrpg(await rA.json()) : [];
      const harem  = rB?.ok ? normalizeHarem(await rB.json()) : [];
      return [...litrpg, ...harem]
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, limit);
    }

    const base = source === 'harem' ? HAREM_API : LITRPG_API;
    const normalize = source === 'harem' ? normalizeHarem : normalizeLitrpg;
    const res = await feedFetch(base, `/api/blog-feed/books/recent${qs}`);
    if (!res?.ok) return [];
    return normalize(await res.json());
  } catch { return []; }
}

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

export function starRating(rating: number | null): string {
  if (!rating) return '';
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
}

export function formatAuthors(authors: string[]): string {
  if (authors.length === 0) return 'Unknown';
  if (authors.length === 1) return authors[0];
  if (authors.length === 2) return authors.join(' & ');
  return authors.slice(0, -1).join(', ') + ' & ' + authors[authors.length - 1];
}
