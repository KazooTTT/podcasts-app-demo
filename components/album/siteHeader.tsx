"use client";

import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export function SiteHeader() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-40 w-full bg-background">
      <div>
        <Button
          variant={"link"}
          onClick={() => {
            router.back();
          }}
        >
          <ChevronLeft />
        </Button>
      </div>
    </header>
  );
}
