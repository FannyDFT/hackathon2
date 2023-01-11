import React, { FC } from "react";
import { FaBars, FaUser } from "react-icons/fa";

interface Props {}

const Navbar: FC<Props> = () => {
  return (
    <div className="flex justify-between m-2">
      <div className="">
        <FaBars />
      </div>
      <div className="text-blueColor">FleetGo</div>
      <div className="">
        <FaUser />
      </div>
    </div>
  );
};

export default Navbar;
