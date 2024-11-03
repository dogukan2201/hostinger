"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "../ui/dropdown-menu";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { Headset } from "lucide-react";

type Props = {};

export default function InfoDropdown({}: Props) {
  const t = useTranslations("infoDropdown");

  return (
    <div className="fixed bottom-9 right-9">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center justify-center w-12 h-12 bg-primary-hover text-primary border-primary border-2 rounded-full shadow-lg dropdown-trigger">
          <Headset />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 w-48 bg-white shadow-lg rounded-lg p-4">
          <DropdownMenuLabel>
            <span className="text-primary-hover font-bold">{t("title")}</span> |{" "}
            {t("subtitle")}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="hover:bg-green-500 hover:text-white transition duration-200">
            <FaWhatsapp className="text-green-500" />
            <a
              href="https://wa.me/+905055343030"
              className="text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("whatsapp")}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FaEnvelope className="text-red-400" />
            <a href="mailto:reservation@bloomtalyapansiyon.com.tr">
              {t("email")}
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <FaPhone size={5} className="text-blue-500" />
            <a href="tel:+905055343030">{t("call")}</a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
