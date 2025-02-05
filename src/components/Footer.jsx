import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  const currentYear = () => {
    let year = new Date();
    return year.getFullYear();
  };
  return (
    <div className="footer-display">
      <footer>
        <p>&copy; {currentYear()} Bola Nabil - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
