"use client";

import React, { useEffect, useState } from "react";

import { ImgCard } from "@/components/flow/card";
import { SideBar } from "@/components/flow/siteBar";
import { ProgressDemo } from "@/components/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CardProps, UploaderInfo } from "@/types/flow";
import { useMount } from "ahooks";
import { PlayCircle } from "lucide-react";
import Loading from "./loading";

function UploaderInfo(props: { uploadInfo: UploaderInfo }) {
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
      <div className="mt-1">{props.uploadInfo.desc}</div>
    </div>
  );
}

function FlowItem(props: { info: CardProps; height: number }) {
  const { height } = props;

  const [[currentSec, totalSec], setTime] = React.useState([0, 268]);
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div
      className="flowitem relative flex flex-1 flex-col items-center justify-center bg-background"
      style={{
        minHeight: (height ?? window.innerHeight) - 128,
        maxHeight: (height ?? window.innerHeight) - 128,
      }}
    >
      <div
        className="container flex w-full flex-col items-center justify-center self-start"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        <div className="z-10 flex w-full flex-col items-center justify-center bg-background py-4">
          <ImgCard {...props.info}></ImgCard>
        </div>
      </div>
      <div className="timeline-container mt-2 flex w-4/5 flex-1 flex-col items-center space-y-1 overflow-auto text-xs text-muted-foreground scrollbar-none">
        {[
          "ocean rain sun sky rain",
          "ocean love forever forever",
          "love dream",
          "dream forever love love dream",
          "sun sun ocean sun love",
          "rain love",
          "time time sun forever",
          "forever time sky",
          "sun ocean dream time time forever",
          "love love ocean heart",
          "dream forever love love dream",
          "sun sun ocean sun love",
          "rain love",
          "time time sun forever",
          "forever time sky",
          "sun ocean dream time time forever",
          "love love ocean heart",
          "dream forever love love dream",
          "sun sun ocean sun love",
          "rain love",
          "time time sun forever",
          "forever time sky",
          "sun ocean dream time time forever",
          "love love ocean heart",
          "dream forever love love dream",
          "sun sun ocean sun love",
          "rain love",
          "time time sun forever",
          "forever time sky",
          "sun ocean dream time time forever",
          "love love ocean heart",
          "dream forever love love dream",
          "sun sun ocean sun love",
          "rain love",
          "time time sun forever",
          "forever time sky",
          "sun ocean dream time time forever",
          "love love ocean heart",
          "dream forever love love dream",
          "sun sun ocean sun love",
          "rain love",
          "time time sun forever",
          "forever time sky",
          "sun ocean dream time time forever",
          "love love ocean heart",
          "dream forever love love dream",
          "sun sun ocean sun love",
          "rain love",
          "time time sun forever",
          "forever time sky",
          "sun ocean dream time time forever",
          "love love ocean heart",
        ].map((item, index) => (
          <div key={`${item}${index}`}>
            {index}-{item}
          </div>
        ))}
      </div>
      <div className="container bottom-18 z-20 flex w-full flex-col bg-background py-2">
        <ProgressDemo
          className="my-2"
          isPlaying={isPlaying}
          playbackRate={1}
          currentSec={currentSec}
          totalSec={totalSec}
          setTime={setTime}
          setIsPlaying={setIsPlaying}
        />
        {props.info.uploaderInfo && (
          <UploaderInfo uploadInfo={props.info.uploaderInfo}></UploaderInfo>
        )}
      </div>
      <SideBar reactions={props.info.reactions}></SideBar>
      {isPlaying && (
        <div className="fixed inset-0 z-30 flex justify-center bg-black opacity-50">
          <PlayCircle
            size={96}
            strokeWidth={1.5}
            className="absolute top-1/4 text-white"
            onClick={() => setIsPlaying(!isPlaying)}
          />
        </div>
      )}
    </div>
  );
}

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

  const infos = [
    {
      title: ["为什么晋升总是轮不到你？", "可能是因为忽视了这项能力"],
      type: "img",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%92%AD%E6%94%BE%E9%A1%B5-%E5%A3%B0%E9%9F%B3%26%E4%B8%93%E8%BE%91%E5%A4%B4%E5%83%8F%E3%80%8A%E7%BB%84%E7%BB%87%E8%BF%9B%E5%8C%96%E8%AE%BA%E3%80%8B.jpeg",
      uploaderInfo: {
        avatar:
          "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%92%AD%E6%94%BE%E9%A1%B5-%E5%96%9C%E9%A9%AC%E5%8A%A0%E6%B2%B9%E7%AB%99%E5%A4%B4%E5%83%8F.jpg",
        name: "喜马播客主加油站",
        desc: "喜马播客主成长平台官方账号。挖掘优质播客主，听到不一样的声音！",
      },
      reactions: {
        likes: 997,
        comments: 372,
        stars: 473,
        share: 165,
      },
    },
    {
      title: "Urban Exploration",
      type: "img",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252102616.jpeg",
      uploaderInfo: {
        avatar:
          "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252128870.jpg",
        name: "Urban",
        desc: "Always eager to uncover city secrets.",
      },
      reactions: {
        likes: 177,
        comments: 523,
        stars: 404,
        share: 501,
      },
    },
    {
      title: "Gastronomy Delights",
      type: "img",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252107930.jpeg",
      uploaderInfo: {
        avatar:
          "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252101137.jpeg",
        name: "Gourmet Guru",
        desc: "A foodie passionate about culinary art.",
      },
      reactions: {
        likes: 697,
        comments: 573,
        stars: 325,
        share: 946,
      },
    },
    {
      title: "Galactic Wonders",
      type: "img",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252107341.jpeg",
      uploaderInfo: {
        avatar:
          "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252102446.jpeg",
        name: "Space Spectator",
        desc: "Curious observer of the starry expanses.",
      },
      reactions: {
        likes: 621,
        comments: 50,
        stars: 983,
        share: 381,
      },
    },
    {
      title: "Ocean's Depth",
      type: "img",
      cover:
        "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252106825.jpeg",
      uploaderInfo: {
        avatar:
          "https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252103731.jpeg",
        name: "Marine Maven",
        desc: "Dedicated to uncovering the mysteries of the deep.",
      },
      reactions: {
        likes: 250,
        comments: 798,
        stars: 122,
        share: 354,
      },
    },
  ];

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
