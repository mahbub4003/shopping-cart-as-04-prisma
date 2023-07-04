import { cartItems } from "./cart.js";
import { totalAmaunt, totalQty } from "./total.js";

function clearCart() {
  cartTable.innerHTML = "";
  cartItems;
  totalAmaunt();
  totalQty();
}
export default clearCart;
