"use client";
import { ConciergeBell } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <section className="h-[60vh] lg:h-[80vh] bg-hero bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <h1 className="h1 text-white text-center max-w-[800px] mt-[120px] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            {t("Welcome")}
          </h1>
          <Button
            onClick={() => {
              window.open("https://bloomtalya.rezervasyonal.com/", "_blank");
            }}
            size="lg"
            className="mt-8 bg-white text-accent hover:bg-accent hover:text-white transition-colors flex justify-center items-center gap-2"
          >
            {t("Reservation")}
            <ConciergeBell />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
