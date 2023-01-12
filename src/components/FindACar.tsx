import Link from "next/link";
import React from "react";

export default function FindACar() {
  return (
    <div className="flex flex-col font-Quicksand space-y-3 bg-white w-5/6 rounded-xl my-8 py-4 lg:w-3/6">
      <div className="flex justify-around p-4">
        <button
          type="button"
          className="rounded-lg px-8 py-21 bg-blueColor text-white"
        >
          Vehicles
        </button>
        <button
          type="button"
          className="border border-black rounded-lg px-8 py-1"
        >
          Utilities
        </button>
      </div>
      <div className="flex justify-center p-4 font-bold text-lg underline underline-offset-8">
        Find a car
      </div>
      <div className="flex justify-around p-8 space-x-5">
        <div className="flex flex-col font-bold">
          <div className="text-base">Date of departure</div>
          <input type="date" className="text-xs" />
          <input type="time" className="text-xs" />
        </div>
        <div className="flex flex-col font-bold">
          <div>Return date</div>
          <input type="date" className="text-xs" />
          <input type="time" className="text-xs" />
        </div>
      </div>
      <Link href="/offers">
        <div className="flex justify-center pb-4">
          {" "}
          <button
            type="button"
            className="flex w-1/3 justify-center rounded-lg p-2 bg-blueColor text-white"
          >
            See offers
          </button>
        </div>
      </Link>
    </div>
  );
}
