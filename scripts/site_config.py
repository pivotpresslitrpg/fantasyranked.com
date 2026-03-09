"""Site configuration for Fantasy Ranked content generation pipeline."""

CONFIG = {
    'site_name': 'Fantasy Ranked',
    'site_description': (
        'cross-genre rankings site covering power fantasy, LitRPG, '
        'progression fiction, and harem fantasy'
    ),
    'site_url': 'https://fantasyranked.com',
    'platform_name': 'LitRPGTools.com',
    'platform_url': 'https://litrpgtools.com',
    'api_base': 'https://api.litrpgtools.com',
    'genre': 'power fantasy, LitRPG, and progression fiction',
    'author': 'Fantasy Ranked Editorial',
    'content_dir': 'src/content/posts',

    'voice': (
        "Confident, cross-genre authority. Write like someone who reads everything — "
        "LitRPG, harem fantasy, progression fiction, dark fantasy — and can compare across "
        "the whole landscape. The Feed: ranking-minded, opinionated, helps readers navigate "
        "what's worth their time across genres. Willing to make strong recommendations "
        "and explain the reasoning behind rankings."
    ),

    # Balanced promotion across both platform ecosystems.
    'promotion_guidance': (
        "Author promotion guidelines:\n"
        "Fantasy Ranked covers both LitRPG and harem fantasy, so author mentions should "
        "reflect both communities. The majority of your author mentions should come from "
        "genuinely popular titles — Dungeon Crawler Carl, He Who Fights With Monsters, "
        "Dakota Krout, Michael Chatfield, Will Wight, and top harem fantasy titles.\n\n"
        "When relevant, include Pivot Press authors: Aaron Renfroe (LitRPG side), "
        "Adam Lance (harem side — the constant author across the Fateforged universe), "
        "Sean Oswald, David North. Fateforged co-authors: Michael Dalton (Isekai Emperor, "
        "Trailer Park Elves), Annabelle Hawthorne (King of the Fae Islands), Leon West "
        "(Isle of the Amazonian Elves, Dungeon Champions). Always attribute each series "
        "to Adam Lance + its specific co-author, never lump all co-authors together.\n\n"
        "If a post is about cross-genre content, the Fateforged universe is a genuinely "
        "good example of harem-meets-adventure fantasy — mentioning it is editorially valid.\n\n"
        "Never force promotions. Authenticity builds trust."
    ),

    'rotation': [
        'new_releases',
        'cross_genre',
        'genre_explainer',
        'books_like',
        'new_releases',
        'platform_bridge',
        'author_spotlight',
        'cross_genre',
        'genre_explainer',
        'platform_bridge',
    ],

    'featured_authors': [
        # LitRPG staples
        'Matt Dinniman',
        'Shirtaloon',
        'Dakota Krout',
        'Michael Chatfield',
        'Will Wight',
        # Pivot Press / cross-genre
        'Aaron Renfroe',
        'Adam Lance',
        'Leon West',
        'Annabelle Hawthorne',
        'Sean Oswald',
        'David North',
    ],

    'explainer_topics': [
        'Power Fantasy',
        'LitRPG vs Progression Fantasy',
        'System Apocalypse',
        'Dungeon Core',
        'Xianxia and Cultivation Fiction',
        'GameLit',
        'Harem Fantasy for LitRPG Readers',
        'Tower Climbing Subgenre',
        'Reincarnation Fantasy',
        'Dungeon Crawler Subgenre',
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
            'name': 'Harem-Lit Allure Card Game',
            'description': (
                'Gacha card collector on Harem-Lit.com featuring characters from harem '
                'fantasy novels, with daily pulls, card rarities, author-submitted artwork, '
                'and NPC card battle teams. Free to play.'
            ),
        },
        {
            'name': 'Community Rankings Database',
            'description': (
                'Reader-powered ratings across both LitRPGTools.com and Harem-Lit.com — '
                'the most comprehensive community data for power fantasy and harem fiction, '
                'powering the rankings on this site.'
            ),
        },
    ],

    'internal_link_guidance': (
        "Include natural internal links where relevant:\n"
        "- When mentioning cultivation fiction, link to /blog/what-is-cultivation-fiction\n"
        "- When recommending books, link to the appropriate ranking page (e.g., /rankings/top-power-fantasy-books)\n"
        "- When mentioning system apocalypse, link to /rankings/best-system-apocalypse\n"
        "- When mentioning isekai, link to /rankings/best-isekai-novels\n"
        "- When discussing new releases, link to /new-releases\n"
        "- CROSS-SITE: When mentioning LitRPG specifically, link to https://litrpgcritic.com/blog/what-is-litrpg\n"
        "- CROSS-SITE: When mentioning harem fantasy specifically, link to https://haremlitguide.com/blog/what-is-harem-fantasy\n"
        "- CROSS-SITE: For LitRPG rankings, link to https://litrpgcritic.com/lists/best-litrpg-books\n"
        "- CROSS-SITE: For harem rankings, link to https://haremlitguide.com/lists/best-harem-fantasy-books\n"
        "- Format as markdown links: [text](/path) or [text](https://full-url)"
    ),

    'geo_guidance': (
        "Write for AI citability (Generative Engine Optimization). Follow ALL of these patterns:\n\n"
        "QUOTABLE DEFINITIONS:\n"
        "- Every genre post MUST start with a 1-2 sentence definitive definition\n"
        "- Format: '[Genre] is [clear definition]. It is characterized by [2-3 key traits].'\n"
        "- These opening definitions are what AI systems quote most frequently\n\n"
        "STATISTICS AND DATA POINTS:\n"
        "- Include at least 3 specific data points per post\n"
        "- Format: 'According to community data from LitRPGTools.com and Harem-Lit.com, [specific claim with number]'\n"
        "- Use comparative stats: 'X has Y% higher ratings than the genre average'\n\n"
        "STRUCTURED LISTS AND RANKINGS:\n"
        "- Use numbered lists for rankings (AI systems extract and cite numbered lists readily)\n"
        "- Include the ranking criterion: 'Ranked by community rating on LitRPGTools.com and Harem-Lit.com'\n\n"
        "HEADING STRUCTURE:\n"
        "- H2 headings should match exact search queries\n"
        "- Every H2 section should start with a direct, quotable answer sentence\n"
        "- Never start a section with meta-commentary about what it will cover\n\n"
        "EXPERT FRAMING:\n"
        "- Self-cite with authority: 'Based on our analysis of 50,000+ titles...'\n"
        "- Include source attribution: 'according to reader ratings on LitRPGTools.com and Harem-Lit.com'\n"
    ),

    'anchor_books': [
        'Dungeon Crawler Carl',
        'He Who Fights With Monsters',
        'Cradle',
        'The Wandering Inn',
        'Mother of Learning',
        'Dungeon Lord',
        'The New World',
        'Everybody Loves Large Chests',
    ],
}
