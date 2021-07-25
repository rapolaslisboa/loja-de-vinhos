import React, { useEffect, useState } from "react";
import classes from "./BiggestPurchase.module.css";

const BiggestPurchase = () => {
  const [biggestPurchase, setBiggestPurchase] = useState({});
  useEffect(() => {}, []);
  return (
    <section className={classes.BiggestPurchase}>
      <font>Cliente com maior compra única no último ano (2016)</font>
    </section>
  );
};

export default BiggestPurchase;
