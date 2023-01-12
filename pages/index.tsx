import CardCar from "../src/components/CardCar";
import FindACar from "../src/components/FindACar";
import MiniCaroussel from "../src/components/MiniCaroussel";

export default function Home() {
  return (
    <div>
      <FindACar />
      <MiniCaroussel />
      <CardCar />
    </div>
  );
}
