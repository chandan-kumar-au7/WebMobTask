import React from "react";
import Card from "../Components/Card";
import "../Styles/AdditionalServices.css";

function AdditionalServices(props) {
  return (
    <div className="parentOfPurchpage">
      <h2 className="PURCHASEDh2">ADDITIONAL SERVICES</h2>
      <p>Showing Additional Services List</p>
      <div className="cardparentformar">
        <Card
          mainserviceno={"1"}
          src={props.src}
          srcAlt={"img"}
          servicesno={"1"}
          description={"description"}
          price={"2000"}
        />
      </div>
    </div>
  );
}

export default AdditionalServices;
