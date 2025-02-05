import React, { useState } from "react";
import profile from "../data/data.json";
import PageTitle from "../components/PageTitle";
import ProjectsCard from "../components/ProjectsCard";
import "../styles/Projects.css";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  const pageSize = 9;
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(profile.projects.length / pageSize);
  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };
  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };
  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <div className="projects">
      <div className="container">
        <PageTitle title="Projects" first="MY " second="Projects" />
        <div className="projects-content">
          {profile.projects
            .map((project, index) => (
              <ProjectsCard
                key={index}
                src={require(`../imgs/projects/${project.imgUrl}`)}
                alt={project.title}
                title={project.title}
                design="projectIcon"
                live={project.liveLink}
                git={project.gitLink}
                iconLive={faLink}
                iconGit={faGithub}
              />
            ))
            .slice(startIndex, endIndex)}
        </div>
        <div className="projects-controls center">
          <button onClick={prevPage} disabled={currentPage === 0}>
            &lt;
          </button>
          <span>{currentPage + 1}</span>
          <button onClick={nextPage} disabled={currentPage === totalPages - 1}>
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
