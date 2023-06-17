"use client";

import React from "react";
import {
  AlignJustify,
  Check,
  Gauge,
  Moon,
  PauseCircle,
  PlayCircle,
  Redo,
  Undo,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SliderDemo } from "@/components/slide";
import { Content } from "@radix-ui/react-tabs";

export function PlayController({
  open,
  setOpen,
  formatPlaybackRate,
  playbackRate,
  setPlaybackRate,
  currentSec,
  setTime,
  totalSec,
  setIsPlaying,
  isPlaying,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formatPlaybackRate: (playbackRate: number) => string;
  playbackRate: number;
  setPlaybackRate: React.Dispatch<React.SetStateAction<number>>;
  currentSec: number;
  setTime: React.Dispatch<React.SetStateAction<[number, number]>>;
  totalSec: number;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  isPlaying: boolean;
}) {
  return (
    <div className="sticky bottom-0 mt-4 flex w-full justify-around">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="text-center">
            <Button
              className="flex flex-col items-center justify-center rounded-full px-2 py-3"
              variant="ghost"
            >
              <div>
                <Gauge></Gauge>
              </div>
            </Button>
            <div className="relative top-1 w-full text-xs font-semibold text-muted-foreground">
              {formatPlaybackRate(playbackRate)}
            </div>{" "}
          </div>
        </DialogTrigger>
        <DialogContent className="bg-primary">
          <DialogHeader>
            <DialogTitle className="text-primary-foreground">
              播放速度
            </DialogTitle>
            <DialogDescription>
              {formatPlaybackRate(playbackRate)}
            </DialogDescription>
          </DialogHeader>
          <div>
            <SliderDemo
              value={[playbackRate]}
              onValueChange={(value: number[]) => {
                console.log("%c Line:95 🍅 value", "color:#6ec1c2", value);
                setPlaybackRate(value[0]);
              }}
            ></SliderDemo>
          </div>
          <DialogFooter className="flex items-center justify-center">
            <Button
              type="submit"
              variant="secondary"
              className="w-fit"
              onClick={() => {
                setOpen(false);
              }}
            >
              <Check></Check>保存
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <div className="text-center">
        <Button
          className="flex flex-col items-center justify-center rounded-full px-2 py-3"
          variant="ghost"
          onClick={() => {
            // 判断是否小于0
            const targetSec = currentSec - 10;
            setTime([targetSec <= 0 ? 0 : targetSec, totalSec]);
          }}
        >
          <div>
            <Undo />
          </div>
        </Button>
        <div className="relative top-1 w-full text-xs font-semibold text-muted-foreground">
          -10s
        </div>
      </div>
      <div
        onClick={() => {
          setIsPlaying(!isPlaying);
        }}
      >
        {isPlaying ? (
          <PauseCircle size="48" strokeWidth={1.2} />
        ) : (
          <PlayCircle size="48" strokeWidth={1.2} />
        )}
      </div>
      <div className="text-center">
        <Button
          className="flex flex-col items-center justify-center rounded-full px-2 py-3"
          variant="ghost"
          onClick={() => {
            // 判断一下currentSec+30后是否超过了totalSec
            const targetSec = currentSec + 30;
            setTime([targetSec > totalSec ? totalSec : targetSec, totalSec]);
          }}
        >
          <div>
            <Redo></Redo>
          </div>
        </Button>
        <div className="relative top-1 w-full text-xs font-semibold text-muted-foreground">
          +30s
        </div>
      </div>
      <div className="text-center">
        <Button
          className="flex flex-col items-center justify-center rounded-full px-2 py-3"
          variant="ghost"
        >
          <div>
            <AlignJustify size={22} />
          </div>
        </Button>
        <div className="relative top-1 w-full text-xs font-semibold text-muted-foreground">
          目录
        </div>
      </div>
    </div>
  );
}
