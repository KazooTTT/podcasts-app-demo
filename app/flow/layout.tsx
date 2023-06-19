import { SideBar } from "@/components/flow/siteBar";
import { SiteHeader } from "@/components/flow/siteHeader";
import MenuBar from "@/components/menuBar";

import "@/styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="relative flex max-h-screen min-h-screen flex-col overflow-auto">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <div className="bottom-menu sticky bottom-0 z-40 w-full">
          <MenuBar></MenuBar>
        </div>
      </div>
      <SideBar></SideBar>
    </>
  );
}
