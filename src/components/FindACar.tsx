import Link from "next/link";
import React, { useState } from "react";

export default function FindACar() {
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const start = new Date(`${startDate}T${startTime}`);
    const end = new Date(`${endDate}T${endTime}`);
  };

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
      <form onSubmit={handleSubmit}>
        <div className="flex justify-around p-8 space-x-5">
          <div className="flex flex-col font-bold">
            <div className="text-base">Date of departure</div>
            <input
              type="date"
              className="text-xs"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
            />
            <input
              type="time"
              className="text-xs"
              value={startTime}
              onChange={(event) => setStartTime(event.target.value)}
            />
          </div>
          <div className="flex flex-col font-bold">
            <div>Return date</div>
            <input
              type="date"
              className="text-xs"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
            />
            <input
              type="time"
              className="text-xs"
              value={endTime}
              onChange={(event) => setEndTime(event.target.value)}
            />
          </div>
        </div>
        <Link href="/offers">
          <div className="flex justify-center pb-4">
            <button
              type="submit"
              className="flex w-1/3 justify-center rounded-lg p-2 bg-blueColor text-white"
            >
              See offers
            </button>
          </div>
        </Link>
      </form>
    </div>
  );
}
