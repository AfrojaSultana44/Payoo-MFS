document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoneyInput = document.getElementById("input-add-money").value;
    const pinNumberInput = document.getElementById("input-pin-number").value;
    // console.log(addMoneyInput, pinNumberInput);

    if (pinNumberInput === "1234") {
      console.log("Added money to your account");

      const balance = document.getElementById("account-balance").innerText;

      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);
      console.log(balanceNumber)

      const newBalance = addMoneyNumber + balanceNumber;
      console.log(newBalance);

      document.getElementById("account-balance").innerText = newBalance;
    } else {
      console.log("Failed to add money! Please try again");
    }
  });
