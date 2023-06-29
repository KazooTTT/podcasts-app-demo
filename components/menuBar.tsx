"use client";

import { usePathname, useRouter } from "next/navigation";
import { Heart, Home, Mail, PlayCircle, User } from "lucide-react";

import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "./ui/button";

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
      <div className="flex w-12 flex-col items-center">
        <div className="relative h-12 w-12">
          <Image
            src="https://kazoottt-1256684243.cos.ap-chengdu.myqcloud.com/%E6%92%AD%E6%94%BE%E9%A1%B5-%E5%A3%B0%E9%9F%B3%26%E4%B8%93%E8%BE%91%E5%A4%B4%E5%83%8F%E3%80%8A%E7%BB%84%E7%BB%87%E8%BF%9B%E5%8C%96%E8%AE%BA%E3%80%8B.jpeg"
            alt="album"
            className="rounded-full opacity-50"
            height={48}
            width={48}
          />
          <PlayCircle
            className="absolute top-0 h-12 w-12"
            strokeWidth={0.5}
          ></PlayCircle>
        </div>
      </div>
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
