import React from "react";
import "./About.css";
import aboutImg from "../assets/about.png";

function About() {
  return (
    <section className="about-section" id="about"data-aos="fade-up" data-aos-delay="100" data-aos-duration="1400">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImg} alt="About us" />
        </div>
        <div className="about-text">
          <h5>About us</h5>
          <h2>We cook the best<br />tasty food</h2>
          <p>
            We cook the best food in the entire city, with excellent customer
            service, the best meals and at the best price, visit us.
          </p>
          <a href="#history" className="about-button">Explore history</a>
        </div>
      </div>
    </section>
  );
}

export default About;
