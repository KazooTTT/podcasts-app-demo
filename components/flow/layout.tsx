import { SiteHeader } from "@/components/flow/siteHeader";
import MenuBar from "@/components/menuBar";

import "@/styles/globals.css";
import "./style.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="relative flex max-h-screen min-h-screen flex-col">
        <SiteHeader />
        <div className="items-container flex h-full flex-1 flex-col overflow-auto pb-32 scrollbar-none">
          {children}
        </div>
        <div className="bottom-menu sticky bottom-0 z-40 w-full">
          <MenuBar></MenuBar>
        </div>
      </div>
    </>
  );
}
