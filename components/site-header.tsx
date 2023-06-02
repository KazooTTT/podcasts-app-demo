import { siteConfig } from "@/config/site"

import { MainNavLeft } from "./MainNavLeft"
import { MainNavRight } from "./MainNavRight"
import { MainNav } from "./main-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="container flex h-12 items-center justify-between space-x-4 px-2">
        <MainNavLeft />
        <MainNavRight />
      </div>
    </header>
  )
}
