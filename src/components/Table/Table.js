import React from "react";
import classes from "./Table.module.css";

const Table = ({ iterator, type }) => {
  return (
    <div className={classes.TableContainer}>
      <table className={classes.Table}>
        <thead>
          <tr>
            <th scope="col">Cliente</th>
            <th scope="col">
              {type === "biggestValues" ? "Total Gasto" : "Compras"}
            </th>
          </tr>
        </thead>
        <tbody>
          {iterator.map((client, index) => {
            return (
              <tr key={index}>
                <td>
                  {client.nome} {client.sobrenome}
                </td>
                <td>
                  {type === "biggestValues"
                    ? `R$ ${client.totalGasto}`
                    : client.numeroCompras}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
