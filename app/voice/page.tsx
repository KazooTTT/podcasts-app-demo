"use client";

import React, { useRef, useState } from "react";

import { ProgressDemo } from "@/components/progress";
import { PlayController } from "@/components/PlayController";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { formatDuration, formatTime2MinSec } from "@/lib/format";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { srtList } from "@/components/voice/contant";

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

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(270);

  // 从public文件中导入音频文件

  const audioRef = useRef<HTMLSourceElement>(null);

  const togglePlay = () => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      // @ts-ignore
      audioElement.pause();
    } else {
      // @ts-ignore
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audioElement = audioRef.current; // @ts-ignore
    setCurrentTime(audioElement.currentTime);
  };

  const handleLoadedMetadata = () => {
    const audioElement = audioRef.current; // @ts-ignore
    setDuration(audioElement.duration);
  };

  const handleProgressChange = (newTime: number) => {
    const audioElement = audioRef.current; // @ts-ignore
    audioElement.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleCanPlayThrough = () => {
    const audioElement = audioRef.current; // @ts-ignore
    audioElement.play();
  };

  const handlePlaybackRateChange = (newRate: number) => {
    // @ts-ignore
    const rate = parseFloat(newRate);
    // @ts-ignore
    audioRef.current.playbackRate = rate;
    setPlaybackRate(newRate);
  };

  return (
    <div className="container relative flex flex-col items-center justify-center">
      {/* 插入本地的音频文件 */}
      <audio
        // @ts-ignore
        ref={audioRef}
        src="/podcast.MP3"
        type="audio/mpeg"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onCanPlayThrough={handleCanPlayThrough}
      ></audio>
      <div className="sticky top-0 z-10 mx-auto flex w-full flex-col items-center justify-center bg-background">
        <div className="info-container w-1/2">
          <Image
            src={
              "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%92%AD%E6%94%BE%E9%A1%B5-%E5%A3%B0%E9%9F%B3%26%E4%B8%93%E8%BE%91%E5%A4%B4%E5%83%8F%E3%80%8A%E7%BB%84%E7%BB%87%E8%BF%9B%E5%8C%96%E8%AE%BA%E3%80%8B.jpeg"
            }
            alt="avatar"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
        <div className="controller h-full w-full flex-1">
          <PlayController
            open={open}
            setOpen={setOpen}
            formatPlaybackRate={formatPlaybackRate}
            playbackRate={playbackRate}
            setPlaybackRate={handlePlaybackRateChange}
            currentSec={currentTime}
            setCurrentTime={setCurrentTime}
            totalSec={duration}
            setIsPlaying={setIsPlaying}
            isPlaying={isPlaying}
            handlePlayButtonClick={togglePlay}
          ></PlayController>
          <div className="mt-4">
            <ProgressDemo
              isPlaying={isPlaying}
              playbackRate={playbackRate}
              currentSec={currentTime}
              totalSec={duration}
              setTime={handleProgressChange}
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
                    <div className="flex flex-1 flex-col justify-center space-y-1">
                      <div className="line-clamp-1 text-sm">{item.title}</div>
                      <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                        <div>{formatTime2MinSec(item.position)}</div>
                        <div>{formatDuration(item.duration, true)}</div>
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
              {srtList.map((item, index: number) => (
                <ContentItem {...item} key={`${item.id}${index}`} />
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
    title: "崔崔的快速晋升之路",
    duration: 122,
    position: 150,
  },
  {
    title: "不断打磨专业能力，让自己成为行业中的“针尖”",
    duration: 139,
    position: 273,
  },
  {
    title: "职场交换的是你最顶尖的价值",
    duration: 37,
    position: 411,
  },
];

export interface SrtItem {
  id: any;
  startTime: any;
  endTime: any;
  text: any;
}

function ContentItem(item: SrtItem) {
  const { startTime, text } = item;
  const formatTime = (startTime: string) => {
    const [show, ...hide] = startTime.split(",");
    return show;
  };
  return (
    <div className="space-y-1">
      <div className="flex items-center space-x-1">
        <div className="text-xs text-muted-foreground">
          {formatTime(startTime)}
        </div>
      </div>
      <div className="text-sm">{text}</div>
    </div>
  );
}
