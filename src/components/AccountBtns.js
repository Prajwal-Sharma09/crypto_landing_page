import React from "react";
import { Link } from "react-router-dom";

const AccountBtns = () => {
  return (
    <div className="flex items-center font-medium">
      {/* link btn */}
      <Link className="hover:text-blue transition" to="#">
        Login
      </Link>
      {/* separator */}
      <span className="mx-6 text-white/20 font-thin">|</span>
      {/* register btn */}
      <button className="btn h-[52px] text-base px-8">Register</button>
    </div>
  );
};

export default AccountBtns;
