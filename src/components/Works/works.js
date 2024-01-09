import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle"> My Portfolio </h2>{" "}
      <span className="worksDesc">
        I excel in interpersonal skills, fostering a collaborative environment
        that fuels goal achievement within diverse teams.My proven track record
        showcases effective communication and teamwork, consistently surpassing
        objectives.Committed to cultivating positive relationships and
        leveraging collaborative approaches for successful goal attainment.{" "}
      </span>{" "}
      <div className="worksImgs">
        <img src={Portfolio1} alt="Portfolio 1" className="worksImg" />
        <img src={Portfolio2} alt="Portfolio 2" className="worksImg" />
        <img src={Portfolio3} alt="Portfolio 3" className="worksImg" />
        <img src={Portfolio4} alt="Portfolio 4" className="worksImg" />
        <img src={Portfolio5} alt="Portfolio 5" className="worksImg" />
        <img src={Portfolio6} alt="Portfolio 6" className="worksImg" />
      </div>{" "}
      <button className="worksBtn"> See More </button>{" "}
    </section>
  );
};

export default Works;
