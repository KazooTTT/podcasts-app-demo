import Image from "next/image"

import { ProgressDemo } from "@/components/progress"

import cover from "../public/kazoottt.png"

export default function IndexPage() {
  const info = {
    title: "The Power of Unwavering Focus",
    subTitle: "The Art of Maniliness",
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
      <div className="timeline-container mt-3 w-3/4">
        <ProgressDemo />
        {/* <div>
          控制组件
          <div>倍速</div>
          <div>回退</div>
          <div>播放</div>
          <div>快进</div>
          <div>睡眠</div>
        </div> */}
      </div>
      {/* <div>新增snip</div> */}
    </div>
  )
}
