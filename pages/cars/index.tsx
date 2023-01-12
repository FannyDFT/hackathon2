/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React from "react";

type Props = {};

export default function cars({}: Props) {
  const [cars, setCars] = React.useState<any>([]);
  const getAllCars = async () => {
    const { data } = await axios.get("http://localhost:3000/cars");
    setCars(data);
  };
  React.useEffect(() => {
    getAllCars();
  }, []);

  return (
    <div>
      {cars.map((car: any) => {
        return (
          <div>
            <h1>{car.avatarUrl}</h1>
          </div>
        );
      })}
    </div>
  );
}
