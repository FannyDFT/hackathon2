import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

export default function UpdateCar() {
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

  const fakeCarId = "e746c74a-05da-47f2-a706-6e56cb60f78d";

  const getOneCar = async () => {
    const { data } = await axios.get(
      `http://localhost:3000/api/cars/${fakeCarId}`
    );
    setCarsData(data);
  };

  useEffect(() => {
    getOneCar();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCarsData((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdate = async () => {
    await axios.put(`http://localhost:3000/api/cars/${fakeCarId}`, carsData);
  };

  const handlDelete = () => {
    axios.delete(`http://localhost:3000/api/cars/${fakeCarId}`);
  };

  return (
    <div>
      <h1 className="font-bold text-2xl place-self-center mb-20 mt-10">
        Edit Car
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
          <label className="labeladmin" htmlFor="Clutch">
            Clutch
            <input
              name="clutch"
              value={carsData.clutch}
              onChange={handleChange}
              className="admininput"
              type="text"
            />
          </label>
          <label className="labeladmin" htmlFor="Type">
            Type
            <input
              name="name"
              value={carsData.name}
              onChange={handleChange}
              className="admininput"
              type="text"
            />
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
              className="bg-blue-300"
              type="file"
              value={carsData.avatarUrl}
              onChange={handleChange}
            />
            Pics car
          </label>
          <label className="labeladmin" htmlFor="Description">
            Description
            <textarea className="border border-black h-80 w-full rounded-lg p-2" />
          </label>
        </div>
      </div>
      <div className="items-center mb-20 mt-20 flex flex-col gap-8">
        <button
          onClick={handleUpdate}
          type="button"
          className="border border-black bg-blue-700 text-white h-10 w-48 rounded-lg"
        >
          Update car
        </button>
        <button
          onClick={handlDelete}
          type="button"
          className="border border-black bg-red-600 text-white h-10 w-48 rounded-lg"
        >
          Delete car
        </button>
      </div>
    </div>
  );
}
