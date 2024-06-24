// import React from 'react'

import { NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

const Navbar = () => {
  const auth = useAuth();
  console.log("auth", auth);

  const navBarStyle = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      fontWeight: isActive ? "bold" : "normal",
      fontSize: "30px",
      marginRight: "30px",
    };
  };

  return (
    <div>
      <nav>
        <NavLink to={"/"} style={navBarStyle}>
          home
        </NavLink>
        <NavLink to={"/about"} style={navBarStyle}>
          About
        </NavLink>
        <NavLink to={"/products"} style={navBarStyle}>
          Products
        </NavLink>

        <NavLink to={"/profile"} style={navBarStyle}>
          Profile
        </NavLink>

        {!auth.user && (
          <NavLink to={"/login"} style={navBarStyle}>
            Login
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
