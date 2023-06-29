import { Button } from "@/components/ui/button";
import { Reactions } from "@/types/flow";
import { MessageSquare, Share2, Star, ThumbsUp } from "lucide-react";

export function SideBar({ reactions }: { reactions: Reactions }) {
  return (
    <div className="absolute bottom-1/4 right-0 z-20 flex select-none flex-col space-y-4">
      <Button variant={"ghost"} className="h-full py-0.5">
        <div className="likes flex flex-col items-center justify-center space-y-0.5">
          <ThumbsUp></ThumbsUp>
          <div>{reactions.likes}</div>
        </div>
      </Button>
      <Button variant={"ghost"} className="h-full py-0.5">
        <div className="comments flex flex-col items-center justify-center space-y-0.5">
          <MessageSquare />
          <div>{reactions.comments}</div>
        </div>
      </Button>
      <Button variant={"ghost"} className="h-full py-0.5">
        <div className="stars flex flex-col items-center justify-center space-y-0.5">
          <Star></Star>
          <div>{reactions.stars}</div>
        </div>
      </Button>
      <Button variant={"ghost"} className="h-full py-0.5">
        <div className="share flex flex-col items-center justify-center space-y-0.5">
          <Share2></Share2>
          <div>{reactions.share}</div>
        </div>
      </Button>
    </div>
  );
}
