"use client";
import Gallery from "@/components/Gallery";
import React from "react";
import { useTranslations } from "next-intl";
const Page = () => {
  const t = useTranslations("Gallery");

  return (
    <>
      <h1 className="text-4xl font-bold mt-8 mx-auto w-full text-center">
        》{t("title")}《
      </h1>
      <Gallery />
    </>
  );
};

export default Page;
