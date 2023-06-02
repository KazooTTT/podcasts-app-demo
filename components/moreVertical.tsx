"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function MoreVertical() {
  return (
    <Button variant="ghost" size="sm" className="px-2">
      <Icons.MoreVertical
        className="rotate-0 scale-100 transition-all"
        size={18}
      />
      <span className="sr-only">show more items</span>
    </Button>
  )
}
