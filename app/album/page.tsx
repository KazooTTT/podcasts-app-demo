"use client";

import Image from "next/image";
import { ArrowUpDown, Info, PlayCircle, Plus, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { formatDuration, formatTime } from "@/lib/format";

interface AlbumItem {
  title: string;
  updateTime: string;
  duration: number;
  views: number;
  recreateCount: number;
  cover: string;
  id: string;
}

export default function IndexPage() {
  const info = {
    title: "组织进化论",
    desc: "「组织进化论」由飞书与声动活泼联合推出，专注于职场话题和企业管理。我们邀请有趣有料的嘉宾一同分享对于未来工作和管理方式的洞察，希望思维的碰撞可以使大家产生新的思考，让大家更加高效愉悦地工作与生活。",
    tip: "待补充文案",
  };

  const cover =
    "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%92%AD%E6%94%BE%E9%A1%B5-%E5%A3%B0%E9%9F%B3%26%E4%B8%93%E8%BE%91%E5%A4%B4%E5%83%8F%E3%80%8A%E7%BB%84%E7%BB%87%E8%BF%9B%E5%8C%96%E8%AE%BA%E3%80%8B.jpeg";

  const list: AlbumItem[] = [
    {
      title: "E38｜为什么晋升总是轮不到你？可能是因为忽视了这项能力",
      updateTime: "2023-07-06",
      duration: 3393,
      views: 120,
      recreateCount: 80,
      cover: cover,
      id: "5heajmeeo",
    },
    {
      title: "E37｜从大厂到创业公司，如何顺利适应新环境？",
      updateTime: "2023-06-29",
      duration: 2881,
      views: 70,
      recreateCount: 35,
      cover: cover,
      id: "5heajmeeo",
    },
    {
      title: "E36｜新晋管理者的避坑指南",
      updateTime: "2023-06-22",
      duration: 3963,
      views: 125,
      recreateCount: 20,
      cover: cover,
      id: "ylk68yo00",
    },
    {
      title: "E35｜年轻人如何“教育”自己的老板？",
      updateTime: "2023-06-15",
      duration: 4074,
      views: 302,
      recreateCount: 55,
      cover: cover,
      id: "fxdpxyl0l",
    },
  ];

  const [sortType, setSortType] = useState<
    "default" | "duration" | "views" | "recreateCount"
  >("default");

  const sortedList =
    sortType === "default"
      ? list
      : list.sort((a, b) => a?.[sortType] - b?.[sortType]);

  return (
    <div className="container relative flex w-full flex-col items-center justify-center">
      <div className="sticky top-0 z-10 w-full bg-background py-4">
        <div className="info flex w-full">
          <Image
            src={cover}
            alt="cover img"
            width={144}
            height={144}
            className={`rounded-3xl`}
          />
          <div className="flex flex-1 flex-col items-center justify-between">
            <div className="text-2xl font-semibold">{info.title}</div>
            <Button className="h-9 space-x-3 rounded-sm px-10 text-accent">
              <Share2 />
              <div className="font-semibold">分 享</div>
            </Button>
            <Button className="h-9 space-x-3 rounded-sm px-10 text-accent">
              <Plus />
              <div className="font-semibold">订 阅</div>
            </Button>
          </div>
        </div>
        <div className="mt-4 text-sm text-foreground">简介:{info.desc}</div>
        <div className="buttons mt-4 flex w-full space-x-3">
          <Button
            className="duration h-8 w-1/3 space-x-0.5 rounded-sm px-0"
            variant={sortType === "duration" ? undefined : "secondary"}
            onClick={() => {
              setSortType(sortType === "duration" ? "default" : "duration");
            }}
          >
            <ArrowUpDown size={20} />
            <div className="whitespace-nowrap font-semibold">时间</div>
          </Button>
          <Button
            className="views h-8 w-1/3 space-x-0.5 rounded-sm px-0"
            variant={sortType === "views" ? undefined : "secondary"}
            onClick={() => {
              setSortType(sortType === "views" ? "default" : "views");
            }}
          >
            <ArrowUpDown size={20} />
            <div className="whitespace-nowrap font-semibold">播放量</div>
          </Button>
          <Button
            className="recreateCount h-8 w-1/3 space-x-0.5 rounded-sm px-0"
            variant={sortType === "recreateCount" ? undefined : "secondary"}
            onClick={() => {
              setSortType(
                sortType === "recreateCount" ? "default" : "recreateCount"
              );
            }}
          >
            <ArrowUpDown size={20} />
            <div className="whitespace-nowrap font-semibold">片段创作</div>
          </Button>
        </div>
      </div>
      <div className="flex-1 space-y-4 overflow-hidden py-4">
        {sortedList.map((item, index) => (
          <div
            className="item flex items-center"
            key={[item.id, index].join("-")}
          >
            <div className="mr-2">
              <Image
                src={item.cover}
                alt="cover img"
                width={72}
                height={72}
                className="rounded-md"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center space-y-2">
              <div className="line-clamp-1 text-base">{item.title}</div>
              <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                <div>{formatTime(item.updateTime)}</div>
                <div>{formatDuration(item.duration)}</div>
                <div className="flex items-center">
                  <PlayCircle strokeWidth={1.5} size={16} className="mr-0.5" />
                  片段创作{item.recreateCount}次
                </div>
              </div>
            </div>
            {/* <div className="text-muted-foreground">
                <Info size={24} strokeWidth={1.5} />
              </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
