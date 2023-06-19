import { Button } from "@/components/ui/button";
import { MessageSquare, Share2, Star, ThumbsUp } from "lucide-react";

export function SideBar() {
  return (
    <div className="absolute bottom-1/4 right-0 z-40 flex flex-col space-y-4">
      <Button variant={"ghost"} className="h-full py-0.5">
        <div className="likes flex flex-col items-center justify-center space-y-0.5">
          <ThumbsUp></ThumbsUp>
          <div>9999</div>
        </div>
      </Button>
      <Button variant={"ghost"} className="h-full py-0.5">
        <div className="comments flex flex-col items-center justify-center space-y-0.5">
          <MessageSquare />
          <div>9999</div>
        </div>
      </Button>
      <Button variant={"ghost"} className="h-full py-0.5">
        <div className="stars flex flex-col items-center justify-center space-y-0.5">
          <Star></Star>
          <div>21</div>
        </div>
      </Button>
      <Button variant={"ghost"} className="h-full py-0.5">
        <div className="flex flex-col items-center justify-center space-y-0.5">
          <Share2></Share2>
          <div>120</div>
        </div>
      </Button>
    </div>
  );
}
