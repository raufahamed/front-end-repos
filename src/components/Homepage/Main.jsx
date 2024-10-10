import React from "react";
import Footer from "./Footer";
import HomePage from "./HomePage";
import RoomNavbar from "./RoomNavbar";
import { NavLink } from "react-router-dom";

function Main() {
  return (
    <div>
      <RoomNavbar />
      <HomePage />
      <Footer />
      <NavLink className="font-bold uppercase text-sm text-blue-300" to="/">
        Back to home
      </NavLink>
    </div>
  );
}

export default Main;
