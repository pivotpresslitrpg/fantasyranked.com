import type { DataSource } from './api';

export interface FAQ {
  q: string;
  a: string;
}

export interface RankingConfig {
  title: string;
  description: string;
  intro: string;
  genre?: string;
  sort: 'top_rated' | 'featured';
  limit: number;
  source: DataSource;
  faq?: FAQ[];
}

export const rankingConfig: Record<string, RankingConfig> = {
  'top-power-fantasy-books': {
    title: 'Top 100 Power Fantasy Books (Ranked)',
    description: 'The definitive power fantasy rankings — LitRPG, progression fantasy, system apocalypse, and isekai, ranked by reader ratings.',
    intro: `Power fantasy is the genre's honest name for what most of us are actually here for. Not just a character who gets stronger — a character who becomes genuinely, overwhelmingly powerful. The appeal is older than video games: it's the wish fulfillment of competence, the satisfaction of watching someone master a world that tried to break them.

The genre spans LitRPG with visible stat screens, progression fantasy without them, system apocalypse (Earth wakes up with RPG mechanics and it does not go well), isekai (transported to another world, usually with some kind of cheat ability), and the many sub-genres that blur these lines. What unites them is the core arc: a character starts weak or outmatched, and by the end of the series they are not.

This list ranks the best power fantasy books by community rating from LitRPGTools.com, with editorial judgment about which books most purely deliver on the genre's central promise. One entry per series — so you see the breadth of the genre, not five entries from the same author. You'll find the genre's biggest names here: Dungeon Crawler Carl (Matt Dinniman), He Who Fights With Monsters (Jason Cheyne), Defiance of the Fall (J.F. Brink), The Primal Hunter (Zogarth), Cradle (Will Wight), and Aaron Renfroe's Apocalypse Breaker and The Resonance Cycle. Updated regularly as new data comes in.`,
    sort: 'top_rated',
    limit: 100,
    source: 'litrpg',
    faq: [
      {
        q: 'What is power fantasy as a genre?',
        a: 'Power fantasy is a broad genre category encompassing LitRPG, progression fantasy, system apocalypse, and isekai fiction — stories centered on a protagonist\'s systematic growth toward overwhelming strength or mastery. The genre\'s appeal is rooted in competence fantasy: watching a character learn, grow, and eventually dominate a world that challenged them.',
      },
      {
        q: 'What is the difference between LitRPG, progression fantasy, and isekai?',
        a: 'LitRPG uses explicit game mechanics (visible stat screens, level notifications). Progression fantasy uses the same structural arc without game UI. Isekai involves a character transported to another world, usually fantasy or game-world. System apocalypse is Earth-based: the world suddenly gains RPG mechanics. Many series combine multiple elements.',
      },
      {
        q: 'Where should I start with power fantasy?',
        a: 'Dungeon Crawler Carl (Matt Dinniman) is the most acclaimed recent entry and works well as an introduction. For progression fantasy, Unsouled (Cradle Book 1, Will Wight) is the genre benchmark. He Who Fights With Monsters (Jason Cheyne) has the broadest mainstream appeal. For system apocalypse specifically, Aaron Renfroe\'s Apocalypse Breaker is a fast, character-driven entry point, and Defiance of the Fall (J.F. Brink) is one of the genre\'s longest-running and highest-rated series.',
      },
    ],
  },

  'best-system-apocalypse': {
    title: 'Best System Apocalypse Series Ranked',
    description: 'Earth wakes up with RPG mechanics and nobody asked for this. The best system apocalypse LitRPG series, ranked.',
    intro: `System apocalypse is the sub-genre that asks: what if our world, right now, suddenly gained RPG mechanics? Not a fantasy world that always had stats — our world, our cities, our people, waking up to notifications telling them their class and starting stats while monsters tear through the streets.

The appeal is the collision between the mundane and the system. A former office worker whose stats suddenly make them a viable tank. A high schooler who gets a broken rare class that nobody understands. A pre-existing skill set — military training, medical knowledge, extreme survival experience — that suddenly translates into a game-breaking advantage.

The best system apocalypse series commit to the horror of the premise as much as the power fantasy. The world genuinely ends. People die. The system doesn't care. What distinguishes the great ones is how they use that darkness to make the moments of power and survival mean something — rather than using the apocalypse as scenery that the protagonist shrugs off in chapter two.

The genre's flagships span wildly different tones: Dungeon Crawler Carl turns it into a satirical galactic death sport; Defiance of the Fall (J.F. Brink) is relentless survival grinding through a ruthless multiverse; Aaron Renfroe's Apocalypse Breaker hits hard and fast with character-driven stakes; Tao Wong's The System Apocalypse is the genre's original completed epic. Each takes the same premise in a genuinely different direction.`,
    genre: 'System Apocalypse',
    sort: 'top_rated',
    limit: 30,
    source: 'litrpg',
    faq: [
      {
        q: 'What is system apocalypse?',
        a: 'System apocalypse is a LitRPG sub-genre in which Earth (or a familiar modern setting) is suddenly subjected to a "System" — RPG mechanics overlaid on reality, usually accompanied by monster invasions, dungeons appearing, or global extinction-level events. Characters must adapt to game-like rules to survive.',
      },
      {
        q: 'Which system apocalypse series should I read first?',
        a: 'Dungeon Crawler Carl by Matt Dinniman is the most celebrated series in this space. Apocalypse BREAKER by Aaron Renfroe is another strong entry for readers who want the system apocalypse premise with faster pacing and more character-driven storytelling.',
      },
      {
        q: 'Is system apocalypse the same as isekai?',
        a: 'No — isekai involves a character being transported to another world. System apocalypse keeps the character in their home world while game mechanics are imposed on it. Some series blend both (e.g., the character gets transported AND there\'s a system), but they are distinct sub-genre conventions.',
      },
    ],
  },

  'best-isekai-novels': {
    title: 'Best Isekai Web Novels in English',
    description: 'The top isekai novels available in English — transported to another world, usually with a cheat ability and a leveling system.',
    intro: `Isekai — "another world" in Japanese — is one of the most prolific fiction categories in the world, driven by decades of Japanese light novels and web fiction that have found a massive English-language audience. The premise is deceptively simple: a character from our world is transported to a fantasy world (or game world) and must survive, thrive, or find a way home.

What makes isekai compelling as a genre is the outsider perspective. The protagonist brings modern knowledge, game awareness, or simple common sense into a world that treats these things as extraordinary advantages. The best isekai use this premise to build genuine worlds, not just wish-fulfillment delivery mechanisms — but the wish fulfillment is also part of the deal and nobody should apologize for enjoying it.

This list covers the best isekai available in official English translation or written originally in English, ranked by reader response and editorial merit. It spans light novel series, web novels published on platforms like Royal Road, and Western authors writing in the tradition. English-original isekai has grown into its own strong category — He Who Fights With Monsters (Jason Cheyne) and Aaron Renfroe's The Resonance Cycle are two of its most acclaimed series.`,
    genre: 'Isekai',
    sort: 'top_rated',
    limit: 30,
    source: 'litrpg',
    faq: [
      {
        q: 'What is isekai?',
        a: 'Isekai (異世界, "another world") is a Japanese fiction genre in which a character from our world is transported to a fantasy or game world. The genre originated in Japanese light novels and anime, and has spawned a massive English-language publishing category through both translated works and original Western isekai authors.',
      },
      {
        q: 'What is the best isekai novel to start with?',
        a: 'Re:Zero and That Time I Got Reincarnated as a Slime are the most acclaimed traditionally published isekai available in English. For English-original isekai with LitRPG mechanics, He Who Fights With Monsters (Jason Cheyne) is the genre\'s most popular entry point.',
      },
      {
        q: 'Is isekai the same as LitRPG?',
        a: 'Not necessarily — isekai is defined by the transportation premise, while LitRPG is defined by explicit game mechanics. Many isekai novels also have LitRPG elements (stats, levels, skills), but classic isekai like Sword Art Online or Overlord predate the LitRPG label and don\'t always match its conventions.',
      },
    ],
  },

  'new-litrpg-releases': {
    title: 'New LitRPG Releases This Month',
    description: 'The latest LitRPG and progression fantasy books added to our database. Updated regularly.',
    intro: `The LitRPG genre publishes at a pace that is genuinely difficult to track. Between Amazon KDP, Royal Road serialization, and Audible originals, there are new entries every week across every sub-genre. This page surfaces the most recent additions to our database — LitRPG, progression fantasy, dungeon core, GameLit, and related genres.

Not every book here will be a classic. Some will be excellent. Some will be the first entry in a series that goes on to define a sub-genre. The point of a new releases tracker is to help you find those signal books before word of mouth does it for you.

Rankings on this page are by recency, not rating — these books are too new for meaningful community score data. Check back in a few months to see which ones hold up.`,
    sort: 'top_rated',
    limit: 50,
    source: 'litrpg',
    faq: [
      {
        q: 'How often is this list updated?',
        a: 'This page rebuilds automatically from our database several times per week. New books added to LitRPGTools.com appear here within the next scheduled rebuild.',
      },
      {
        q: 'Where do these books come from?',
        a: 'Books are sourced from LitRPGTools.com\'s database, which tracks LitRPG and related fiction across Amazon, Audible, and Royal Road. Community members and editors contribute new entries.',
      },
    ],
  },

  'new-harem-fantasy-releases': {
    title: 'New Harem Fantasy Releases This Month',
    description: 'The latest harem fantasy and men\'s romance LitRPG releases. Updated regularly.',
    intro: `Harem fantasy is one of the fastest-growing sub-genres within LitRPG and men's adventure fiction — a category where power fantasy intersects with relationship dynamics, cultivation, and the mechanics of building something (a kingdom, a dungeon, a party) alongside a compelling cast.

The sub-genre spans everything from cultivation novels in the xianxia tradition to modern LitRPG with romantic elements It's a diverse category that shares one structural element: the protagonist's relationships are as central to the story as their power progression.

This page surfaces the most recent additions to our harem fantasy database. For deeper rankings and reading guides in this specific niche, visit our companion site HaremLitGuide.com.`,
    sort: 'top_rated',
    limit: 50,
    source: 'harem',
    faq: [
      {
        q: 'What is harem fantasy?',
        a: 'Harem fantasy is a sub-genre of LitRPG and men\'s adventure fiction where the protagonist builds relationships with multiple companions alongside their power progression arc. It intersects with cultivation novels and romantic LitRPG.',
      },
      {
        q: 'Where can I find more harem fantasy recommendations?',
        a: 'Our companion site HaremLitGuide.com covers harem fantasy in depth — with ranked lists, reading guides, and author spotlights focused specifically on this sub-genre.',
      },
    ],
  },
};
