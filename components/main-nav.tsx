"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()

  return (
    <div className="flex w-full justify-center gap-6 md:gap-10 ">
      {items?.length ? (
        <nav className="flex gap-4">
          {items?.map(
            (item, index) =>
              item.href && (
                <>
                  <Link
                    key={item.title}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground",
                      item.disabled && "cursor-not-allowed opacity-80",
                      item.href === pathname && "text-foreground"
                    )}
                  >
                    {item.title}
                  </Link>
                  {index !== items?.length - 1 && (
                    <span className={"text-muted-foreground"}>|</span>
                  )}
                </>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
