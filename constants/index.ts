export const navLinks = [
  {
    id: 'about',
    title: 'NFL',
    href: '/nfl',
  },
  {
    id: 'work',
    title: 'MLB',
    href: '/mlb',
  },
  {
    id: 'contact',
    title: 'NBA',
    href: '/nba',
  },
  {
    id: 'contact',
    title: 'NHL',
    href: '/nhl',
  },
  {
    id: 'contact',
    title: 'NCAAF',
    href: '/ncaaf',
  },
  {
    id: 'contact',
    title: 'Soccer',
    href: '/soccer',
  },
  {
    id: 'contact',
    title: 'Formula 1',
    href: '/formula1',
  },
  {
    id: 'contact',
    title: 'WNBA',
    href: '/wnba',
  },
  {
    id: 'contact',
    title: 'Golf',
    href: '/golf',
  },
  {
    id: 'contact',
    title: 'NCAAM',
    href: '/ncaam',
  },
];

export interface ArticleData {
  id: number;
  title: string;
  description?: string;
  href?: string;
  image?: string;
  width?: number;
  height?: number;
  date?: string;
  author?: string;
  commentCount?: number;
}

export const topArticles: ArticleData[] = [
  {
    id: 1,
    title:
      'With college football realignment, we’re once again asking, ‘What. Is. Happening?’',
    description:
      "All eyes are on the Pac-12, but what comes next is just another part of college football's realignment whirlwind.",
    href: '/article/1',
    image: 'https://picsum.photos/479/320',
    width: 479,
    height: 320,
    author: 'Matt Brown',
    commentCount: 12,
  },
  {
    id: 2,
    title:
      "The Lakers' potential return to a two-big approach doesn't make sense",
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://picsum.photos/81',
    width: 81,
    height: 81,
    author: 'Harrison Faigen',
    commentCount: 2,
  },
  {
    id: 3,
    title:
      'The Windup: The Red Sox considered trading this veteran to the Marlins',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://picsum.photos/81',
    width: 81,
    height: 81,
    author: 'Matt Monagan',
    commentCount: 9,
  },
  {
    id: 4,
    title: 'Skip Holtz hired as Northwestern special assistant',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://picsum.photos/81',
    width: 81,
    height: 81,
    author: 'Burt Lauten',
    commentCount: 12,
  },
  {
    id: 5,
    title: 'Ibaka says Bucks exit was over communication issues',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://picsum.photos/81',
    width: 81,
    height: 81,
    author: 'James Ham',
    commentCount: 5,
  },
];

export const rowArticles: ArticleData[] = [
  {
    id: 1,
    title:
      'Messi has turned free kicks into an art form that confounds goalkeepers',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://picsum.photos/263/176',
    width: 263,
    height: 176,
    author: 'Matt Monagan',
    commentCount: 9,
  },
  {
    id: 2,
    title:
      'MLB Power Rankings: Cubs, Mariners get hot; we highlight key acquisitions for each team',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://picsum.photos/263/176',
    width: 263,
    height: 176,
    author: 'Jake Mintz',
    commentCount: 13,
  },
  {
    id: 3,
    title:
      'NFL preseason Week 1 odds, schedule: Bryce Young set for first NFL action against Jets',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://picsum.photos/263/176',
    width: 263,
    height: 176,
    author: 'Brian Parchmann',
    commentCount: 2,
  },
  {
    id: 4,
    title:
      'Yes, Messi is brilliant. But if you really want to know where MLS is heading, watch the kids',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://picsum.photos/263/176',
    width: 263,
    height: 176,
    author: 'Luke Stuckmeyer',
    commentCount: 7,
  },
];

export const ThreeTileData: ArticleData[] = [
  {
    id: 1,
    title:
      'With college football realignment, we’re once again asking, ‘What. Is. Happening?’',
    description:
      "All eyes are on the Pac-12, but what comes next is just another part of college football's realignment whirlwind.",
    href: '/article/1',
    image: 'https://picsum.photos/280/188',
    width: 280,
    height: 188,
    author: 'Matt Brown',
    commentCount: 12,
  },
  {
    id: 2,
    title:
      "The Lakers' potential return to a two-big approach doesn't make sense",
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://picsum.photos/280/188',
    width: 280,
    height: 188,
    author: 'Harrison Faigen',
    commentCount: 2,
  },
  {
    id: 3,
    title:
      'The Windup: The Red Sox considered trading this veteran to the Marlins',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://picsum.photos/551/369',
    width: 551,
    height: 369,
    author: 'Larry Brown',
    commentCount: 9,
  },
];

export const ThreeTileDataTwo: ArticleData[] = [
  {
    id: 1,
    title: 'Skip Holtz hired as Northwestern special assistant',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://picsum.photos/280/188',
    width: 280,
    height: 188,
    author: 'Burt Lauten',
    commentCount: 12,
  },
  {
    id: 2,
    title: 'Ibaka says Bucks exit was over communication issues',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://picsum.photos/280/188',
    width: 280,
    height: 188,
    author: 'James Ham',
    commentCount: 5,
  },
  {
    id: 3,
    title:
      'The Windup: The Red Sox considered trading this veteran to the Marlins',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://picsum.photos/551/369',
    width: 551,
    height: 369,
    author: 'Larry Brown',
    commentCount: 19,
  },
];

export const SingleData: ArticleData[] = [
  {
    id: 1,
    title: 'The worst realignment move ever is worse than you thought',
    description:
      'Rutgers/s time in the Big Ten, college football/s most lucrative conference, has been a competitive and financial nightmare.',
    href: '/article/1',
    image: 'https://picsum.photos/588/329',
    width: 588,
    height: 329,
    date: 'Aug 13',
    author: 'Alex Kirshner',
    commentCount: 4,
  },
];

export const HeadlineDatas: ArticleData[] = [
  {
    id: 1,
    title: 'Tigers radio analyst Jim Price dies at 81',
  },
  {
    id: 2,
    title: 'Edwards leads USAB in FIBA World Cup tune-up win',
  },
  {
    id: 3,
    title: 'Patriots bringing back veteran DE Flowers',
  },
  {
    id: 4,
    title: 'Lions signing QB Teddy Bridgewater',
  },
  {
    id: 5,
    title: 'UNC vs. Kentucky to headline 2023 CBS Sports Classic',
  },
  {
    id: 6,
    title: 'Logan Paul to box Dillon Danis on Oct. 14',
  },
  {
    id: 7,
    title: 'UNC/s Walker, FSU/s Jackson have waivers denied',
  },
  {
    id: 8,
    title: 'Georgia fires staffer suing over Jan. 15 crash',
  },
];
