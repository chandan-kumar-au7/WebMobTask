import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";
import "../Styles/PurchasedService.css";

function PurchasedServices() {
  const [fetcheddata, setfetcheddata] = useState([]);

  const FetchApi = () => {
    const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
    const URL = "https://fir-dynamiclinks-e43dd.web.app/practical-api.json";

    axios
      .get(PROXY_URL + URL)
      .then((res) => {
        setfetcheddata(res.data.data.purchased_services);
        // console.log(res.data.data.purchased_services);
      })
      .catch((err) => console.error("Error occured! ", err));
  };

  useEffect(() => {
    FetchApi();
  }, []);

  return (
    <div className="parentOfPurchpage">
      <h2 className="PURCHASEDh2">PURCHASED SERVICES</h2>
      <p>Showing Purchased Services List</p>
      {/* {
        
        
        console.log(
        "fetcheddata ",
        fetcheddata.data.data.purchased_services[0].purchased_office_template
          .purchased_office_services
      )} */}
      <div>
        <Card
          mainserviceno={"1"}
          src={"src"}
          srcAlt={"img"}
          servicesno={"1"}
          description={"description"}
          price={"2000"}
        />
      </div>
    </div>
  );
}

export default PurchasedServices;
