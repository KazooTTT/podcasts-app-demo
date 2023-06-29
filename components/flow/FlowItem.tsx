"use client";
import React, { useEffect, useRef, useState } from "react";
import { ImgCard } from "@/components/flow/card";
import { SideBar } from "@/components/flow/siteBar";
import { ProgressDemo } from "@/components/progress";
import { CardProps } from "@/types/flow";
import { PlayCircle } from "lucide-react";
import { SrtContentItem } from "../srt/SrtContentItem";
import { UploaderInfo } from "./UploaderInfo";

export function FlowItem(props: { info: CardProps; height: number }) {
  const { height, info } = props;

  const [isPlaying, setIsPlaying] = React.useState(true);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(270);
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
    if (audioElement) setCurrentTime(audioElement.currentTime);
  };

  const handleLoadedMetadata = () => {
    const audioElement = audioRef.current;

    if (audioElement) setDuration(audioElement.duration);
  };

  const handleProgressChange = (newTime: number) => {
    const audioElement = audioRef.current;

    if (audioElement) audioElement.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleCanPlayThrough = () => {
    const audioElement = audioRef.current;

    if (audioElement) audioElement.play();
  };

  // 监听当前进度，滚动到对应的位置
  useEffect(() => {
    const container = document.getElementById("timeline-container");
    if (container) {
      const scrollPosition =
        (container.scrollHeight - container.clientHeight) *
        (currentTime / duration);
      smoothScrollTo(scrollPosition, 100); // 设置动画时长为500ms
    }
  }, [currentTime, duration]);

  const smoothScrollTo = (target: number, duration: number): void => {
    const container = document.getElementById("timeline-container");
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

  // 使用observer api 判断是否在视野内
  const targetRef = useRef<HTMLDivElement>(null);

  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // console.log(info.title, "Element is in view!");
            const audioElement = audioRef.current;
            if (audioElement) audioElement?.play();
            setIsPlaying(true);
            setIsInView(true);
          } else {
            // console.log(info.title, "Element is out of view");
            const audioElement = audioRef.current;
            if (audioElement) audioElement?.pause();
            setIsPlaying(false);
            setIsInView(false);
          }
        });
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div
      className="flowitem relative flex flex-1 flex-col items-center justify-center border-b-2 border-dashed bg-background shadow-lg"
      style={{
        minHeight: height,
        maxHeight: height,
      }}
      ref={targetRef}
    >
      <audio
        ref={audioRef}
        src={info.source}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onCanPlayThrough={handleCanPlayThrough}
      />

      <div
        className="container flex w-full flex-col items-center justify-center self-start"
        onClick={togglePlay}
      >
        <div className="z-10 flex w-full flex-col items-center justify-center bg-background py-4">
          <ImgCard {...props.info}></ImgCard>
        </div>
      </div>
      <div
        className="timeline-container mt-2 flex w-4/5 flex-1 flex-col items-center space-y-1 overflow-auto text-xs text-muted-foreground  scrollbar-none"
        id="timeline-container"
      >
        <div className="space-y-3 px-3 py-2">
          {props.info.srtList &&
            props.info.srtList.map((item, index: number) => (
              <SrtContentItem
                item={item}
                key={`${item.id}${index}`}
                hideStartTime={true}
                isActive={
                  currentTime >= item.startTimeSec &&
                  currentTime < item.endTimeSec
                }
              />
            ))}
        </div>
      </div>
      <div className="container bottom-18 z-20 flex w-full flex-col bg-background py-2">
        <ProgressDemo
          className="my-2"
          isPlaying={isPlaying}
          playbackRate={1}
          currentSec={currentTime}
          totalSec={duration}
          setTime={handleProgressChange}
          setIsPlaying={setIsPlaying}
        />
        {props.info.uploaderInfo && (
          <UploaderInfo uploadInfo={props.info.uploaderInfo}></UploaderInfo>
        )}
      </div>
      <SideBar reactions={props.info.reactions}></SideBar>
      {!isPlaying && isInView && (
        <div className="fixed inset-0 z-30 flex justify-center bg-black opacity-50">
          <PlayCircle
            size={96}
            strokeWidth={1.5}
            className="absolute top-1/4 text-white"
            onClick={togglePlay}
          />
        </div>
      )}
    </div>
  );
}
