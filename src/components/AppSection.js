import React from "react";
import "./AppSection.css";
import phone1 from "../assets/phone-dark.png";
import appstore from "../assets/appstore.png";
import googleplay from "../assets/googleplay.png";

function AppSection() {
  return (
    <section className="app-section" id="app"data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
      <div className="app-images">
        <img src={phone1} alt="Phone dark" className="phone phone-back" />

      </div>
      <div className="app-content">
        <h5>App</h5>
        <h2>App is available</h2>
        <p>
          Find our application and download it, you can make reservations, food
          orders, see your deliveries on the way and much more.
        </p>
        <div className="app-buttons">
          <img src={appstore} alt="App Store" />
          <img src={googleplay} alt="Google Play" />
        </div>
      </div>
    </section>
  );
}

export default AppSection;
