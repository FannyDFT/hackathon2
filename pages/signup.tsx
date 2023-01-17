import Link from "next/link";
import React from "react";

function signup() {
  return (
    <div className="h-screen bg-blueColor font-Quicksand flex flex-col items-center">
      <div className="bg-white rounded-xl flex flex-col w-4/5 mt-14 pb-8 lg:w-2/5">
        <div className="flex justify-center mt-16 pb-8 text-xl font-bold">
          Sign up
        </div>
        <form className="flex flex-col justify-center items-center space-y-4">
          <input
            type="text"
            className="w-4/6 rounded-lg p-2 bg-[#D9D9D9] text-black"
            placeholder="firstname"
          />
          <input
            type="text"
            className="w-4/6 rounded-lg p-2 bg-[#D9D9D9] text-black"
            placeholder="lastname"
          />
          <input
            type="email"
            className="w-4/6 rounded-lg p-2 bg-[#D9D9D9] text-black"
            placeholder="example@example.com"
          />
          <input
            type="password"
            className="w-4/6 rounded-lg p-2 bg-[#D9D9D9] text-black"
            placeholder="password"
          />
          <input
            type="password"
            className="w-4/6 rounded-lg p-2 bg-[#D9D9D9] text-black"
            placeholder="confirm your password"
          />
        </form>
        <Link href="/myAccount" className="flex justify-center pt-8">
          <button
            type="button"
            className="bg-blueColor rounded-lg text-base text-white flex justify-center items-center px-4 py-2"
          >
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default signup;
