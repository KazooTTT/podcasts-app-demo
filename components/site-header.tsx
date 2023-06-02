import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"

import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 px-4 sm:justify-between sm:space-x-0">
        <div className={"left-buttons flex w-1/4 items-center justify-start"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
        <MainNav items={siteConfig.mainNav} />
        <div
          className={
            "right-buttons flex w-1/4 items-center justify-end space-x-2"
          }
        >
          <ThemeToggle></ThemeToggle>
        </div>
      </div>
    </header>
  )
}
