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
    title: "被讨厌的勇气",
    desc: "被讨厌的勇气，并不是要去吸引被讨厌的负向能量，而是，如果这是我生命想绽放出最美的光彩，那么，即使有被讨厌的可能,我都要用自己的双手双脚往那里走去。",
    tip: "待补充文案",
  };

  const list: AlbumItem[] = [
    {
      title:
        "Sit et modi. Corrupti est eos alias similique. Nisi dolorum quasi provident nostrum aut accusamus aspernatur. Qui sapiente maxime quo provident suscipit est porro quisquam. Blanditiis qui doloremque quam consequatur non. Tempora occaecati nostrum et doloribus in quam quaerat. Possimus est nesciunt rem officiis voluptatum. Ducimus quia soluta reprehenderit totam quod. Facilis ut consequuntur qui dolor aspernatur cum aut sed. Exercitationem ut voluptatem ex sunt molestiae temporibus. Praesentium eum corporis quisquam dolor est eaque error.",
      updateTime: "2023-06-14 15:45:00",
      duration: 2400,
      views: 100,
      recreateCount: 10,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "5heajmeeo",
    },
    {
      title: "Mastering Social Media Marketing",
      updateTime: "2023-06-14 15:45:00",
      duration: 2400,
      views: 100,
      recreateCount: 10,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "5heajmeeo",
    },
    {
      title: "10 Tips for Successful Blogging",
      updateTime: "2023-06-15 10:30:00",
      duration: 1800,
      views: 100,
      recreateCount: 22,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "ylk68yo00",
    },
    {
      title: "The Art of Storytelling in Blogging",
      updateTime: "2023-06-13 09:15:00",
      duration: 2100,
      views: 100,
      recreateCount: 33,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "fxdpxyl0l",
    },
    {
      title: "Mastering Social Media Marketing",
      updateTime: "2023-06-14 15:45:00",
      duration: 2400,
      views: 100,
      recreateCount: 10,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "5heajmeeo",
    },
    {
      title: "10 Tips for Successful Blogging",
      updateTime: "2023-06-15 10:30:00",
      duration: 1800,
      views: 100,
      recreateCount: 22,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "ylk68yo00",
    },
    {
      title: "The Art of Storytelling in Blogging",
      updateTime: "2023-06-13 09:15:00",
      duration: 2100,
      views: 100,
      recreateCount: 33,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "fxdpxyl0l",
    },
    {
      title: "Mastering Social Media Marketing",
      updateTime: "2023-06-14 15:45:00",
      duration: 2400,
      views: 100,
      recreateCount: 10,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "5heajmeeo",
    },
    {
      title: "The Art of Storytelling in Blogging",
      updateTime: "2023-06-13 09:15:00",
      duration: 2100,
      views: 100,
      recreateCount: 33,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "fxdpxyl0l",
    },
    {
      title: "The Art of Storytelling in Blogging",
      updateTime: "2023-06-13 09:15:00",
      duration: 2100,
      views: 100,
      recreateCount: 33,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "fxdpxyl0l",
    },
    {
      title: "The Art of Storytelling in Blogging",
      updateTime: "2023-06-13 09:15:00",
      duration: 2100,
      views: 100,
      recreateCount: 33,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "fxdpxyl0l",
    },
    {
      title: "Monetizing Your Blog: Strategies and Tips",
      updateTime: "2023-06-11 18:20:00",
      duration: 3200,
      views: 100,
      recreateCount: 111,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "gjzljl7v3",
    },
    {
      title: "SEO Techniques for Better Blog Visibility",
      updateTime: "2023-06-12 12:00:00",
      duration: 2700,
      views: 100,
      recreateCount: 44,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "4fje04co1",
    },
    {
      title: "Monetizing Your Blog: Strategies and Tips",
      updateTime: "2023-06-11 18:20:00",
      duration: 3200,
      views: 100,
      recreateCount: 111,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "gjzljl7v3",
    },
    {
      title: "Mastering Social Media Marketing",
      updateTime: "2023-06-14 15:45:00",
      duration: 2400,
      views: 100,
      recreateCount: 10,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "5heajmeeo",
    },
    {
      title: "Monetizing Your Blog: Strategies and Tips",
      updateTime: "2023-06-11 18:20:00",
      duration: 3200,
      views: 100,
      recreateCount: 111,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "gjzljl7v3",
    },
    {
      title: "The Art of Storytelling in Blogging",
      updateTime: "2023-06-13 09:15:00",
      duration: 2100,
      views: 100,
      recreateCount: 33,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "fxdpxyl0l",
    },
    {
      title: "Monetizing Your Blog: Strategies and Tips",
      updateTime: "2023-06-11 18:20:00",
      duration: 3200,
      views: 100,
      recreateCount: 111,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "gjzljl7v3",
    },
    {
      title: "Mastering Social Media Marketing",
      updateTime: "2023-06-14 15:45:00",
      duration: 2400,
      views: 100,
      recreateCount: 10,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "5heajmeeo",
    },
    {
      title: "10 Tips for Successful Blogging",
      updateTime: "2023-06-15 10:30:00",
      duration: 1800,
      views: 100,
      recreateCount: 22,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "ylk68yo00",
    },
  ];

  const [sortType, setSortType] = useState<
    "duration" | "views" | "recreateCount"
  >("duration");

  return (
    <div className="container relative flex w-full flex-col items-center justify-center">
      <div className="sticky top-0 z-10 w-full bg-background py-4">
        <div className="info flex w-full">
          <Image
            src={"https://p.ipic.vip/oh91co.png"}
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
              setSortType("duration");
            }}
          >
            <ArrowUpDown size={20} />
            <div className="whitespace-nowrap font-semibold">时间</div>
          </Button>
          <Button
            className="views h-8 w-1/3 space-x-0.5 rounded-sm px-0"
            variant={sortType === "views" ? undefined : "secondary"}
            onClick={() => {
              setSortType("views");
            }}
          >
            <ArrowUpDown size={20} />
            <div className="whitespace-nowrap font-semibold">播放量</div>
          </Button>
          <Button
            className="recreateCount h-8 w-1/3 space-x-0.5 rounded-sm px-0"
            variant={sortType === "recreateCount" ? undefined : "secondary"}
            onClick={() => {
              setSortType("recreateCount");
            }}
          >
            <ArrowUpDown size={20} />
            <div className="whitespace-nowrap font-semibold">片段创作</div>
          </Button>
        </div>
      </div>
      <div className="flex-1 space-y-4 overflow-hidden py-4">
        {list
          .sort((a, b) => a?.[sortType] - b?.[sortType])
          .map((item, index) => (
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
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <div>{formatTime(item.updateTime)}</div>
                  <div>{formatDuration(item.duration)}</div>
                  <div className="flex items-center">
                    <PlayCircle
                      strokeWidth={1.5}
                      size={16}
                      className="mr-0.5"
                    />
                    片段创作{item.recreateCount}次
                  </div>
                </div>
              </div>
              <div className="text-muted-foreground">
                <Info size={24} strokeWidth={1.5} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
