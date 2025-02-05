import React from "react";
import { Link } from "react-router-dom";

const Information = ({ title, className, to, LinkTitle, info }) => {
  return (
    <div className="info-content">
      <label>{title}</label>
      <span className={`desInfo ${className}`}>
        <Link className="infoLink" to={to} target="_blank">
          {LinkTitle}
        </Link>
        {info}
      </span>
    </div>
  );
};

export default Information;
