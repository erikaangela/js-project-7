
function calculateTipAndTotal() {
  const tipResult = document.getElementById("tipResult");
  const totalResult = document.getElementById("totalResult");
  const billAmount = document.getElementById("mealCost").value;
  let tipPercentage = document.querySelector('input[name="tipPercent"]:checked').value;

  // if (document.querySelector('input[name="tipPercent"]:checked') && document.getElementById("other")) {
  //   tipPercentage = document.getElementById("other").value;
  // }

  let tipAmount = billAmount * tipPercentage;
  let totalAmount = Number(tipAmount) + Number(billAmount);

  tipResult.innerText = `Tip amount: $${tipAmount.toFixed(2)}`;
  tipResult.style.color = "green";
  totalResult.innerText = `Total: $${totalAmount.toFixed(2)}`;
  totalResult.style.color = "green";

  document.getElementById("mealCost").value = "";
}
