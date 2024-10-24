import Faq from "@/components/faq";
import Hero from "@/components/Hero";
import { Photoslide } from "@/components/Photoslide";

import Rooms from "@/components/Rooms";

const Home = () => {
  return (
    <main>
      <Hero />
      <Faq />
      <Photoslide />
      <Rooms />
    </main>
  );
};

export default Home;
