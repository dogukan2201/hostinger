import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";
import React from "react";

type Props = {};

export default function ContactPage({}: Props) {
  const t = useTranslations("Contact");
  return (
    <>
      <div>
        <Banner title={t("title")} />
        <ContactForm />
      </div>
    </>
  );
}
