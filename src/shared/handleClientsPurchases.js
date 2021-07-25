const handleClientsPurchases = (clients, purchases, option) => {
  const options = {
    1: biggestTotalPurchaseValues(clients, purchases),
    2: biggestPurchaseClient(clients, purchases),
    3: mostLoyalCustomers(clients, purchases),
  };
  return options[option];
};

// Função para ajustar o código do cliente (ficar compatível com o CPF)
export const adjustClientCode = (purchases) => {
  purchases.forEach((purchase) => {
    let length = purchase.cliente.length;
    let lastDigits = purchase.cliente.slice(length - 2, length);
    purchase.cliente = `000.000.000-${lastDigits}`;
  });
  return purchases;
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
  return totalPurchaseValues;
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
      c.itens = client.itens;
      client = c;
      client.valorTotal = biggestTotalValue;
    }
  });
  return client;
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
  return purchasesAmount;
};

export default handleClientsPurchases;
