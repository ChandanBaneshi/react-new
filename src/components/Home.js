import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="/Features">Features</NavLink> 
      <NavLink to="/Pricing">Pricing</NavLink>
      <NavLink to="/Import">Import</NavLink>
      <NavLink to="/About">About</NavLink>
    </div>
  );
};

export default Home;
