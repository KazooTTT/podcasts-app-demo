"use client";
import React from "react";
import { SrtItem } from "./type";
import { cn } from "@/lib/utils";

export function SrtContentItem({
  item,
  hideStartTime,
  isActive,
  type,
}: {
  item: SrtItem;
  hideStartTime?: boolean;
  isActive?: boolean;
  type: "voice" | "flow";
}) {
  const { startTimeStr, text } = item;
  const formatTime = (startTime: string) => {
    const [show, ...hide] = startTime.split(",");
    return show;
  };
  return (
    <div className="space-y-1">
      <div className="flex items-center space-x-1">
        {!hideStartTime && (
          <div
            className={cn(
              "text-xs text-muted-foreground",
              type === "voice" && isActive && "font-bold text-hightLightMenu"
            )}
          >
            {formatTime(startTimeStr)}
          </div>
        )}
      </div>
      <div className={cn("text-sm", isActive && "text-foreground")}>{text}</div>
    </div>
  );
}
