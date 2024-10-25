"use client";
import Link from "next/link";
import Image from "next/image";

// components
import MobileNav from "./MobileNav";
import Nav from "./Nav";

const Header = () => {
  return (
    <header
      className="py-6 shadow-md sticky top-0 left-0 right-0 z-10"
      style={{ backgroundColor: "#434343" }}
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div className="flex items-center gap-5 justify-center xl:w-max">
            <Link href="/">
              <Image
                src="/assets/bloomtalya.png"
                width={180}
                height={180}
                alt="Logo"
              />
            </Link>
            <div className="w-[1px] h-[40px] bg-gray-300"></div>
            <div className="flex gap-2">
              <h1 className="text-white font-bold space-x-1">
                Antalyadaki Eviniz
              </h1>
            </div>
          </div>
          <div className="xl:hidden">
            <MobileNav />
          </div>
          <div className="hidden xl:flex">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
