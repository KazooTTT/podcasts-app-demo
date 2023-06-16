"use client";

import { useRef } from "react";
import Image from "next/image";
import { useSize } from "ahooks";
import { ArrowUpDown, Info, PlayCircle, Plus, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function IndexPage(props?: { index: string }) {
  const info = {
    title: "被讨厌的勇气",
    desc: "被讨厌的勇气，并不是要去吸引被讨厌的负向能量，而是，如果这是我生命想绽放出最美的光彩，那么，即使有被讨厌的可能,我都要用自己的双手双脚往那里走去。",
    tip: "待补充文案",
  };

  const list = [
    {
      title: "Mastering Social Media Marketing",
      updateTime: "2023-06-14 15:45:00",
      duration: 2400,
      recreateCount: 10,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "5heajmeeo",
    },
    {
      title: "Mastering Social Media Marketing",
      updateTime: "2023-06-14 15:45:00",
      duration: 2400,
      recreateCount: 10,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "5heajmeeo",
    },
    {
      title: "10 Tips for Successful Blogging",
      updateTime: "2023-06-15 10:30:00",
      duration: 1800,
      recreateCount: 22,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "ylk68yo00",
    },
    {
      title: "The Art of Storytelling in Blogging",
      updateTime: "2023-06-13 09:15:00",
      duration: 2100,
      recreateCount: 33,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "fxdpxyl0l",
    },
    {
      title: "Mastering Social Media Marketing",
      updateTime: "2023-06-14 15:45:00",
      duration: 2400,
      recreateCount: 10,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "5heajmeeo",
    },
    {
      title: "10 Tips for Successful Blogging",
      updateTime: "2023-06-15 10:30:00",
      duration: 1800,
      recreateCount: 22,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "ylk68yo00",
    },
    {
      title: "The Art of Storytelling in Blogging",
      updateTime: "2023-06-13 09:15:00",
      duration: 2100,
      recreateCount: 33,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "fxdpxyl0l",
    },
    {
      title: "Mastering Social Media Marketing",
      updateTime: "2023-06-14 15:45:00",
      duration: 2400,
      recreateCount: 10,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "5heajmeeo",
    },
    {
      title: "The Art of Storytelling in Blogging",
      updateTime: "2023-06-13 09:15:00",
      duration: 2100,
      recreateCount: 33,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "fxdpxyl0l",
    },
    {
      title: "The Art of Storytelling in Blogging",
      updateTime: "2023-06-13 09:15:00",
      duration: 2100,
      recreateCount: 33,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "fxdpxyl0l",
    },
    {
      title: "The Art of Storytelling in Blogging",
      updateTime: "2023-06-13 09:15:00",
      duration: 2100,
      recreateCount: 33,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "fxdpxyl0l",
    },
    {
      title: "Monetizing Your Blog: Strategies and Tips",
      updateTime: "2023-06-11 18:20:00",
      duration: 3200,
      recreateCount: 111,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "gjzljl7v3",
    },
    {
      title: "SEO Techniques for Better Blog Visibility",
      updateTime: "2023-06-12 12:00:00",
      duration: 2700,
      recreateCount: 44,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "4fje04co1",
    },
    {
      title: "Monetizing Your Blog: Strategies and Tips",
      updateTime: "2023-06-11 18:20:00",
      duration: 3200,
      recreateCount: 111,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "gjzljl7v3",
    },
    {
      title: "Mastering Social Media Marketing",
      updateTime: "2023-06-14 15:45:00",
      duration: 2400,
      recreateCount: 10,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "5heajmeeo",
    },
    {
      title: "Monetizing Your Blog: Strategies and Tips",
      updateTime: "2023-06-11 18:20:00",
      duration: 3200,
      recreateCount: 111,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "gjzljl7v3",
    },
    {
      title: "The Art of Storytelling in Blogging",
      updateTime: "2023-06-13 09:15:00",
      duration: 2100,
      recreateCount: 33,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "fxdpxyl0l",
    },
    {
      title: "Monetizing Your Blog: Strategies and Tips",
      updateTime: "2023-06-11 18:20:00",
      duration: 3200,
      recreateCount: 111,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "gjzljl7v3",
    },
    {
      title: "Mastering Social Media Marketing",
      updateTime: "2023-06-14 15:45:00",
      duration: 2400,
      recreateCount: 10,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "5heajmeeo",
    },
    {
      title: "10 Tips for Successful Blogging",
      updateTime: "2023-06-15 10:30:00",
      duration: 1800,
      recreateCount: 22,
      cover: "https://p.ipic.vip/oh91co.png",
      id: "ylk68yo00",
    },
  ];
  // format 2023-06-11 18:20:00 to x月x日
  function formatTime(time: string) {
    const date = new Date(time);
    return `${date.getMonth() + 1}月${date.getDate()}日`;
  }
  // format duration to min
  function formatDuration(duration: number, isShowSecond?: boolean) {
    return isShowSecond
      ? `${Math.floor(duration / 60)}min${duration % 60}s`
      : `${Math.floor(duration / 60)}min`;
  }

  return (
    <div className="relative flex flex-col items-center justify-center px-6">
      <div className="sticky top-0 z-10 bg-background py-6">
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
            <Button
              className="space-x-3 rounded-full bg-accent-background px-6 text-accent"
              variant={"diy"}
            >
              <Share2 />
              <div className="font-semibold">分 享</div>
            </Button>
            <Button
              className="space-x-3 rounded-full bg-accent-background px-6 text-accent"
              variant={"diy"}
            >
              <Plus />
              <div className="font-semibold">订 阅</div>
            </Button>
          </div>
        </div>
        <div className="mt-4 text-sm text-foreground">简介:{info.desc}</div>
        <div className="buttons mt-4 flex w-full space-x-3">
          <Button
            className="h-8 w-1/3 space-x-0.5 rounded-full bg-accent-background px-0 text-accent"
            variant={"diy"}
          >
            <ArrowUpDown size={20} />
            <div className="whitespace-nowrap font-semibold">时间</div>
          </Button>
          <Button
            className="h-8 w-1/3 space-x-0.5 rounded-full bg-accent-background px-0 text-accent"
            variant={"diy"}
          >
            <ArrowUpDown size={20} />
            <div className="whitespace-nowrap font-semibold">播放量</div>
          </Button>
          <Button
            className="h-8 w-1/3 space-x-0.5  rounded-full bg-accent-background px-0 text-accent"
            variant={"diy"}
          >
            <ArrowUpDown size={20} />
            <div className="whitespace-nowrap font-semibold">片段创作</div>
          </Button>
        </div>
      </div>
      <div className="flex-1 space-y-4 overflow-hidden py-4">
        {list.map((item, index) => (
          <div
            className="item flex items-center"
            key={[item.id, index].join("-")}
          >
            <div className="mr-2">
              <Image
                src={item.cover}
                alt="cover img"
                width={64}
                height={64}
                className="rounded-md"
              />
            </div>
            <div className="flex flex-1 flex-col justify-center space-y-2">
              <div className="text-sm">{item.title}</div>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <div>{formatTime(item.updateTime)}</div>
                <div>{formatDuration(item.duration)}</div>
                <div className="flex items-center">
                  <PlayCircle strokeWidth={1.5} size={16} className="mr-0.5" />
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
