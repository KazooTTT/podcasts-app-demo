"use client"

import React, { useEffect, useState } from "react"
import cover from "public/kazoottt.png"

import { CardProps } from "@/types/flow"
import { Skeleton } from "@/components/ui/skeleton"
import { PlayController } from "@/components/PlayController"
import { ImgCard, TextCard } from "@/components/flow/card"
import { ProgressDemo } from "@/components/progress"

export default function IndexPage(props?: { index: string }) {
  console.log("%c Line:13 🍖 props", "color:#fca650", props)
  const infoList = [
    {
      title: "The Power of Unwavering Focus",
      subTitle: "The Art of Maniliness",
      type: "img",
      cover: "https://avatars.githubusercontent.com/u/31075337",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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

  const [cardIndex, setCardIndex] = useState(-1)

  useEffect(() => {
    setCardIndex(Number(props?.index))
  }, [props?.index])

  const cardInfo = infoList[cardIndex] ?? {}

  const getContent = (info: CardProps) => {
    switch (info.type) {
      case "img":
        return <ImgCard {...info}></ImgCard>
      case "text":
        return <TextCard {...info}></TextCard>
      default:
        return <Skeleton className="mx-auto h-50 w-50  rounded-3xl" />
    }
  }

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="info-container flex w-4/5 flex-1 flex-col items-center justify-center  pt-6">
        {getContent(cardInfo)}
      </div>
      <div className="timeline-container mt-8 w-4/5">
        <ProgressDemo
          isPlaying={isPlaying}
          playbackRate={playbackRate}
          currentSec={currentSec}
          totalSec={totalSec}
          setTime={setTime}
          setIsPlaying={setIsPlaying}
        />
      </div>
      {/* <div>新增snip</div> */}
    </div>
  )
}
