import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Slider from "@/components/Slider";

const Home = () => {
  return (
    <main>
      <Hero />
      <Slider />
      <Faq />
      <Features />
      <Rooms />
    </main>
  );
};

export default Home;
