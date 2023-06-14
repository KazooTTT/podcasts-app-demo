"use client"

import Image from "next/image"
import { useSize } from "ahooks"

import { CardProps } from "@/types/flow"

function TextCard({ title, subTitle, content }: CardProps) {
  //  计算一下content的高度，content = header - 头像 - 间距-播放器- footer
  const size = useSize(document.body)
  const maxHeight =
    (size?.height ?? document.body.clientHeight) -
    56 -
    80 -
    24 -
    32 -
    26 -
    8 -
    64
  return (
    <>
      <div className="mt-2 text-center font-bold">{title}</div>
      <div className="mt-0.5 text-center text-muted-foreground">{subTitle}</div>
      <div
        className="mt-2 text-muted-foreground"
        style={{ overflowY: "auto", maxHeight: maxHeight }}
      >
        {content}
      </div>
    </>
  )
}

function ImgCard({ title, subTitle, cover, content }: CardProps) {
  //  计算一下content的高度，content = header - 头像 - 间距-播放器- footer
  const size = useSize(document.body)
  const maxHeight =
    (size?.height ?? document.body.clientHeight) -
    56 -
    80 -
    24 -
    200 -
    32 -
    26 -
    8 -
    64

  return (
    <>
      <div className="wx-auto flex h-50 w-50 ">
        <Image
          src={cover as string}
          alt="cover img"
          width={200}
          height={200}
          className={`mx-auto rounded-3xl`}
        />
      </div>
      <div className="mt-2 text-center font-bold">{title}</div>
      <div className="mt-0.5 text-center text-muted-foreground">{subTitle}</div>
      <div
        className="mt-2 text-muted-foreground"
        style={{ overflowY: "auto", maxHeight: maxHeight }}
      >
        {content}
      </div>
    </>
  )
}

export { ImgCard, TextCard }
