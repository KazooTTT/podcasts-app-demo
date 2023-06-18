"use client";

import React from "react";

import { ProgressDemo } from "@/components/progress";
import { PlayController } from "@/components/PlayController";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

export default function IndexPage() {
  // 当前播放速率
  const [playbackRate, setPlaybackRate] = React.useState(1);

  // 是否正在播放
  const [isPlaying, setIsPlaying] = React.useState(false);

  // convert playbackRate to string which has two digits
  const formatPlaybackRate = (playbackRate: number) => {
    return `${playbackRate.toFixed(1)}x`;
  };
  const [open, setOpen] = React.useState(false);

  const [[currentSec, totalSec], setTime] = React.useState([0, 60]);

  return (
    <div className="relative flex flex-col items-center justify-center px-2">
      <div className="sticky top-0 z-10 mx-auto flex w-full flex-col items-center justify-center bg-background">
        <div className="info-container w-4/5 pt-6">
          <Image
            src={"https://p.ipic.vip/oh91co.png"}
            alt="avatar"
            width={200}
            height={200}
            className="mx-auto rounded-sm"
          />
        </div>
        <div className="controller mt-4 h-full w-4/5 flex-1">
          <PlayController
            open={open}
            setOpen={setOpen}
            formatPlaybackRate={formatPlaybackRate}
            playbackRate={playbackRate}
            setPlaybackRate={setPlaybackRate}
            currentSec={currentSec}
            setTime={setTime}
            totalSec={totalSec}
            setIsPlaying={setIsPlaying}
            isPlaying={isPlaying}
          ></PlayController>
          <div className="mt-8">
            <ProgressDemo
              isPlaying={isPlaying}
              playbackRate={playbackRate}
              currentSec={currentSec}
              totalSec={totalSec}
              setTime={setTime}
              setIsPlaying={setIsPlaying}
            />
          </div>
        </div>
        <div className="container my-4">
          <Button className="w-full">创建片段</Button>
        </div>
      </div>

      <div className="container w-full flex-1 space-y-5 py-2">
        {list.map((item, index) => {
          return (
            <div key={item.title} className="item flex items-center">
              <div className="mr-5 w-4 text-base">{index + 1}</div>
              <div className="flex flex-1 flex-col justify-center">
                <div className="line-clamp-1 text-sm">{item.title}</div>
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <div>{item.duration}</div>
                  <div>{item.position}</div>
                </div>
              </div>
              <div>
                <Info size={24} strokeWidth={1.5} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const list = [
  {
    title: "Podcast 1",
    duration: 309,
    position: 0,
  },
  {
    title: "Podcast 2",
    duration: 558,
    position: 309,
  },
  {
    title: "Podcast 3",
    duration: 192,
    position: 867,
  },
  {
    title: "Podcast 4",
    duration: 201,
    position: 1059,
  },
  {
    title: "Podcast 5",
    duration: 570,
    position: 1260,
  },
  {
    title: "Podcast 6",
    duration: 355,
    position: 1830,
  },
  {
    title: "Podcast 7",
    duration: 586,
    position: 2185,
  },
  {
    title: "Podcast 8",
    duration: 354,
    position: 2771,
  },
  {
    title: "Podcast 9",
    duration: 384,
    position: 3125,
  },
  {
    title: "Podcast 10",
    duration: 290,
    position: 3509,
  },
];