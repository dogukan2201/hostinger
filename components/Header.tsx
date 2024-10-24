'use client'
import Link from "next/link";
import Image from "next/image";

import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";



// components

import MobileNav from "./MobileNav";
import Nav from "./Nav";




const Header = async () => {
  return (
    <header className="py-6 shadow-md sticky top-0 left-0 right-0 z-10 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          {/* logo & social icons */}
          <div className="flex items-center gap-5 justify-center xl:w-max">
            <Link href="/">
              <Image src="/assets/logo.svg" width={160} height={160} alt="" />
            </Link>
            {/* separator */}
            <div className="w-[1px] h-[40px] bg-gray-300"></div>
            {/* social icons */}
            <div className="flex gap-2">
              <h1 className="text-primary font-bold space-x-1">Antalyadaki Eviniz</h1>
            </div>
          </div>

          {/* mobile nav */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
          {/* desktop nav */}
          <div className="hidden xl:flex">
            <Nav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
