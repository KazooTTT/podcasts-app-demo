"use client";

import { usePathname, useRouter } from "next/navigation";
import { Heart, Home, Mail, Upload, User } from "lucide-react";

import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";

const MenuBar = () => {
  // get pathname in nextjs
  const pathname = usePathname();
  const router = useRouter();

  const isActive = (prefix: string) =>
    prefix === "/" ? pathname === "/" : pathname.startsWith(prefix);

  return (
    <Menubar className="z-50 h-18 justify-around border-t bg-background">
      <MenubarMenu>
        <div className="text-center">
          <MenubarTrigger
            className="mb-0.5 flex w-12 flex-col items-center data-[state=open]:bg-hightLightMenu"
            data-state={isActive("/") ? "open" : undefined}
            onClick={() => {
              router.push("/");
            }}
          >
            <div>
              <Home size={20} alt="home"></Home>
            </div>
          </MenubarTrigger>
          <div className={isActive("/") ? "text-hightLightMenu" : "white"}>
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
              <Heart alt="heart" />
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
              <Upload alt="upload"></Upload>
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
              <Mail alt="message" />
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
              <User alt="my"></User>
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
