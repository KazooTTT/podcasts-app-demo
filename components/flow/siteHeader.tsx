"use client";

import { ChevronRight, Search } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export function SiteHeader() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="flex h-14 w-full items-center justify-between px-0 py-2">
        <Button
          variant={"link"}
          className="flex items-center space-x-2 hover:no-underline"
          onClick={() => {
            router.push("/voice");
          }}
        >
          <Avatar className="border-2 border-solid border-hightLight">
            <AvatarImage
              src="https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%92%AD%E6%94%BE%E9%A1%B5-%E5%A3%B0%E9%9F%B3%26%E4%B8%93%E8%BE%91%E5%A4%B4%E5%83%8F%E3%80%8A%E7%BB%84%E7%BB%87%E8%BF%9B%E5%8C%96%E8%AE%BA%E3%80%8B.jpeg"
              alt="album"
            />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div className="flex items-center">
            片段所在声音
            <ChevronRight />
          </div>
        </Button>
        <Button variant={"link"}>
          <Search className="float-left" alt="search"></Search>
        </Button>
      </div>
    </header>
  );
}
