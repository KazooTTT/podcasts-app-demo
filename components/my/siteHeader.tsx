"use client";

import { Settings, Share2 } from "lucide-react";

import { Button } from "../ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div className="flex h-14 w-full items-center justify-end px-0 py-2">
        <Button variant={"link"} className="px-2">
          <Share2 />
        </Button>
        <Button variant={"link"} className="px-2">
          <Settings />
        </Button>
      </div>
    </header>
  );
}
