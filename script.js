"use strict";
let total = 0;
let totalParagraph = document.querySelector(".total");
let cola = document.querySelector(".cola");
let peanuts = document.querySelector(".peanuts");
let chocolate = document.querySelector(".chocolate");
let gummies = document.querySelector(".gummies");
cola.addEventListener("click", () => {
  total += 2;
  totalParagraph.textContent = `Total$${total}`;
});
peanuts.addEventListener("click", () => {
  total += 3;
  totalParagraph.textContent = `Total$${total}`;
});
chocolate.addEventListener("click", () => {
  total += 4;
  totalParagraph.textContent = `Total$${total}`;
});

gummies.addEventListener("click", () => {
  total += 6;
  totalParagraph.textContent = `Total$${total}`;
});
let newTotal = 0;
let newTotalParagraph = document.querySelector(".new-total");

let makeMoney = document.querySelector(".make-money");

makeMoney.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(makeMoney);
  let typeOfcoin = formData.get("coins");
  let amount = formData.get("amount");
  console.log(typeOfcoin);
  console.log(amount);

  for (let i = amount; i > 0; i--) {
    let coinDisplay = document.createElement("div");
    let coinParagraph = document.createElement("p");
    coinParagraph.classList.add("myCoin");
    coinParagraph.textContent = typeOfcoin;
    coinDisplay.append(coinParagraph);
    newTotalParagraph.append(coinDisplay);
    console.log(i);
  }
});
