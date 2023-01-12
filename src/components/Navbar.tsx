import Image from "next/image";
import React, { FC, useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";
import Link from "next/link";
import { slide as Menu } from "react-burger-menu";

interface Props {}

const Navbar: FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-Quicksand">
      <div className="flex justify-between m-3">
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars size={30} />
        </div>
        <div className="flex">
          <Link href="/">
            <Image
              src="/assets/logo_fleetgo.png"
              width={40}
              height={10}
              quality={100}
              alt="logo"
            />
          </Link>
          <div className="text-blueColor text-3xl">FleetGo</div>
        </div>
        <Link href="/logIn">
          <div className="">
            <FaUser size={30} />
          </div>
        </Link>
      </div>
      {isMenuOpen && (

        <Menu
          className="bg-white text-lg text-blueColor font-bold p-8"
          width={200}
        >
          <Link
            href="/"
            className="py-5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Home
          </Link>
          <Link
            href="/logIn"
            className="py-5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            My account
          </Link>
          <Link
            href="/cars/ours"
            className="py-5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Our cars
          </Link>
          <Link
            href="/contactHelp"
            className="py-5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Help & Contact
          </Link>
        </Menu>

      )}
    </div>
  );
};

export default Navbar;
