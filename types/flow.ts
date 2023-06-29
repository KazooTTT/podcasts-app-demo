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
  srtList?: {
    id: any;
    startTime: any;
    endTime: any;
    text: any;
  }[]
}

export interface UploaderInfoProps {
  avatar: string | undefined;
  name?: string;
  desc?: string;
}
