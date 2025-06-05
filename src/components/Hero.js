import React from "react";
import "./Hero.css";
import salad from "../assets/salad.png"; // nhớ để đúng đường dẫn ảnh

function Hero() {
  return (
    <section className="hero"data-aos="fade-up"data-aos-duration="1200">
      <div className="hero-text">
        <h1>Tasty food</h1>
        <p>Try the best food of the week.</p>
        <a href="#menu" className="hero-button">View Menu</a>
      </div>
      <div className="hero-image">
        <img src={salad} alt="Delicious Salad" />
      </div>
    </section>
  );
}

export default Hero;
