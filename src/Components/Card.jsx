import React from "react";

import "../Styles/Card.css";

function Card(props) {
  return (
    <div className="parentOfcard">
      <p className="cardMainService">Main Services {props.mainserviceno} : </p>
      <div className="secondChildOfCard">
        <div className="secondChildOfCard_1stchild">
          <div className="ImgOfCard">
            <img src={props.src} alt={props.srcAlt} />
          </div>
          <div className="afterImgDiv">
            <div className="Servicenoandprice">
              <p className="serviceNo01">
                <b> Services {props.servicesno} </b>
              </p>
              <h3 className="price02"> Rs. {props.price},-</h3>
            </div>
            <p>{props.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;