import { Icons } from "./icons";
import { Button } from "./ui/button";

export function MainNavLeft() {
  return (
    <div className={"left-buttons flex  items-center justify-start"}>
      <Button variant="ghost" size="sm" className="px-2">
        <Icons.chevronDown size="20"></Icons.chevronDown>
      </Button>
    </div>
  );
}
