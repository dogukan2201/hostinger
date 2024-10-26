"use client";
import { useState } from "react";
import { Wifi, Coffee, Utensils, Car, Dumbbell, Tv, Wind } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Feature = {
  name: string;
  icon?: React.ElementType;
  description: string;
};

export default function Component() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);

  const features: Feature[] = [
    {
      name: "Free Wi-Fi",
      icon: Wifi,
      description: "High-speed internet available throughout the pansion",
    },
    {
      name: "Complimentary Breakfast",
      icon: Coffee,
      description: "Start your day with a delicious breakfast on us",
    },
    {
      name: "Restaurant",
      icon: Utensils,
      description: "On-site restaurant serving local and international cuisine",
    },
    {
      name: "Parking",
      icon: Car,
      description: "Secure on-site parking for your convenience",
    },
    {
      name: "Smart TV",
      icon: Tv,
      description: "Enjoy your favorite shows on our smart TVs",
    },
    {
      name: "Air Conditioning",
      icon: Wind,
      description: "Climate control in all rooms for your comfort",
    },
  ];

  return (
    <TooltipProvider>
      <div className="bg-background p-6 rounded-lg shadow-lg text-black">
        <h2 className="text-2xl font-bold mb-6 text-center">
          》Hotel Features《
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <div
                  className="flex flex-col items-center p-4 bg-muted rounded-md transition-all duration-200 hover:bg-muted/80 cursor-pointer"
                  onClick={() => setActiveFeature(index)}
                  onKeyDown={(e) =>
                    e.key === "Enter" && setActiveFeature(index)
                  }
                  tabIndex={0}
                  role="button"
                  aria-label={feature.name}
                >
                  {feature.icon && (
                    <feature.icon
                      className={`w-8 h-8 mb-2 text-primary transition-all duration-300 ease-in-out
                      ${
                        activeFeature === index
                          ? "animate-pulse scale-110"
                          : "hover:scale-110"
                      }`}
                      aria-hidden="true"
                    />
                  )}
                  <span className="text-sm font-medium text-center">
                    {feature.name}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{feature.description}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </TooltipProvider>
  );
}
