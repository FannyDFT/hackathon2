import { Car } from "@prisma/client";
import axios from "axios";
import React, { ChangeEvent, useEffect, useState } from "react";

type Props = {
  cars: Car[];
  setSelectedBrand: (brand: string) => void;
  selectedBrand: string;
};

function FilterCars({ cars, setSelectedBrand, selectedBrand }: Props) {
  const brands = [...new Set(cars.map((car) => car.brand))];

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(e.target.value);
  };

  return (
    <div>
      <select
        onChange={handleChange}
        value={selectedBrand}
        className="rounded-lg p-1"
      >
        <option value="">Select a brand</option>
        {brands.map((brand) => {
          return (
            <option key={brand} value={brand}>
              {brand}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default FilterCars;
