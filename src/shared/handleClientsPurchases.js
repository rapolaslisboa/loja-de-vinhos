import API from "../API";
import axios from "axios";

async function handleClientsPurchases() {
  let clients = await axios.get(API.getClients);
  let purchases = await axios.get(API.getPurchases);
  adjustClientCode(purchases.data);
  biggestTotalPurchaseValues(clients.data, purchases.data);
  biggestPurchaseClient(clients.data, purchases.data);
  mostLoyalCustomers(clients.data, purchases.data);
}

// Função para ajustar o código do cliente (ficar compatível com o CPF)
const adjustClientCode = (purchases) => {
  purchases.forEach((purchase) => {
    let length = purchase.cliente.length;
    let lastDigits = purchase.cliente.slice(length - 2, length);
    purchase.cliente = `000.000.000-${lastDigits}`;
  });
};

// Função para separar os clientes com maior valor total em compras
const biggestTotalPurchaseValues = (clients, purchases) => {
  // Array de objetos que armazena o valor total de compras por cliente
  let totalPurchaseValues = [];
  clients.forEach((client) => {
    let totalSpent = 0;
    purchases.forEach((purchase) => {
      if (purchase.cliente === client.cpf) {
        totalSpent += purchase.valorTotal;
      }
    });
    totalPurchaseValues.push({
      ...client,
      totalGasto: parseFloat(totalSpent.toFixed(2)),
    });
  });

  // Ordena o array de objetos por meio da chave totalGasto de maneira decrescente
  totalPurchaseValues.sort((a, b) => {
    if (a.totalGasto < b.totalGasto) return 1;
    if (a.totalGasto > b.totalGasto) return -1;
    return 0;
  });
  // console.log("Clientes com maior valor total em compras", totalPurchaseValues);
};

// Função para encontrar o cliente com maior compra única no último ano (2016)
const biggestPurchaseClient = (clients, purchases) => {
  // Variável utilizada para armazenar o cliente com a maior compra única no ano de 2016
  let client = {};
  let biggestTotalValue = 0;
  purchases.forEach((purchase) => {
    if (purchase.data.includes("2016")) {
      if (biggestTotalValue < purchase.valorTotal) {
        biggestTotalValue = purchase.valorTotal;
        client = purchase;
      }
    }
  });
  clients.forEach((c) => {
    if (c.cpf === client.cliente) {
      client = c;
      client.valorTotal = biggestTotalValue;
    }
  });
  // console.log("Cliente com maior compra única no último ano (2016)", client);
};

// Função para separar os clientes mais fieis
const mostLoyalCustomers = (clients, purchases) => {
  // Array de objetos que armazena o número de compras por cliente
  let purchasesAmount = [];
  clients.forEach((client) => {
    let amount = 0;
    purchases.forEach((purchase) => {
      if (purchase.cliente === client.cpf) {
        amount += 1;
      }
    });
    purchasesAmount.push({
      ...client,
      numeroCompras: amount,
    });
  });

  // Ordena o array de objetos por meio da chave numeroCompras de maneira decrescente
  purchasesAmount.sort((a, b) => {
    if (a.numeroCompras < b.numeroCompras) return 1;
    if (a.numeroCompras > b.numeroCompras) return -1;
    return 0;
  });
  // console.log("Clientes mais fieis", purchasesAmount);
};

export default handleClientsPurchases;
