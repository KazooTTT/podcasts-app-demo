import { SiteHeader } from "@/components/flow/siteHeader";
import MenuBar from "@/components/menuBar";
import Flow from "../components/flow/page";

export default function Page() {
  // redirect("/flow");
  return (
    <>
      <div className="relative flex max-h-screen min-h-screen flex-col">
        <SiteHeader />
        <div className="items-container flex h-full flex-1 flex-col overflow-auto pb-32 scrollbar-none">
          <Flow></Flow>
        </div>
        <div className="bottom-menu sticky bottom-0 z-40 w-full">
          <MenuBar></MenuBar>
        </div>
      </div>
    </>
  );
}
