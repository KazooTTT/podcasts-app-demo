"use client"

import React from "react"
import Image from "next/image"
import { Gauge, Moon, PauseCircle, PlayCircle, Redo, Undo } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProgressDemo } from "@/components/progress"

import cover from "../public/kazoottt.png"

export default function IndexPage() {
  const info = {
    title: "The Power of Unwavering Focus",
    subTitle: "The Art of Maniliness",
  }
  // 当前播放速率
  const [playbackRate, setPlaybackRate] = React.useState(1)

  // 是否正在播放
  const [isPlaying, setIsPlaying] = React.useState(false)

  // convert playbackRate to string which has two digits
  const formatPlaybackRate = (playbackRate: number) => {
    return `${playbackRate.toFixed(2)}x`
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="info-container pt-6">
        <Image
          src={cover}
          alt="cover img"
          width={200}
          height={200}
          className="mx-auto rounded-3xl"
        />
        <div className="mt-2 text-center font-bold">{info.title}</div>
        <div className="mt-0.5 text-center text-muted-foreground">
          {info.subTitle}
        </div>
      </div>
      <div className="timeline-container mt-3 h-full w-4/5 flex-1">
        <div>
          <ProgressDemo />
        </div>
        <div className="sticky bottom-0 mt-4 flex w-full justify-around">
          <Button
            className="flex flex-col items-center justify-center rounded-full px-2 py-3"
            variant="ghost"
          >
            <div>
              <Gauge></Gauge>
            </div>
            <div className="absolute top-10  w-full text-xs font-semibold text-muted-foreground">
              {formatPlaybackRate(playbackRate)}
            </div>
          </Button>
          <Button
            className="flex flex-col items-center justify-center rounded-full px-2 py-3"
            variant="ghost"
          >
            <div>
              <Undo />
            </div>
            <div className="absolute top-10  w-full text-xs font-semibold text-muted-foreground">
              -10s
            </div>
          </Button>
          <div
            onClick={() => {
              setIsPlaying(!isPlaying)
            }}
          >
            {isPlaying ? (
              <PauseCircle size="40" strokeWidth={1.2} />
            ) : (
              <PlayCircle size="40" strokeWidth={1.2} />
            )}
          </div>
          <Button
            className="flex flex-col items-center justify-center rounded-full px-2 py-3"
            variant="ghost"
          >
            <div>
              <Redo></Redo>
            </div>
            <div className="absolute top-10  w-full text-xs font-semibold text-muted-foreground">
              +30s
            </div>
          </Button>
          <Button
            className="flex flex-col items-center justify-center rounded-full px-2 py-3"
            variant="ghost"
          >
            <div>
              <Moon></Moon>
            </div>
            <div className="absolute top-10  w-full text-xs font-semibold text-muted-foreground">
              sleep
            </div>
          </Button>
        </div>
      </div>
      {/* <div>新增snip</div> */}
    </div>
  )
}
