"use client"

import React, { useEffect, useState } from "react"
import {
  Check,
  Gauge,
  Moon,
  PauseCircle,
  PlayCircle,
  Redo,
  Undo,
} from "lucide-react"
import cover from "public/kazoottt.png"

import { CardProps } from "@/types/flow"
import { FlowType } from "@/types/nav"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ImgCard, TextCard } from "@/components/flow/card"
import { ProgressDemo } from "@/components/progress"
import { SliderDemo } from "@/components/slide"

export default function IndexPage(props?: { index: string }) {
  const infoList = [
    {
      title: "The Power of Unwavering Focus",
      subTitle: "The Art of Maniliness",
      type: "text",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "The Power of Unwavering Focus",
      subTitle: "The Art of Maniliness",
      type: "img",
      cover: cover,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ]

  // 当前播放速率
  const [playbackRate, setPlaybackRate] = React.useState(1)

  // 是否正在播放
  const [isPlaying, setIsPlaying] = React.useState(false)

  // convert playbackRate to string which has two digits
  const formatPlaybackRate = (playbackRate: number) => {
    return `${playbackRate.toFixed(1)}x`
  }
  const [open, setOpen] = React.useState(false)

  const [[currentSec, totalSec], setTime] = React.useState([0, 60])

  const [cardIndex, setCardIndex] = useState(0)

  useEffect(() => {
    setCardIndex(Number(props?.index) || 0)
  }, [props?.index])

  const cardInfo = infoList[cardIndex]
  const currentType = cardInfo.type

  const getContent = (info: CardProps) => {
    switch (info.type) {
      case "img":
        return ImgCard(info)
      case "text":
        return TextCard(info)

      default:
        return <></>
    }
  }

  return (
    <div className="flex flex-col items-center justify-center px-2">
      <div className="info-container w-4/5 pt-6">{getContent(cardInfo)}</div>
      <div className="timeline-container mt-8 h-full w-4/5 flex-1">
        <div>
          <ProgressDemo
            isPlaying={isPlaying}
            playbackRate={playbackRate}
            currentSec={currentSec}
            totalSec={totalSec}
            setTime={setTime}
            setIsPlaying={setIsPlaying}
          />
        </div>
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
                    console.log("%c Line:95 🍅 value", "color:#6ec1c2", value)
                    setPlaybackRate(value[0])
                  }}
                ></SliderDemo>
              </div>
              <DialogFooter className="flex items-center justify-center">
                <Button
                  type="submit"
                  variant="secondary"
                  className="w-fit"
                  onClick={() => {
                    setOpen(false)
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
                const targetSec = currentSec - 10
                setTime([targetSec <= 0 ? 0 : targetSec, totalSec])
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
              setIsPlaying(!isPlaying)
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
                const targetSec = currentSec + 30
                setTime([targetSec > totalSec ? totalSec : targetSec, totalSec])
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
                <Moon size={22}></Moon>
              </div>
            </Button>
            <div className="relative top-1 w-full text-xs font-semibold text-muted-foreground">
              sleep
            </div>
          </div>
        </div>
      </div>
      {/* <div>新增snip</div> */}
    </div>
  )
}
