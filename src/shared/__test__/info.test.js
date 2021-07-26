const adjustClientCode = require("./adjustClientCode");

test("Ajustar a chave cliente em formato de CPF", () => {
  const array = [
    { id: 1, cliente: "000.000.000.01" },
    { id: 2, cliente: "0000.000.000.02" },
    { id: 3, cliente: "0000.000.000.03" },
  ];
  const expected = [
    { id: 1, cliente: "000.000.000-01" },
    { id: 2, cliente: "000.000.000-02" },
    { id: 3, cliente: "000.000.000-03" },
  ];
  expect(adjustClientCode(array)).toEqual(expected);
});
