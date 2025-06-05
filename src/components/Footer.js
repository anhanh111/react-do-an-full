import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section"data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="1600">
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="logo">Tasty <span>Food</span></h3>
          <p>Restaurant</p>
          <div className="footer-column">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
          </div>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Delivery</li>
            <li>Pricing</li>
            <li>Fast food</li>
            <li>Reserve your spot</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Information</h4>
          <ul>
            <li>Event</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
            <li>Terms of services</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Address</h4>
          <ul>
            <li>Lima - Peru</li>
            <li>Jr Union #999</li>
            <li>999 - 888 - 777</li>
            <li>tastyfood@email.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© All right reserved @2023</p>
      </div>
    </footer>
  );
}

export default Footer;
