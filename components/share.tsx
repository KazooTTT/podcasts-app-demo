"use client"

import * as React from "react"

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
