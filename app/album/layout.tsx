import "@/styles/globals.css";
import MenuBar from "@/components/menuBar";
import { SiteHeader } from "@/components/album/siteHeader";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="relative flex max-h-screen min-h-screen flex-col">
      <SiteHeader></SiteHeader>
      <div className="flex-1 overflow-auto">{children}</div>
      <div className="bottom-menu relative bottom-0 z-40 w-full">
        <MenuBar></MenuBar>
      </div>
    </div>
  );
}
