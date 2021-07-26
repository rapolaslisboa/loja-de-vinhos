// Função para ajustar o código do cliente (ficar compatível com o CPF)
const adjustClientCode = (purchases) => {
  purchases.forEach((purchase) => {
    let length = purchase.cliente.length;
    let lastDigits = purchase.cliente.slice(length - 2, length);
    purchase.cliente = `000.000.000-${lastDigits}`;
  });
  return purchases;
};

module.exports = adjustClientCode;
