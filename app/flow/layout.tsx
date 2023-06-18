import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/flow/siteHeader";
import MenuBar from "@/components/menuBar";

import "@/styles/globals.css";
import {
  Heart,
  MessageSquare,
  Share2,
  Star,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="relative flex max-h-screen min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <div className="absolute bottom-1/4 right-0 flex flex-col space-y-8">
        <Button variant={"ghost"} className="h-full py-0.5">
          <div className="likes flex flex-col items-center justify-center space-y-0.5">
            <ThumbsUp></ThumbsUp>
            <div>9999</div>
          </div>
        </Button>
        <Button variant={"ghost"} className="h-full py-0.5">
          <div className="comments flex flex-col items-center justify-center space-y-0.5">
            <MessageSquare />
            <div>9999</div>
          </div>
        </Button>
        <Button variant={"ghost"} className="h-full py-0.5">
          <div className="stars flex flex-col items-center justify-center space-y-0.5">
            <Star></Star>
            <div>21</div>
          </div>
        </Button>
        <Button variant={"ghost"} className="h-full py-0.5">
          <div className="flex flex-col items-center justify-center space-y-0.5">
            <Share2></Share2>
            <div>120</div>
          </div>
        </Button>
      </div>
      <div className="bottom-menu sticky bottom-0 z-40 w-full">
        <MenuBar></MenuBar>
      </div>
    </div>
  );
}
