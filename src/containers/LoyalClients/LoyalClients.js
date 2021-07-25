import React, { useEffect, useState } from "react";
import classes from "./LoyalClients.module.css";
import handleClientsPurchases from "../../shared/handleClientsPurchases";
import Table from "../../components/Table/Table";

const LoyalClients = ({ clients, purchases }) => {
  const [loyalClients, setLoyalClients] = useState([]);

  useEffect(() => {
    if (clients.length > 0 && purchases.length > 0)
      setLoyalClients(handleClientsPurchases(clients, purchases, 3));
  }, [clients, purchases]);

  return (
    <section className={classes.LoyalClients}>
      <font>Clientes mais fieis</font>
      <Table iterator={loyalClients} type="loyalClients" />
    </section>
  );
};

export default LoyalClients;
