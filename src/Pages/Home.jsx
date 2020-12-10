import React, { useEffect, useState } from "react";
import "../Styles/home.css";
import axios from "axios";

import PricePage from "./PricePage";
import AdditionalServices from "./AdditionalServices";
import PurchasedService from "./PurchasedService";

import Card from "../Components/Card";

const HomePage = () => {
  const [pData, setpData] = useState([]);
  const [aData, setaData] = useState([]);

  const [Updated, setUpdated] = useState(false);

  const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
  const URL = "https://fir-dynamiclinks-e43dd.web.app/practical-api.json";

  useEffect(() => {
    axios
      .get(PROXY_URL + URL)
      .then((res) => {
        console.log("Fetcheddata ====>>>>> ", res.data.data.purchased_services);

        const data = res.data.data.purchased_services;
        const length = data.length;

        for (let i = 0; i < length; i++) {
          const addLength =
            data[i].purchased_office_template.purchased_office_services.length;
          for (let j = 0; j < addLength; j++) {
            if (
              data[i].purchased_office_template.purchased_office_services[j]
                .service_selected !== null ||
              undefined
            ) {
              // console.log("Purchased Services : ===== > \n");
              // console.log(
              //   i + " " + j + " ",
              //   data[i].purchased_office_template.purchased_office_services[j]
              // );

              setpData(
                data[i].purchased_office_template.purchased_office_services[j]
              );
              // setpData(
              //   data[i].purchased_office_template.purchased_office_services[j]
              // );
            }
            if (
              data[i].purchased_office_template.purchased_office_services[j]
                .service_selected === null ||
              undefined
            ) {
              // console.log("Additional Services : ===== > \n");

              // console.log(
              //   i + " " + j + " ",
              //   data[i].purchased_office_template.purchased_office_services[j]
              // );

              setaData(
                data[i].purchased_office_template.purchased_office_services[j]
              );

              setUpdated(true);

              // setaData(
              //   data[i].purchased_office_template.purchased_office_services[j]
              // );
            }
          }
        }
        // console.log("length ", length);
        // console.log(
        //   "length 1 ",
        //   data[i].purchased_office_template.purchased_office_services.length
        // );
      })
      .catch((err) => console.error("Error occured! ", err));

    // console.log("Purchased Services : ===== >  \n", pData, "\n");
    // console.log("Additional Services : ===== > \n", aData, "\n");
  }, [Updated]);

  return (
    <div className="homeDiv">
      {/* {pData.map((data11) => {
        console.log(data11.length);
      })} */}
      <PurchasedService
        card={
          <Card
            mainserviceno={"1"}
            src={
              "https://th.bing.com/th/id/OIP.bircyBDvJOcKd3mkR6ramwHaEK?w=313&h=180&c=7&o=5&pid=1.7"
            }
            srcAlt={"img"}
            servicesno={"1"}
            description={"description"}
            price={"2000"}
          />
        }
      />

      <PricePage />
      {/* {AdditionalServicesData.map((data22) => {
        console.log("AdditionalServicesData ", data22);
        return null;
      })} */}
      <AdditionalServices
        card={
          <Card
            mainserviceno={"1"}
            src={
              "https://th.bing.com/th/id/OIP.bircyBDvJOcKd3mkR6ramwHaEK?w=313&h=180&c=7&o=5&pid=1.7"
            }
            srcAlt={"img"}
            servicesno={"1"}
            description={"description"}
            price={"2000"}
          />
        }
      />
    </div>
  );
};

export default HomePage;
