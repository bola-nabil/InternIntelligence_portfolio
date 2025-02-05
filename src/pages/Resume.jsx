import React, { useState } from "react";
import "../styles/Resume.css";
import PageTitle from "./../components/PageTitle";
import Certifcate from "../components/Certifcate";
import Skills from "../components/Skills";
import Experience from "./../components/Experience";
import profile from "../data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const Resume = () => {
  const certificates = profile.certifcates;

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 1;

  const handleNext = () => {
    if (currentIndex + itemsPerPage < certificates.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - itemsPerPage >= 0) {
      setCurrentIndex(currentIndex - itemsPerPage);
    }
  };

  const displayedCertificates = certificates.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );
  return (
    <div className="resume">
      <div className="container">
        <PageTitle title="Resume" first="MY " second="Resume" />
        <div className="resumeSection">
          <Experience
            title="Education"
            year="2019-09-20"
            company="Ahkbar El Youm Academy"
            description="Bachelor of Computer Science"
          />
          <Experience
            title="Experience"
            year="2023-10-01"
            company="Upwork"
            description="Frontend Developer"
          />

          <div className="resumeBox">
            <div className="resumeTitle">
              <h3>Frontend Skills</h3>
            </div>
            <div className="resumeSkills">
              {profile.skills.frontend.map((skill) => (
                <Skills
                  key={skill.id}
                  title={skill.skillsTitle}
                  status={skill.skillsCase}
                  style={skill.skillsCase}
                />
              ))}
            </div>
          </div>

          <div className="resumeBox">
            <div className="resumeTitle">
              <h3>Concepts Skills</h3>
            </div>
            <div className="resumeSkills">
              {profile.skills.concepts.map((skill) => (
                <Skills
                  key={skill.id}
                  title={skill.skillsTitle}
                  status={skill.skillsCase}
                  style={skill.skillsCase}
                />
              ))}
            </div>
          </div>

          <div className="resumeBox">
            <div className="resumeTitle">
              <h3>Professional Skills</h3>
            </div>
            <div className="resumeSkills">
              {profile.skills.professional.map((skill) => (
                <Skills
                  key={skill.id}
                  title={skill.skillsTitle}
                  status={skill.skillsCase}
                  style={skill.skillsCase}
                />
              ))}
            </div>
          </div>
          <div className="resumeBox">
            <div className="resumeTitle">
              <h3>Knowledge</h3>
            </div>
            {profile.skills.knowledges.map((skill) => (
              <div className="knowskills" key={skill.id}>
                <FontAwesomeIcon className="knowIcon" icon={faBolt} />
                <p>{skill.skillsTitle}</p>
              </div>
            ))}
          </div>
        </div>
        <PageTitle title="Certificates" first="MY " second="Certificates" />
        <div className="certificates">
          <div className="certificate">
            {displayedCertificates.map((img) => (
              <Certifcate
                key={img.id}
                src={require(`../imgs/certificate/${img.image}`)}
                alt={img.title}
              />
            ))}
          </div>
          <div className="icons">
            <div onClick={handlePrevious}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </div>
            <div onClick={handleNext}>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
