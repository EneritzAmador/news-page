import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/periodico/20minutos">20 Minutos</Link>
      <Link to="/periodico/europapress">Europa Press</Link>
      <Link to="/periodico/deia">Deia</Link>
      <Link to="/periodico/elpais">El País</Link>
      <Link to="/periodico/cadenaser">Cadena Ser</Link>
      <Link to="/periodico/elmundo">El Mundo</Link>
      <Link to="/periodico/lavanguardia">La Vanguardia</Link>
    </div>
  );
};

export default NavBar;