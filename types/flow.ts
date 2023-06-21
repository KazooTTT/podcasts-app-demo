import { StaticImageData } from "next/image";

export interface CardProps {
  type: string;
  title?: string;
  subTitle?: string;
  content?: string;
  cover?: string | StaticImageData;
}
