"use client";
import Banner from "@/components/Banner";
import React from "react";
import Head from "next/head";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col">
      <head>
        <title>Bloomtalya Pansiyon | Hakkımızda</title>
      </head>
      <Banner title="Hakkımızda" />
      <div className="w-fulll px-4 py-8 text-center flex flex-col justify-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 font-primary">
          》Biz Kimiz《
        </h2>
        <p className="text-base text-primary md:text-lg leading-relaxed">
          2023 yılında hizmete açtığımız Bloomtalya Pansiyon,
          <br /> Antalya’nın en güzel konumlarından birinde siz değerli
          misafirlerimizi ağırlamaktan mutluluk duyuyor.
          <br /> Modern mimariyle tasarlanan ve her detayı özenle düşünülmüş
          odalarımız,
          <br /> en yüksek kalite standartlarıyla donatılmış olup, rahatınız
          için her ayrıntı titizlikle sunulmaktadır.
          <br />
          Antalya’nın merkezinde yer alan otelimiz, <br />
          büyüleyici Kaleiçi bölgesi de dahil olmak üzere şehrin önemli cazibe
          merkezlerine kolay erişim sağlar.
          <br /> Tarihi Kaleiçi’ne yalnızca 15 dakikalık bir yürüyüş mesafesinde
          olan Bloomtalya Pansiyon, <br />
          Antalya’nın sunduğu güzellikleri keşfetmeniz için ideal bir başlangıç
          noktasıdır.
        </p>
      </div>
    </div>
  );
}
