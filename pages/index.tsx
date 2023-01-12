import { Inter } from "@next/font/google";
import CardCar from "../src/components/CardCar";
import FindACar from "../src/components/FindACar";
import MiniCaroussel from "../src/components/MiniCaroussel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-blueColor flex flex-col items-center justify-center">
      <FindACar />
      <MiniCaroussel />
    </div>
  );
}
