import React from "react";
import InformationCard from "./InformationCard";
import { faCakeCandles, faCookie, faBreadSlice } from "@fortawesome/free-solid-svg-icons";

import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Bake</span>
        </h3>
        <p className="info-description">
          We bring sweetness to your doorstep, offering a delightful variety of
           baked goods crafted with care. Our bakery allows you to order fresh pastries, cakes,
           and breads made with high-quality ingredients, and enjoy homemade flavors whenever you crave them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Pastries"
          description="Our Pastries selection is made to satisfy every craving,
           from flaky croissants to buttery danishes. Whether you're in the mood for something fruity, chocolatey, 
          or creamy, our daily-baked pastries offer the perfect treat for your morning, break, or celebration."
          icon={faBreadSlice}
        />

        <InformationCard
          title="Cakes"
          description="Our skilled bakers craft each cake with love and precision,
           using fresh ingredients and creative designs. From elegant birthday cakes to custom creations for any occasion, 
          we’re here to help make your moments extra special with flavor and beauty in every slice."
          icon={faCakeCandles}
        />

        <InformationCard
          title="Cookies & Treats"
          description="From soft-baked cookies to bite-sized delights,
           our Cookies & Treats are made to bring joy in every bite. 
           Choose from classic chocolate chip, nutty shortbreads, or festive seasonal specials —
            perfect for gifting, sharing, or keeping all to yourself."
          icon={faCookie}
        />
      </div>
    </div>
  );
}

export default Info;
