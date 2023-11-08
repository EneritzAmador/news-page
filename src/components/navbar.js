import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="NavBar">
      <div
        className={`MenuIcon ${menuOpen ? "Open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="Bar"></div>
        <div className="Bar"></div>
        <div className="Bar"></div>
      </div>
      <div className={`Links ${menuOpen ? "Open" : ""}`}>
        <Link to="/periodico/20minutos" onClick={closeMenu}>20 Minutos</Link>
        <Link to="/periodico/europapress" onClick={closeMenu}>Europa Press</Link>
        <Link to="/periodico/deia" onClick={closeMenu}>Deia</Link>
        <Link to="/periodico/elpais" onClick={closeMenu}>El País</Link>
        <Link to="/periodico/cadenaser" onClick={closeMenu}>Cadena Ser</Link>
        <Link to="/periodico/elmundo" onClick={closeMenu}>El Mundo</Link>
        <Link to="/periodico/lavanguardia" onClick={closeMenu}>La Vanguardia</Link>
      </div>
    </div>
  );
};

export default NavBar;

