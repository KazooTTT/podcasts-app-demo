import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="container flex h-14 items-center space-x-4 p-2">
        <div className="flex w-full items-center space-x-2">
          <Input type="text" placeholder="请输入关键词" className="h-10" />
          <Button variant="secondary" className="h-10 w-1/5 px-4">
            搜索
          </Button>
        </div>
      </div>
    </header>
  );
}
