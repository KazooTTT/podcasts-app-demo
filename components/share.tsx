"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"

export function Share() {
  return (
    <Button variant="ghost" size="sm" className="px-2">
      <Icons.Share className="rotate-0 scale-100 transition-all" size={18} />
      <span className="sr-only">share button</span>
    </Button>
  )
}

export function ShareBottomModal() {
  const [open, setOpen] = React.useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="px-2">
          <Icons.Share
            className="rotate-0 scale-100 transition-all"
            size={18}
          />
          <span className="sr-only">share button</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-primary">
        <Button className="justify-start">
          <Icons.Link2></Icons.Link2>
          <span className="ml-6">Share episode</span>
        </Button>
        <Button className="justify-start">
          <Icons.Cpu></Icons.Cpu>
          <span className="ml-6">Share moment as ship</span>
        </Button>
      </DialogContent>
    </Dialog>
  )
}
