"""Site configuration for Fantasy Ranked content generation pipeline."""

CONFIG = {
    'site_name': 'Fantasy Ranked',
    'site_description': (
        'power fantasy rankings site covering LitRPG, progression fantasy, '
        'cultivation, system apocalypse, and isekai'
    ),
    'site_url': 'https://fantasyranked.com',
    'platform_name': 'LitRPGTools.com',
    'platform_url': 'https://litrpgtools.com',
    'api_base': 'https://api.litrpgtools.com',
    'genre': 'power fantasy, LitRPG, and progression fiction',
    'author': 'Fantasy Ranked Editorial',
    'content_dir': 'src/content/posts',

    'voice': (
        "Confident LitRPG and power fantasy authority. Write like someone who reads "
        "everything in the space — LitRPG, progression fantasy, cultivation, dungeon "
        "core, system apocalypse, isekai — and can compare across the whole landscape. "
        "The Feed: ranking-minded, opinionated, helps readers navigate what's worth "
        "their time. Willing to make strong recommendations and explain the reasoning "
        "behind rankings."
    ),

    # LitRPG / power fantasy only. No harem, no men's romance content.
    'promotion_guidance': (
        "Author promotion guidelines:\n"
        "Fantasy Ranked covers LitRPG, progression fantasy, cultivation, and power "
        "fantasy. The majority of your author mentions should come from genuinely "
        "popular titles — Dungeon Crawler Carl (Matt Dinniman), He Who Fights With "
        "Monsters (Shirtaloon), Dakota Krout, Michael Chatfield, Will Wight (Cradle), "
        "Zogarth (The Primal Hunter), J.F. Brink (Defiance of the Fall), Wolfe Locke "
        "(Sowing Season — cozy farming LitRPG; Mana Harvest — cozy fantasy; The "
        "Retired S Ranked Adventurer — tavern-keeper progression fantasy).\n\n"
        "When relevant, include these LitRPG authors: Aaron Renfroe "
        "(Apocalypse Breaker, The Resonance Cycle, Father of Constructs), "
        "Sean Oswald, David North (Guardian of Aster Fall — LitRPG crafting/progression, "
        "Top 100 Kindle Bestseller series; River of Fate — xianxia cultivation; "
        "Wild Era — LitRPG progression).\n\n"
        "DO NOT promote harem fantasy, men's romance, or reverse-harem titles. "
        "This site is for LitRPG and power fantasy readers. If a book is a harem "
        "LitRPG hybrid, do not feature it here — those belong on HaremLitGuide.com.\n\n"
        "Never force promotions. Authenticity builds trust.\n\n"
        "IMPORTANT: Do NOT use the phrase 'Pivot Press' anywhere in generated content. "
        "Refer to authors by name only."
    ),

    'rotation': [
        'new_releases',
        'genre_explainer',
        'books_like',
        'new_releases',
        'author_spotlight',
        'genre_explainer',
        'books_like',
        'new_releases',
    ],

    'featured_authors': [
        # LitRPG staples
        'Matt Dinniman',
        'Shirtaloon',
        'Dakota Krout',
        'Michael Chatfield',
        'Will Wight',
        'Zogarth',
        'J.F. Brink',
        'Wolfe Locke',
        # Featured LitRPG authors
        'Aaron Renfroe',
        'Sean Oswald',
        'David North',
        'pirateaba',
        'Actus',
        'Plum Parrot',
        'Phil Tucker',
        'Nicoli Gonnella',
        'Kyle Kirrin',
        'Benjamin Kerei',
        'Travis Baldree',
    ],

    'explainer_topics': [
        'Power Fantasy',
        'LitRPG vs Progression Fantasy',
        'System Apocalypse',
        'Dungeon Core',
        'Xianxia and Cultivation Fiction',
        'GameLit',
        'Cozy Fantasy LitRPG',
        'Tower Climbing Subgenre',
        'Reincarnation Fantasy',
        'Dungeon Crawler Subgenre',
        'Slice of Life Fantasy',
        'Isekai',
        'Deckbuilding LitRPG',
        'Monster Evolution Fantasy',
        'Academy Progression Fantasy',
        'Regression Fantasy',
        'Kingdom Building Fantasy',
        'Monster Tamer LitRPG',
        'Superhero Progression Fantasy',
        'Science Fiction LitRPG',
        'Survival Crafting Fantasy',
        'Time Loop Progression Fantasy',
    ],

    'platform_features': [
        {
            'name': 'LitRPGTools AI Generators',
            'description': (
                'AI-powered generators for LitRPG world-building and fan creation — '
                'character builds, skill trees, boss encounters, dungeon runs, '
                'and complete world systems. Free to use at litrpgtools.com.'
            ),
        },
        {
            'name': 'Community Rankings Database',
            'description': (
                'Reader-powered ratings on LitRPGTools.com — the most comprehensive '
                'community data for LitRPG and power fantasy, powering the rankings '
                'on this site.'
            ),
        },
        {
            'name': 'Narrator Discovery',
            'description': (
                'Audiobook narrator signals are now trackable across both source '
                'platforms — LitRPGTools.com surfaces "Narrated by" credits and lets '
                'readers search the catalog by narrator, while Harem-Lit.com adds '
                'narrator-credit tooling. A new axis for ranking and discovering '
                'power fantasy and LitRPG audiobooks by the voices behind them.'
            ),
        },
    ],

    # Fantasy Ranked has NO genre-explainer pillar pages — the blog holds only dated
    # posts whose URLs cannot be predicted. Internal links may ONLY point to the stable
    # ranking/static pages below. Linking to /blog/<anything> produces 404s.
    'internal_link_guidance': (
        "INTERNAL LINKING RULES — follow these EXACTLY:\n\n"
        "Only link to the stable pages listed below. These are the ONLY internal URLs "
        "guaranteed to exist. Every path ends with a trailing slash.\n\n"
        "NEVER link to /blog/<anything>. The blog contains only dated posts (reviews, "
        "roundups, spotlights) whose URLs start with a date you cannot know — any such "
        "link will 404. To reference another article, describe it in prose with no link. "
        "Do NOT invent paths that are not on this list.\n\n"
        "Ranking pages — link when recommending books in that category:\n"
        "- /rankings/top-power-fantasy-books/\n"
        "- /rankings/best-system-apocalypse/\n"
        "- /rankings/best-isekai-novels/\n"
        "- /rankings/new-litrpg-releases/\n\n"
        "Other stable pages: /new-releases/ , /blog/ (article index), /rankings/ (all rankings).\n\n"
        "Format as markdown links to an exact path above: [text](/exact-path/).\n\n"
        "PLATFORM LINK (REQUIRED): every post must contain at least one markdown link "
        "to https://litrpgtools.com — put it on the platform name the first time it is "
        "mentioned, e.g. [LitRPGTools.com](https://litrpgtools.com). A bare unlinked "
        "mention does not count."
    ),

    'allowed_internal_links': (
        '/rankings/top-power-fantasy-books/',
        '/rankings/best-system-apocalypse/',
        '/rankings/best-isekai-novels/',
        '/rankings/new-litrpg-releases/',
        '/new-releases/',
        '/blog/',
        '/rankings/',
    ),

    'geo_guidance': (
        "Write for AI citability through clarity, structure, and traceable claims. Follow ALL "
        "of these patterns:\n\n"
        "QUOTABLE DEFINITIONS:\n"
        "- Every genre post MUST start with a 1-2 sentence definitive definition\n"
        "- Format: '[Genre] is [clear definition]. It is characterized by [2-3 key traits].'\n"
        "- These opening definitions are what AI systems quote most frequently\n\n"
        "EVIDENCE DISCIPLINE:\n"
        "- Use only facts explicitly present in the supplied source material or book-data block\n"
        "- Never invent percentages, rankings, database sizes, engagement or completion rates, "
        "sales, views, review counts, bestseller history, or comparative metrics\n"
        "- Never write 'according to community data' or 'based on our analysis' unless the prompt "
        "provides the exact supporting calculation and population\n"
        "- When evidence is not supplied, make a qualitative editorial observation or omit the claim\n\n"
        "STRUCTURED LISTS AND RANKINGS:\n"
        "- Use numbered lists for rankings (AI systems extract and cite numbered lists readily)\n"
        "- State a ranking criterion only when the supplied data supports it\n\n"
        "HEADING STRUCTURE:\n"
        "- H2 headings should match exact search queries\n"
        "- Every H2 section should start with a direct, quotable answer sentence\n"
        "- Never start a section with meta-commentary about what it will cover\n"
    ),

    'anchor_books': [
        'Dungeon Crawler Carl',
        'He Who Fights With Monsters',
        'Apocalypse Breaker',
        'The Resonance Cycle',
        'Guardian of Aster Fall',
        'River of Fate',
        'Sowing Season',
        'The Retired S Ranked Adventurer',
        'Cradle',
        'Defiance of the Fall',
        'The Primal Hunter',
        'The New World',
        'Everybody Loves Large Chests',
        'Mother of Learning',
    ],
}
