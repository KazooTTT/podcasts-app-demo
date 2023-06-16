import "@/styles/globals.css";
import MenuBar from "@/components/menuBar";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="relative flex max-h-screen min-h-screen flex-col">
      <div className="flex-1 overflow-auto">{children}</div>
      <div className="bottom-menu sticky bottom-0 z-40 w-full">
        <MenuBar></MenuBar>
      </div>
    </div>
  );
}
