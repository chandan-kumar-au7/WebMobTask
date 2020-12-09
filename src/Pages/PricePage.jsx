import React from "react";
import "../Styles/PricePage.css";

function PricePage() {
  return (
    <div className="parentOfPricePage">
      <div className="parentforpricecard">
        <p className="childOneForpricecard">
          <b> Services {"1"} </b>
        </p>
        <h3 className="childTwoForpricecard"> Rs. {"2000"},-</h3>
      </div>
      <hr />
      <div>
        <div className="Seconddivparentforpricecard">
          <p className="childOneForpricecard">
            <b> Total Costing : </b>
          </p>
          <h3 className="childTwoForpricecard"> Rs. {"2000"},-</h3>
        </div>
      </div>
    </div>
  );
}

export default PricePage;
