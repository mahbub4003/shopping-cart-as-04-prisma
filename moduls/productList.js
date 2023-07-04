import { addToCart } from "./cart.js";

const productItems = [
  {
    id: 1,
    productName: "Sony Tv",
    Price: 20001,
    qty: 1,
  },
  {
    id: 2,
    productName: "Walton Tv",
    Price: 20002,
    qty: 1,
  },
  {
    id: 3,
    productName: "Sony Mobile",
    Price: 20003,
    qty: 1,
  },
  {
    id: 4,
    productName: "Samsung Tv",
    Price: 20004,
    qty: 1,
  },
];

const listTable = document.getElementById("productListTable");

function productList() {
  productItems.forEach((item) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = item.productName;
    row.appendChild(nameCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = item.Price;
    row.appendChild(priceCell);

    const buttonCell = document.createElement("td");
    const addButton = document.createElement("button");
    addButton.classList.add("btn1");
    addButton.textContent = "Add To Cart";
    addButton.addEventListener("click", () => {
      addToCart(item);
    });
    buttonCell.appendChild(addButton);
    row.appendChild(buttonCell);

    listTable.appendChild(row);
  });
}

export default productList;
