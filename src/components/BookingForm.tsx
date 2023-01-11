import React from "react";

function BookingForm() {
  return (
    <div className="flex flex-col m-5 p-5 space-y-5 border rounded-xl">
      <div className="flex justify-center">
        <div>image</div>
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
        <button
          type="button"
          className="bg-blueColor rounded-lg text-base text-white flex items-center px-8 py-2"
        >
          Booking
        </button>
      </div>
    </div>
  );
}

export default BookingForm;
