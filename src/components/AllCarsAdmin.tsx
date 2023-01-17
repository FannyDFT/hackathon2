import axios from "axios";
import { useEffect, useState } from "react";

export default function AllCarsAdmin() {
  const [carsData, setCarsData] = useState({
    id: "",
    brand: "",
    model: "",
    name: "",
    clutch: "",
    year: 0,
    seats: 0,
    doors: 0,
    color: "",
    price: 0,
    kilometers: 0,
    fuel: "",
    plate: "",
    avatarUrl: "",
    isAvailable: "true",
  });

  const getAllCars = async () => {
    const { data } = await axios.get("http://localhost:3000/api/cars");
    setCarsData(data);
  };

  useEffect(() => {
    getAllCars();
  }, []);

  return (
    <div className="flex flex-row w-3/4">
      <div className="w-full">
        <h1 className="border border-black">CARS</h1>
        <span className="border border-black">{carsData.brand}</span>
      </div>
      <div className="w-full place-items-center ">
        <h1 className="border border-black">STATUT</h1>
        <div className="border border-black" key={carsData.id}>
          available{carsData.isAvailable}
        </div>
      </div>
    </div>
  );
}
