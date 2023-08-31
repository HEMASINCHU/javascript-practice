document.getElementById("convert").addEventListener("click", function () {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("from").value;
  const toCurrency = document.getElementById("to").value;
  const exchangeRate = getExchangeRate(fromCurrency, toCurrency);
  const convertedAmount = (amount * exchangeRate).toFixed(2);
  const resultElement = document.getElementById("result");
  resultElement.textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
});

function getExchangeRate(fromCurrency, toCurrency) {
  const exchangeRates = {
    eur: {
      usd: 1.09,
      rs: 89.97,
    },
    usd: {
      eur: 0.92,
      rs: 82.78,
    },
    rs: {
      usd: 0.012,
      eur: 0.011,
    },
  };

  return exchangeRates[fromCurrency][toCurrency];
}
