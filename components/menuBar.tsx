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
        <MenubarTrigger
          className="flex w-24 flex-col items-center"
          data-state={pathname === "/flow" ? "open" : undefined}
          onClick={() => {
            router.push("/")
          }}
        >
          <div>
            <Home></Home>
          </div>
          <div>首页</div>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          className="flex w-24 flex-col items-center"
          data-state={pathname === "/upload" ? "open" : undefined}
          onClick={() => {
            router.push("/upload")
          }}
        >
          <div>
            <Upload></Upload>
          </div>
          <div>上传</div>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger
          className="flex w-24 flex-col items-center"
          data-state={pathname === "/my" ? "open" : undefined}
          onClick={() => {
            router.push("/my")
          }}
        >
          <div>
            <User></User>
          </div>
          <div>我的</div>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}

export default MenuBar
