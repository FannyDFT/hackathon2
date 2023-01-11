import Image from "next/image";
import React, { FC, useState } from "react";
import { FaBars, FaUser } from "react-icons/fa";

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
          <Image
            src="/assets/logo_fleetgo.png"
            width={40}
            height={10}
            quality={100}
            alt="logo"
          />
          <div className="text-blueColor text-3xl">FleetGo</div>
        </div>
        <div className="">
          <FaUser size={30} />
        </div>
      </div>
      {isMenuOpen && (
        <ul>
          <li>Mon compte</li>
          <li>Nos modèles</li>
          <li>Aide & Contact</li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
