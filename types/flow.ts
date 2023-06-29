import { SrtItem } from "@/components/srt/type";

export interface Reactions {
  likes: number;
  comments: number;
  stars: number;
  share: number;
}
export interface CardProps {
  type: string;
  title?: string | string[];
  subTitle?: string;
  content?: string;
  cover?: string;
  uploaderInfo?: UploaderInfoProps;
  reactions: Reactions;
  source?: string;
  srtList?: SrtItem[]
}

export interface UploaderInfoProps {
  avatar: string | undefined;
  name?: string;
  desc?: string;
}
