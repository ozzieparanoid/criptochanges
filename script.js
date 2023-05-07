const apiUrl = "https://api.coingecko.com/api/v3";
const currency = "usd";
const toCurrency = "ves";

// Get select element and result span
const cryptoSelect = document.getElementById("crypto-select");
const cryptoAmount = document.getElementById("crypto-amount");
const result = document.getElementById("result");
const lastUpdated = document.getElementById("last-updated");

// Fetch all coins from API and populate select element
fetch(`${apiUrl}/coins/list`)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((coin) => {
      const option = document.createElement("option");
      option.value = coin.id;
      option.text = coin.name;
      cryptoSelect.appendChild(option);
    });
  });

// Function to calculate and display result
function calculateResult() {
  const cryptoId = cryptoSelect.value;
  const amount = cryptoAmount.value;

  fetch(`${apiUrl}/simple/price?ids=${cryptoId}&vs_currencies=${currency},${toCurrency}`)
    .then((response) => response.json())
    .then((data)
