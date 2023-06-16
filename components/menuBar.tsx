"use client";

import { usePathname, useRouter } from "next/navigation";
import { Home, Upload, User } from "lucide-react";

import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";

const MenuBar = () => {
  // get pathname in nextjs
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (prefix: string) => pathname.startsWith(prefix);

  return (
    <Menubar className="h-16 justify-around border-t bg-contrast">
      <MenubarMenu>
        <div className="text-center">
          <MenubarTrigger
            className="mb-0.5 flex w-12 flex-col items-center"
            data-state={isActive("/flow") ? "open" : undefined}
            onClick={() => {
              router.push("/flow/0");
            }}
          >
            <div>
              <Home size={20}></Home>
            </div>
          </MenubarTrigger>
          <div className={isActive("/flow") ? "text-accent" : "white"}>
            首页
          </div>
        </div>
      </MenubarMenu>
      <MenubarMenu>
        <div className="text-center">
          <MenubarTrigger
            className="mb-0.5 flex w-12 flex-col items-center"
            data-state={isActive("/upload") ? "open" : undefined}
            onClick={() => {
              router.push("/upload");
            }}
          >
            <div>
              <Upload></Upload>
            </div>
          </MenubarTrigger>
          <div className={isActive("/upload") ? "text-accent" : "white"}>
            分享
          </div>
        </div>
      </MenubarMenu>
      <MenubarMenu>
        <div className="text-center">
          <MenubarTrigger
            className="mb-0.5 flex w-12 flex-col items-center"
            data-state={isActive("/my") ? "open" : undefined}
            onClick={() => {
              router.push("/my");
            }}
          >
            <div>
              <User></User>
            </div>
          </MenubarTrigger>
          <div className={isActive("/my") ? "text-accent" : "white"}>我的</div>
        </div>
      </MenubarMenu>
    </Menubar>
  );
};

export default MenuBar;
