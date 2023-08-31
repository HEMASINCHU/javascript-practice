document.getElementById("calculateBtn").addEventListener("click", calculateBMI);

function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (!isNaN(weight) && !isNaN(height) && height > 0) {
    const bmi = weight / (height * height);
    document.getElementById("bmiResult").textContent = `Your BMI: ${bmi.toFixed(
      2
    )}`;
  } else {
    document.getElementById("bmiResult").textContent =
      "Please enter valid weight and height.";
  }
}
