"use client";

import Image from "next/image";
import { useSize } from "ahooks";

import { CardProps } from "@/types/flow";

function TextCard({ title, subTitle, content }: CardProps) {
  return (
    <>
      <div className="mt-2 text-center font-bold">{title}</div>
      <div className="mt-0.5 text-center text-muted-foreground">{subTitle}</div>
    </>
  );
}

function ImgCard({ title, subTitle, cover, content }: CardProps) {
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
    </>
  );
}

export { ImgCard, TextCard };
