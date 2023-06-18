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
            <AvatarImage src="https://p.ipic.vip/oh91co.png" alt="album" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div className="flex items-center">
            片段所在声音
            <ChevronRight />
          </div>
        </Button>
        <Button variant={"link"}>
          <Search className="float-left"></Search>
        </Button>
      </div>
    </header>
  );
}
