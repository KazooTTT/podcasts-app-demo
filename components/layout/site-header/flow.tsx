"use client"

import { AvatarFallback } from "@radix-ui/react-avatar"
import { Search } from "lucide-react"

import { Avatar, AvatarImage } from "@/components/ui/avatar"

import { Button } from "../../ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="container flex h-14 items-center justify-between space-x-4 p-2">
        <Button
          variant={"link"}
          className="flex items-center space-x-2 hover:no-underline"
        >
          <Avatar className="border-2 border-solid border-[#ce395f]">
            <AvatarImage src="https://github.com/shadcn.png" alt="album" />
            <AvatarFallback>LP</AvatarFallback>
          </Avatar>
          <div>片段所在声音</div>
        </Button>
        <Button variant={"link"}>
          <Search className="float-left"></Search>
        </Button>
      </div>
    </header>
  )
}
