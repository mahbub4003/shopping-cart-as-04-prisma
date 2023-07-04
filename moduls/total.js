import { cartItems } from "./cart.js";

const totalAmaunt = () => {
  const totalAmauntElement = document.getElementById("total-amaunt");
  const totalQty = cartItems.reduce(
    (prev, pres) => prev + pres.Price * pres.qty,
    0
  );
  totalAmauntElement.innerHTML = `${totalQty} TK`;
};

const totalQty = () => {
  const totalQtyElement = document.getElementById("total-qty");
  const total = cartItems.reduce((prev, pres) => prev + pres.qty, 0);
  totalQtyElement.innerHTML = `${total} pcs`;
};

const clearCart = () => {
  cartTable.innerHTML = "";
  cartItems;
  totalAmaunt();
  totalQty();
};
export { totalAmaunt, totalQty, clearCart };
