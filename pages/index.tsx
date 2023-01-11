import { Inter } from "@next/font/google";
import FindACar from "../src/components/FindACar";
import Navbar from "../src/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>Let&apos; Go Hackathon</div>
      <FindACar />
    </div>
  );
}
