import React from "react";
import "./About.css";
import myProfile from "../../assets/me_img.jpg";
import { FiAward } from "react-icons/fi";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={myProfile} alt="profile" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year working</small>
            </article>
          </div>

          <p>
          I am a passionate full-stack software engineer with a diverse background that spans over 15 years in the retail coffee industry. Seeking a career change that would enable continuous growth and learning, I found my calling in software engineering. In 2022 I graduated from the Flatiron School's rigorous program in Full-Stack Web Development, with a particular interest in Front-end Development.  I am equipped with a strong foundation in JavaScript, React, Ruby on Rails, Restful APIs, SQL, HTML, and CSS.

Throughout my tenure as a full-stack software engineer at a digital product studio, I had the opportunity to contribute to various client projects built with Ruby on Rails. This experience provided me with valuable troubleshooting and debugging skills, allowing me to navigate through complex challenges efficiently. I consistently delivered high-quality results while adapting to diverse project requirements. As an ambitious software engineer, I am determined to seize my next opportunity, eager to further enhance my skill set and expertise.

Driven by a strong work ethic, I excel in problem-solving and possess a remarkable aptitude for quickly grasping new concepts. I thrive on unraveling complex problems and finding innovative solutions. By leveraging my strengths and dedication, I am confident in my ability to make a valuable impact within your organization.
          </p>

          <a href="#contact" className="btn btn-primary">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
