import { Client } from "../../components/my/Client";
import { placeHolder } from "@/lib/img";

export default async function IndexPage() {
  const placeHolderBase64 = placeHolder;

  const data = {
    avatar:
      "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128870.jpg",
    nickName: "看理想vistopia",
    userName: "istopia",
    ip: "北京",
    following: 203,
    followers: 22203,
    interactions: 203,
    desc: "探索文化生活的另一种可能",
  };

  const prodcastsImages = [
    {
      title: "梁文道 · 八分",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/1%E5%85%AB%E5%88%86.jpeg",
    },
    {
      title: "没理想编辑部",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/2%E6%B2%A1%E7%90%86%E6%83%B3%E7%BC%96%E8%BE%91%E9%83%A8.jpeg",
    },
    {
      title: "看理想圆桌",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/3%E7%9C%8B%E7%90%86%E6%83%B3%E5%9C%86%E6%A1%8C.jpeg",
    },
    {
      title: "放晴早安",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/4%E6%94%BE%E6%99%B4%E6%97%A9%E5%AE%89.jpeg",
    },
    {
      title: "艺术折叠",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/5%E8%89%BA%E6%9C%AF%E6%8A%98%E5%8F%A0.jpeg",
    },
    {
      title: "理想青年",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/6%E7%90%86%E6%83%B3%E9%9D%92%E5%B9%B4.jpeg",
    },
    {
      title: "衰仔日记",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/7%E8%A1%B0%E4%BB%94%E6%97%A5%E8%AE%B0.jpeg",
    },
    {
      title: "豁然开朗",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/8%E8%B1%81%E7%84%B6%E5%BC%80%E6%9C%97.jpeg",
    },
  ];

  // 我创作的片段
  const mySnips = [
    {
      title: "如果你最近不快乐，一定要来听这期播客！",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/1.JPG",
    },
    {
      title: "想都不敢想的嘉宾组合，来看理想做客啦！",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/2.JPG",
    },
    {
      title: "无数个失眠的夜晚，都是道长治愈我的...",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/3.JPG",
    },
    {
      title: "女性播客推荐：用有效信息抵抗无效焦虑",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/4.JPG",
    },
    {
      title: "没时间看书？开始听这些播客吧！",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/5.JPG",
    },
    {
      title: "生活一地鸡毛？这个播客让你如沐春风！",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/6.JPG",
    },
    {
      title: "最近这期播客，你一定要听听",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/7.JPG",
    },
    {
      title: "10个设计师必听的品牌播客【收藏版】",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/8.JPG",
    },
    {
      title: "大过年的，来聊聊市井里的烟火与乡俗",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/9.JPG",
    },
    {
      title: "回家吧，听着这些让你一秒归家的歌",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/10.JPG",
    },
  ];

  const collections = [
    {
      title: "生活一地鸡毛？这个播客让你如沐春风！",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/6.JPG",
    },
    {
      title: "回家吧，听着这些让你一秒归家的歌",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/10.JPG",
    },
    {
      title: "如果你最近不快乐，一定要来听这期播客！",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/1.JPG",
    },
    {
      title: "没时间看书？开始听这些播客吧！",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/5.JPG",
    },
    {
      title: "10个设计师必听的品牌播客【收藏版】",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/8.JPG",
    },
    {
      title: "无数个失眠的夜晚，都是道长治愈我的...",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/3.JPG",
    },
    {
      title: "最近这期播客，你一定要听听",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/7.JPG",
    },
    {
      title: "大过年的，来聊聊市井里的烟火与乡俗",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/9.JPG",
    },
    {
      title: "女性播客推荐：用有效信息抵抗无效焦虑",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/4.JPG",
    },
    {
      title: "想都不敢想的嘉宾组合，来看理想做客啦！",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/2.JPG",
    },
  ];

  const stars = [
    {
      title: "大过年的，来聊聊市井里的烟火与乡俗",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/9.JPG",
    },
    {
      title: "如果你最近不快乐，一定要来听这期播客！",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/1.JPG",
    },
    {
      title: "最近这期播客，你一定要听听",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/7.JPG",
    },
    {
      title: "回家吧，听着这些让你一秒归家的歌",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/10.JPG",
    },
    {
      title: "想都不敢想的嘉宾组合，来看理想做客啦！",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/2.JPG",
    },
    {
      title: "10个设计师必听的品牌播客【收藏版】",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/8.JPG",
    },
    {
      title: "没时间看书？开始听这些播客吧！",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/5.JPG",
    },
    {
      title: "生活一地鸡毛？这个播客让你如沐春风！",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/6.JPG",
    },
    {
      title: "女性播客推荐：用有效信息抵抗无效焦虑",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/4.JPG",
    },
    {
      title: "无数个失眠的夜晚，都是道长治愈我的...",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%9B%BF%E6%8D%A2/3.JPG",
    },
  ];

  return (
    <Client
      collections={collections}
      stars={stars}
      {...{ data, prodcastsImages, mySnips, placeHolderBase64 }}
    />
  );
}
