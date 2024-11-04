"use client";
import Link from "next-intl/link";

// components
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import { useTranslations } from "next-intl";

const Header = () => {
  const t = useTranslations("Navbar");
  return (
    <header
      className="py-6 shadow-md sticky top-0 left-0 right-0 z-10"
      style={{ backgroundColor: "#434343" }}
    >
      <div className="container mx-auto font-primary">
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div className="flex items-center gap-5 justify-center xl:w-max">
            <Link href="/">
              <img
                src="/assets/bloomtalya.png"
                alt="Logo"
                style={{
                  width: "180px",
                }}
              />
            </Link>
            <div className="w-[1px] h-[40px] bg-gray-300"></div>
            <div className="flex gap-2">
              <h1 className="text-white font-bold space-x-1">{t("title")}</h1>
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
