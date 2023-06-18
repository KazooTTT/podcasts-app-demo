"use client";

import { usePathname, useRouter } from "next/navigation";
import { Heart, Home, Mail, Upload, User } from "lucide-react";

import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";

const MenuBar = () => {
  // get pathname in nextjs
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (prefix: string) => pathname.startsWith(prefix);

  return (
    <Menubar className="h-18 justify-around border-t bg-contrast">
      <MenubarMenu>
        <div className="text-center">
          <MenubarTrigger
            className="mb-0.5 flex w-12 flex-col items-center data-[state=open]:bg-hightLightMenu"
            data-state={isActive("/flow") ? "open" : undefined}
            onClick={() => {
              router.push("/flow");
            }}
          >
            <div>
              <Home size={20}></Home>
            </div>
          </MenubarTrigger>
          <div className={isActive("/flow") ? "text-hightLightMenu" : "white"}>
            发现
          </div>
        </div>
      </MenubarMenu>
      <MenubarMenu>
        <div className="text-center">
          <MenubarTrigger
            className="mb-0.5 flex w-12 flex-col items-center data-[state=open]:bg-hightLightMenu"
            data-state={isActive("/subscribe") ? "open" : undefined}
            onClick={() => {
              router.push("/subscribe");
            }}
          >
            <div>
              <Heart />
            </div>
          </MenubarTrigger>
          <div
            className={isActive("/subscribe") ? "text-hightLightMenu" : "white"}
          >
            订阅
          </div>
        </div>
      </MenubarMenu>
      <MenubarMenu>
        <div className="text-center">
          <MenubarTrigger
            className="mb-0.5 flex w-12 flex-col items-center data-[state=open]:bg-hightLightMenu"
            data-state={isActive("/upload") ? "open" : undefined}
            onClick={() => {
              router.push("/upload");
            }}
          >
            <div>
              <Upload></Upload>
            </div>
          </MenubarTrigger>
          <div
            className={isActive("/upload") ? "text-hightLightMenu" : "white"}
          >
            上传
          </div>
        </div>
      </MenubarMenu>
      <MenubarMenu>
        <div className="text-center">
          <MenubarTrigger
            className="mb-0.5 flex w-12 flex-col items-center data-[state=open]:bg-hightLightMenu"
            data-state={isActive("/message") ? "open" : undefined}
            onClick={() => {
              router.push("/message");
            }}
          >
            <div>
              <Mail />
            </div>
          </MenubarTrigger>
          <div
            className={isActive("/message") ? "text-hightLightMenu" : "white"}
          >
            消息
          </div>
        </div>
      </MenubarMenu>
      <MenubarMenu>
        <div className="text-center">
          <MenubarTrigger
            className="mb-0.5 flex w-12 flex-col items-center data-[state=open]:bg-hightLightMenu"
            data-state={isActive("/my") ? "open" : undefined}
            onClick={() => {
              router.push("/my");
            }}
          >
            <div>
              <User></User>
            </div>
          </MenubarTrigger>
          <div className={isActive("/my") ? "text-hightLightMenu" : "white"}>
            我的
          </div>
        </div>
      </MenubarMenu>
    </Menubar>
  );
};

export default MenuBar;
