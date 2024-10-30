"use client";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";

const Home = () => {
  return (
    <main>
      <Hero />
      <Slider />
      <Faq />
      <Features />
    </main>
  );
};

export default Home;
