"use client"

import * as React from "react"
import { CheckCircle2, Podcast, Settings2, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"

export function MoreVertical() {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="px-2">
          <Icons.MoreVertical
            className="rotate-0 scale-100 transition-all"
            size={18}
          />
          <span className="sr-only">share button</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-primary">
        <Button className="justify-start">
          <Star className="float-left"></Star>
          <span className="ml-6">Add to favorites</span>
        </Button>
        <Button className="justify-start">
          <Settings2></Settings2>
          <span className="ml-6">Playback settings</span>
        </Button>
        <Button className="justify-start">
          <Podcast></Podcast>
          <span className="ml-6">Go to Podcast</span>
        </Button>
        <Button className="justify-start">
          <Podcast></Podcast>
          <span className="ml-6">View episode details</span>
        </Button>
        <Button className="justify-start">
          <CheckCircle2></CheckCircle2>
          <span className="ml-6">Mark as completed</span>
        </Button>
        <Button className="justify-start">
          <Icons.Share></Icons.Share>
          <span className="ml-6">Share</span>
        </Button>
      </DialogContent>
    </Dialog>
  )
}
