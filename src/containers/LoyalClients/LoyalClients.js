import React, { useEffect, useState } from "react";
import classes from "./LoyalClients.module.css";
import handleClientsPurchases from "../../shared/handleClientsPurchases";

const LoyalClients = () => {
  const [loyalClients, setLoyalClients] = useState([]);
  useEffect(() => {
    handleClientsPurchases();
  }, []);
  return (
    <section className={classes.LoyalClients}>
      <font>Clientes mais fieis</font>
    </section>
  );
};

export default LoyalClients;
