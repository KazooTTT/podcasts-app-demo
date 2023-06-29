"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { UploaderInfoProps } from "@/types/flow";

export function UploaderInfo(props: { uploadInfo: UploaderInfoProps }) {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src={props.uploadInfo.avatar} alt="album" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <span>@&nbsp;{props.uploadInfo.name}</span>
        <Badge variant="destructive" className="rounded-sm text-xs">
          关注
        </Badge>
      </div>
      <div className="mt-1 text-sm">{props.uploadInfo.desc}</div>
    </div>
  );
}
