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
        <h2 className="text-2xl md:text-4xl font-bold mb-4 font-secondary">
          Biz Kimiz
        </h2>
        <p className="text-base text-primary md:text-lg leading-relaxed">
          2023 yılında yeni açtığımız Bloomtalya Pansiyon siz değerli
          misafirlerimizi ağırlamaktan mutluluk duyuyoruz.
          <br />
          Yeni açılan otelimizde tüm odalarımız her şeyi son kalite ile hizmet
          vermekteyiz.
          <br />
          Antalya merkezde yer alan otelimiz, büyük cazibe ve gezi merkezlerine
          çok yakındır. Muhteşem Kale İçi’ne 15 dk. uzaklıktadır.
        </p>
      </div>
    </div>
  );
}
