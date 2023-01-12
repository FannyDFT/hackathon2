import { Car } from "@prisma/client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardCar from "./CardCar";
import FilterCars from "./FilterCars";

type Props = {};

function CardList({}: Props) {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("");

  const getAllCars = async () => {
    const { data } = await axios.get("http://localhost:3000/api/cars");
    setCars(data);
  };

  useEffect(() => {
    getAllCars();
  }, []);

  return (
    <div className="h-5/6 bg-blueColor font-Quicksand font-semibold overflow-y-scroll">
      <div className="flex justify-center items-center">
        <h1 className="text-white text-xl p-8">Our Vehicles: {cars.length}</h1>
        <FilterCars
          setSelectedBrand={setSelectedBrand}
          selectedBrand={selectedBrand}
          cars={cars}
        />
      </div>

      <div className="font-Quicksand font-bold">
        {cars
          .filter((car) => {
            return selectedBrand !== "" ? car.brand === selectedBrand : true;
          })
          .map((model) => (
            <CardCar key={model.id} car={model} />
          ))}
      </div>
    </div>
  );
}

export default CardList;
