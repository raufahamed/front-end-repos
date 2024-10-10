import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to="/landingpage">landingpage</NavLink>
      <NavLink to="/profileCard">profileCard</NavLink>
    </div>
  );
}

export default Navbar;
