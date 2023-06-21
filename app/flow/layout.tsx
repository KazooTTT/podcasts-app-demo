import { SideBar } from "@/components/flow/siteBar";
import { SiteHeader } from "@/components/flow/siteHeader";
import MenuBar from "@/components/menuBar";

import "@/styles/globals.css";
import { PlayCircle } from "lucide-react";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="relative flex max-h-screen min-h-screen flex-col overflow-auto scrollbar-none">
        <SiteHeader />
        <div className="flex flex-1 justify-center overflow-auto scrollbar-none">
          {children}
        </div>
        <div className="bottom-menu sticky bottom-0 z-40 w-full">
          <MenuBar></MenuBar>
        </div>
      </div>
      <SideBar></SideBar>
    </>
  );
}
