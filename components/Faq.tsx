"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const t = useTranslations("Faq");

  const toggleCollapse = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-6 md:py-12 lg:py-24 max-h-screen overflow-y-auto">
      <div className="container px-4 grid gap-4 md:gap-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            {t("title")}
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed dark:text-gray-400">
            {t("description")}
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <button
              onClick={() => toggleCollapse(0)}
              style={{ backgroundColor: "#434343", color: "white" }}
              className="w-full justify-start text-left font-semibold text-sm md:text-base p-2 rounded"
            >
              {t("q1")}
            </button>
            {activeIndex === 0 && (
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed dark:text-gray-400 p-2">
                {t("a1")}
              </p>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleCollapse(1)}
              style={{ backgroundColor: "#434343", color: "white" }}
              className="w-full justify-start text-left font-semibold text-sm md:text-base p-2 rounded"
            >
              {t("q2")}
            </button>
            {activeIndex === 1 && (
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed dark:text-gray-400 p-2">
                {t("a2")}
              </p>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleCollapse(2)}
              style={{ backgroundColor: "#434343", color: "white" }}
              className="w-full justify-start text-left font-semibold text-sm md:text-base p-2 rounded"
            >
              {t("q3")}
            </button>
            {activeIndex === 2 && (
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed dark:text-gray-400 p-2">
                {t("a3")}
              </p>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleCollapse(3)}
              style={{ backgroundColor: "#434343", color: "white" }}
              className="w-full justify-start text-left font-semibold text-sm md:text-base p-2 rounded"
            >
              {t("q4")}
            </button>
            {activeIndex === 3 && (
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed dark:text-gray-400 p-2">
                {t("a4")}
              </p>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleCollapse(4)}
              style={{ backgroundColor: "#434343", color: "white" }}
              className="w-full justify-start text-left font-semibold text-sm md:text-base p-2 rounded"
            >
              {t("q5")}
            </button>
            {activeIndex === 4 && (
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed dark:text-gray-400 p-2">
                {t("a5")}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
