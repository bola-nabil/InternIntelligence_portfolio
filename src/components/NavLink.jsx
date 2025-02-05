import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faFile,
  faListCheck,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import { Link, useLocation } from "react-router-dom";
const NavLink = () => {
  const linksData = [
    { id: 1, title: "Home", path: "/", linkIcon: faHouse },
    { id: 2, title: "About", path: "/about", linkIcon: faUser },
    { id: 3, title: "Resume", path: "/resume", linkIcon: faFile },
    { id: 4, title: "Projects", path: "/projects", linkIcon: faListCheck },
    { id: 5, title: "Contact", path: "/contact", linkIcon: faPhone },
  ];
  const location = useLocation();
  return (
    <>
      {linksData.map((link) => (
        <li
          key={link.id}
          className={`nav-link ${
            location.pathname === link.path ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={link.linkIcon} />
          <Link to={link.path}>{link.title}</Link>
        </li>
      ))}
    </>
  );
};

export default NavLink;
