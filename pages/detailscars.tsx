import React from "react";
import Image from "next/image";
import Link from "next/link";

function BookingForm() {
  return (
    <div className="h-screen bg-blueColor font-Quicksand">
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col m-8 p-5 space-y-5 border rounded-xl bg-white h-5/6">
          <div className="flex justify-center">
            <Image
              src="/pictures/peugeot.png"
              width={200}
              height={200}
              alt="peugeot"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-xl font-bold">car model</div>
            <div className="text-xs">or similar</div>
          </div>
          <div className="flex items-start">
            <div>doors /</div>
            <div>&ensp;seats /</div>
            <div>&ensp;manual /</div>
            <div>&ensp;AC</div>
          </div>
          <ul className="list-disc list-inside">
            Your offer includes:
            <li>guarantee</li>
            <li>500 kilometres included, then 0.29€ per added kilometre</li>
          </ul>
          <ul className="list-disc list-inside text-xl font-semibold">
            Your plan:
            <li>500 km included</li>
          </ul>
          <div className="flex justify-between text-xl font-bold">
            <div>Total</div>
            <div>Price</div>
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

export default BookingForm;
