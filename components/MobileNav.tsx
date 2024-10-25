"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";

import { FaBars } from "react-icons/fa";
import ChangeLanguage from "./ChangeLanguage";

const links = [
  {
    name: "Bloomtalya Pansiyon",
    path: "/",
  },
  {
    name: "Odalarımız",
    path: "/rooms",
  },
  {
    name: "Fotoğraflarımız",
    path: "/gallery",
  },
  {
    name: "Hakkımızda",
    path: "/about",
  },
  {
    name: "İletişim",
    path: "/contact",
  },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="text-2xl text-white flex items-center">
        <FaBars className="" />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="flex justify-center text-primary-hover items-center"
      >
        <nav className="flex flex-col gap-8 text-center">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className="text-2xl font-primary text-primary hover:text-accent-hover transition-all"
              >
                {link.name}
              </Link>
            );
          })}
          <ChangeLanguage />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
