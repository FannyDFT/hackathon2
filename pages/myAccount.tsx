import Image from "next/image";
import React from "react";

type Props = {};

function myAccount({}: Props) {
  return (
    <div className="w-screen h-screen bg-blueColor flex flex-col items-center space-y-6 font-Quicksand">
      <Image
        src="/assets/avatar.png"
        width={100}
        height={100}
        alt="avatar"
        className="rounded-full m-6"
      />
      <div className="flex flex-col items-center bg-white rounded-lg h-2/3 w-4/5 font-semibold font-Quicksand text-blackColor  lg:w-2/5">
        <h1 className="m-10">My account</h1>
        <div className="space-y-4 w-4/5">
          <p className="border border-1 border-blackColor py-4 px-10 rounded-lg bg-blueColor text-white">
            My reservations
          </p>
          <div className="border border-1 border-blackColor py-4 px-10 rounded-lg">
            <p className="my-5">My informations:</p>
            <div className="space-y-6 mb-6">
              <input
                type="text"
                placeholder="Lastname"
                className="inputProfil"
              />
              <input
                type="text"
                placeholder="Firstname"
                className="inputProfil"
              />
              <input
                type="number"
                placeholder="Phone number"
                className="inputProfil my-7"
              />
            </div>

            <label>Date of Birth</label>
            <hr className="border-blackColor w-24 mb-3" />

            <input type="date" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default myAccount;
