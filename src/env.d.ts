/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly BLOG_FEED_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
