"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import { Slider } from "./ui/slider";
import { formatTime2MinSec } from "@/lib/format";

export function ProgressDemo({
  isPlaying,
  playbackRate,
  className,
  currentSec,
  totalSec,
  setIsPlaying,
  setTime,
}: {
  isPlaying: boolean;
  playbackRate: number;
  currentSec: number;
  totalSec: number;
  className?: string;
  setTime: (newTime: number) => void;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // add currentSec per second when isPlaying is true., and stop when currentSec === totalSec
  React.useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        if (currentSec === totalSec) {
          clearInterval(timer);
          setIsPlaying(false);
        } else {
          setTime(currentSec + 1 * playbackRate);
        }
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isPlaying, currentSec, totalSec, playbackRate, setTime, setIsPlaying]);

  return (
    <div className="mx-auto flex w-3/4 flex-col">
      <Slider
        defaultValue={[0]}
        max={totalSec}
        min={0}
        step={1}
        value={[currentSec]}
        className={cn("w-[100%]", className)}
        onValueChange={(value) => {
          setTime(value[0]);
        }}
      />
      <div className="mt-1 flex select-none items-center justify-between text-sm">
        <div className="text-xs">{formatTime2MinSec(currentSec)}</div>
        <div className="text-xs">{formatTime2MinSec(totalSec)}</div>
      </div>
    </div>
  );
}
