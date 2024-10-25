"use client";
import { useState } from "react";

const Faq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleCollapse = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full py-6 md:py-12 lg:py-24 max-h-screen overflow-y-auto">
      <div className="container px-4 grid gap-4 md:gap-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed dark:text-gray-400">
            Başka sorularınız varsa lütfen desteğe e-posta gönderin.
          </p>
        </div>
        <div className="space-y-4">
          <div>
            <button
              onClick={() => toggleCollapse(0)}
              style={{ backgroundColor: "#434343", color: "white" }}
              className="w-full justify-start text-left font-semibold text-sm md:text-base p-2 rounded"
            >
              Bloomtalya Pansiyon, tam geri ödeme için ücretsiz iptal imkânı
              sunuyor mu?
            </button>
            {activeIndex === 0 && (
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed dark:text-gray-400 p-2">
                Evet, tamamen iade edilebilir odalar sunulmaktadır. İptal
                şartlarını kontrol ettiğinizden emin olun.
              </p>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleCollapse(1)}
              style={{ backgroundColor: "#434343", color: "white" }}
              className="w-full justify-start text-left font-semibold text-sm md:text-base p-2 rounded"
            >
              Otopark imkânı var mı?
            </button>
            {activeIndex === 1 && (
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed dark:text-gray-400 p-2">
                Evet, ücretsiz valesiz otopark mevcuttur.
              </p>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleCollapse(2)}
              style={{ backgroundColor: "#434343", color: "white" }}
              className="w-full justify-start text-left font-semibold text-sm md:text-base p-2 rounded"
            >
              Etrafındaki bölge nasıldır?
            </button>
            {activeIndex === 2 && (
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed dark:text-gray-400 p-2">
                Eski Çarşı ve Saat Kulesi&apos;ne 17 dakikalık yürüyüş
                mesafesindedir.
              </p>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleCollapse(3)}
              style={{ backgroundColor: "#434343", color: "white" }}
              className="w-full justify-start text-left font-semibold text-sm md:text-base p-2 rounded"
            >
              Evcil hayvan kabul ediyor mu?
            </button>
            {activeIndex === 3 && (
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed dark:text-gray-400 p-2">
                Maalesef, evcil hayvanlar kabul edilmemektedir.
              </p>
            )}
          </div>

          <div>
            <button
              onClick={() => toggleCollapse(4)}
              style={{ backgroundColor: "#434343", color: "white" }}
              className="w-full justify-start text-left font-semibold text-sm md:text-base p-2 rounded"
            >
              Yakınlardaki imkânlar nelerdir?
            </button>
            {activeIndex === 4 && (
              <p className="text-gray-500 text-sm md:text-lg leading-relaxed dark:text-gray-400 p-2">
                Bloomtalya Pansiyon bahçe sunmaktadır.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
