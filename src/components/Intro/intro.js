import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png";
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello"> Hello, </span>{" "}
        <span className="introText">
          I 'm{" "}
          <span className="introName">
            Donna <br />{" "}
          </span>{" "}
          Software Developer{" "}
        </span>{" "}
        <p className="introPara">
          {" "}
          Iam a skilled web designer with experience in creating quality
          software over 2 years.{" "}
        </p>{" "}
        <Link>
          {" "}
          <a
            href="https://www.southeastern.edu/admin/career_srv/student_alumni/build_a_resume/resume_guide/samples/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <button className="btn">
              {" "}
              <img src={btnImg} alt="Hire me" className="btnImg" />
              My Resume{" "}
            </button>{" "}
          </a>{" "}
        </Link>{" "}
      </div>{" "}
      <img src={bg} alt="portfolio" className="bg" />
    </section>
  );
};

export default Intro;
