import React from "react";
import Link from "next/link";
import { Car } from "@prisma/client";
import prisma from "../../prisma/client";
import { GetServerSideProps } from "next";
import Image from "next/image";

type Props = {
  car: Car;
};

function DetailsCars({ car }: Props) {
  return (
    <div className="h-screen bg-blueColor font-Quicksand">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col m-8 p-5 space-y-5 border rounded-xl bg-white h-5/6">
          <div className="flex justify-center"></div>
          <div className="flex flex-col">
            <div className="text-xl font-bold">{car.model}</div>
            <div className="text-xs">or similar</div>
            <div className="flex align-center">
              <Image src={car.avatarUrl} width={350} height={300} alt={"car"} />
            </div>
          </div>
          <div className="grid grid-cols-3 my-4">
            <div> From {car.year} / </div>
            <div> {car.doors} doors / </div>
            <div> {car.seats} seats </div>
            <div> {car.clutch} / </div>
            <div> {car.fuel} </div>
          </div>
          <ul className="list-disc list-inside">
            Your offer includes:
            <li>guarantee</li>
            <li>800 kilometres included, then 0.29€ per added kilometre</li>
          </ul>
          <ul className="list-disc list-inside text-xl font-semibold">
            Your plan:
            <li>800 km included</li>
          </ul>
          <div className="flex justify-between text-xl font-bold">
            <div>Total price:</div>
            <div> {car.price} $</div>
          </div>
          <div className="text-xs">payment details</div>
          <div className="flex justify-center">
            <Link href="/payment">
              <button type="button" className="button mt-11">
                Booking
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const car = await prisma.car.findUniqueOrThrow({
    where: {
      id: id as string,
    },
  });

  return {
    props: {
      car,
    },
  };
};

export default DetailsCars;
