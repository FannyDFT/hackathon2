import { Inter } from "@next/font/google";
import BookingForm from "../src/components/BookingForm";
import CardCar from "../src/components/CardCar";
import FindACar from "../src/components/FindACar";
import MiniCaroussel from "../src/components/MiniCaroussel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <FindACar />
      <MiniCaroussel />
      <CardCar />

      <BookingForm />
    </div>
  );
}
