import { Car } from "@prisma/client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = { car: Car };

function CardCar({ car }: Props) {
  return (
    <div className="flex justify-between items-center align-middle h-[182px] bg-white m-5 rounded-lg p-4 font-bold">
      <div className="space-y-5">
        <h2>
          {car.brand} {car.model}
          <br />
          {car.model}
        </h2>
        <p className="text-blueColor">{car.price} € /day</p>
      </div>

      <Link className="w-[200px] relative h-[150px]" href={`/cars/${car.id}`}>
        <Image fill src={car.avatarUrl} alt="car" />
      </Link>
    </div>
  );
}

export default CardCar;
