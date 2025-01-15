import Image from "next/image";
import Navbar from "./component/navbar";
import HeroSection from "./component/herosection";
import Content from "./component/content";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <br />
      <HeroSection/>
      <Content/>
    </div>
   
  );
}
