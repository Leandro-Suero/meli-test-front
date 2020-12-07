export const ProductConditionConverter = (productCondition) => {
  const conditions = {
    new: "nuevo",
    used: "usado",
  };
  return conditions[productCondition];
};

export const NumberWithThousandMarker = (number, delimiter) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);
};

export const MoneySymbolConverter = (currencyId) => {
  const moneySymbols = {
    ARS: "$",
    USD: "U$S",
    UYU: "$",
    CLP: "$",
    BRL: "R$",
    PYG: "₲",
    BOB: "Bs",
    PEN: "S/",
    COP: "$",
    MXN: "$",
    VES: "Bs.",
    PAB: "B/.",
    CRC: "¢",
    DOP: "$",
    NIO: "C$",
    HNL: "L",
    GTQ: "Q",
  };
  return moneySymbols[currencyId];
};
