"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";

import { FaBars } from "react-icons/fa";
import ChangeLanguage from "./ChangeLanguage";
import { useTranslations } from "next-intl";

const MobileNav = () => {
  const t = useTranslations("Navbar");
  const links = [
    {
      name: t("home"),
      path: "/",
    },
    {
      name: t("rooms"),
      path: "/rooms",
    },
    {
      name: t("gallery"),
      path: "/gallery",
    },
    {
      name: t("about"),
      path: "/about",
    },
    {
      name: t("contact"),
      path: "/contact",
    },
  ];

  return (
    <Sheet>
      <SheetTrigger className="text-2xl text-white flex items-center">
        <FaBars />
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
