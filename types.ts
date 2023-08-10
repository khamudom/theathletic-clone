import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export interface CardProps {
  id?: number;
  title?: string;
  description?: string;
  imgSrc?: string | StaticImport;
  imgWidth?: number;
  imgHeight?: number;
  date?: string;
  author?: string;
  commentCount?: number;
}
