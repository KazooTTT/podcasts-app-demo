"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function ProgressDemo() {
  const [[currentSec, totalSec], setTime] = React.useState([0, 60])

  // convert ser to min:sec which has two digits
  const formatTime2 = (sec: number) => {
    const min = Math.floor(sec / 60)
    const second = sec % 60
    return `${min}:${second < 10 ? "0" + second : second}`
  }

  React.useEffect(() => {
    // add currentSec per second,stop when currentSec === totalSec
    const timer = setInterval(() => {
      if (currentSec === totalSec) {
        clearInterval(timer)
      } else {
        setTime(([currentSec, totalSec]) => [currentSec + 1, totalSec])
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [currentSec, totalSec])

  return (
    <div>
      <Progress
        value={(currentSec / totalSec) * 100}
        className="h-1.5 w-full"
      />
      <div className="mt-1 text-sm">
        <span className="float-left">{formatTime2(currentSec)}</span>
        <span className="float-right">{formatTime2(totalSec)}</span>
      </div>
    </div>
  )
}
