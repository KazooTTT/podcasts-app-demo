import { Button } from "@/components/ui/button"
import { SiteHeader } from "@/components/layout/site-header/flow"
import MenuBar from "@/components/menuBar"

import "@/styles/globals.css"
import { Heart, Share2, ThumbsDown, ThumbsUp } from "lucide-react"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <div className="absolute bottom-1/4 right-0 flex flex-col space-y-8">
        <Button variant={"link"}>
          <div className="flex flex-col items-center justify-center space-y-0.5">
            <Share2></Share2>
            <div>9999</div>
          </div>
        </Button>
        <Button variant={"link"}>
          <div className="flex flex-col items-center justify-center space-y-0.5">
            <ThumbsUp></ThumbsUp>
            <div>9999</div>
          </div>
        </Button>
        <Button variant={"link"}>
          <div className="flex flex-col items-center justify-center space-y-0.5">
            <ThumbsDown></ThumbsDown>
            <div>9999</div>
          </div>
        </Button>
        <Button variant={"link"}>
          <div className="flex flex-col items-center justify-center space-y-0.5">
            <Heart></Heart>
            <div>9999</div>
          </div>
        </Button>
      </div>
      <div className="bottom-menu sticky bottom-0 z-40 w-full bg-background">
        <MenuBar></MenuBar>
      </div>
    </div>
  )
}
