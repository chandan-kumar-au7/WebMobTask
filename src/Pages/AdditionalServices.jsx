import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";
import "../Styles/AdditionalServices.css";

function AdditionalServices() {
  const [AdditionalServices, setAdditionalServices] = useState([]);

  const FetchApi = () => {
    const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
    const URL = "https://fir-dynamiclinks-e43dd.web.app/practical-api.json";

    axios
      .get(PROXY_URL + URL)
      .then((res) => {
        // console.log(res.data.data);
        setAdditionalServices(res);
      })
      .catch((err) => console.error("Error occured! ", err));
  };

  useEffect(() => {
    FetchApi();
  }, []);

  return (
    <div className="parentOfPurchpage">
      <h2 className="PURCHASEDh2">ADDITIONAL SERVICES</h2>
      <p>Showing Additional Services List</p>
      <div className="cardparentformar">
        <Card
          mainserviceno={"1"}
          src={"src"}
          srcAlt={"img"}
          servicesno={"1"}
          description={"description"}
          price={"2000"}
        />

        {/* ))} */}
      </div>
    </div>
  );
}

export default AdditionalServices;
