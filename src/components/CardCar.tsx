import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProps {
  carBrand: string;
  carModel: string;
  price: number;
  image: string;
}

function CardCar({ carBrand, carModel, price, image }: IProps) {
  return (
    <div className="flex justify-start p-2 bg-white w-5/6 rounded-lg">
      <Link href="/detailscars">
        <div className="flex flex-col">
          <div className="text-xl font-bold">
            {carBrand} {carModel}
          </div>
          <div>or similar</div>
          <div className="text-xl font-semibold">{price}€ / day </div>
        </div>
        <div className="flex">
          {/* <Image src={image} alt="car" width={10} height={10} /> */}
        </div>
      </Link>
    </div>
  );
}

export default CardCar;
