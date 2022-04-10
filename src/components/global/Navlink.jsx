import React from "react";
import { NavLink } from "react-router-dom";
const commonClasses =
  "px-4 py-2 hover:bg-rose-500 transition-all duration-300 rounded-md";
const Navlink = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive
          ? `${commonClasses} bg-rose-500`
          : `${commonClasses} bg-transparent`
      }
    >
      {text}
    </NavLink>
  );
};

export default Navlink;
