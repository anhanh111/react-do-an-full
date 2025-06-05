import React from "react";
import "./Services.css";
import foodIcon from "../assets/service-food.png";
import pizzaIcon from "../assets/service-fastfood.png";
import deliveryIcon from "../assets/service-delivery.png";

function Services() {
  const serviceList = [
    {
      icon: foodIcon,
      title: "Excellent food",
      desc: "We offer our clients excellent quality services for many years, with the best and delicious food in the city.",
    },
    {
      icon: pizzaIcon,
      title: "Fast food",
      desc: "We offer our clients excellent quality services for many years, with the best and delicious food in the city.",
    },
    {
      icon: deliveryIcon,
      title: "Delivery",
      desc: "We offer our clients excellent quality services for many years, with the best and delicious food in the city.",
    },
  ];

  return (
    <section className="services-section" id="services"data-aos="fade-up" data-aos-delay="100" data-aos-duration="1200">
      <h5>Offering</h5>
      <h2>Our amazing services</h2>
      <div className="services-grid">
        {serviceList.map((service, index) => (
          <div className="service-box" key={index}>
            <img src={service.icon} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
