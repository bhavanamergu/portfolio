import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";
const Skills = () => {
  return (
    <section id="skills">
      <span className="skillsTitle"> WHAT I DO </span>{" "}
      <span className="skillDesc">
        With two years of experience as a web developer, I specialize in front -
        end and back - end development, proficient in HTML, CSS, JavaScript, and
        frameworks.My focus on creating visually appealing and responsive
        websites reflects my passion for staying at the forefront of emerging
        web technologies.{" "}
      </span>{" "}
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UI Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2> UI / UX Design </h2>{" "}
            <p> This is a demo text.You can write your own content here. </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="skillBar">
          <img src={WebDesign} alt="Web Development" className="skillBarImg" />
          <div className="skillBarText">
            <h2> Web Development </h2>{" "}
            <p> This is a demo text.You can write your own content here. </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="skillBar">
          <img src={AppDesign} alt="App Development" className="skillBarImg" />
          <div className="skillBarText">
            <h2> App Development </h2>{" "}
            <p> This is a demo text.You can write your own content here. </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Skills;
