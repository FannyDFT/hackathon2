import { Inter } from "@next/font/google";
import BookingForm from "../src/components/BookingForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      Let&apos; Go Hackathon
      <BookingForm />
    </div>
  );
}
