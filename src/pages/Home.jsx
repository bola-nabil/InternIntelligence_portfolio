import React from "react";
import "../styles/Home.css";
import profile from "../data/data.json";
import HomeLink from "./../components/HomeLink";
import {
  faFacebookF,
  faYoutube,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
const Home = () => {
  return (
    <div className="homePage">
      <div className="overlay"></div>
      <div className="homeSection">
        <div className="homeImage">
          <img src={require("../imgs/myPhoto.jpg")} alt="Home" />
        </div>
        <div className="home-content">
          <div className="home-box">
            <h2>{profile.name}</h2>
            <span>I'm a </span>
            <span className="second">{profile["job-title"]}</span>
            <p>
              I'm a Frontend Developer. {profile.experience} of experience.
              Experienced with all dynamic web projects.
            </p>
          </div>
          <div className="home-links">
            <HomeLink to={profile.social.facebook} icon={faFacebookF} />
            <HomeLink to={profile.social.youtube} icon={faYoutube} />
            <HomeLink to={profile.social.linkedin} icon={faLinkedinIn} />
            <HomeLink to={profile.websites.github} icon={faGithub} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
