"use client";

import React, { useEffect, useState } from "react";

import { ImgCard } from "@/components/flow/card";
import { ProgressDemo } from "@/components/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlayCircle } from "lucide-react";
import { SideBar } from "@/components/flow/siteBar";
import { CardProps } from "@/types/flow";
import { useMount } from "ahooks";

function FlowItem(props: {
  info: React.JSX.IntrinsicAttributes & CardProps;
  height: number;
}) {
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
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src="https://source.unsplash.com/64x64/?nature"
              alt="album"
            />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <span>@ 喜马马马</span>
          <Badge variant="destructive" className="rounded-sm text-xs">
            关注
          </Badge>
        </div>
        <div className="mt-1">Totally agreed.Everything he said need to be</div>
      </div>
      <SideBar></SideBar>
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
  useEffect(() => {
    setheight(window.innerHeight);
  }, []);

  const info = {
    title: "The Power of Unwavering Focus",
    subTitle: "The Art of Maniliness",
    type: "img",
    cover: "https://source.unsplash.com/416x277/?mountains",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  };

  return (
    <>
      <FlowItem info={info} height={height} />
      <FlowItem info={info} height={height} />
      <FlowItem info={info} height={height} />
      <FlowItem info={info} height={height} />
      <FlowItem info={info} height={height} />
      <FlowItem info={info} height={height} />
      <FlowItem info={info} height={height} />
      <FlowItem info={info} height={height} />
    </>
  );
}
