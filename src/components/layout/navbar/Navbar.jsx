import React from "react";
import Navlink from "@components/global/NavLink";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-center gap-8 py-4 text-lg">
      <Navlink to={"/"} text="Posts" />
      <Navlink to={"/comments"} text="Comments" />
      <Navlink to={"/todos"} text="Todos" />
      <Navlink to={"/users"} text="Users" />
    </nav>
  );
};

export default Navbar;
