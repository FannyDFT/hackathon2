import { Car } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardCar from "../src/components/CardCar";

function Offers() {
  const [cars, setCars] = useState<Car[]>([]);

  const getAllCars = async () => {
    const { data } = await axios.get("http://localhost:3000/api/cars");
    setCars(data);
  };

  useEffect(() => {
    getAllCars();
  }, []);

  return (
    <div className="bg-blueColor font-Quicksand space-y-5 flex flex-col items-center pt-8">
      <div className="text-white text-xl">Offers availables:</div>
      {cars.map((model) => (
        <CardCar
          key={model.id}
          carBrand={model.brand}
          carModel={model.model}
          price={model.price}
          image={model.avatarUrl}
        />
      ))}
    </div>
  );
}

export default Offers;
