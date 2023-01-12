import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {};

function FilterCars({}: Props) {
  const [brands, setBrand] = useState([]);

  const getAllBrand = async () => {
    const { data } = await axios.get("http://localhost:3000/api/cars");
    setBrand(data);
    console.log(brands);
  };

  useEffect(() => {
    getAllBrand();
  }, []);

  return (
    <div>
      <select className="rounded-lg p-1">
        <option>Filter</option>
        {/* {brands.map((brand) => (
          <option key={brand.id}>{brand.brand}</option>
        ))} */}
      </select>
    </div>
  );
}

export default FilterCars;
