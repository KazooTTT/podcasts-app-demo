"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Progress } from "@/components/ui/progress"

import { Slider } from "./ui/slider"

export function ProgressDemo({
  isPlaying,
  playbackRate,
  className,
  currentSec,
  totalSec,
  setIsPlaying,
  setTime,
}: {
  isPlaying: boolean
  playbackRate: number
  currentSec: number
  totalSec: number
  className?: string
  setTime: React.Dispatch<React.SetStateAction<[number, number]>>
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
}) {
  // convert ser to min:sec which has two digits
  const formatTime2 = (sec: number) => {
    const min = Math.floor(sec / 60)
    const second = sec % 60
    return `${min}:${second < 10 ? "0" + second : second}`
  }

  // add currentSec per second when isPlaying is true., and stop when currentSec === totalSec
  React.useEffect(() => {
    if (isPlaying) {
      const timer = setInterval(() => {
        if (currentSec === totalSec) {
          clearInterval(timer)
          setIsPlaying(false)
        } else {
          setTime(([currentSec, totalSec]) => [
            currentSec + 1 * playbackRate,
            totalSec,
          ])
        }
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isPlaying, currentSec, totalSec, playbackRate, setTime, setIsPlaying])

  return (
    <div>
      {/* <Progress
        value={(currentSec / totalSec) * 100}
        className="h-1.5 w-full"
      /> */}
      <Slider
        defaultValue={[0]}
        max={totalSec}
        min={0}
        step={1}
        value={[currentSec]}
        className={cn("w-[100%]", className)}
        onValueChange={(value) => {
          setTime([value[0], totalSec])
        }}
      />
      <div className="mt-1 flex items-center justify-between text-sm">
        <div className="text-left">{formatTime2(currentSec)}</div>
        <div className="text-right">{formatTime2(totalSec)}</div>
      </div>
    </div>
  )
}
