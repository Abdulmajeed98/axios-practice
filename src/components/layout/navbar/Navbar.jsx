import React from "react";
import Navlink from "../../global/NavLink";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center py-4 gap-8 text-lg">
      <Navlink to={"/"} text="Posts" />
      <Navlink to={"/comments"} text="Comments" />
      <Navlink to={"/todos"} text="Todos" />
      <Navlink to={"/users"} text="Users" />
    </nav>
  );
};

export default Navbar;
