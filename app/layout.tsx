import "@/styles/globals.css"
import { Metadata } from "next";
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import MenuBar from "@/components/menuBar"
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
  // check if use layout by pathname in next.js add mode
  const pathname = usePathname()
  console.log("%c Line:37 🍊 pathname", "color:#7f2b82", pathname)

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
              <div className="bottom-menu sticky bottom-0 z-40 w-full bg-background">
                <MenuBar></MenuBar>
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
