import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cakeType, setCakeType] = useState("default");
  const [pickupTime, setPickupTime] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!firstName.trim()) {
      errors.firstName = "First name is required";
    } else if (firstName.trim().length < 2) {
      errors.firstName = "First name must be at least 2 characters";
    }

    if (!lastName.trim()) {
      errors.lastName = "Last name is required";
    } else if (lastName.trim().length < 2) {
      errors.lastName = "Last name must be at least 2 characters";
    }

    if (cakeType === "default") {
      errors.cakeType = "Please select a cake type";
    }

    if (!pickupTime) {
      errors.pickupTime = "Pickup time is required";
    } else {
      const selectedTime = new Date(pickupTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.pickupTime = "Please select a future pickup time";
      }
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Here you would send the order details to the backend
    const orderData = {
      firstName,
      lastName,
      cakeType,
      pickupTime,
    };

    // Reset form fields and errors after successful submission
    setFirstName("");
    setLastName("");
    setCakeType("default");
    setPickupTime("");
    setFormErrors({});

    toast.success("Order placed! Your cake will be ready for pickup.", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="order-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Bakery <span className="legal-siteSign">+</span>
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Place Your Cake Order</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            {formErrors.firstName && <p className="error-message">{formErrors.firstName}</p>}
          </label>

          <br />
          <label>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            {formErrors.lastName && <p className="error-message">{formErrors.lastName}</p>}
          </label>

          <br />
          <label>
            Cake Type:
            <select
              value={cakeType}
              onChange={(e) => setCakeType(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="chocolate">Chocolate Cake</option>
              <option value="vanilla">Vanilla Cake</option>
              <option value="fruit">Fruit Cake</option>
              <option value="cheesecake">Cheesecake</option>
            </select>
            {formErrors.cakeType && <p className="error-message">{formErrors.cakeType}</p>}
          </label>

          <br />
          <label>
            Pickup Time:
            <input
              type="datetime-local"
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              required
            />
            {formErrors.pickupTime && <p className="error-message">{formErrors.pickupTime}</p>}
          </label>

          <br />
          <button type="submit" className="text-order-btn">
            Confirm Order
          </button>

          <p className="success-message" style={{ display: isSubmitted ? "block" : "none" }}>
            Your cake order details have been sent via SMS.
          </p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© 2013-2023 Bakery+. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;