import axios from "axios";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    <div className="flex flex-col items-center mx-20">
      <h1>All cars</h1>
      <div className="w-full flex flex-row mx-20 my-10">
        <div className="w-1/2">
          <h1 className="border border-black w-full bg-blue-700 text-white text-center">
            CARS
          </h1>
          {carsData.map((car) => (
            <div className="p-2 border border-black" key={car.brand}>
              {car.brand} {car.model}
            </div>
          ))}
        </div>
        <div className="w-1/3">
          <h1 className="border border-black bg-blue-700 text-white text-center">
            STATUS
          </h1>
          <div>
            {carsData.map((car) => (
              <div
                className="flex justify-center p-2 border border-black"
                key={car.id}
              >
                available {car.isAvailable}
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3">
          <h1 className="border border-black bg-blue-700 text-white text-center">
            SETTINGS
          </h1>
          <div>
            <div className="bg-gray-400 justify-center">
              <Link href="/updatecar">
                {carsData.map((car) => (
                  <button
                    className="flex p-2 border border-black w-full "
                    key={car.id}
                    type="button"
                  >
                    Update
                  </button>
                ))}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Link className="m-8" href="/addnewcaradmin">
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
