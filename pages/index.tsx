import { Inter } from "@next/font/google";
import FindACar from "../src/components/FindACar";


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
