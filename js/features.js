// show the cashout form
document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", function () {
    // show cashout form clicked
    document.getElementById("cash-out-form").classList.remove("hidden");

    // hide the cashout form

    document.getElementById("add-money-form").classList.add("hidden");
  });

// show add money form and hide the cashout form

document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").classList.remove("hidden");

    document.getElementById("cash-out-form").classList.add("hidden");
  });
