"use client"; // Bileşeni client component olarak işaretle

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function Photoslide() {
  const images = [
    "/assets/oda.png",
    "/assets/oda1.png",
    "/assets/oda.png",
    "/assets/oda2.png",
    "/assets/oda.png",
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Aktif slayt için bir state oluşturuyoruz.

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length); // Her 1 saniyede bir sonraki slayta geçiyor.
    }, 3000); // 3000 milisaniye = 3 saniye

    return () => clearInterval(interval); // Temizlik fonksiyonu
  }, [images.length]);

  return (
    <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full h-auto"
        value={activeIndex} // Aktif slaytı belirle
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="w-full">
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-0">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-auto object-contain"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
