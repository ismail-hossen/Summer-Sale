// working with coupon apply button
document.getElementById("apply-btn").addEventListener("click", (e) => {
  const totalPrice = document.getElementById("total-price").innerText;
  const total = document.getElementById("total");
  const discount = document.getElementById("discount");
  const applyBtn = document.getElementById("apply-btn");
  const coupon = document.getElementById("coupon").innerText;
  const getCoupon = document.getElementById("get-coupon");

  if (
    getCoupon.value === coupon &&
    applyBtn.innerText != "Applied" &&
    parseFloat(totalPrice) >= 200
  ) {
    applyBtn.innerText = "Applied";
    applyBtn.classList.remove("bg-[#e527b2]", "cursor-pointer");
    applyBtn.classList.add("bg-[#e527b25d]", "cursor-not-allowed");
  } else {
    applyBtn.setAttribute("disabled", "");
  }

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
  const applyBtn = document.getElementById("apply-btn");
  const total = document.getElementById("total");
  const makePurchase = document.getElementById("make-purchase");

  const getItemName = document.getElementById(itemName);
  const itemPrice = document.getElementById(iPrice);

  const cal =
    parseFloat(totalPrice.innerText) + parseFloat(itemPrice.innerText);
  totalPrice.innerText = cal.toFixed(2);
  total.innerText = cal.toFixed(2);

  if (cal > 0) {
    makePurchase.removeAttribute("disabled");
    makePurchase.classList.remove("bg-[#e527b25d]", "cursor-not-allowed");
    makePurchase.classList.add("bg-[#e527b2]", "cursor-pointer");
  }

  if (cal >= 200 && applyBtn.innerText != "Applied") {
    applyBtn.removeAttribute("disabled");
    applyBtn.classList.remove("bg-[#e527b25d]", "cursor-not-allowed");
    applyBtn.classList.add("cursor-pointer", "bg-[#e527b2]");
  }

  const name = document.createElement("h3");
  name.innerText = `${addItemsDiv.childElementCount + 1}. ${
    getItemName.innerText
  }`;

  addItemsDiv.appendChild(name);
}

// Modal close button
document.getElementById("modal-close-btn").addEventListener("click", (e) => {
  const totalPrice = document.getElementById("total-price");
  const total = document.getElementById("total");
  const discount = document.getElementById("discount");
  const getAddEle = document.getElementById("add-items");
  const makePurchase = document.getElementById("make-purchase");
  const applyBtn = document.getElementById("apply-btn");

  getAddEle.innerHTML = "";
  totalPrice.innerText = "00";
  total.innerText = "00";
  discount.innerText = "00";

  makePurchase.classList.remove("bg-[#e527b2]", "cursor-pointer");
  makePurchase.classList.add("bg-[#e527b25d]", "cursor-not-allowed");
  makePurchase.setAttribute("disabled", "");

  if (parseFloat(totalPrice.innerText) == 0) {
    applyBtn.setAttribute("disabled", "");
    applyBtn.classList.remove("bg-[#e527b2]", "cursor-pointer");
    applyBtn.classList.add("bg-[#e527b25d]", "cursor-not-allowed");
  }

  e.stopPropagation();
});

// Working with card 1
document.getElementById("getCardEle1").addEventListener("click", (e) => {
  calAndAddItem("item-name1", "item-price1");
  e.stopPropagation();
});

// Working with card 2
document.getElementById("getCardEle2").addEventListener("click", (e) => {
  calAndAddItem("item-name2", "item-price2");
  e.stopPropagation();
});

// Working with card 3
document.getElementById("getCardEle3").addEventListener("click", (e) => {
  calAndAddItem("item-name3", "item-price3");
  e.stopPropagation();
});

// Working with card 4
document.getElementById("getCardEle4").addEventListener("click", (e) => {
  calAndAddItem("item-name4", "item-price4");
  e.stopPropagation();
});

// Working with card 5
document.getElementById("getCardEle5").addEventListener("click", (e) => {
  calAndAddItem("item-name5", "item-price5");
  e.stopPropagation();
});

// Working with card 6
document.getElementById("getCardEle6").addEventListener("click", (e) => {
  calAndAddItem("item-name6", "item-price6");
  e.stopPropagation();
});

// Working with card 7
document.getElementById("getCardEle7").addEventListener("click", (e) => {
  calAndAddItem("item-name7", "item-price7");
  e.stopPropagation();
});

// Working with card 8
document.getElementById("getCardEle8").addEventListener("click", (e) => {
  calAndAddItem("item-name8", "item-price8");
  e.stopPropagation();
});

// Working with card 9
document.getElementById("getCardEle9").addEventListener("click", (e) => {
  calAndAddItem("item-name9", "item-price9");
  e.stopPropagation();
});
