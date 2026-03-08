import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  return rss({
    title: 'Fantasy Ranked',
    description: 'Power fantasy and system apocalypse rankings — LitRPG, progression fantasy, isekai, and harem fiction.',
    site: context.site!,
    items: [],
    customData: `<language>en-us</language>`,
  });
}
