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
          {car.brand}
          <br />
          or similar
        </h2>
        <p className="text-blueColor">{car.price} € /day</p>
      </div>

      <Link className="w-[200px] relative h-[150px]" href="/detailscars">
        <Image fill src="/pictures/peugeot.png" alt="car" />
      </Link>
    </div>
  );
}

export default CardCar;
