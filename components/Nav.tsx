import { RoomDropdownMenu } from "@/components/Dropdown";
import ChangeLanguage from "./ChangeLanguage";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";

const Nav = () => {
  const t = useTranslations("Navbar");

  const links = [
    {
      name: t("home"),
      path: "/",
    },
    {
      name: t("roomss"),
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
    <nav className="flex items-center">
      <ul className="flex flex-col justify-center items-center lg:flex-row gap-6">
        {links.map((link, index) => (
          <li key={index}>
            {link.name === t("roomss") ? (
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
