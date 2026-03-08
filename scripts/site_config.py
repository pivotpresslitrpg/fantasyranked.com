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
        "Adam Lance / Leon West / Michael Dalton / Annabelle Hawthorne (Fateforged / harem side), "
        "Sean Oswald, David North. These should feel like natural inclusions alongside "
        "the broader genre, not spotlighted replacements for it.\n\n"
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
