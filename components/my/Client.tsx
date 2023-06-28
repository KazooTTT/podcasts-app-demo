"use client";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Client({
  data,
  prodcastsImages,
  mySnips,
  collections,
  stars,
  placeHolderBase64,
}: {
  data: {
    avatar: string;
    nickName: string;
    userName: string;
    ip: string;
    following: number;
    followers: number;
    interactions: number;
    desc: string;
  };
  prodcastsImages: {
    title: string;
    cover: string;
  }[];
  mySnips: {
    title: string;
    cover: string;
  }[];
  collections: {
    title: string;
    cover: string;
  }[];
  stars: {
    title: string;
    cover: string;
  }[];
  placeHolderBase64: string;
}) {
  return (
    <>
      <div className="info sticky top-0 z-20 -mb-1 bg-background">
        <div className="userinfo container mb-8">
          <div className="flex space-x-6">
            <Image
              src={data.avatar}
              alt="avatar"
              width={72}
              height={72}
              className="rounded-full"
              placeholder="blur"
              blurDataURL={placeHolderBase64}
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
          <div className="mt-4 text-sm">{data.desc}</div>
        </div>
        <div className="data container flex items-center justify-between py-2">
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
      <div className="tabs overflow-auto scrollbar-none">
        <Tabs defaultValue="creation" className="container flex flex-col">
          <TabsList className="sticky top-0 z-40 w-full rounded-none bg-background px-0">
            <TabsTrigger
              value="creation"
              className="flex-1 text-center text-lg decoration-hightLightMenu decoration-1.5 underline-offset-8 data-[state=active]:underline"
            >
              创作
            </TabsTrigger>
            <TabsTrigger
              value="collections"
              className="flex-1 text-center text-lg decoration-hightLightMenu decoration-1.5 underline-offset-8 data-[state=active]:underline"
            >
              收藏
            </TabsTrigger>
            <TabsTrigger
              value="likes"
              className="flex-1 text-center text-lg decoration-hightLightMenu decoration-1.5 underline-offset-8 data-[state=active]:underline"
            >
              赞过
            </TabsTrigger>
          </TabsList>
          <TabsContent value="creation" className="flex-1 space-y-3 py-2">
            <div>
              <div className="mb-2">我创作的播客</div>
              <div className="podcasts flex items-center space-x-3 overflow-auto scrollbar-none">
                {prodcastsImages.map(({ cover: url, title }, index) => (
                  <div
                    key={url}
                    className="flex w-32 flex-col items-center justify-center space-y-1"
                  >
                    <div className="flex w-32 flex-col">
                      <Image
                        src={url}
                        alt="cover"
                        width={128}
                        height={128}
                        className="block rounded-sm"
                        placeholder="blur"
                        blurDataURL={placeHolderBase64}
                      />
                    </div>
                    <div className="text-sm">{title}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="mb-2">我创作的片段</div>
              <div className="segments grid grid-flow-row grid-cols-2 gap-4 gap-y-6">
                {mySnips?.map(({ cover: img, title }, index) => (
                  <div
                    key={`segments${img}${index}`}
                    className="w-full space-y-2"
                  >
                    <div className="flex">
                      <Image
                        src={img}
                        alt="cover"
                        width={877}
                        height={1169}
                        className="w-full rounded-sm"
                        placeholder="blur"
                        blurDataURL={placeHolderBase64}
                      />
                    </div>
                    <div className="text-sm">{title}</div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="collections">
            <div className="collections grid grid-flow-row grid-cols-2 gap-4	">
              {collections?.map(({ cover: img, title }, index) => (
                <div
                  key={`collections${img}${index}`}
                  className="w-full space-y-2"
                >
                  <div className="flex">
                    <Image
                      src={img}
                      alt="cover"
                      width={877}
                      height={1169}
                      className="w-full rounded-sm"
                      placeholder="blur"
                      blurDataURL={placeHolderBase64}
                    />
                  </div>
                  <div className="text-sm">{title}</div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="likes">
            <div className="likes grid grid-flow-row grid-cols-2 gap-4	">
              {stars?.map(({ cover: img, title }, index) => (
                <div key={`likes${img}${index}`} className="w-full space-y-2">
                  <div className="flex">
                    <Image
                      src={img}
                      alt="cover"
                      width={877}
                      height={1169}
                      className="w-full rounded-sm"
                      placeholder="blur"
                      blurDataURL={placeHolderBase64}
                    />
                  </div>
                  <div className="text-sm">{title}</div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
