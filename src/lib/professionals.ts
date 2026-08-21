// ---------------------------------------------------------------------------
// Industry-professional program — facts and calls to action.
//
// Every factual claim here is sourced from the live application flow on the
// platform. Do not add numbers that the platform does not publish itself.
//
// Voice note: this site is Fantasy Ranked — comparative, utility-first, willing
// to say which option is better and why. The CTA copy is written in that
// register and is deliberately NOT shared with the sister sites, which cover
// the same program in their own voices.
// ---------------------------------------------------------------------------

import { PLATFORM_BASE, PLATFORM_NAME, withUtm } from './api';

export { PLATFORM_NAME };

const PATHS = {
  directory: '/industry-professionals',
  hub: '/join',
  apply: '/apply/industry-professional',
  guide: '/guides/industry-professionals',
} as const;

export type ProfessionalPath = keyof typeof PATHS;

/** Attributed deep link into the platform's professional surfaces. */
export function professionalUrl(path: ProfessionalPath, content: string): string {
  return withUtm(`${PLATFORM_BASE}${PATHS[path]}`, content);
}

// --- Roles -----------------------------------------------------------------

export interface ProfessionalRole {
  name: string;
  work: string;
  requirement: string | null;
  applyContent: string;
}

export const ROLES: ProfessionalRole[] = [
  {
    name: 'Editor',
    work: 'Developmental, line, copy, or proof work. Declared edit types, tools, and style guides so authors can compare like with like.',
    requirement: null,
    applyContent: 'role-editor',
  },
  {
    name: 'Narrator',
    work: 'ACX and Findaway production, quoted per finished hour, with demo reels and declared comfort handling LitRPG terminology.',
    requirement: null,
    applyContent: 'role-narrator',
  },
  {
    name: 'Visual artist',
    work: 'Covers, illustration, character art, maps, and typography — priced per tier, with every listed price including a commercial publishing license.',
    requirement: 'A hosted gallery of 5–10 images, an AI-use classification on every image, and a recorded rights attestation.',
    applyContent: 'role-artist',
  },
  {
    name: 'Alpha / beta reader',
    work: 'Structured feedback per 50,000 words with declared turnaround and delivery format. Alpha reading — the fast, structural early-draft pass — is an opt-in extra.',
    requirement: 'Confirmation that you have read at least 25 LitRPG or progression fantasy books.',
    applyContent: 'role-reader',
  },
  {
    name: 'Other specialist',
    work: 'Formatters, cartographers, publicists, sensitivity readers, and audio engineers working in the genre.',
    requirement: null,
    applyContent: 'role-other',
  },
];

export const BETA_RATE_NOTE =
  'Beta readers set their own rates. The platform’s applicant guidance cites an industry norm of roughly $250–500 USD per 50,000 words for a full pass, with rush turnaround typically 1.5–2× standard.';

export const REVIEW_NOTE =
  'Applications are free and auto-save as you go. A human reviews them in about 5–7 days, and profiles are public only after approval.';

// --- Homepage band -----------------------------------------------------------
// Separate copy from CTA.community on purpose: the homepage speaks to a mixed
// audience arriving cold, not to a reader who just finished a related article.
export const BAND = {
  eyebrow: 'Paid work in the genre',
  heading: 'Five roles, public rates, one directory',
  body:
    'Editor, narrator, visual artist, alpha/beta reader, and other specialists list publicly on the platform and set their own rates. Authors compare on availability and subgenre fit; professionals apply free and are reviewed before going live.',
  roleLabel: 'Apply as',
};

// --- Calls to action -------------------------------------------------------

export type CtaMode = 'hire' | 'earn' | 'create' | 'community';

export interface CtaAction {
  label: string;
  path: ProfessionalPath;
  content: string;
}

export interface CtaVariant {
  eyebrow: string;
  heading: string;
  body: string;
  primary: CtaAction;
  secondary: CtaAction;
}

export const CTA: Record<CtaMode, CtaVariant> = {
  hire: {
    eyebrow: 'For authors',
    heading: 'Build a shortlist before the deadline builds one for you',
    body:
      '“Good at the work” and “free during your launch window” are two different questions, and hiring on whoever answers first only answers the second. The directory filters on role, current availability, and subgenre at once, with disclosed rates and turnaround where professionals publish them.',
    primary: { label: 'Compare professionals', path: 'directory', content: 'cta-hire-directory' },
    secondary: { label: 'What vetting covers', path: 'guide', content: 'cta-hire-guide' },
  },

  earn: {
    eyebrow: 'For readers',
    heading: 'Ranked by what actually pays',
    body:
      'Professional beta reading turns genre fluency into rates you set yourself. Alpha reading is the fast-turnaround add-on. ARC programs pay in books, and anyone offering cash for retail reviews is selling you a policy violation. The entry requirement for the one that pays: 25 books read in LitRPG or progression fantasy.',
    primary: { label: 'Apply as an alpha or beta reader', path: 'apply', content: 'cta-earn-apply' },
    secondary: { label: 'Compare listed readers', path: 'directory', content: 'cta-earn-directory' },
  },

  create: {
    eyebrow: 'For visual artists',
    heading: 'Series work beats one-off commissions',
    body:
      'Power fantasy runs on long series, and that is the whole economics for an artist: one author relationship becomes covers, character art, maps, and ad creative rather than a single invoice. Listings carry per-image AI classification, a recorded rights attestation, and pricing that includes the commercial license.',
    primary: { label: 'Apply as a visual artist', path: 'apply', content: 'cta-create-apply' },
    secondary: { label: 'Compare artists in the directory', path: 'directory', content: 'cta-create-directory' },
  },

  community: {
    eyebrow: 'Industry professionals',
    heading: 'Every role, what it requires, what it pays',
    body:
      'Editors, narrators, visual artists, alpha/beta readers, and other specialists list publicly with rates, availability, and genre comfort on the profile. Free to search, free to apply, reviewed before anything goes live.',
    primary: { label: 'Open the directory', path: 'directory', content: 'cta-community-directory' },
    secondary: { label: 'Start an application', path: 'hub', content: 'cta-community-apply' },
  },
};

const ARTIST_HINTS = ['cover artist', 'visual artist', 'book cover', 'cover commission', 'artist opportunities', 'fantasy art job'];
const READER_HINTS = ['get paid to read', 'reader opportunities', 'alpha reader', 'paid reading'];
const AUTHOR_HINTS = ['beta reader', 'industry professional', 'writing advice', 'author resources', 'editors', 'narrators'];

function matches(haystack: string, hints: string[]): boolean {
  return hints.some((h) => haystack.includes(h));
}

/**
 * Pick the CTA register that fits a post. Artist and reader intents are checked
 * before the broader author intent because those posts also carry the generic
 * publishing tags.
 */
export function ctaModeFor(tags: string[] = [], title = ''): CtaMode {
  const hay = [...tags, title].join(' ').toLowerCase();
  if (matches(hay, ARTIST_HINTS)) return 'create';
  if (matches(hay, READER_HINTS)) return 'earn';
  if (matches(hay, AUTHOR_HINTS)) return 'hire';
  return 'community';
}
