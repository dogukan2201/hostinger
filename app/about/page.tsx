"use client";
import Banner from "@/components/Banner";
import React from "react";
import { useTranslations } from "next-intl";

type Props = {};

export default function About({}: Props) {
  const t = useTranslations("About");

  return (
    <div className="flex flex-col">
      <Banner title="Hakkımızda" />
      <div className="w-fulll px-4 py-8 text-center flex flex-col justify-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 font-primary">
          》{t("description")}《
        </h2>
        <p className="text-base text-primary md:text-lg leading-relaxed">
          {t("content")}
        </p>
      </div>
    </div>
  );
}
