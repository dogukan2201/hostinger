"use client";

import Link from "next/link";
import { RoomDropdownMenu } from "@/components/Dropdown"; // Bileşeni içe aktardık

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
    name: "Fotoğraf Galerisi",
    path: "/fotograflar",
  },
  {
    name: "Hakkımızda",
    path: "/hakkımızda",
  },
  {
    name: "İletişim",
    path: "/iletisim",
  },
];

const Nav = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex flex-col lg:flex-row gap-6">
        {links.map((link, index) => (
          <li key={index}>
            {link.name === "Odalarımız" ? (
              <RoomDropdownMenu />
            ) : (
              <Link
                href={link.path}
                className="font-bold text-[13px] uppercase tracking-[3px] hover:text-accent-hover transition-all "
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
