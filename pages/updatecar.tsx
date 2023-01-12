import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";

export default function UpdateCar() {
  const [carsData, setCarsData] = useState({
    Brand: "",
    Model: "",
    Type: "",
    Clutch: "",
    Year: "",
    Seats: "",
    Doors: "",
    Color: "",
    Price: "",
    Kilometers: "",
    Fuel: "",
    Plate: "",
  });

  const fakeCarId = "22499a87-e9bc-4fb4-958f-69dec7f961cc";

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
      [e.target.value]: e.target.value,
    }));
  };

  const handleUpdate = () => {
    axios.put(`http://localhost:3000/api/cars/${fakeCarId}`, carsData);
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
              name="Brand"
              value={carsData.Brand}
              onChange={handleChange}
              className="admininput"
              type="text"
              required
            />
          </label>
          <label className="labeladmin" htmlFor="Model">
            Model
            <input
              name="Model"
              value={carsData.Model}
              onChange={handleChange}
              className="admininput"
              type="text"
              required
            />
          </label>
          <label className="labeladmin" htmlFor="Clutch">
            Clutch
            <input
              name="Clutch"
              value={carsData.Clutch}
              onChange={handleChange}
              className="admininput"
              type="text"
              required
            />
          </label>
          <label className="labeladmin" htmlFor="Type">
            Type
            <input
              name="Type"
              value={carsData.Type}
              onChange={handleChange}
              className="admininput"
              type="text"
              required
            />
          </label>
          <label className="labeladmin" htmlFor="Year">
            Year
            <input
              name="Year"
              value={carsData.Year}
              onChange={handleChange}
              className="admininput"
              type="text"
              required
            />
          </label>
          <label className="labeladmin" htmlFor="Seats">
            Seats
            <input
              name="Seats"
              value={carsData.Seats}
              onChange={handleChange}
              className="admininput"
              type="text"
              required
            />
          </label>
          <label className="labeladmin" htmlFor="Doors">
            Doors
            <input
              name="Doors"
              value={carsData.Doors}
              onChange={handleChange}
              className="admininput"
              type="text"
              required
            />
          </label>
          <label className="labeladmin" htmlFor="Color">
            Color
            <input
              name="Color"
              value={carsData.Color}
              onChange={handleChange}
              className="admininput"
              type="text"
              required
            />
          </label>
          <label className="labeladmin" htmlFor="Price">
            Price
            <input
              name="Price"
              value={carsData.Price}
              onChange={handleChange}
              className="admininput"
              type="text"
              required
            />
          </label>
          <label className="labeladmin" htmlFor="Kilometers">
            Kilometers
            <input
              name="Kilometers"
              value={carsData.Kilometers}
              onChange={handleChange}
              className="admininput"
              type="text"
              required
            />
          </label>
          <label className="labeladmin" htmlFor="Fuel">
            Fuel
            <input
              name="Fuel"
              value={carsData.Fuel}
              onChange={handleChange}
              className="admininput"
              type="text"
              required
            />
          </label>
          <label className="labeladmin" htmlFor="Plate">
            Plate
            <input
              name="Plate"
              value={carsData.Plate}
              onChange={handleChange}
              className="admininput"
              type="text"
              required
            />
          </label>
        </div>
        <div className="mr-20">
          <label htmlFor="pics" className="flex flex-col mb-40 mt-5">
            <input className="bg-blue-300" type="file" />
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
