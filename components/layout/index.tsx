import "@/styles/globals.css";
import MenuBar from "@/components/menuBar";
import { SiteHeader } from "@/components/site-header";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="relative flex max-h-screen min-h-screen flex-col">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <div className="bottom-menu sticky bottom-0 z-40 w-full">
        <MenuBar></MenuBar>
      </div>
    </div>
  );
}
