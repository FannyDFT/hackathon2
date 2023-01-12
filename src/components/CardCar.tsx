import Link from "next/link";
import React from "react";

function CardCar() {
  return (
    <div className="flex justify-start p-2 bg-white w-5/6 rounded-lg">
      <Link href="/detailscars">
        <div className="flex flex-col">
          <div className="text-xl font-bold">car model</div>
          <div>or similar</div>
          <div className="text-xl font-semibold">price € / day </div>
        </div>
        <div className="flex">
          <div>image</div>
        </div>
      </Link>
    </div>
  );
}

export default CardCar;
