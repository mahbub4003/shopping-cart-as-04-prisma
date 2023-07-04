import { totalAmaunt, totalQty } from "./total.js";

let cartItems = [];

const input = document.getElementById("input");
input.addEventListener("focusout", () => totalAmaunt(input));

const cartTable = document.getElementById("cartTable");

const addToCart = (item) => {
  const foundObject = cartItems?.find((obj) => obj.ProductId === item.id);

  if (foundObject) {
    alert("This item is already in the cart");
  } else {
    cartItems.push({
      productName: item.productName,
      Price: item.Price,
      ProductId: item.id,
      qty: item.qty,
    });
  }
  newCartItem();
  totalAmaunt(input);
  totalQty();
};

function newCartItem() {
  cartTable.innerHTML = "";
  cartItems.forEach((item) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = item.productName;
    row.appendChild(nameCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = `${item.Price} TK`;
    row.appendChild(priceCell);

    const qty = document.createElement("td");
    qty.textContent = `${item.qty}pcs`;
    row.appendChild(qty);

    const totalPriceCell = document.createElement("td");
    totalPriceCell.textContent = `${item.Price * item.qty} TK`;
    row.appendChild(totalPriceCell);

    const buttonCell = document.createElement("td");
    const plusButton = document.createElement("button");
    const minusButton = document.createElement("button");
    plusButton.textContent = "+";
    minusButton.textContent = "-";
    plusButton.addEventListener("click", () => {
      item.qty += 1;
      qty.textContent = `${item.qty}pcs`;
      totalPriceCell.textContent = `${item.Price * item.qty} TK`;
      totalAmaunt(input);
      totalQty();
    });
    minusButton.addEventListener("click", () => {
      if (item.qty > 1) {
        item.qty -= 1;
        qty.textContent = `${item.qty}pcs`;
        totalPriceCell.textContent = `${item.Price * item.qty} TK`;
      } else {
        alert("Must have a minimum of 1 item");
      }
      totalAmaunt(input);
      totalQty();
    });
    buttonCell.appendChild(plusButton);
    buttonCell.appendChild(minusButton);
    row.appendChild(buttonCell);

    const removeButtonCell = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      const removeItm = () => {
        cartItems = cartItems.filter((obj) => obj.ProductId !== item.ProductId);
        newCartItem();
        totalAmaunt(input);
        totalQty();
      };
      removeItm();
    });
    removeButtonCell.appendChild(removeButton);
    row.appendChild(removeButtonCell);

    cartTable.appendChild(row);
  });
}
const clearCart = () => {
  cartTable.innerHTML = "";
  cartItems = [];
  totalAmaunt(input);
  totalQty();
  input.value = "";
};

export { addToCart, cartItems, clearCart };
