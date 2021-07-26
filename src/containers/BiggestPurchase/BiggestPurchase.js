import React, { useEffect, useState } from "react";
import classes from "./BiggestPurchase.module.css";
import handleClientsPurchases from "../../shared/handleClientsPurchases";

const BiggestPurchase = ({ clients, purchases }) => {
  const [biggestPurchase, setBiggestPurchase] = useState({});

  useEffect(() => {
    if (clients.length > 0 && purchases.length > 0)
      setBiggestPurchase(handleClientsPurchases(clients, purchases, 2));
  }, [clients, purchases]);

  return (
    <section className={classes.BiggestPurchase}>
      <font>Cliente com maior compra única no último ano (2016)</font>
      <p>
        A cliente{" "}
        <strong>
          {biggestPurchase.nome} {biggestPurchase.sobrenome}
        </strong>{" "}
        fez a maior compra única no último ano, 2016, no valor total de{" "}
        <strong>R$ {biggestPurchase.valorTotal}</strong>
      </p>
      <p>Sua compra foi constituída pelos seguintes itens: </p>
      <ul>
        {biggestPurchase.itens
          ? biggestPurchase.itens.map((product, index) => (
              <li key={index}>
                <strong>{product.produto}</strong> por
                <strong> R$ {product.preco}</strong>
              </li>
            ))
          : null}
      </ul>
    </section>
  );
};

export default BiggestPurchase;
