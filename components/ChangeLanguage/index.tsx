'use client'
import React, { useState, useEffect } from "react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { getUserLocale, setUserLocale } from "@/services/locale";
import { Locale } from "@/i18n/config";

type Props = {};

export default function ChangeLanguage({}: Props) {
  const [currentLocale, setCurrentLocale] = useState<string>("tr");

  const changeLanguage = async (lang: string) => {
    const locale = lang as Locale;
    setCurrentLocale(locale); // İlk önce durumu güncelliyoruz
    await setUserLocale(locale);
  };

  useEffect(() => {
    // Sayfa yüklendiğinde mevcut locale'yi çekmek için
    const fetchLocale = async () => {
      const userLocale = await getUserLocale();
      setCurrentLocale(userLocale || "tr");
    };
    fetchLocale();
  }, []);

  return (
    <ToggleGroup type="single">
      <ToggleGroupItem
        onClick={() => changeLanguage("tr")}
        className={`font-extrabold text-primary ${currentLocale === "tr" ? "bg-primary-hover" : "bg-white"}`}
        value="tr"
      >
        TR
      </ToggleGroupItem>
      <ToggleGroupItem
        onClick={() => changeLanguage("en")}
        className={`font-extrabold text-primary ${currentLocale === "en" ? "bg-primary-hover" : "bg-white"}`}
        value="en"
      >
        EN
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
