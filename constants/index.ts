import { StaticImport } from 'next/dist/shared/lib/get-img-props';

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

export interface CardProps {
  title?: string;
  description?: string;
  imgSrc?: string | StaticImport;
  imgWidth?: number;
  imgHeight?: number;
  className?: string;
}

export interface ArticleData {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  width: number;
  height: number;
}

export const topArticles: ArticleData[] = [
  {
    id: '1',
    title:
      'With college football realignment, we’re once again asking, ‘What. Is. Happening?’',
    description:
      "All eyes are on the Pac-12, but what comes next is just another part of college football's realignment whirlwind.",
    href: '/article/1',
    image: 'https://placebear.com/479/320',
    width: 479,
    height: 320,
  },
  {
    id: '2',
    title:
      "The Lakers' potential return to a two-big approach doesn't make sense",
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://placebear.com/81/81',
    width: 81,
    height: 81,
  },
  {
    id: '3',
    title:
      'The Windup: The Red Sox considered trading this veteran to the Marlins',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://placebear.com/81/81',
    width: 81,
    height: 81,
  },
  {
    id: '4',
    title: 'Skip Holtz hired as Northwestern special assistant',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://placebear.com/81/81',
    width: 81,
    height: 81,
  },
  {
    id: '5',
    title: 'Ibaka says Bucks exit was over communication issues',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://placebear.com/81/81',
    width: 81,
    height: 81,
  },
];

export const rowArticles: ArticleData[] = [
  {
    id: '1',
    title: 'Article 1',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://placebear.com/263/176',
    width: 263,
    height: 176,
  },
  {
    id: '2',
    title: 'Article 1',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://placebear.com/263/176',
    width: 263,
    height: 176,
  },
  {
    id: '3',
    title: 'Article 1',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://placebear.com/263/176',
    width: 263,
    height: 176,
  },
  {
    id: '4',
    title: 'Article 1',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://placebear.com/263/176',
    width: 263,
    height: 176,
  },
];

export const ThreeTileDataOne: ArticleData[] = [
  {
    id: '1',
    title:
      'With college football realignment, we’re once again asking, ‘What. Is. Happening?’',
    description:
      "All eyes are on the Pac-12, but what comes next is just another part of college football's realignment whirlwind.",
    href: '/article/1',
    image: 'https://placebear.com/479/320',
    width: 280,
    height: 188,
  },
  {
    id: '2',
    title:
      "The Lakers' potential return to a two-big approach doesn't make sense",
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://placebear.com/81/81',
    width: 280,
    height: 188,
  },
  {
    id: '3',
    title:
      'The Windup: The Red Sox considered trading this veteran to the Marlins',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://placebear.com/81/81',
    width: 551,
    height: 369,
  },
];

export const ThreeTileDataTwo: ArticleData[] = [
  {
    id: '1',
    title: 'Skip Holtz hired as Northwestern special assistant',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://placebear.com/81/81',
    width: 280,
    height: 188,
  },
  {
    id: '2',
    title: 'Ibaka says Bucks exit was over communication issues',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://placebear.com/81/81',
    width: 280,
    height: 188,
  },
  {
    id: '3',
    title:
      'The Windup: The Red Sox considered trading this veteran to the Marlins',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://placebear.com/81/81',
    width: 551,
    height: 369,
  },
];

export const SingleData: ArticleData[] = [
  {
    id: '1',
    title: 'Skip Holtz hired as Northwestern special assistant',
    description:
      'In a situation where every win and loss carry exaggerated importance, the Red Sox are giving away games at the worst possible time',
    href: '/article/1',
    image: 'https://placebear.com/588/329',
    width: 588,
    height: 329,
  },
];
