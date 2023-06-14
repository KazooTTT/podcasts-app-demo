import Image from "next/image"

import { CardProps } from "@/types/flow"

function TextCard({ title, subTitle, content }: CardProps) {
  return (
    <>
      <div className="mt-2 text-center font-bold">{title}</div>
      <div className="mt-0.5 text-center text-muted-foreground">{subTitle}</div>
      <div className="mt-1 text-muted-foreground">{content}</div>
    </>
  )
}

function ImgCard({ title, subTitle, cover }: CardProps) {
  return (
    <>
      {cover && (
        <Image
          src={cover}
          alt="cover img"
          width={200}
          height={200}
          className="mx-auto rounded-3xl"
        />
      )}
      <div className="mt-2 text-center font-bold">{title}</div>
      <div className="mt-0.5 text-center text-muted-foreground">{subTitle}</div>
    </>
  )
}

export { ImgCard, TextCard }
