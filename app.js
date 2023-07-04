import { clearCart } from "./moduls/cart.js";
import productList from "./moduls/productList.js";

function app() {
  productList();
  function clear() {
    clearCart();
  }
  document.getElementById("c-btn").addEventListener("click", clear);
}
app();
