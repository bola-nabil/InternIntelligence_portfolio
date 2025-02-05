import React, { useState } from "react";
import "../styles/NavBar.css";
import NavLink from "./NavLink";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <main className="header-content">
      <header className={isActive ? "header-bg" : ""}>
        <div className="logo">
          <h1 className={isActive ? "logo-bg" : ""}>bola-nabil</h1>
        </div>
        <div
          onClick={handleMenu}
          className={`menu ${isActive ? "menu-bg" : ""}`}
        >
          {isActive ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </div>
        <nav className={`${isActive ? "" : "close"}`} onClick={handleMenu}>
          <ul>
            <NavLink />
          </ul>
        </nav>
      </header>
    </main>
  );
};

export default NavBar;
