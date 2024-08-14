// Calculated rates
let usdToEur;
let eurToUsd;

window.onload = function() {
  const apiKey = '718472b4dc58f4e8914e258d';
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

  fetch(url)
      .then(response => response.json())
      .then(data => {
          // Extract USD and EUR rates
          const usdRate = data.conversion_rates.USD;
          const eurRate = data.conversion_rates.EUR;

          // Calculate conversion rate from USD to EUR
          usdToEur = eurRate / usdRate;
          document.getElementById("usdToEur").innerHTML = "€" + usdToEur.toFixed(2);
          // Calculate conversion rate from EUR to USD
          eurToUsd = usdRate / eurRate;
          document.getElementById("eurToUsd").innerHTML = "$" + eurToUsd.toFixed(2);
      })
      .catch(error => {
          console.error('Error fetching data:', error);
      });
};

// Convert Euro to USD
function eur_to_usd() {
  let amount = document.getElementById("convert-eur").value;
  document.getElementById("calculated-usd").value = (amount * eurToUsd).toFixed(2);
};

// Convert USD to Euro
function usd_to_eur() {
  let amount = document.getElementById("convert-usd").value;
  document.getElementById("calculated-eur").value = (amount * usdToEur).toFixed(2);
};