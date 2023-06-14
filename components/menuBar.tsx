"use client"

import { usePathname, useRouter } from "next/navigation"
import { Home, Upload, User } from "lucide-react"

import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar"

const MenuBar = () => {
  // get pathname in nextjs
  const pathname = usePathname()
  const router = useRouter()

  return (
    <Menubar className="h-20 justify-around border-t-0">
      <MenubarMenu>
        <div className="text-center">
          <MenubarTrigger
            className="mb-1 flex w-12 flex-col items-center"
            data-state={pathname === "/flow" ? "open" : undefined}
            onClick={() => {
              router.push("/")
            }}
          >
            <div>
              <Home></Home>
            </div>
          </MenubarTrigger>
          <div className={pathname === "/flow" ? "text-accent" : "white"}>
            首页
          </div>
        </div>
      </MenubarMenu>
      <MenubarMenu>
        <div className="text-center">
          <MenubarTrigger
            className="mb-1 flex w-12 flex-col items-center"
            data-state={pathname === "/upload" ? "open" : undefined}
            onClick={() => {
              router.push("/upload")
            }}
          >
            <div>
              <Upload></Upload>
            </div>
          </MenubarTrigger>
          <div className={pathname === "/upload" ? "text-accent" : "white"}>
            分享
          </div>
        </div>
      </MenubarMenu>
      <MenubarMenu>
        <div className="text-center">
          <MenubarTrigger
            className="mb-1 flex w-12 flex-col items-center"
            data-state={pathname === "/my" ? "open" : undefined}
            onClick={() => {
              router.push("/my")
            }}
          >
            <div>
              <User></User>
            </div>
          </MenubarTrigger>
          <div className={pathname === "/my" ? "text-accent" : "white"}>
            我的
          </div>
        </div>
      </MenubarMenu>
    </Menubar>
  )
}

export default MenuBar
