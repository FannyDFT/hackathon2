import React from "react";
import Image from "next/image";

type Props = {};

function BookingForm({}: Props) {
  return (
    <div className="w-screen flex flex-col font-Quicksand bg-blueColor text-base lg:items-center">
      <div className="bg-white h-auto rounded-lg m-10 p-7 w-4/5 lg:flex lg:flex-col lg:items-center lg:w-3/5">
        <div className="flex flex-col items-center mb-8">
          <h1 className="font-bold text-xl">Booking Form</h1>
          <Image
            src="/pictures/peugeot.png"
            width={200}
            height={200}
            alt="car"
          />
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="space-x-4 lg:flex">
            <input
              className="inputForm w-24 lg:w-4/6"
              type="text"
              placeholder="Firstname"
            />
            <input
              className="inputForm w-24 lg:w-4/6"
              type="text"
              placeholder="Lastname"
            />
          </div>

          <input
            className="inputForm w-52 lg:w-full"
            type="email"
            placeholder="Email"
          />
          <div>
            <div className="flex space-x-4">
              <Image
                src="/pictures/visa.png"
                width={70}
                height={40}
                alt="visa"
              />
              <Image
                src="/pictures/paypal.png"
                width={70}
                height={30}
                alt="paypal"
              />
            </div>

            <p className="pText pb-4">
              Payment acount
              <br />$ 171.00
            </p>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <label className="labelText">Name on card:</label>
            <input className="inputForm w-52" type="text" placeholder="name" />
            <label className="labelText">Card number:</label>
            <input
              className="inputForm w-52"
              type="text"
              placeholder="card number"
            />
            <div className="flex space-x-4 pt-4">
              <div className="flex flex-col space-y-2">
                <label className="labelText">Expire date:</label>
                <input
                  className="inputForm w-24"
                  type="text"
                  placeholder="MM / YY"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="labelText">Security code:</label>
                <input className="inputForm w-24" type="" placeholder="XXX" />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center p-5">
            <button type="button" className="button">
              Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
