// get coupon and remove disabled attribute from apply button
document.getElementById("get-coupon").addEventListener("keyup", (e) => {
  const coupon = document.getElementById("coupon").innerText;
  const applyBtn = document.getElementById("apply-btn");
  if (e.target.value == coupon) {
    applyBtn.removeAttribute("disabled");
  } else {
    applyBtn.setAttribute("disabled", true);
  }
  e.stopPropagation();
});

// working with apply button
document.getElementById("apply-btn").addEventListener("click", (e) => {
  const totalPrice = document.getElementById("total-price").innerText;
  const total = document.getElementById("total");
  const discount = document.getElementById("discount");

  const totalCal = (parseFloat(totalPrice) / 100) * 80;
  const discountCal = (parseFloat(totalPrice) / 100) * 20;
  total.innerText = totalCal.toFixed(2);
  discount.innerText = discountCal.toFixed(2);

  e.stopPropagation();
});

//  price calculation function
function calAndAddItem(itemName, iPrice) {
  const addItemsDiv = document.getElementById("add-items");
  const totalPrice = document.getElementById("total-price");
  const total = document.getElementById("total");
  const makePurchase = document.getElementById("make-purchase");

  const getItemName = document.getElementById(itemName);
  const itemPrice = document.getElementById(iPrice);

  const cal =
    parseFloat(totalPrice.innerText) + parseFloat(itemPrice.innerText);
  totalPrice.innerText = cal.toFixed(2);
  total.innerText = cal.toFixed(2);

  if (cal >= 200) {
    makePurchase.removeAttribute("disable");
  }

  const name = document.createElement("h3");
  name.innerText = `${addItemsDiv.childElementCount + 1}. ${
    getItemName.innerText
  }`;

  addItemsDiv.appendChild(name);
}

document.getElementById("getCardEle1").addEventListener("click", (e) => {
  calAndAddItem("item-name1", "item-price1");
  e.stopPropagation();
});

document.getElementById("getCardEle2").addEventListener("click", (e) => {
  calAndAddItem("item-name2", "item-price2");
  e.stopPropagation();
});

document.getElementById("getCardEle3").addEventListener("click", (e) => {
  calAndAddItem("item-name3", "item-price3");
  e.stopPropagation();
});
