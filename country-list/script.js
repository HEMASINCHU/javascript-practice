function populateCountryDropdown() {
  const countrySelect = document.getElementById("countrySelect");
  const apiUrl = "https://restcountries.com/v3.1/all";

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      data.forEach((country) => {
        const name = country.name.common;
        const option = document.createElement("option");
        option.value = name;
        option.textContent = name;
        countrySelect.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Error:", error.message);
      const countryInfoContainer = document.getElementById("country-info");
      countryInfoContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

window.addEventListener("load", populateCountryDropdown);

function fetchCountryInfo() {
  const countrySelect = document.getElementById("countrySelect");
  const selectedCountry = countrySelect.value;

  if (!selectedCountry) {
    alert("Please select a country.");
    return;
  }

  const apiUrl = `https://restcountries.com/v3.1/name/${selectedCountry}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      if (data.length === 0) {
        throw new Error("Country not found");
      }

      const country = data[0];
      const name = country.name.common;
      const currencies = Object.values(country.currencies)
        .map((curr) => curr.name)
        .join(", ");
      const capital = country.capital[0];
      const languages = Object.values(country.languages).join(", ");
      const flagUrl = country.flags.png;

      const countryInfoHTML = `
                <h2>${name}</h2>
                <p><strong>Capital:</strong> ${capital}</p>
                <p><strong>Currencies:</strong> ${currencies}</p>
                <p><strong>Languages:</strong> ${languages}</p>
                <img src="${flagUrl}" alt="${name} Flag">
            `;

      const countryInfoContainer = document.getElementById("country-info");
      countryInfoContainer.innerHTML = countryInfoHTML;
    })
    .catch((error) => {
      console.error("Error:", error.message);
      const countryInfoContainer = document.getElementById("country-info");
      countryInfoContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}
