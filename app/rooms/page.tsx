import { TbArrowsMaximize, TbUsers } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";

// Oda bilgileri
const rooms = [
  {
    id: "jakuzili",
    price: 10000,
    image: "/jakuziPhoto/jakuzi3.jpg",
    info: "Jakuzili Suite Oda",
    maxGuests: 2,
  },
  {
    id: "aile",
    price: 15000,
    image: "/ailePhoto/aileOdası.jpg",
    info: "Aile Odası",
    maxGuests: 4,
  },
  {
    id: "standart",
    price: 20000,
    image: "/standartPhoto/standart1.jpg",
    info: "Standart Oda",
    maxGuests: 3,
  },
  {
    id: "ekonomik",
    price: 25000,
    image: "/ekonomikPhoto/ekonomik1.jpeg",
    info: "Ekonomik Oda",
    maxGuests: 2,
  },
  {
    id: "superior",
    price: 30000,
    image: "/superiorPhoto/superior1.jpg",
    info: "Superior Standart Oda",
    maxGuests: 5,
  },
];

const RoomDetails = () => {
  return (
    <div className="min-h-[80vh]">
      <head>
        <title>Bloomtalya Pansiyon | Odalarımız</title>
      </head>
      <div className="container mx-auto py-8">
        <div
          className="flex flex-col gap-8 h-full"
          style={{ color: "#434343" }}
        >
          {rooms.map((room) => (
            <div
              key={room.id}
              className="flex flex-col mb-8 border p-4 rounded-lg shadow-md w-full max-w-[600px] mx-auto"
              style={{ color: "#434343" }}
            >
              <div className="relative w-full h-[420px] mb-4 overflow-hidden">
                <Link href={`/${room.id}`} passHref>
                  <div className="relative w-full h-full mb-4 overflow-hidden">
                    <Image
                      src={room.image}
                      alt={`Oda ${room.id}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </Link>
              </div>
              <div className="flex flex-col mb-4">
                <h3 className="text-2xl font-bold" style={{ color: "#434343" }}>
                  {room.info}
                </h3>
                <p
                  className="text-2xl font-bold w-52"
                  style={{ color: "#434343" }}
                >
                  {room.price}$ / Gecelik
                </p>
                <div
                  className="flex items-center gap-8 mb-4"
                  style={{ color: "#434343" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="text-2xl text-accent">
                      <TbUsers />
                    </div>
                    <span>Kapasite: {room.maxGuests}</span>{" "}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl text-accent">
                      <TbArrowsMaximize />
                    </div>
                    <span>M2: 35sqm</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
