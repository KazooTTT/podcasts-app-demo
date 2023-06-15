"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { Button } from "../ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="container flex h-14 items-center justify-between space-x-4 p-2">
        <Button
          variant={"link"}
          className="flex items-center space-x-2 hover:no-underline"
        >
          <Avatar className="border-2 border-solid border-[#ce395f]">
            <AvatarImage src="https://p.ipic.vip/oh91co.png" alt="album" />
            <AvatarFallback></AvatarFallback>
          </Avatar>
          <div>声音所在专辑</div>
        </Button>
      </div>
    </header>
  )
}
