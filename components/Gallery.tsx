import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";
const imageData = [
  {
    src: "/ekonomikPhoto/ekonomik1.jpeg",
    alt: "Image 1",
  },
  {
    src: "/jakuziPhoto/jakuzi1.jpg",
    alt: "Image 2",
  },
  {
    src: "/standartPhoto/standart1.jpg",
    alt: "Image 3",
  },
  {
    src: "/ekonomikPhoto/ekonomik2.jpg",
    alt: "Image 4",
  },
  {
    src: "/jakuziPhoto/jakuzi2.jpg",
    alt: "Image 5",
  },
  {
    src: "/ekonomikPhoto/ekonomik3.jpg",
    alt: "Image 6",
  },
  {
    src: "/standartPhoto/standart1.jpg",
    alt: "Image 7",
  },
  {
    src: "/jakuziPhoto/jakuzi3.jpg",
    alt: "Image 8",
  },
  {
    src: "/standartPhoto/standart2.jpg",
    alt: "Image 9",
  },
  {
    src: "/superiorPhoto/superior1.jpg",
    alt: "Image 10",
  },
  {
    src: "/superiorPhoto/superior2.jpg",
    alt: "Image 11",
  },
  {
    src: "/superiorPhoto/superior3.jpg",
    alt: "Image 12",
  },
];
export default function Component() {
  return (
    <main className="grid sm:grid-cols-3 gap-4 w-full max-w-6xl mx-auto p-4">
      {imageData.map((image, index) => (
        <Card key={index} className="p-2">
          <CardHeader>
            <Link href={"/rooms"}>
              <img
                src={image.src}
                alt={image.alt}
                className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                width="300"
                height="300"
              />
            </Link>
          </CardHeader>
        </Card>
      ))}
    </main>
  );
}
