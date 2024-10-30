import type { Metadata } from "next";
import { Marcellus, Urbanist } from "next/font/google";
import Head from "next/head";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoDropdown from "@/components/InfoDropdown";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Bloomtalya Pansiyon",
  description: "Bloomtalya otel",
  icons: {
    icon: "/assets/bloomtalya.png",
  },
};

async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <Head>
        <meta name="description" content="Bloomtalya Pansiyon" />
        <meta
          name="keywords"
          content="Bloomtayla Pansiyon, antalya otel, antalya otel, antalya pansiyon"
        />
      </Head>
      <body className={`${marcellus.variable} ${urbanist.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <InfoDropdown />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
export default RootLayout;
