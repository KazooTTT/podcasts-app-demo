"use client";

import { ChevronLeft, Search } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useRouter } from "next/navigation";

export function SiteHeader() {
  const router = useRouter();
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div>
        <Button
          variant={"link"}
          onClick={() => {
            router.back();
          }}
        >
          <ChevronLeft />
        </Button>
      </div>
      <div className="flex h-14 w-full items-center justify-between px-0 py-2">
        <Button
          variant={"link"}
          className="flex items-center space-x-2 hover:no-underline"
          onClick={() => {
            router.push("/album");
          }}
        >
          <Avatar className="border-2 border-solid border-hightLight">
            <AvatarImage
              src="https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/202306252110013.jpeg"
              alt="album"
            />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div>声音所在专辑</div>
          <Badge variant="destructive" className="rounded-sm">
            订阅
          </Badge>
        </Button>
      </div>
    </header>
  );
}
