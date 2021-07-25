import axios from "axios";
import React, { useEffect, useState } from "react";
import BiggestPurchase from "../../containers/BiggestPurchase/BiggestPurchase";
import BiggestValues from "../../containers/BiggestValues/BiggestValues";
import LoyalClients from "../../containers/LoyalClients/LoyalClients";
import API from "../../API";
import classes from "./Home.module.css";
import { adjustClientCode } from "../../shared/handleClientsPurchases";

const Home = () => {
  const [clients, setClients] = useState([]);
  const [purchases, setPurchases] = useState([]);
  
  useEffect(() => {
    async function getData() {
      axios
        .get(API.getClients)
        .then((response) => {
          setClients(response.data);
        })
        .catch((error) => console.log(error));
      axios
        .get(API.getPurchases)
        .then((response) => {
          setPurchases(adjustClientCode(response.data));
        })
        .catch((error) => console.log(error));
    }
    getData();
  }, []);

  return (
    <div className={classes.Home}>
      <BiggestValues clients={clients} purchases={purchases} />
      <BiggestPurchase clients={clients} purchases={purchases} />
      <LoyalClients clients={clients} purchases={purchases} />
    </div>
  );
};

export default Home;
