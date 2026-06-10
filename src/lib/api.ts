const LITRPG_API = 'https://api.litrpgtools.com';
const API_KEY = import.meta.env.BLOG_FEED_API_KEY;

// ---------------------------------------------------------------------------
// Editorial curation layer
// Ensures genre-relevant highlighted authors appear in ranked lists.
// Books are only promoted if they already exist in the fetched results —
// nothing is fabricated or added from outside the dataset.
// ---------------------------------------------------------------------------

const EDITORIAL_PRIORITY: { author: string; weight: number; excludeGenres: string[]; platformSlug?: string }[] = [
  { author: 'Aaron Renfroe', weight: 3, excludeGenres: ['Dungeon Core'], platformSlug: 'aaron-renfroe' },
  { author: 'Sean Oswald',   weight: 2, excludeGenres: [], platformSlug: 'sean-oswald' },
  { author: 'David North',   weight: 2, excludeGenres: [], platformSlug: 'david-north' },
];

/** Curated authors to spotlight in the Featured Authors funnel module. */
export const FEATURED_AUTHORS: string[] = EDITORIAL_PRIORITY.map((e) => e.author);

/** Known platform author-page slugs — guarantees author deep-links even when
 * the current book pool doesn't surface author_slugs for them. */
export const FEATURED_AUTHOR_SLUGS: Record<string, string> = Object.fromEntries(
  EDITORIAL_PRIORITY.filter((e) => e.platformSlug).map((e) => [e.author, e.platformSlug as string])
);

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
  // Author-profile deep-link data from the feed; absent until the backend
  // enhancement deploys, so all consumers must treat it as optional.
  author_slugs?: { name: string; slug: string }[];
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
  source: 'litrpg';
}

export type DataSource = 'litrpg';

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

// ---------------------------------------------------------------------------
// Deduplication helpers
// ---------------------------------------------------------------------------

/** Normalize a title for comparison: lowercase, strip punctuation, collapse whitespace. */
function normalizeTitle(title: string): string {
  return title.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, ' ').trim();
}

/**
 * Deduplicate books:
 * 1. Remove exact title duplicates (cross-source) — keep higher-rated copy
 * 2. Collapse series: keep only the best-rated entry per series_name
 */
function deduplicateBooks(books: Book[]): Book[] {
  // Pass 1: deduplicate by normalized title
  const titleMap = new Map<string, Book>();
  for (const book of books) {
    const key = normalizeTitle(book.title);
    const existing = titleMap.get(key);
    if (!existing || (book.average_rating ?? 0) > (existing.average_rating ?? 0)) {
      titleMap.set(key, book);
    }
  }
  const deduped = [...titleMap.values()];

  // Pass 2: collapse series — keep only the best-rated entry per series
  const seriesMap = new Map<string, Book>();
  const result: Book[] = [];
  for (const book of deduped) {
    if (!book.series_name) {
      result.push(book);
      continue;
    }
    const seriesKey = book.series_name.toLowerCase().trim();
    const existing = seriesMap.get(seriesKey);
    if (!existing || (book.average_rating ?? 0) > (existing.average_rating ?? 0)) {
      seriesMap.set(seriesKey, book);
    }
  }
  result.push(...seriesMap.values());

  // Re-sort by rating desc to maintain order after dedup
  result.sort((a, b) => (b.average_rating ?? 0) - (a.average_rating ?? 0));
  return result;
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
  const { genre, sort, offset } = options;
  const requestedLimit = options.limit ?? 50;
  // Fetch extra to compensate for dedup removal
  const fetchLimit = Math.min(requestedLimit + 50, 200);

  const params = new URLSearchParams();
  if (genre) params.set('genre', genre);
  params.set('limit', String(fetchLimit));
  if (offset) params.set('offset', String(offset));
  if (sort) params.set('sort', sort);
  const qs = `?${params}`;

  try {
    const res = await feedFetch(LITRPG_API, `/api/blog-feed/books${qs}`);
    if (!res?.ok) return [];
    const all = deduplicateBooks(normalizeLitrpg(await res.json()));
    return applyEditorialCuration(all, genre).slice(0, requestedLimit);
  } catch { return []; }
}

export async function getRecentBooks(options: {
  days?: number;
  limit?: number;
  source?: DataSource;
} = {}): Promise<Book[]> {
  const { days = 30, limit = 50 } = options;
  const qs = `?days=${days}&limit=${limit}`;

  try {
    const res = await feedFetch(LITRPG_API, `/api/blog-feed/books/recent${qs}`);
    if (!res?.ok) return [];
    return normalizeLitrpg(await res.json());
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

// ---------------------------------------------------------------------------
// Platform funnel links — route blog traffic to the goal platform.
// Detail pages live on litrpgtools.com (the API is a separate api. subdomain).
// ---------------------------------------------------------------------------

export const PLATFORM_BASE = 'https://litrpgtools.com';
export const PLATFORM_NAME = 'LitRPGTools';

// UTM attribution so platform analytics can see which blog surface drove each
// visit. utm_content names the surface (book-card, nav, post-cta, rss, ...).
const UTM_SOURCE = 'fantasyranked';

/** Append funnel attribution params to a platform URL. */
export function withUtm(url: string, content: string): string {
  const sep = url.includes('?') ? '&' : '?';
  return `${url}${sep}utm_source=${UTM_SOURCE}&utm_medium=referral&utm_campaign=blog-funnel&utm_content=${content}`;
}

/** Platform landing link with attribution (for nav/CTA surfaces). */
export function platformUrl(content: string): string {
  return withUtm(PLATFORM_BASE, content);
}

/** Canonical platform book page WITHOUT tracking params (schema.org markup). */
export function bookPlatformPage(book: Book): string {
  return `${PLATFORM_BASE}/books/${book.id}`;
}

/** Platform book page link. Uses the feed id (real DB id), never the slug. */
export function bookPlatformUrl(book: Book, content = 'book-card'): string {
  return withUtm(bookPlatformPage(book), content);
}

/** Platform author page for a given author name, or null if no public profile. */
export function authorPlatformUrl(book: Book, authorName: string, content = 'author-link'): string | null {
  const match = book.author_slugs?.find(
    a => a.name.toLowerCase() === authorName.toLowerCase()
  );
  return match?.slug ? withUtm(`${PLATFORM_BASE}/authors/${match.slug}`, content) : null;
}

/** First author-page URL found for authorName across a pool of books, else null. */
export function findAuthorUrlInBooks(books: Book[], authorName: string, content = 'author-link'): string | null {
  for (const b of books) {
    const url = authorPlatformUrl(b, authorName, content);
    if (url) return url;
  }
  return null;
}
