"use client";
import Image from "next/image";

export default function IndexPage() {
  const data = {
    avatar: "https://p.ipic.vip/oh91co.png",
    nickName: "田子默",
    userName: "Jose O'Conner",
    ip: "陕西",
    following: 203,
    followers: 22203,
    interactions: 203,
  };

  return (
    <div>
      <div className="info">
        <div className="userinfo container mb-8 flex space-x-6">
          <Image
            src={data.avatar}
            alt="avatar"
            width={72}
            height={72}
            className="rounded-full"
          />
          <div className="flex flex-1 flex-col justify-center space-y-1">
            <div className="text-xl">{data.nickName}</div>
            <div className="text-xs text-muted-foreground">
              @{data.userName}
            </div>
            <div className="text-xs text-muted-foreground">
              ip属地：{data.ip}
            </div>
          </div>
        </div>
        <div className="data container flex items-center justify-between px-8">
          <div className="flex-1 space-y-1 text-center">
            <div className="text-lg font-medium">{data.following}</div>
            <div className="text-xs text-muted-foreground">关注</div>
          </div>
          <div className="flex-1 space-y-1 text-center">
            <div className="text-lg font-medium">{data.followers}</div>
            <div className="text-xs text-muted-foreground">粉丝</div>
          </div>
          <div className="flex-1 space-y-1 text-center">
            <div className="text-lg font-medium">{data.interactions}</div>
            <div className="text-xs text-muted-foreground">获赞与收藏</div>
          </div>
        </div>
      </div>
      <div className="list"></div>
    </div>
  );
}
