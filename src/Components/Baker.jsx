import React from "react";
import BakerCard from "./BakerCard";
import baker1 from "../Assets/baker1.jpg";
import baker2 from "../Assets/baker2.jpg";
import baker3 from "../Assets/baker3.jpg";
import baker4 from "../Assets/baker4.jpg";
import "../Styles/Bakers.css";

function Baker() {
  return (
    <div className="baker-section" id="bakers">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Bakers</span>
        </h3>

        <p className="dt-description">
          Meet our exceptional team of artisan bakers, dedicated to creating delightful desserts and baked goods at Sweet Crumbs. Trust their skill and passion to make every treat unforgettable.
        </p>
      </div>

      <div className="dt-cards-content">
        <BakerCard
          img={baker1}
          name="Kathryn Murphy"
          title="Cake Designer"
          stars="4.9"
          reviews="1800"
        />
        <BakerCard
          img={baker2}
          name="Mary Jones"
          title="Pastry Chef"
          stars="4.8"
          reviews="700"
        />
        <BakerCard
          img={baker4}
          name="Jenny Wilson"
          title="Dessert Specialist"
          stars="4.7"
          reviews="450"
        />
        <BakerCard
          img={baker3}
          name="Albert Flores"
          title="Bread Expert"
          stars="4.8"
          reviews="500"
        />
      </div>
    </div>
  );
}

export default Baker;
