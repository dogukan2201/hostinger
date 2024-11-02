import type { Metadata } from "next";
import { Marcellus, Urbanist } from "next/font/google";
import Head from "next/head";
import { NextIntlClientProvider } from "next-intl";


import "../globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InfoDropdown from "@/components/InfoDropdown";
import { ReactNode } from "react";

type Props = {
    children: ReactNode
    params: { locale: string }
  }
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
  description: "Bloomtalya Pansiyon",
  icons: {
    icon: "/assets/bloomtalya.png",
  },
};
async function getMessages(locale: string) {
    try {
      return (await import(`../../messages/${locale}.json`)).default
    } catch (error) {
      
    }
  }
  
  
  //function to generate the routes for all the locales
  export async function generateStaticParams() {
    return ['en', 'tr'].map((locale) => ({ locale }))
  }

async function RootLayout({
  children,params:{locale}
}:Props) {
    const messages = await getMessages(locale)
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
        <NextIntlClientProvider locale={locale} messages={messages}>
         
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
