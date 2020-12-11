import React, { useEffect, useState } from "react";
import "../Styles/home.css";
import "../Styles/PurchasedService.css";
import "../Styles/PricePage.css";

import axios from "axios";

import Card from "../Components/Card";

const HomePage = () => {
  const [pData, setpData] = useState([]);
  const [aData, setaData] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);

  let newPDATA = [];
  let newADATA = [];
  let total = 0;

  const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
  const URL = "https://fir-dynamiclinks-e43dd.web.app/practical-api.json";

  useEffect(() => {
    axios
      .get(PROXY_URL + URL)
      .then((res) => {
        // console.log("Fetcheddata ====>>>>> ", res.data.data.purchased_services);

        const data = res.data.data.purchased_services;
        const length = data.length;

        for (let i = 0; i < length; i++) {
          const addLength =
            data[i].purchased_office_template.purchased_office_services.length;
          // console.log("data.name ", data[i].name);
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

              data[i].purchased_office_template.purchased_office_services[
                j
              ].mainServiceName = data[i].name;

              newPDATA.push(
                data[i].purchased_office_template.purchased_office_services[j]
              );

              total =
                total +
                Number(
                  data[i].purchased_office_template.purchased_office_services[j]
                    .price
                );
            }

            settotalPrice(total);

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

              data[i].purchased_office_template.purchased_office_services[
                j
              ].mainServiceName = data[i].name;

              newADATA.push(
                data[i].purchased_office_template.purchased_office_services[j]
              );

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

        setpData(newPDATA);
        setaData(newADATA);
      })
      .catch((err) => {
        console.error("Error occured! ", err);
        alert(
          "Can't FETCH Right Now , Because of Network Error , Please Connect Soon ... "
        );
      });

    // console.log("Purchased Services : ===== >  \n", pData, "\n");
    // console.log("Additional Services : ===== > \n", aData, "\n");
  }, []);

  return (
    <div className="homeDiv">
      {/* {{{{{{{{{{}}}}}}}}}} Purchased Services from here {{{{{{{{{{}}}}}}}}}} */}
      <div className="parentOfPurchpage">
        <h2 className="PURCHASEDh2">PURCHASED SERVICES</h2>
        <p>Showing Purchased Services List</p>
        <div>
          {pData.map((pData11, key) => {
            // console.log("pData11 ", pData11);

            return (
              <Card
                key={key}
                mainServiceName={pData11.mainServiceName}
                src={pData11.image}
                srcAlt={pData11.name}
                subServiceName={pData11.name}
                description={pData11.description}
                price={pData11.price}
              />
            );
          })}
        </div>
      </div>
      {/* {{{{{{{{{{}}}}}}}}}} End Of Purchased Services from here {{{{{{{{{{}}}}}}}}}} */}

      <div className="parentOfPricePage">
        {pData.map((ppData, key) => {
          // console.log("ppData ", ppData);
          // console.log("totalPrice ====> ", totalPrice);

          return (
            <div className="parentforpricecard" key={key}>
              <p className="childOneForpricecard">
                <b> {ppData.name} </b>
              </p>
              <h3 className="childTwoForpricecard"> Rs. {ppData.price},-</h3>
            </div>
          );
        })}
        <hr />
        <div>
          <div className="Seconddivparentforpricecard">
            <p className="childOneForpricecard">
              <b> Total Costing : </b>
            </p>
            <h3 className="childTwoForpricecard">Rs. {totalPrice},-</h3>
          </div>
        </div>
      </div>

      {/* {{{{{{{{{{}}}}}}}}}} Additional Services from here {{{{{{{{{{}}}}}}}}}} */}

      <div className="parentOfPurchpage">
        <h2 className="PURCHASEDh2">ADDITIONAL SERVICES</h2>
        <p>Showing Additional Services List</p>
        <div>
          {aData.map((aData11, key) => {
            // console.log("aData11 ", aData11);

            return (
              <Card
                key={key}
                mainServiceName={aData11.mainServiceName}
                src={aData11.image}
                srcAlt={aData11.name}
                subServiceName={aData11.name}
                description={aData11.description}
                price={aData11.price}
              />
            );
          })}
        </div>
      </div>
      {/* {{{{{{{{{{}}}}}}}}}} Additional Services from here {{{{{{{{{{}}}}}}}}}} */}
    </div>
  );
};

export default HomePage;
