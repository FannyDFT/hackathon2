import React from "react";
import Image from "next/image";

type Props = {};

function BookingForm({}: Props) {
  return (
    <div className="w-screen h-screen flex flex-col bg-black">
      <div className="">
        <h1 className="">Booking Form</h1>
        <Image src="/pictures/peugeot.png" width={100} height={100} alt="car" />
        <input type="text" placeholder="Firstname" />
        <input type="text" placeholder="Lastname" />
        <Image src="/pictures/visa.png" width={50} height={50} alt="visa" />
        <p className="bg-blue-600">Payment acount</p>
      </div>
    </div>
  );
}

export default BookingForm;
