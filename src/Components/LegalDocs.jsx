import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="legal-section-title">


      <div className="legal-text-content">
        <p className="legal-title">About Us</p>
        <p className="legal-description">
          Welcome to BakeryApp, your go-to destination for fresh, handmade baked goods.
          We are passionate about creating delicious breads, cakes, and pastries using
          traditional recipes and locally sourced ingredients.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          We value your privacy. This policy explains how we collect, use, and protect your
          personal data. Any information you provide when placing an order or signing up
          for our newsletter is securely stored and never shared with third parties.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          By using BakeryApp, you agree to our terms of service. This includes appropriate
          use of our website, respectful communication with our team, and agreement to our
          ordering, refund, and delivery policies.
        </p>

        <p className="legal-title">Orders & Delivery</p>
        <p className="legal-description">
          Orders placed through BakeryApp can be picked up at our store or delivered locally
          based on availability. All baked goods are made fresh to order. Please review your
          order details carefully before finalizing your purchase.
        </p>

        <p className="legal-title">Our Commitment</p>
        <p className="legal-description">
          At BakeryApp, we are committed to quality and customer satisfaction. Whether you’re
          ordering a birthday cake, a dozen croissants, or a rustic sourdough loaf, we aim to
          provide a warm and delightful experience every time.
        </p>
      </div>

      <div className="legal-footer">
        <p>©2025 BakeryApp. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
