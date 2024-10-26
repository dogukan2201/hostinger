"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const rooms = [
  {
    id: "jacuzziRoom",
    image: "/jakuziPhoto/jakuzi3.jpg",
    info: "Jakuzili Suite Oda",
    maxGuests: 2,
  },
  {
    id: "familyRoom",
    image: "/ailePhoto/aileOdası.jpg",
    info: "Aile Odası",
    maxGuests: 4,
  },
  {
    id: "standardRoom",
    image: "/standartPhoto/standart1.jpg",
    info: "Standart Oda",
    maxGuests: 3,
  },
  {
    id: "economicalRoom",
    image: "/ekonomikPhoto/ekonomik1.jpeg",
    info: "Ekonomik Oda",
    maxGuests: 2,
  },
  {
    id: "superiorRoom",
    image: "/superiorPhoto/superior1.jpg",
    info: "Superior Oda",
    maxGuests: 2,
  },
];

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? rooms.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === rooms.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-4 ">
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative h-[400px]">
            <Image
              src={rooms[currentIndex].image}
              alt={rooms[currentIndex].info}
              layout="fill"
              objectFit="cover"
            />
            <Button
              variant="outline"
              size="md"
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous image</span>
            </Button>
            <Button
              variant="outline"
              size="md"
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next image</span>
            </Button>
          </div>
        </CardContent>
      </Card>
      <div className="flex justify-center mt-4 space-x-2">
        {rooms.map((room, roomIndex) => (
          <button
            key={room.id}
            onClick={() => goToSlide(roomIndex)}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === roomIndex ? "bg-primary w-4" : "bg-gray-300"
            }`}
          >
            <span className="sr-only">Go to slide {roomIndex + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
