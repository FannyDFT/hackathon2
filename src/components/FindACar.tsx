import React from "react";

export default function FindACar() {
  return (
    <div className="flex flex-col w-full font-Quicksand">
      <div className="flex justify-around">
        <button type="button" className="border m-2">
          Vehicles
        </button>
        <button type="button" className="border m-2">
          Utilities
        </button>
      </div>
      <div className="flex justify-center">Find a car</div>
      <div className="flex justify-around">
        <div>Date of departure</div>
        <div>Return date</div>
      </div>
      <button type="button" className="flex justify-center border">
        See offers
      </button>
    </div>
  );
}
