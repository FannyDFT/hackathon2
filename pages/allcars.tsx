import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import AllCarsAdmin from "../src/components/AllCarsAdmin";

export default function AllCars() {
  const [carsData, setCarsData] = useState([
    {
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
    },
  ]);

  const getAllCars = async () => {
    const { data } = await axios.get("http://localhost:3000/api/cars");
    setCarsData(data);
  };

  useEffect(() => {
    getAllCars();
  }, []);
  return (
    <div className="">
      <div>
        <h1>All cars</h1>
        {carsData.map((car) => (
          <AllCarsAdmin key={car.id} />
        ))}
      </div>

      <Link href="/addnewcaradmin">
        <button
          type="button"
          className=" border border-black bg-blue-700 text-white h-10 w-48 rounded-lg"
        >
          Add new car
        </button>
      </Link>
    </div>
  );
}
