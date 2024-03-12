const taxRateInput = document.getElementById("taxRate");

taxRateInput.addEventListener("change", function () {
  let taxRate = parseFloat(this.value);

  if (isNaN(taxRate) || taxRate < 0.01 || taxRate > 0.99) {
    alert("Tax rate must be between 0.01 and 0.99");
    this.value = ""; // Clear the input
  }
});

taxRateInput.addEventListener("keydown", function (event) {
  if (event.key === "Backspace" && this.value.length === 1) {
    this.value = "0.01"; // Set the value to the minimum if the user deletes all characters
  }
});

document.getElementById("hourForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let hourlyWage = parseFloat(document.getElementById("hourlyWage").value);
    let hours = parseFloat(document.getElementById("hours").value);
    let taxRate = parseFloat(document.getElementById("taxRate").value);

    // If hourly wage and hours are negative this alert will appear
    if (hourlyWage < 0 || hours < 0) {
      alert("All inputs must be positive");
      return;
    }

    const inputData = { hourlyWage, hours, taxRate }; // Create an object to hold the input data

    const total = hours * hourlyWage; // Calculate the total earnings before taxes
    const taxedCost = total - total * taxRate; // Calculate the total earnings after taxes

    // Clears previous error message and result
    document.getElementById("errorStatement").innerText = "";
    document.getElementById("totalHours").innerText = "";
    document.getElementById("afterTax").innerText = "";

    // Check if any input values are invalid and display an error message
    if (inputData.taxRate < 0) {
      document.getElementById("errorStatement").innerText = "Please input a valid tax rate";
    }
    // If all input values are valid, display the total earnings before and after taxes
    else {
      document.getElementById("totalHours").innerText = `Total Amount: $${total.toFixed(2)}`;
      document.getElementById("afterTax").innerText = `After Taxes: $${taxedCost.toFixed(2)}`;
    }
  });
