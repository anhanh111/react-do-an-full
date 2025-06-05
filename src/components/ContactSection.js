import React from "react";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section" id="contact"data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
      <div className="contact-text">
        <h5>Let's talk</h5>
        <h2>Contact us</h2>
        <p>
          If you want to reserve a table in our restaurant, contact us and we will attend you
          quickly, with our 24/7 chat service.
        </p>
      </div>
      <div className="contact-button">
        <a href="#!" className="btn-contact">Contact us now</a>
      </div>
    </section>
  );
}

export default ContactSection;
