import FlowPage from "../components/flow/page";
import FlowLayout from "../components/flow/layout";
import { CardProps } from "@/types/flow";

export default function Page() {
  const infos: CardProps[] = [
    {
      title: ["为什么晋升总是轮不到你？", "可能是因为忽视了这项能力"],
      type: "img",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%92%AD%E6%94%BE%E9%A1%B5-%E5%A3%B0%E9%9F%B3%26%E4%B8%93%E8%BE%91%E5%A4%B4%E5%83%8F%E3%80%8A%E7%BB%84%E7%BB%87%E8%BF%9B%E5%8C%96%E8%AE%BA%E3%80%8B.jpeg",
      uploaderInfo: {
        avatar:
          "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%92%AD%E6%94%BE%E9%A1%B5-%E5%96%9C%E9%A9%AC%E5%8A%A0%E6%B2%B9%E7%AB%99%E5%A4%B4%E5%83%8F.jpg",
        name: "喜马播客主加油站",
        desc: "喜马播客主成长平台官方账号。挖掘优质播客主，听到不一样的声音！",
      },
      reactions: {
        likes: 997,
        comments: 372,
        stars: 473,
        share: 165,
      },
      source:
        "/https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/podcast.MP3",
      srtList: [
        "ocean rain sun sky rain",
        "ocean love forever forever",
        "love dream",
        "dream forever love love dream",
        "sun sun ocean sun love",
        "rain love",
        "time time sun forever",
        "forever time sky",
        "sun ocean dream time time forever",
        "love love ocean heart",
        "dream forever love love dream",
        "sun sun ocean sun love",
        "rain love",
        "time time sun forever",
        "forever time sky",
        "sun ocean dream time time forever",
        "love love ocean heart",
        "dream forever love love dream",
        "sun sun ocean sun love",
        "rain love",
        "time time sun forever",
        "forever time sky",
        "sun ocean dream time time forever",
        "love love ocean heart",
        "dream forever love love dream",
        "sun sun ocean sun love",
        "rain love",
        "time time sun forever",
        "forever time sky",
        "sun ocean dream time time forever",
        "love love ocean heart",
        "dream forever love love dream",
        "sun sun ocean sun love",
        "rain love",
        "time time sun forever",
        "forever time sky",
        "sun ocean dream time time forever",
        "love love ocean heart",
        "dream forever love love dream",
        "sun sun ocean sun love",
        "rain love",
        "time time sun forever",
        "forever time sky",
        "sun ocean dream time time forever",
        "love love ocean heart",
        "dream forever love love dream",
        "sun sun ocean sun love",
        "rain love",
        "time time sun forever",
        "forever time sky",
        "sun ocean dream time time forever",
        "love love ocean heart",
      ],
    },
    {
      title: "Urban Exploration",
      type: "img",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252102616.jpeg",
      uploaderInfo: {
        avatar:
          "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128870.jpg",
        name: "Urban",
        desc: "Always eager to uncover city secrets.",
      },
      reactions: {
        likes: 177,
        comments: 523,
        stars: 404,
        share: 501,
      },
    },
    {
      title: "Gastronomy Delights",
      type: "img",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252107930.jpeg",
      uploaderInfo: {
        avatar:
          "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252101137.jpeg",
        name: "Gourmet Guru",
        desc: "A foodie passionate about culinary art.",
      },
      reactions: {
        likes: 697,
        comments: 573,
        stars: 325,
        share: 946,
      },
    },
    {
      title: "Galactic Wonders",
      type: "img",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252107341.jpeg",
      uploaderInfo: {
        avatar:
          "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252102446.jpeg",
        name: "Space Spectator",
        desc: "Curious observer of the starry expanses.",
      },
      reactions: {
        likes: 621,
        comments: 50,
        stars: 983,
        share: 381,
      },
    },
    {
      title: "Ocean's Depth",
      type: "img",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252106825.jpeg",
      uploaderInfo: {
        avatar:
          "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252103731.jpeg",
        name: "Marine Maven",
        desc: "Dedicated to uncovering the mysteries of the deep.",
      },
      reactions: {
        likes: 250,
        comments: 798,
        stars: 122,
        share: 354,
      },
    },
  ];
  return (
    <FlowLayout>
      <FlowPage infos={infos}></FlowPage>
    </FlowLayout>
  );
}
