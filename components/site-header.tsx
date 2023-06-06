import { MainNavLeft } from "./MainNavLeft"
import { MainNavRight } from "./MainNavRight"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="container flex h-12 items-center justify-between space-x-4 px-2">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="text" placeholder="请输入关键词" className="h-8" />
          <Button variant="secondary" className="h-8 w-1/5 px-4">
            搜索
          </Button>
        </div>
      </div>
    </header>
  )
}
