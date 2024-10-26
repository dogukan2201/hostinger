import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import React from "react";

type Props = {};

export default function ContactPage({}: Props) {
  return (
    <>
      <div>
        <Banner title="İletişim" />
        <ContactForm />
      </div>
    </>
  );
}
