import React from "react";
import cakeHeader from '../Assets/cakeHeader.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
 
      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Sweet Crumbs</span>
        </h3>
        <p className="ba-description">
         Discover the reasons to make Sweet 
         Crumbs your go-to bakery for fresh, delicious treats. Enjoy handcrafted quality, delightful variety, and friendly service — 
         all made with care to sweeten your day. Join us on a journey of flavor, warmth, and happy moments.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#f1a9a9" }} /> Expert Artisan Bakers
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#f1a9a9" }} /> Freshly Baked Every Day

        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#f1a9a9" }} /> Custom Cakes & Orders
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#f1a9a9" }} /> Fast & Friendly Service
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} />  Order Now
        </button>
      </div>

           <div className="ba-image-content">
        <img src={cakeHeader} alt="Bakers Group" className="ba-image1" />
      </div>

    </div>
  );
}

export default BookAppointment;
