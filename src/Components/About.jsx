import React from "react";
import bakery from "../Assets/bakery.jpg";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={bakery} alt="Bakers Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
        Welcome to Sweet Crumbs, your trusted destination for fresh, 
        handcrafted bakery delights. Our expert bakers offer lovingly made pastries, 
        cakes, and treats that bring warmth and flavor to every moment. Join us in celebrating life’s sweetest joys, 
        one bite at a time.

        </p>

        <h4 className="about-text-title">Your Experience</h4>

        <SolutionStep
          title="Choose Your Treat"
          description="Browse our delicious menu and pick from a variety of pastries, cakes, and cookies.
Our bakers create each item with care, using only the freshest ingredients."
        />

        <SolutionStep
          title="Place Your Order"
          description="
          Select the date and pickup or delivery time that suits you best.
We prepare your order with love, ready to enjoy at just the right moment."
        />

        <SolutionStep
          title="Enjoy the Sweetness"
          description="From first bite to last crumb, we’re here to make every treat special.
Share with friends or savor solo — either way, you’re in for something delightful."
        />

      </div>
    </div>
  );
}

export default About;
