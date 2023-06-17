"use client";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      <div className="tabs mt-4">
        <Tabs defaultValue="creation" className="container">
          <TabsList className="w-full bg-contrast">
            <TabsTrigger
              value="creation"
              className="flex-1 text-lg decoration-hightLightMenu decoration-1.5 underline-offset-8 data-[state=active]:underline"
            >
              创作
            </TabsTrigger>
            <TabsTrigger
              value="collections"
              className="flex-1 text-lg decoration-hightLightMenu decoration-1.5 underline-offset-8 data-[state=active]:underline"
            >
              收藏
            </TabsTrigger>
            <TabsTrigger
              value="likes"
              className="flex-1 text-lg decoration-hightLightMenu decoration-1.5 underline-offset-8 data-[state=active]:underline"
            >
              赞过
            </TabsTrigger>
          </TabsList>
          <TabsContent value="creation" className="space-y-3">
            <div>
              <div className="mb-2">我创作的博客</div>
              <div className="podcasts flex items-center space-x-3 overflow-auto">
                <Image
                  src={"https://p.ipic.vip/oh91co.png"}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="rounded-sm"
                />
                <Image
                  src={"https://p.ipic.vip/oh91co.png"}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="rounded-sm"
                />
                <Image
                  src={"https://p.ipic.vip/oh91co.png"}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="rounded-sm"
                />
                <Image
                  src={"https://p.ipic.vip/oh91co.png"}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="rounded-sm"
                />
                <Image
                  src={"https://p.ipic.vip/oh91co.png"}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="rounded-sm"
                />
                <Image
                  src={"https://p.ipic.vip/oh91co.png"}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="rounded-sm"
                />
                <Image
                  src={"https://p.ipic.vip/oh91co.png"}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="rounded-sm"
                />
                <Image
                  src={"https://p.ipic.vip/oh91co.png"}
                  alt="avatar"
                  width={64}
                  height={64}
                  className="rounded-sm"
                />
              </div>
            </div>
            <div>
              <div className="mb-2">我创作的片段</div>
              <div className="segments"></div>
            </div>
          </TabsContent>
          <TabsContent value="collections">和我创作的片段一样</TabsContent>
          <TabsContent value="likes">和我创作的片段一样</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
