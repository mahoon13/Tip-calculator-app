const body = document.querySelector("body");
const billInput = document.querySelector("#bill");
const peopleInput = document.querySelector("#people");
const customTipInput = document.querySelector(".custom-tip-input");

var tipAmount = document.querySelector(".tip-amount");
var totalAmount = document.querySelector(".total-amount");

let tips = document.querySelector("#tips").querySelectorAll(".tip-btn");

var bill = null;
var tip = null;
var people = null;

billInput.addEventListener("keyup", () => {
  bill = Number(billInput.value);
  calculate();
});
peopleInput.addEventListener("keyup", () => {
  people = Number(peopleInput.value);
  calculate();
});
customTipInput.addEventListener("keyup", () => {
  deleteSelectedTipBtn();
  if (customTipInput.value > 100) {
    customTipInput.value = 100;
  } else if (customTipInput.value < 0) {
    customTipInput.value = 0;
  }

  tip = Number(customTipInput.value);
  calculate();
});

function setTip(element, percent) {
  deleteSelectedTipBtn();
  element.classList.add("selected");
  tip = percent;
  calculate();
}

function calculate() {
  if (bill && tip && people) {
    let tipVal = Math.round((bill / people) * tip) / 100;
    let totalVal = Math.round((tipVal + bill / people) * 100) / 100;

    tipAmount.innerHTML = "$" + tipVal;
    totalAmount.innerHTML = "$" + totalVal;
  } else if (bill && people) {
    tipAmount.innerHTML = "$0.00";
    let totalVal = Math.round((bill / people) * 100) / 100;
    totalAmount.innerHTML = "$" + totalVal;
  }
}

function resetCalculator() {
  bill = null;
  tip = null;
  person = null;
  deleteSelectedTipBtn();
  tipAmount.innerHTML = "$0.00";
  totalAmount.innerHTML = "$0.00";
  billInput.value = null;
  peopleInput.value = null;
  customTipInput.value = null;
}

function deleteSelectedTipBtn() {
  tips.forEach((tipBtn) => {
    if (tipBtn.classList.contains("selected")) {
      tipBtn.classList.remove("selected");
    }
  });
}
