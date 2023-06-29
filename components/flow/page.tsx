"use client";

import React, { useEffect, useRef, useState } from "react";

import { ImgCard } from "@/components/flow/card";
import { SideBar } from "@/components/flow/siteBar";
import { ProgressDemo } from "@/components/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CardProps, UploaderInfoProps } from "@/types/flow";
import { useMount } from "ahooks";
import { PlayCircle } from "lucide-react";
import Loading from "./loading";
import { SrtContentItem } from "../srt/SrtContentItem";

function UploaderInfo(props: { uploadInfo: UploaderInfoProps }) {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={props.uploadInfo.avatar} alt="album" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <span>@&nbsp;{props.uploadInfo.name}</span>
        <Badge variant="destructive" className="rounded-sm text-xs">
          关注
        </Badge>
      </div>
      <div className="mt-1 text-sm">{props.uploadInfo.desc}</div>
    </div>
  );
}

function FlowItem(props: { info: CardProps; height: number }) {
  const { height, info } = props;

  const [isPlaying, setIsPlaying] = React.useState(true);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(270);
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
    const audioElement = audioRef.current;
    // @ts-ignore
    setCurrentTime(audioElement.currentTime);
  };

  const handleLoadedMetadata = () => {
    const audioElement = audioRef.current;
    // @ts-ignore
    setDuration(audioElement.duration);
  };

  const handleProgressChange = (newTime: number) => {
    const audioElement = audioRef.current;
    // @ts-ignore
    audioElement.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleCanPlayThrough = () => {
    const audioElement = audioRef.current;
    // @ts-ignore
    audioElement.play();
  };

  return (
    <div
      className="flowitem relative flex flex-1 flex-col items-center justify-center border-b-2 border-dashed bg-background shadow-lg"
      style={{
        minHeight: (height ?? window.innerHeight) - 128,
        maxHeight: (height ?? window.innerHeight) - 128,
      }}
    >
      <audio
        // @ts-ignore
        ref={audioRef}
        src={info.source}
        type="audio/mpeg"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onCanPlayThrough={handleCanPlayThrough}
      ></audio>

      <div
        className="container flex w-full flex-col items-center justify-center self-start"
        onClick={togglePlay}
      >
        <div className="z-10 flex w-full flex-col items-center justify-center bg-background py-4">
          <ImgCard {...props.info}></ImgCard>
        </div>
      </div>
      <div className="timeline-container mt-2 flex w-4/5 flex-1 flex-col items-center space-y-1 overflow-auto text-xs text-muted-foreground  scrollbar-none">
        <div className="space-y-3 px-3 py-2">
          {props.info.srtList &&
            props.info.srtList.map((item, index: number) => (
              <SrtContentItem
                item={item}
                key={`${item.id}${index}`}
                hideStartTime={true}
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
      {!isPlaying && (
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

export default function IndexPage({ infos }: { infos: CardProps[] }) {
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

  return (
    <>
      {height === 0 ? (
        <Loading></Loading>
      ) : (
        infos.map((item, index) => (
          <FlowItem
            info={item}
            height={height}
            key={[item.title, index].join("_")}
          />
        ))
      )}
    </>
  );
}
