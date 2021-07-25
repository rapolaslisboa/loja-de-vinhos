import React, { useEffect, useState } from "react";
import classes from "./BiggestValues.module.css";

const BiggestValues = () => {
  const [biggestValues, setBiggestValues] = useState([]);
  useEffect(() => {}, []);
  return (
    <section className={classes.BiggestValues}>
      <font>Clientes com maior valor total em compras</font>
    </section>
  );
};

export default BiggestValues;
