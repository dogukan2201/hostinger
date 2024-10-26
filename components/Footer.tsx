import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaLocationArrow,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const socials = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/people/Bloomtalyapansiyon/100093439436277/",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/bloomtalyapansiyon/",
  },
];

const Footer = () => {
  const t = useTranslations("Footer");

  const contacts = [
    {
      icon: <FaLocationArrow className="text-primary-hover" />,
      text: t("address"),
    },
    {
      icon: <FaPhone className="text-primary-hover" />,
      text: t("phone"),
    },
    {
      icon: <IoMail className="text-primary-hover" />,
      text: t("email"),
    },
  ];

  return (
    <footer className="bg-primary py-12 lg:py-16 font-primary">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="flex flex-col justify-center items-center lg:items-start h-full text-center lg:text-left">
            <Link href="/">
              <Image
                src="/assets/bloomtalya.png"
                width={200}
                height={200}
                alt="Logo"
              />
            </Link>
            <h1 className="text-white mt-4">
              &copy; {new Date().getFullYear()} Bloomtalya Pansiyon{" "}
              {t("rights")}
            </h1>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-secondary text-2xl mb-2 font-primary">
              {t("contact")}
            </h2>
            <ul className="flex flex-col gap-y-4">
              {contacts.map((contact, index) => (
                <li key={index} className="flex items-center gap-3">
                  {contact.icon}
                  <h1 className="text-gray-50">{contact.text}</h1>
                </li>
              ))}
            </ul>
            <div className="flex flex-col justify-center items-center lg:items-start mt-8 font-primary">
              <h2 className="text-secondary text-2xl mb-2 font-primary">
                {t("social")}
              </h2>
              <div className="flex gap-4">
                {socials.map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    className="bg-accent hover:bg-accent-hover text-white hover:text-accent text-xl w-[48px] h-[48px] flex items-center justify-center rounded-full transition-all transition-transform hover:scale-110"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start font-primary">
            <h1 className="text-secondary text-2xl mb-2 ">{t("location")}</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12763.881628735242!2d30.719381!3d36.8910562!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c385d812af8459%3A0xe896ff1b01cc918!2sBloomtalya%20pansiyon!5e0!3m2!1str!2str!4v1729680880354!5m2!1str!2str"
              width="300"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
