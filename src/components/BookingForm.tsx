import React from "react";
import Image from "next/image";

type Props = {};

function BookingForm({}: Props) {
  return (
    <div className="w-screen h-screen flex flex-col font-Quicksand bg-blueColor text-base">
      <div className="bg-white rounded-lg m-10 p-7 w-4/5">
        <div className="flex flex-col items-center mb-8">
          <h1 className="font-bold text-xl">Booking Form</h1>
          <Image
            src="/pictures/peugeot.png"
            width={200}
            height={200}
            alt="car"
          />
        </div>

        <div className="flex flex-col items-start space-y-4">
          <div className="space-x-4">
            <input
              className="inputForm w-24"
              type="text"
              placeholder="Firstname"
            />
            <input
              className="inputForm w-24"
              type="text"
              placeholder="Lastname"
            />
          </div>

          <input className="inputForm w-52" type="email" placeholder="Email" />
          <div>
            <div className="flex space-x-4">
              <Image
                src="/pictures/visa.png"
                width={40}
                height={40}
                alt="visa"
              />
              <Image
                src="/pictures/paypal.png"
                width={30}
                height={30}
                alt="paypal"
              />
            </div>

            <p className="pText">
              Payment acount
              <br />$ 171.00
            </p>
          </div>

          <div>
            <label className="labelText">Name on card:</label>
            <input className="inputForm w-52" type="text" placeholder="name" />
          </div>
          <div>
            <label className="labelText">Card number:</label>
            <input
              className="inputForm w-52"
              type="text"
              placeholder="card number"
            />
          </div>

          <div className="flex space-x-4">
            <div className="flex flex-col">
              <label className="labelText">Expire date:</label>
              <input
                className="inputForm w-20"
                type="text"
                placeholder="MM / YY"
              />
            </div>
            <div className="flex flex-col">
              <label className="labelText">Security code:</label>
              <input className="inputForm w-20" type="" placeholder="XXX" />
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
