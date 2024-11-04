"use client";
import React from "react";

type Props = {};

export default function Banner({ title }: { title: string }) {
  return (
    <div className="relative w-full h-[250px] md:h-[300px]">
      <img
        src="/assets/hero/heroBg.webp"
        alt="banner"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h2 className="text-white text-3xl md:text-5xl font-bold">{title}</h2>
      </div>
    </div>
  );
}
