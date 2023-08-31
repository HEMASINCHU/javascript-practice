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
    usd: {
      eur: 0.85,
      gbp: 0.75,
    },
    eur: {
      usd: 1.18,
      gbp: 0.88,
    },
    gbp: {
      usd: 1.33,
      eur: 1.14,
    },
  };

  return exchangeRates[fromCurrency][toCurrency];
}
