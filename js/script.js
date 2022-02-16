// Error Checking Function
function inputCheck(income_input) {
  let value = parseInt(income_input.value);
  if (isNaN(value) || value < 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Wrong Input! Only Positive Integer Suported.",
    });
    return false;
  }

  return true;
}

// Getting inputs and Buttons
let all_inputs = document.querySelectorAll(".calculate-input");
let income = document.getElementById("income");
let food = document.getElementById("food");
let rent = document.getElementById("rent");
let clothes = document.getElementById("clothes");
let save_input = document.getElementById("save");
let calculateBtn = document.getElementById("calculate");
let saveBtn = document.getElementById("saveBtn");
let resultSection = document.getElementById("result");
let savingsSection = document.getElementById("savings");

// Income, Expense
calculateBtn.addEventListener("click", function (e) {
  all_inputs.forEach((item) => {
    let result = inputCheck(item);
    if (result) {
      let totalIncome = parseInt(income.value);
      let totalExpenses =
        parseInt(food.value) + parseInt(rent.value) + parseInt(clothes.value);
      let balance = totalIncome - totalExpenses;
      if (totalIncome < totalExpenses) {
        resultSection.innerHTML = `<div class='bg-red-400 py-2 font-semibold'>Do not waste all your income!!!</div>`;

        setTimeout(function () {
          resultSection.innerHTML = "";
        }, 3000);
      } else {
        resultSection.innerHTML = `<div class='py-2 font-semibold' id='total-expenses'>Total Expenses: ${totalExpenses}</div>
        <div class='py-2 font-semibold' id='total-balance'>Balance: ${balance}</div>
        `;
      }
    }
  });
});

// Savings
saveBtn.addEventListener("click", function (e) {
  let result = inputCheck(save_input);
  if (result) {
    let totalIncome = parseInt(income.value);
    let totalExpenses =
      parseInt(food.value) + parseInt(rent.value) + parseInt(clothes.value);
    let balance = totalIncome - totalExpenses;
    let balanceCheck = document.getElementById("total-balance");
    let savingAmount = (totalIncome * parseInt(save_input.value)) / 100;
    if (balanceCheck == null) {
      savingsSection.innerHTML = `<div class='bg-red-400 py-2 font-semibold'>Calculate Balance First!!!</div>`;

      setTimeout(function () {
        savingsSection.innerHTML = "";
      }, 3000);
    } else {
      savingsSection.innerHTML = `<div class='py-2 font-semibold'>Saving Amount: ${savingAmount}</div>
      <div class='py-2 font-semibold'>Balance: ${balance - savingAmount}</div>
      `;
    }
  }
});
