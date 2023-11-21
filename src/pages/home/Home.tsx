import { Advantages } from "@components/Advantages";
import { HomeIntro } from "@components/HomeIntro";
import { HowDoIt } from "@components/HowDoIt";
import { LogosSection } from "@components/LogosSection";
import { Requirements } from "@components/Requirements";
import { Testimonials } from "@components/Testimonials";
import { WhoDo } from "@components/WhoDo";
import { Navbar } from "@components/navbar";

export function Home() {
  return (
    <div className="container h-screen w-full">
      <Navbar />
      <HomeIntro />
      <Advantages />
      <Testimonials />
      <HowDoIt />
      <Requirements />
      <WhoDo />
      <LogosSection />
    </div>
  );
}

export default Home;
