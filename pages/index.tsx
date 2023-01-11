import { Inter } from "@next/font/google";
import CardCar from "../src/components/CardCar";
import FindACar from "../src/components/FindACar";
import LogIn from "../src/components/LogIn";
import Navbar from "../src/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>Let&apos; Go Hackathon</div>
      <FindACar />
      <CardCar />
      <LogIn />
    </div>
  );
}
