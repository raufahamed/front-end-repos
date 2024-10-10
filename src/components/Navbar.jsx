import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex flex-col  h-screen w-screen items-center justify-center uppercase bg-blue-100  text-blue-400  font-bold">
      <NavLink to="/landingpage">landingpage</NavLink>
      <NavLink to="/profileCard">profileCard</NavLink>
    </div>
  );
}

export default Navbar;
