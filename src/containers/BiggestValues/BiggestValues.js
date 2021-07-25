import React, { useEffect, useState } from "react";
import classes from "./BiggestValues.module.css";
import handleClientsPurchases from "../../shared/handleClientsPurchases";
import Table from "../../components/Table/Table";

const BiggestValues = ({ clients, purchases }) => {
  const [biggestValues, setBiggestValues] = useState([]);

  useEffect(() => {
    if (clients.length > 0 && purchases.length > 0)
      setBiggestValues(handleClientsPurchases(clients, purchases, 1));
  }, [clients, purchases]);

  return (
    <section className={classes.BiggestValues}>
      <font>Clientes com maior valor total em compras</font>
      <Table iterator={biggestValues} type="biggestValues" />
    </section>
  );
};

export default BiggestValues;
