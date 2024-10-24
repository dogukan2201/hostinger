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
    href: "https://www.facebook.com/people/Bloomtalyahotel/100093439436277/",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/bloomtalyahotel/",
  },
];

const contacts = [
  {
    icon: <FaLocationArrow className="text-primary-hover" />,
    text: "Kızıltoprak, 902. Sk. No: 2 İç Kapı No:1, 07300 Muratpaşa/Antalya",
  },
  {
    icon: <FaPhone className="text-primary-hover" />,
    text: "05055343030",
  },
  {
    icon: <IoMail className="text-primary-hover" />,
    text: "reservation@bloomtalyahotel.com.tr",
  },
];

const Footer = () => {
  return (
    <footer className='bg-primary py-12 lg:py-16 font-secondary'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-10'>
          {/* Logo */}
          <div className="flex flex-col justify-center items-center lg:items-start h-full text-center lg:text-left">
            <Link href="/">
              <Image
                src="/assets/logo-white.svg"
                width={160}
                height={160}
                alt="Logo"
              />
            </Link>
            <p className="text-white mt-4">
              &copy; {new Date().getFullYear()} Bloomtalya Pansiyon Tüm Hakları
              Saklıdır
            </p>
          </div>

          {/* Sosyal Medya */}
          <div className='flex flex-col justify-center items-center lg:items-start'>
            <h2 className='text-secondary font-bold text-2xl mb-2 font-secondary'>Bizi Takip Edin</h2>
            <div className='flex gap-4 justify-center items-center'>
              {socials.map((item, index) => (
                <Link
                  href={item.href}
                  key={index}
                  className="bg-accent hover:bg-accent-hover text-white text-lg w-[38px] h-[38px] flex items-center justify-center rounded-full transition-all"
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* İletişim */}
          <div className='flex flex-col items-center lg:items-start'>
            <h2 className='text-secondary font-bold text-2xl mb-2 font-secondary'>İletişim</h2>
            <ul className='flex flex-col gap-y-4'>
              {contacts.map((contact, index) => (
                <li key={index} className="flex items-center gap-3">
                  {contact.icon}
                  <p className="text-gray-50">{contact.text}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Lokasyon */}
          <div className='flex flex-col items-center lg:items-start'>
            <h2 className='text-secondary font-bold text-2xl mb-2 font-secondary'>Biz Neredeyiz?</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12763.881628735242!2d30.719381!3d36.8910562!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c385d812af8459%3A0xe896ff1b01cc918!2sBloomtalya%20Hotel!5e0!3m2!1str!2str!4v1729680880354!5m2!1str!2str"
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
