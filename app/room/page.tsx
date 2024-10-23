import Image from "next/image";
import { TbArrowsMaximize, TbUsers } from "react-icons/tb";

const RoomDetails = async ({ params }: { params: any }) => {
  return (
    <section className="min-h-[80vh]">
      <div className="container mx-auto py-8">
        <div className="flex flex-col lg:flex-row lg:gap-12 h-full">
          ROOM DETAILS
          <div className="flex-1">
            <div className="relative h-[360px] lg:h-[420px] mb-8">
              <img src="/assets/oda.png" alt="Oda" className="w-full h-full" />
            </div>
            <div className="flex flex-1 flex-col mb-8">
              10000$
              <div className="flex justify-between items-center mb-4">
                <p className="h3 font-secondary font-medium text-accent">
                  <span className="text-base text-secondary">/ night</span>
                </p>
              </div>
              İNFO ABOUT THE ROOM
              <div className="flex items-center gap-8 mb-4">
                <div className="flex items-center gap-2">
                  <div className="text-2xl text-accent">
                    <TbArrowsMaximize />
                  </div>
                  <p></p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl text-accent">
                    <TbUsers />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* reservation */}
          <div className="w-full lg:max-w-[360px] h-max"></div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
