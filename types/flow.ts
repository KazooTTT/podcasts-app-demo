
export interface CardProps {
  type: string;
  title?: string;
  subTitle?: string;
  content?: string;
  cover?: string;
  uploaderInfo?: UploaderInfo
}


export interface UploaderInfo {
  avatar: string | undefined;
  name?: string;
  desc?: string;
}
