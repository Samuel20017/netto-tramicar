import { Advantages } from "@components/Advantages";
import { HomeIntro } from "@components/HomeIntro";
import { Testimonials } from "@components/Testimonials";
import { Navbar } from "@components/navbar";

export function Home() {
  return (
    <div className="container h-screen w-full">
      <Navbar />
      <HomeIntro />
      <Advantages />
      <Testimonials />
    </div>
  );
}

export default Home;
