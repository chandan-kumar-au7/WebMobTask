import React from "react";

import "../Styles/PurchasedService.css";

function PurchasedServices(props) {
  return (
    <div className="parentOfPurchpage">
      <h2 className="PURCHASEDh2">PURCHASED SERVICES</h2>
      <p>Showing Purchased Services List</p>
      <div>{props.card}</div>
    </div>
  );
}

export default PurchasedServices;
