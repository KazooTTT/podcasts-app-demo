"use client";
import React from "react";

export interface SrtItem {
  id: any;
  startTime: any;
  endTime: any;
  text: any;
}

export function SrtContentItem({
  item,
  hideStartTime,
}: {
  item: SrtItem;
  hideStartTime?: boolean;
}) {
  const { startTime, text } = item;
  const formatTime = (startTime: string) => {
    const [show, ...hide] = startTime.split(",");
    return show;
  };
  return (
    <div className="space-y-1">
      <div className="flex items-center space-x-1">
        {!hideStartTime && (
          <div className="text-xs text-muted-foreground">
            {formatTime(startTime)}
          </div>
        )}
      </div>
      <div className="text-sm">{text}</div>
    </div>
  );
}
