import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ProjectsCard = ({
  src,
  alt,
  title,
  live,
  git,
  iconLive,
  iconGit,
  design,
}) => {
  return (
    <div className="projects-card">
      <div className="projects-img">
        <img src={src} alt={alt} />
      </div>
      <div className="projects-title">
        <h1>{title}</h1>
      </div>
      <div className="projects-icons center">
        <Link to={live} target="_blank">
          <div className={design}>
            <FontAwesomeIcon icon={iconLive} />
          </div>
        </Link>
        <Link to={git}>
          <div className="projectIcon">
            <FontAwesomeIcon icon={iconGit} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsCard;
