import React, { useEffect, useState } from "react";
import cakeHeader from "../Assets/cakeHeader.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">Baked with Love</p>
          <h2 className="text-title">
          Freshly baked sweets
delivered to your door
          </h2>
          <p className="text-descritpion">
           Talk to our expert bakers and explore a wide range of freshly baked cakes, 
           pastries, cookies, and custom desserts. Order online and get sweet treats delivered
            right to your door — made with love and top-quality ingredients.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>200+</p>
              <p>Years of Experience</p>
            </div>

            <div className="text-stats-container">
              <p>100+</p>
              <p>Delicious Recipes</p>
            </div>

            <div className="text-stats-container">
              <p>15+</p>
              <p>Years of Baking Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={cakeHeader} alt="cakeHeader" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
