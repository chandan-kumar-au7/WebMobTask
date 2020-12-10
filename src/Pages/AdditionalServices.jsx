import React from "react";

import "../Styles/AdditionalServices.css";

function AdditionalServices(props) {
  return (
    <div className="parentOfPurchpage">
      <h2 className="PURCHASEDh2">ADDITIONAL SERVICES</h2>
      <p>Showing Additional Services List</p>
      <div className="cardparentformar">{props.card}</div>
    </div>
  );
}

export default AdditionalServices;
