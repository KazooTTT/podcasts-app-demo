"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function ProgressDemo({
  isPlaying,
  playbackRate,
}: {
  isPlaying: boolean
  playbackRate: number
}) {
  const [[currentSec, totalSec], setTime] = React.useState([0, 60])

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
        } else {
          setTime(([currentSec, totalSec]) => [
            currentSec + 1 * playbackRate,
            totalSec,
          ])
        }
      }, 1000)
      return () => clearInterval(timer)
    }
  }, [isPlaying, currentSec, totalSec, playbackRate])

  return (
    <div>
      <Progress
        value={(currentSec / totalSec) * 100}
        className="h-1.5 w-full"
      />
      <div className="mt-1 flex items-center justify-between text-sm">
        <div className="text-left">{formatTime2(currentSec)}</div>
        <div className="text-right">{formatTime2(totalSec)}</div>
      </div>
    </div>
  )
}
