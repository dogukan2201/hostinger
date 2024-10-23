import { TbArrowsMaximize, TbUsers } from "react-icons/tb";
import Link from "next/link";

// Oda bilgileri
const rooms = [
  {
    id: 1,
    price: 10000,
    image: "/assets/oda.png",
    info: "İlk odanın bilgileri",
    maxGuests: 2,
  },
  {
    id: 2,
    price: 15000,
    image: "/assets/oda.png",
    info: "İkinci odanın bilgileri",
    maxGuests: 4,
  },
  {
    id: 3,
    price: 20000,
    image: "/assets/oda.png",
    info: "Üçüncü odanın bilgileri",
    maxGuests: 3,
  },
  {
    id: 4,
    price: 25000,
    image: "/assets/oda.png",
    info: "Dördüncü odanın bilgileri",
    maxGuests: 2,
  },
  {
    id: 5,
    price: 30000,
    image: "/assets/oda.png",
    info: "Beşinci odanın bilgileri",
    maxGuests: 5,
  },
];

const RoomDetails = async () => {
  return (
    <section className="min-h-[80vh] ">
      <div className="container mx-auto py-8">
        <div className="flex flex-col gap-8 h-full">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="flex flex-col mb-8 border p-4 rounded-lg shadow-md"
            >
              <div className="relative w-full h-[420px] mb-4 overflow-hidden">
                <Link href={`/room/${room.id}`} passHref>
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
                <p className="text-2xl font-bold">{room.price}$</p>
                <p className="h3 font-secondary font-medium text-accent">
                  <span className="text-base text-secondary">/ night</span>
                </p>
                <p>{room.info}</p>
                <div className="flex items-center gap-8 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="text-2xl text-accent">
                      <TbArrowsMaximize />
                    </div>
                    <p>Maksimum Konuk: {room.maxGuests}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-2xl text-accent">
                      <TbUsers />
                    </div>
                    <p>{room.maxGuests} konuk</p>
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
