import React from "react";
import "../Styles/home.css";

import PurchasedService from "./PurchasedService";
import PricePage from "./PricePage";
import AdditionalServices from "./AdditionalServices";

const HomePage = () => {
  return (
    <div className="homeDiv">
      <PurchasedService />
      <PricePage />
      <AdditionalServices />
    </div>
  );
};

export default HomePage;
