import React from "react";

export default function FindACar() {
  return (
    <div className="flex flex-col w-full font-Quicksand space-y-3">
      <div className="flex justify-around p-4">
        <button
          type="button"
          className="border rounded-lg px-8 py-21 bg-blueColor text-white"
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
      <div className="flex justify-around p-8">
        <div className="flex flex-col font-bold">
          <div>Date of departure</div>
          <input type="date" />
          <input type="time" />
        </div>
        <div className="flex flex-col font-bold">
          <div>Return date</div>
          <input type="date" />
          <input type="time" />
        </div>
      </div>
      <div className="flex justify-center pb-4">
        <button
          type="button"
          className="flex w-1/3 justify-center border rounded-lg p-2 bg-blueColor text-white"
        >
          See offers
        </button>
      </div>
    </div>
  );
}
