"use client";
import React from "react";
import { SrtItem } from "./type";
import { cn } from "@/lib/utils";

export function SrtContentItem({
  item,
  hideStartTime,
  isActive,
}: {
  item: SrtItem;
  hideStartTime?: boolean;
  isActive?: boolean;
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
          <div className="text-xs text-muted-foreground">
            {formatTime(startTimeStr)}
          </div>
        )}
      </div>
      <div className={cn("text-sm", isActive && "text-foreground")}>{text}</div>
    </div>
  );
}
