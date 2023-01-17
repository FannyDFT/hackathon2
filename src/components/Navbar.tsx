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
      <div className="hidden lg:flex lg:items-center lg:justify-between lg:px-8">
        <Link href="/" className="flex">
          <Image
            src="/assets/logo_fleetgo.png"
            width={40}
            height={10}
            quality={100}
            alt="logo"
          />
          <div className="text-blueColor text-3xl">FleetGo</div>
        </Link>
        <div className="flex space-x-8">
          <Link href="logIn" className="text-blueColor text-xl">
            My account
          </Link>
          <Link href="/ourcars" className="text-blueColor text-xl">
            Our cars
          </Link>
          <Link href="/contactHelp" className="text-blueColor text-xl">
            Help & contact
          </Link>
        </div>
      </div>
      <div className="flex justify-between m-3 lg:hidden">
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars size={30} />
        </div>
        <div>
          <Link href="/" className="flex">
            <Image
              src="/assets/logo_fleetgo.png"
              width={40}
              height={10}
              quality={100}
              alt="logo"
            />
            <div className="text-blueColor text-3xl">FleetGo</div>
          </Link>
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
            href="/ourcars"
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
