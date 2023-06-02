"use client"

import * as React from "react"

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function Share() {
  return (
    <Button variant="ghost" size="sm" className="px-2">
      <Icons.Share className="rotate-0 scale-100 transition-all" size={18} />
      <span className="sr-only">share button</span>
    </Button>
  )
}

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost" size="sm" className="px-2">
          <Icons.Share
            className="rotate-0 scale-100 transition-all"
            size={18}
          />
          <span className="sr-only">share button</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <Button>
          <Icons.Link2></Icons.Link2>
          <span className="ml-2">Share episode</span>
        </Button>
        <Button>
          <Icons.Cpu></Icons.Cpu>
          <span className="ml-2">Share moment as ship</span>
        </Button>
      </AlertDialogContent>
    </AlertDialog>
  )
}
