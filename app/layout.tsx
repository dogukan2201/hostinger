
import type { Metadata } from "next";
import { Marcellus, Urbanist } from "next/font/google";
import Head from "next/head";

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
    icon: "/assets/heading-icon.svg",
  },
};

 function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="description" content="Bloomtalya otel" />
        <meta name="keywords" content="Bloomtayla Pansiyon, antalya otel, antalya otel, antalya pansiyon" />
      </Head>
      <body className={`${marcellus.variable} ${urbanist.variable}`}>
        <Header />
        {children}
        <InfoDropdown/>
        <Footer />
      </body>
    </html>
  );
}
export default RootLayout;