import "@/styles/globals.css"
import { Metadata } from "next"
import { BookOpen, Languages, ListMusic, Pin, Quote } from "lucide-react"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { SiteHeader } from "@/components/site-header"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
              <div className="sticky bottom-0 z-40 w-full bg-background">
                <Menubar className="h-20 justify-between border-t-0">
                  <MenubarMenu>
                    <MenubarTrigger className="flex w-full flex-col items-center">
                      <div>
                        <BookOpen></BookOpen>
                      </div>
                      <div>Chapters</div>
                    </MenubarTrigger>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger className="flex w-full flex-col  items-center">
                      <div>
                        <Pin></Pin>
                      </div>
                      <div>Saved</div>
                    </MenubarTrigger>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger className="flex w-full flex-col items-center">
                      <div>
                        <Languages></Languages>
                      </div>
                      <div>Transcript</div>
                    </MenubarTrigger>
                  </MenubarMenu>
                  <MenubarMenu>
                    <MenubarTrigger className="flex w-full flex-col  items-center">
                      <div>
                        <ListMusic></ListMusic>
                      </div>
                      <div>Queue</div>
                    </MenubarTrigger>
                  </MenubarMenu>
                </Menubar>
              </div>
            </div>
            {/* <TailwindIndicator /> */}
            <ThemeToggle />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
