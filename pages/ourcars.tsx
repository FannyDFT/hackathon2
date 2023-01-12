import { Car } from "@prisma/client";
import React, { useState } from "react";
import CardCar from "../src/components/CardCar";
import FilterCars from "../src/components/FilterCars";
import prisma from "../prisma/client";

type Props = {
  cars: Car[];
};

function OursCars({ cars }: Props) {
  const [selectedBrand, setSelectedBrand] = useState<string>("");

  return (
    <div className="bg-blueColor flex flex-col h-screen">
      <div className="h-5/6 bg-blueColor font-Quicksand font-semibold overflow-y-scroll">
        <div className="flex justify-center items-center">
          <h1 className="text-white text-xl p-8">
            Our Vehicles: {cars.length}
          </h1>
          <FilterCars
            setSelectedBrand={setSelectedBrand}
            selectedBrand={selectedBrand}
            cars={cars}
          />
        </div>

        <div className="font-Quicksand font-bold  lg:grid lg:grid-cols-3">
          {cars
            .filter((car) => {
              return selectedBrand !== "" ? car.brand === selectedBrand : true;
            })
            .map((model) => (
              <CardCar key={model.id} car={model} />
            ))}
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const cars = await prisma.car.findMany();

  return {
    props: {
      cars,
    },
  };
};

export default OursCars;
