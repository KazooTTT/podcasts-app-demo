"use client";

import React, { useEffect, useState } from "react";

import { CardProps } from "@/types/flow";
import { useMount } from "ahooks";
import Loading from "./loading";
import { FlowItem } from "./FlowItem";

export default function IndexPage({ infos }: { infos: CardProps[] }) {
  const [height, setheight] = useState(0);

  useMount(() => {
    setheight(window.innerHeight);
  });

  useEffect(() => {
    const handleResize = () => setheight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {height === 0 ? (
        <Loading></Loading>
      ) : (
        infos.map((item, index) => (
          <FlowItem
            info={item}
            height={height}
            key={[item.title, index].join("_")}
          />
        ))
      )}
    </>
  );
}
