import { Inter } from "@next/font/google";
import FindACar from "../src/components/FindACar";
import MiniCaroussel from "../src/components/MiniCaroussel";
import Navbar from "../src/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <FindACar />
      <MiniCaroussel />
    </div>
  );
}
