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
  uploaderInfo?: UploaderInfo
  reactions: Reactions,
  source?: string
}


export interface UploaderInfo {
  avatar: string | undefined;
  name?: string;
  desc?: string;
}
