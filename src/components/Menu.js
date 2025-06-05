import React from "react";
import "./Menu.css";
import salad1 from "../assets/salad-barbecue.png";
import salad2 from "../assets/salad-fish.png";
import salad3 from "../assets/salad-spinach.png";

function Menu() {
  const foodList = [
    {
      img: salad1,
      name: "Barbecue salad",
      desc: "Delicious dish",
      price: 22.0,
    },
    {
      img: salad2,
      name: "Salad with fish",
      desc: "Delicious dish",
      price: 12.0,
    },
    {
      img: salad3,
      name: "Spinach salad",
      desc: "Delicious dish",
      price: 9.5,
    },
  ];

  return (
    <section className="menu-section" id="menu"data-aos="fade-up" data-aos-delay="200" data-aos-duration="1400">
      <h5>Special</h5>
      <h2>Menu of the week</h2>
      <div className="menu-grid">
        {foodList.map((food, index) => (
          <div className="menu-card" key={index}>
            <img src={food.img} alt={food.name} />
            <h3>{food.name}</h3>
            <p>{food.desc}</p>
            <div className="menu-footer">
              <strong>${food.price.toFixed(2)}</strong>
              <button>
                <i className="fas fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
