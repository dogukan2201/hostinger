import { TbArrowsMaximize, TbUsers } from "react-icons/tb";
import Link from "next/link";

// Oda bilgileri
const rooms = [
  {
    id: "jakuzili",
    price: 10000,
    image: "/assets/oda.png",
    info: "Jakuzili Suite Oda",
    maxGuests: 2,
  },
  {
    id: 2,
    price: 15000,
    image: "/assets/oda.png",
    info: "Aile Odası",
    maxGuests: 4,
  },
  {
    id: 3,
    price: 20000,
    image: "/assets/oda.png",
    info: "Standart Oda",
    maxGuests: 3,
  },
  {
    id: 4,
    price: 25000,
    image: "/assets/oda.png",
    info: "Ekonomik Oda",
    maxGuests: 2,
  },
  {
    id: 5,
    price: 30000,
    image: "/assets/oda.png",
    info: "Superior Standart Oda",
    maxGuests: 5,
  },
];

const RoomDetails = async () => {
  return (
    <section className="min-h-[80vh] w-full md:w-2/3 mx-auto text-accent">
      <div className="container mx-auto py-8">
        <div className="flex flex-col gap-8 h-full">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="flex flex-col mb-8 border p-4 rounded-lg shadow-md"
            >
              <div className="relative w-full h-[420px] mb-4 overflow-hidden">
                <Link href={`/${room.id}`} passHref>
                  <button className="relative w-full h-[420px] mb-4 overflow-hidden">
                    <img
                      src={room.image}
                      alt={`Oda ${room.id}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                </Link>
              </div>
              <div className="flex flex-col mb-4">
                <p className="text-2xl font-bold">{room.info}</p>
                <p className="text-2xl font-bold  w-52 ">
                  {room.price}$ / Gecelik
                </p>

                <div className="flex items-center gap-8 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl text-accent">
                      <TbUsers />
                    </div>
                    <p>Kapasite: {room.maxGuests}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl text-accent">
                      <TbArrowsMaximize />
                    </div>
                    <p>M2: 35sqm</p>
                  </div>
                  {/* reservation SAYFASINA ATILABİLR */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
