import { cartItems } from "./cart.js";

const totalAmaunt = (input) => {
  const totalAmauntElement = document.getElementById("total-amaunt");
  const totalAmaunt = cartItems.reduce(
    (prev, pres) => prev + pres.Price * pres.qty,
    0
  );
  let value = cartItems.length > 0 ? input.value : 0;
  totalAmauntElement.innerHTML = `${totalAmaunt - value} TK`;
};

const totalQty = () => {
  const totalQtyElement = document.getElementById("total-qty");
  const total = cartItems.reduce((prev, pres) => prev + pres.qty, 0);
  totalQtyElement.innerHTML = `${total} pcs`;
};

export { totalAmaunt, totalQty };
