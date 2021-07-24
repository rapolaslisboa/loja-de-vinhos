import React from "react";
import BiggestPurchase from "../../containers/BiggestPurchase/BiggestPurchase";
import BiggestValues from "../../containers/BiggestValues/BiggestValues";
import LoyalClients from "../../containers/LoyalClients/LoyalClients";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.Home}>
      <BiggestValues />
      <BiggestPurchase />
      <LoyalClients />
    </div>
  );
};

export default Home;
