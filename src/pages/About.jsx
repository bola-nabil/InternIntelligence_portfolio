import React from "react";
import "../styles/About.css";
import profile from "../data/data.json";
import PageTitle from "../components/PageTitle";
import Information from "../components/Information";
import { Link } from "react-router-dom";

const About = () => {
  const currentAge = () => {
    const today = new Date();
    const birthDate = new Date("2001-03-10");
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };
  return (
    <div>
      <div className="container">
        <PageTitle title="About" first="About " second="Me" />
        <section className="about">
          <div className="aboutImg">
            <img src={require(`../imgs/myPhoto.jpg`)} alt="personal" />
          </div>
          <div className="desBox">
            <div className="des">
              <p>
                Hi! My name is bola nabil. I graduated from the Department of
                Computer Science in 2023. I love the field of programming very
                much. I have participated in many programming competitions such
                as ECPC.
              </p>
              <p>
                I currently work as a front-end software developer and have some
                experience there. My goal is to become professional in the field
                of software and to develop software that benefits society.
              </p>
              <p>
                Get the bundle and get lifetime support and one year updates. I
                am available for freelance work. Connect with me via my account.
              </p>
            </div>
            <div className="cvBox">
              <Link
                className="cv center"
                to={profile.cv.frontend}
                target="_blank"
              >
                Show Cv
              </Link>
            </div>
          </div>
          <div className="infos">
            <div className="aboutInfo">
              <div className="info">
                <Information title="Birthday: " info={profile.birthday} />
                <Information title="City: " info={profile.city} />
                <Information title="Study: " info={profile.college} />
                <Information
                  title="Portfolio: "
                  to={profile.websites.portfolio}
                  LinkTitle="bola-nabil"
                />
                <Information
                  title="Phone: "
                  info={profile.contact.phone}
                  className="infoLink"
                />
                <Information
                  title="Github: "
                  to={profile.websites.github}
                  LinkTitle="bola-nabil"
                />
              </div>
              <div className="info">
                <Information title="Age: " info={currentAge()} />
                <Information title="Experience: " info={profile.experience} />
                <Information title="Degree: " info={profile.degree} />
                <Information
                  title="Email: "
                  to={`mailto:${profile.contact.email}`}
                  LinkTitle={profile.contact.email}
                />
                <Information
                  title="Hackerrank: "
                  to={profile.websites.hackerrank}
                  LinkTitle="bolaNabil"
                />
                <Information
                  title="leetcode: "
                  to={profile.websites.leetcode}
                  LinkTitle="bola-nabil"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
