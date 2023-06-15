"use client"

import Image from "next/image"
import { ArrowUpDown, Plus, Share2 } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function IndexPage(props?: { index: string }) {
  const info = {
    title: "被讨厌的勇气",
    desc: "自我启发之父”阿德勒的人生哲学",
  }
  return (
    <div className="flex flex-col items-center justify-center px-4 pt-6">
      <div className="w-full px-4">
        <div className="info flex w-full">
          <Image
            src={"https://p.ipic.vip/oh91co.png"}
            alt="cover img"
            width={144}
            height={144}
            className={`rounded-3xl`}
          />
          <div className="flex flex-1 flex-col items-center justify-between">
            <div className="text-2xl font-semibold">{info.title}</div>
            <Button
              className="space-x-3 rounded-full bg-accent-background px-6 text-accent"
              variant={"diy"}
            >
              <Share2 />
              <div className="font-semibold">分 享</div>
            </Button>
            <Button
              className="space-x-3 rounded-full bg-accent-background px-6 text-accent"
              variant={"diy"}
            >
              <Plus />
              <div className="font-semibold">订 阅</div>
            </Button>
          </div>
        </div>
        <div className="mt-4 text-lg text-foreground">简介:{info.desc}</div>
        <hr className="solid mt-6" />
        <div className="buttons mt-4 flex space-x-3">
          <Button
            className="h-8 w-1/3 space-x-0.5 rounded-full bg-accent-background px-0 text-accent"
            variant={"diy"}
          >
            <ArrowUpDown size={20} />
            <div className="whitespace-nowrap font-semibold">时间</div>
          </Button>
          <Button
            className="h-8 w-1/3 space-x-0.5 rounded-full bg-accent-background px-0 text-accent"
            variant={"diy"}
          >
            <ArrowUpDown size={20} />

            <div className="whitespace-nowrap font-semibold">播放量</div>
          </Button>
          <Button
            className="h-8 w-1/3 space-x-0.5  rounded-full bg-accent-background px-0 text-accent"
            variant={"diy"}
          >
            <ArrowUpDown size={20} />
            <div className="whitespace-nowrap font-semibold">片段创作</div>
          </Button>
        </div>
        <div className="scrollList mt-4">
          <div className="item flex">
            <div>封面</div>
            <div>中间</div>
            <div>信息</div>
          </div>
          <div className="item flex">
            <div>封面</div>
            <div>中间</div>
            <div>信息</div>
          </div>
          <div className="item flex">
            <div>封面</div>
            <div>中间</div>
            <div>信息</div>
          </div>
        </div>
      </div>
    </div>
  )
}
