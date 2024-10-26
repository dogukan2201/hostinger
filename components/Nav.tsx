import Link from "next/link";
import { RoomDropdownMenu } from "@/components/Dropdown";
import ChangeLanguage from "./ChangeLanguage";
import { useTranslations } from "next-intl";

const Nav = () => {
  const { t } = useTranslations();

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
  return (
    <nav className="flex items-center">
      <ul className="flex flex-col justify-center items-center lg:flex-row gap-6">
        {links.map((link, index) => (
          <li key={index}>
            {link.name === "Odalarımız" ? (
              <RoomDropdownMenu />
            ) : (
              <Link
                href={link.path}
                className={`font-bold text-[13px] uppercase tracking-[3px] text-primary-hover hover:text-secondary transition-all 
                  `}
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
        <ChangeLanguage />
      </ul>
    </nav>
  );
};

export default Nav;
