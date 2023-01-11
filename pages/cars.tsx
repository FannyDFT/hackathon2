/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React from "react";

type Props = {};

export default function cars({}: Props) {
  const [cars, setCars] = React.useState<any>([]);
  const getAllCars = async () => {
    const { data } = await axios.get("http://localhost:3000/api/cars");
    setCars(data);
  };
  React.useEffect(() => {
    getAllCars();
  }, []);

  return <div>{cars.map((car: string) => {})}</div>;
}
