"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Component() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const t = useTranslations("Faq");

  const toggleCollapse = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-6 md:py-12 lg:py-24 flex justify-center items-start">
      <div className="container px-4 max-w-3xl mx-auto">
        <div className="space-y-2 mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            》{t("title")}《
          </h2>
          <p className="text-muted-foreground text-lg text-primary">
            {t("description")}
          </p>
        </div>
        <div className="space-y-4">
          {[0, 1, 2, 3, 4, 5].map((index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleCollapse(index)}
                className="w-full justify-start text-left font-semibold p-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {t(`q${index + 1}`)}
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-background">
                  <p className="text-muted-foreground text-primary">
                    {t(`a${index + 1}`)}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
