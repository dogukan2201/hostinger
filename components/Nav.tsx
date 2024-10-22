"use client";

import Link from "next/link";

import { redirect, usePathname } from "next/navigation";

const links = [
  {
    name: "Bloomya Pansiyon",
    path: "/",
  },
  {
    name: "Odalarımız",
    path: "/",
  },
  {
    name: "Fotoğraflarımız",
    path: "/",
  },
  {
    name: "Hakkımızda",
    path: "/",
  },
  {
    name: "İletişim",
    path: "/",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex  items-center">
      <ul className="flex flex-col lg:flex-row gap-6 ">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link
                href={link.path}
                className="font-bold text-[13px] uppercase tracking-[3px] hover:text-accent-hover transition-all"
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
