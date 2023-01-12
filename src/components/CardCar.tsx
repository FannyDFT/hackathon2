import { Car } from "@prisma/client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

type Props = { car: Car };

function CardCar({ car }: Props) {
  return (
    <div className="flex justify-around bg-white m-5 rounded-lg p-4 font-bold">
      <div className="space-y-5">
        <h2>
          {car.brand}
          <br />
          or similar
        </h2>
        <p className="text-blueColor">{car.price} € /day</p>
      </div>
      <div>
        <Link href="/detailscars">
          <Image
            src="/pictures/peugeot.png"
            width={150}
            height={150}
            alt="car"
          />
        </Link>
      </div>
    </div>
  );
}

export default CardCar;
