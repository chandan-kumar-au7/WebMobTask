import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Components/Card";
import PricePage from "./PricePage";
import AdditionalServices from "./AdditionalServices";

import "../Styles/PurchasedService.css";

function PurchasedServices() {
  const [Fetched, setFetched] = useState([]);
  const [PurchasedData, setPurchasedData] = useState([]);
  const [AdditionalData, setAdditionalData] = useState([]);

  const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
  const URL = "https://fir-dynamiclinks-e43dd.web.app/practical-api.json";

  useEffect(() => {
    axios
      .get(PROXY_URL + URL)
      .then((res) => {
        console.log("Fetcheddata ====>>>>> ", res.data.data.purchased_services);
        setFetched(res.data.data.purchased_services);

        //   Fetched.map((data, i) => {
        //     data.purchased_office_template.purchased_office_services.map(
        //       (data1, i) => {
        //         if (data1.service_selected !== null) {
        //           console.log("data1 :::::", i, data1.service_selected);
        //         }
        //       }
        //     );
        //   });
      })
      .catch((err) => console.error("Error occured! ", err));
  }, []);

  return (
    <>
      <div className="parentOfPurchpage">
        <h2 className="PURCHASEDh2">PURCHASED SERVICES</h2>
        <p>Showing Purchased Services List</p>
        <div>
          <Card
            mainserviceno={"1"}
            src={
              "https://th.bing.com/th/id/OIP.dyG9YY1J0V58F-e3hUH8rwHaFj?w=219&h=180&c=7&o=5&pid=1.7"
            }
            srcAlt={"img"}
            servicesno={"1"}
            description={"description"}
            price={"2000"}
          />
        </div>
      </div>
      <PricePage />
      <AdditionalServices
        src={
          "https://th.bing.com/th/id/OIP.bircyBDvJOcKd3mkR6ramwHaEK?w=313&h=180&c=7&o=5&pid=1.7"
        }
      />
    </>
  );
}

export default PurchasedServices;
