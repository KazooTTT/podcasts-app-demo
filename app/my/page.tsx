import { Client } from "../../components/my/Client";
import { placeHolder } from "@/lib/img";

export default async function IndexPage() {
  const placeHolderBase64 = placeHolder;

  const data = {
    avatar:
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128870.jpg",
    nickName: "Anderson anding",
    userName: "Jose O'Conner",
    ip: "陕西",
    following: 203,
    followers: 22203,
    interactions: 203,
  };

  const prodcastsImages = [
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128876.jpg",
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128875.jpg",
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128874.jpg",
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128873.jpg",
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128872.jpg",
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128871.jpg",
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128870.jpg",
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128869.jpg",
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128868.jpg",
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128867.jpg",
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128866.jpg",
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128865.jpg",
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128864.jpg",
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128863.jpg",
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128862.jpg",
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128861.jpg",
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128860.jpg",
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128859.jpg",
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128858.jpg",
  ];

  const imagesList = [
    [
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image17.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image16.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image9.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image8.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image7.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image5.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image15.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image14.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image13.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image12.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image11.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image10.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image6.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image4.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image3.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image2.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image1.jpg",
    ],
    [
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image1.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image17.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image11.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image5.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image9.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image8.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image6.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image2.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image16.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image10.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image3.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image12.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image4.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image13.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image14.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image15.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image7.jpg",
    ],
    [
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image7.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image14.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image6.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image13.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image4.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image9.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image15.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image17.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image3.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image8.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image12.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image5.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image10.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image1.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image11.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image2.jpg",
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/image16.jpg",
    ],
  ];

  return (
    <Client {...{ data, prodcastsImages, imagesList, placeHolderBase64 }} />
  );
}
