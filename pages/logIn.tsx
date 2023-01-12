import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { useAuth } from "../src/context/UserContext";

type Props = {};

function LogIn({}: Props) {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const { signIn } = useAuth();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="h-screen bg-blueColor font-Quicksand flex flex-col items-center">
      <div className="bg-white rounded-xl flex flex-col w-4/5 mt-14 lg:w-2/5">
        <div className="flex justify-center mt-16 pb-8 text-xl font-bold">
          Log in
        </div>
        <form className="flex flex-col justify-center items-center space-y-4">
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="w-4/6 rounded-lg p-2 bg-[#D9D9D9] text-black"
            placeholder="example@example.com"
          />
          <input
            type="password"
            name="password"
            value={formState.password}
            onChange={handleChange}
            className="w-4/6 rounded-lg p-2 bg-[#D9D9D9] text-black"
            placeholder="password"
          />
        </form>
        <div className="flex flex-col items-center justify-center space-y-8 py-8">
          <Link href="/myAccount">
            <button
              type="button"
              onClick={() => signIn(formState)}
              className="bg-blueColor rounded-lg text-base text-white flex justify-center items-center px-4 py-2"
            >
              Log in
            </button>
          </Link>
          <Link href="/signup">
            <hr className="border-1 border-blueColor mb-8" />
            <button
              type="button"
              className="bg-blueColor rounded-lg text-base text-white flex justify-center items-center px-4 py-2"
            >
              Create an account
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
