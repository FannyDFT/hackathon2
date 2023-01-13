import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

export default function AddNewCar() {
  const [file, setFile] = useState<File | null>(null);
  const [carsData, setCarsData] = useState({
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
  });

  const clutchChoice = ["MANUAL", "AUTOMATIC"];

  const typeChoice = [
    "SUV",
    "COUPE",
    "SEDAN",
    "VAN",
    "CONVERTIBLE",
    "SUPER_CAR",
  ];

  const handleSubmit = () => {
    const formData = new FormData();

    formData.append("files", file as File);

    for (const key in carsData) {
      formData.append(key, carsData[key as keyof typeof carsData].toString());
    }

    axios.post("http://localhost:3000/api/cars", formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCarsData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col m-3">
      <h1 className="font-bold text-2xl place-self-center mb-20 mt-10">
        Add new car
      </h1>
      <div className="grid grid-cols-2 gap-0 ">
        <div className="flex flex-col gap-4 ml-20">
          <label className="labeladmin" htmlFor="Brand">
            Brand
            <input
              name="brand"
              value={carsData.brand}
              onChange={handleChange}
              className="admininput"
              type="text"
            />
          </label>
          <label className="labeladmin" htmlFor="Model">
            Model
            <input
              name="model"
              value={carsData.model}
              onChange={handleChange}
              className="admininput"
              type="text"
            />
          </label>
          <label className="labeladmin" htmlFor="clutch">
            Clutch
            <select
              onChange={(e) =>
                setCarsData((state) => ({
                  ...state,
                  clutch: e.target.value,
                }))
              }
              className="border border-black w-2/3 h-9 rounded-md p-2"
              name="clutch"
              id={carsData.clutch}
            >
              <option value="">---</option>
              {clutchChoice.map((clutch) => (
                <option key={clutch} value={clutch}>
                  {clutch}
                </option>
              ))}
            </select>
          </label>
          <label className="labeladmin" htmlFor="Type">
            Type
            <select
              onChange={(e) =>
                setCarsData((state) => ({
                  ...state,
                  name: e.target.value,
                }))
              }
              className="border border-black w-2/3 h-9 rounded-md p-2"
              name="clutch"
              id={carsData.clutch}
            >
              <option value="">---</option>
              {typeChoice.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <label className="labeladmin" htmlFor="Year">
            Year
            <input
              name="year"
              value={carsData.year}
              onChange={handleChange}
              className="admininput"
              type="text"
            />
          </label>
          <label className="labeladmin" htmlFor="Seats">
            Seats
            <input
              name="seats"
              value={carsData.seats}
              onChange={handleChange}
              className="admininput"
              type="text"
            />
          </label>
          <label className="labeladmin" htmlFor="Doors">
            Doors
            <input
              name="doors"
              value={carsData.doors}
              onChange={handleChange}
              className="admininput"
              type="text"
            />
          </label>
          <label className="labeladmin" htmlFor="Color">
            Color
            <input
              name="color"
              value={carsData.color}
              onChange={handleChange}
              className="admininput"
              type="text"
            />
          </label>
          <label className="labeladmin" htmlFor="Price">
            Price
            <input
              name="price"
              value={carsData.price}
              onChange={handleChange}
              className="admininput"
              type="text"
            />
          </label>
          <label className="labeladmin" htmlFor="Kilometers">
            Kilometers
            <input
              name="kilometers"
              value={carsData.kilometers}
              onChange={handleChange}
              className="admininput"
              type="text"
            />
          </label>
          <label className="labeladmin" htmlFor="Fuel">
            Fuel
            <input
              name="fuel"
              value={carsData.fuel}
              onChange={handleChange}
              className="admininput"
              type="text"
            />
          </label>
          <label className="labeladmin" htmlFor="Plate">
            Plate
            <input
              name="plate"
              value={carsData.plate}
              onChange={handleChange}
              className="admininput"
              type="text"
            />
          </label>
        </div>

        <div className="mr-20">
          <label htmlFor="pics" className="flex flex-col mb-40 mt-5">
            <input
              type="file"
              name="avatarUrl"
              value={carsData.avatarUrl}
              onChange={(e) => setFile(e.target.files![0])}
            />
            Pics car
          </label>
          <label className="labeladmin" htmlFor="Description">
            Description
            <textarea className="border border-black h-80 w-full rounded-lg p-2" />
          </label>
        </div>
      </div>

      <div className="place-self-center mb-20 mt-20">
        <button
          onClick={handleSubmit}
          type="button"
          className="border border-black bg-blue-700 text-white h-10 w-48 rounded-lg"
        >
          Save car
        </button>
      </div>
    </div>
  );
}
