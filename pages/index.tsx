import CardCar from "../src/components/CardCar";
import FindACar from "../src/components/FindACar";
import MiniCaroussel from "../src/components/MiniCaroussel";
import { useAuth } from "../src/context/UserContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="bg-blueColor flex flex-col items-center justify-center">
      <FindACar />
      <MiniCaroussel />
    </div>
  );
}
