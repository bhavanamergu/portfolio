import React, { useRef } from "react";
import "./contact.css";
import walmart from "../../assets/walmart.png";
import microsoft from "../../assets/microsoft.png";
import Adobe from "../../assets/adobe.png";
import facebook from "../../assets/facebook.png";
import fIcon from "../../assets/facebook-icon.png";
import tIcon from "../../assets/twitter.png";
import yIcon from "../../assets/youtube.png";
import iIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_08k4qx2",
        "template_hqowwor",
        form.current,
        "7c_IDsYgB7GhDSkFU"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle"> My Clients </h1>{" "}
        <p className="clientsDesc">
          {" "}
          I have a chance to work with a diverese group of companies.Some of the
          notable companies I have worked with includes{" "}
        </p>{" "}
        <div className="clientImgs">
          <img src={walmart} alt="Walmart" className="clientImg" />
          <img src={Adobe} alt="Adobe" className="clientImg" />
          <img src={microsoft} alt="Microsoft" className="clientImg" />
          <img src={facebook} alt="Facebook" className="clientImg" />
        </div>{" "}
      </div>{" "}
      <div id="contact">
        <h1 className="contactPageTitle"> Contact Me </h1>{" "}
        <span className="contactDesc">
          Please fill out the fom below to discuss any work opportunities.{" "}
        </span>{" "}
        <form ref={form} onSubmit={sendEmail} className="contactForm">
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>{" "}
          <button type="submit" value="send" className="submitBtn">
            {" "}
            Submit{" "}
          </button>{" "}
          <div className="links">
            <a
              href="https://www.facebook.com/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={fIcon} alt="Facebook" className="link" />
            </a>{" "}
            <a
              href="https://twitter.com/i/flow/login"
              rel="noreferrer"
              target="_blank"
            >
              <img src={tIcon} alt="Twitter" className="link" />
            </a>{" "}
            <a href="https://www.youtube.com/" rel="noreferrer" target="_blank">
              <img src={yIcon} alt="Youtube" className="link" />
            </a>{" "}
            <a
              href="https://www.instagram.com/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={iIcon} alt="Instagram" className="link" />
            </a>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
    </section>
  );
};

export default Contact;
