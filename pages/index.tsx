import { Inter } from "@next/font/google";
import BookingForm from "../src/components/BookingForm";
import CardCar from "../src/components/CardCar";
import FindACar from "../src/components/FindACar";
import MiniCaroussel from "../src/components/MiniCaroussel";
import LogIn from "../src/components/LogIn";
import Navbar from "../src/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <FindACar />
      <MiniCaroussel />
      <CardCar />
      <LogIn />
      <BookingForm />
    </div>
  );
}
