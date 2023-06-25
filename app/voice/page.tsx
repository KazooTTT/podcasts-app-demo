"use client";

import React, { useState } from "react";

import { ProgressDemo } from "@/components/progress";
import { PlayController } from "@/components/PlayController";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { formatDuration, formatTime2MinSec } from "@/lib/format";
import { Badge } from "@/components/ui/badge";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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

  const [[currentSec, totalSec], setTime] = React.useState([0, 270]);

  const [isShowDetail, setIsShowDetail] = useState(false);
  return (
    <div className="container relative flex flex-col items-center justify-center">
      <div className="sticky top-0 z-10 mx-auto flex w-full flex-col items-center justify-center bg-background">
        <div className="info-container w-3/5">
          <Image
            src={
              "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252109920.jpeg"
            }
            alt="avatar"
            width={831}
            height={554}
            className="rounded-xl"
          />
        </div>
        <div className="controller h-full w-full flex-1">
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
          <div className="mt-4">
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
        <div className="my-4 w-full">
          <Button className="w-full">创建片段</Button>
        </div>
      </div>
      <div className="w-full flex-1">
        <Swiper spaceBetween={100} slidesPerView={1} autoHeight={true}>
          <SwiperSlide>
            <div className="h-fit w-full space-y-5 py-2">
              {podcastItemList.map((item, index) => {
                return (
                  <div
                    key={`${item.title}${index}`}
                    className="item flex items-center"
                  >
                    <div className="mr-5 w-4 text-base">{index + 1}</div>
                    <div className="flex flex-1 flex-col justify-center">
                      <div className="line-clamp-1 text-sm">{item.title}</div>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <div>{formatTime2MinSec(item.position)}</div>
                        <div>{formatDuration(item.duration)}</div>
                      </div>
                    </div>
                    <div>
                      <Info size={24} strokeWidth={1.5} />
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="space-y-3 py-2">
              {subTitleList.map((item, index) => (
                <ContentItem {...item} key={`${item.content}${index}`} />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

const podcastItemList = [
  {
    title: "Introduction to Large Language Models",
    duration: 300,
    position: 0,
  },
  {
    title: "The Architecture of Large Language Models",
    duration: 320,
    position: 300,
  },
  {
    title: "Training Large Language Models",
    duration: 330,
    position: 620,
  },
  {
    title: "Applications of Large Language Models",
    duration: 350,
    position: 950,
  },
  {
    title: "Ethics in Large Language Models",
    duration: 370,
    position: 1300,
  },
  {
    title: "Challenges in Large Language Model Development",
    duration: 400,
    position: 1670,
  },
  {
    title: "The Future of Large Language Models",
    duration: 410,
    position: 2070,
  },
  {
    title: "Large Language Models in Business",
    duration: 430,
    position: 2480,
  },
  {
    title: "Large Language Models in Education",
    duration: 440,
    position: 2910,
  },
  {
    title: "Closing Thoughts on Large Language Models",
    duration: 450,
    position: 3350,
  },
];

function ContentItem({
  role,
  position,
  content,
}: {
  role: string;
  position: number;
  content: string;
}) {
  return (
    <div className="space-y-1">
      <div className="flex items-center space-x-1">
        <Badge className="rounded-sm py-0" variant={"gray"}>
          {role}
        </Badge>
        <div className="text-xs text-muted-foreground">
          {formatTime2MinSec(position)}
        </div>
      </div>
      <div className="text-sm">{content}</div>
    </div>
  );
}

const subTitleList = [
  {
    role: "青年",
    position: 0,
    content: "欢迎大家来到我们今天的讨论，主题是'被讨厌的勇气'。",
  },
  {
    role: "长者",
    position: 30,
    content:
      "这个主题非常有意思，对于我来说，'被讨厌的勇气'是指对自我价值观的坚守，即使这可能导致别人对你的不理解或者讨厌。",
  },
  {
    role: "青年",
    position: 60,
    content:
      "非常对，长者。我觉得我们经常因为害怕他人的看法而放弃我们的观点。这样做可能会避免短期的冲突，但会牺牲我们的自我。",
  },
  {
    role: "长者",
    position: 90,
    content:
      "你说得对，青年。我想我可以分享一下我的经验，有时候坚持自我意味着会被人讨厌，但这并不一定是坏事。",
  },
  {
    role: "青年",
    position: 120,
    content: "我很期待听到您的经验，长者。我相信我们都可以从中学到很多。",
  },
  {
    role: "长者",
    position: 150,
    content:
      "当我年轻时，我曾经过度在意别人对我看法。但是随着岁月的流逝，我学会了尊重并接受自我。",
  },
  {
    role: "青年",
    position: 180,
    content: "这是一个很有价值的经验，我希望我们都可以学会这种勇气。",
  },
  {
    role: "长者",
    position: 210,
    content:
      "生活总是充满挑战，但只要我们有勇气面对并接受可能会被讨厌的结果，我们就能活出真实的自我。",
  },
  {
    role: "青年",
    position: 240,
    content:
      "非常感谢您的分享，长者。我希望我们都可以将这种勇气带入我们的生活。",
  },
  {
    role: "长者",
    position: 270,
    content: "希望今天的讨论可以帮助大家找到自己的勇气。谢谢大家的参与。",
  },
];
