"use client";

import React, { useEffect, useRef, useState } from "react";

import { ProgressDemo } from "@/components/progress";
import { PlayController } from "@/components/PlayController";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import { formatDuration, formatTime2MinSec } from "@/lib/format";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { srtList } from "@/components/voice/contant";
import { SrtContentItem } from "../../components/srt/SrtContentItem";
import { useMount } from "ahooks";

export default function IndexPage() {
  const [height, setheight] = useState(0);

  useMount(() => {
    setheight(window.innerHeight);
  });

  useEffect(() => {
    const handleResize = () => setheight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const flowHeight = (height ?? window.innerHeight) - 96 - 72;

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
  const [duration, setDuration] = useState(0);

  // 从public文件中导入音频文件

  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.pause();
      } else {
        audioElement.play();
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      setCurrentTime(audioElement.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    const audioElement = audioRef.current;
    if (audioElement) {
      setDuration(audioElement.duration);
    }
  };

  const handleProgressChange = (newTime: number) => {
    const audioElement = audioRef.current;
    if (audioElement) audioElement.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handlePlaybackRateChange = (newRate: number) => {
    const rate = parseFloat(newRate.toString());
    if (audioRef.current) audioRef.current.playbackRate = rate;
    setPlaybackRate(newRate);
  };

  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setscrollHeight] = useState<undefined | number>(
    undefined
  );

  useEffect(() => {
    // 获取ref的高度
    const height = ref.current?.clientHeight;
    console.log("%c Line:99 🌽 height", "color:#465975", height);
    // 计算得出滚动的高度
    if (height && scrollRef.current) {
      const newScrollHeight = flowHeight - height;
      setscrollHeight(newScrollHeight);
    }
  }, [flowHeight, scrollHeight]);
  // 监听当前进度，滚动到对应的位置
  useEffect(() => {
    const container = document.getElementById("srt-container");
    if (container) {
      const scrollPosition =
        (container.scrollHeight - container.clientHeight) *
        (currentTime / duration);
      smoothScrollTo(scrollPosition, 100); // 设置动画时长为500ms
    }
  }, [currentTime, duration]);

  const smoothScrollTo = (target: number, duration: number): void => {
    const container = document.getElementById("srt-container");
    if (!container) return;

    const startPosition: number = container.scrollTop;
    const distance: number = target - startPosition;
    let startTime: number | null = null;

    const scrollStep = (timestamp: number): void => {
      if (!startTime) startTime = timestamp;
      const progress: number = timestamp - startTime;
      const easing: number = (progress / duration) ** 2; // 使用二次缓动函数

      container.scrollTop = startPosition + distance * easing;

      if (progress < duration) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  return (
    <div
      className="container relative flex flex-col items-center  overflow-auto"
      style={{
        maxHeight: flowHeight,
        minHeight: flowHeight,
      }}
    >
      {/* 插入本地的音频文件 */}
      <audio
        // @ts-ignore
        ref={audioRef}
        src="https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/podcast.MP3"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      ></audio>
      <div
        className="mx-auto flex w-full flex-col items-center justify-center bg-background"
        ref={ref}
      >
        <div className="info-container w-2/5">
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
            setCurrentTime={handleProgressChange}
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
      <div className="w-full flex-1" ref={scrollRef}>
        <Swiper spaceBetween={100} slidesPerView={1} autoHeight>
          <SwiperSlide>
            <div
              className="h-fit w-full space-y-5 py-2"
              style={{ height: scrollHeight }}
            >
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
            <div
              id="srt-container"
              style={{ height: scrollHeight }}
              className="overflow-auto"
            >
              <div className="space-y-3 py-2">
                {srtList.map((item, index: number) => {
                  const isActive =
                    currentTime >= item.startTimeSec &&
                    currentTime < item.endTimeSec;

                  return (
                    <SrtContentItem
                      item={item}
                      key={`${item.id}${index}`}
                      isActive={isActive}
                      type="voice"
                    />
                  );
                })}
              </div>
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
