let previousCalculation = "";
let currentCalculation = "";

const functionMap = {
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  sqrt: Math.sqrt,
  log10: Math.log10,
};

function updateHistory() {
  document.getElementById("previousCalculation").textContent =
    "Previous: " + previousCalculation;
  document.getElementById("currentCalculation").textContent =
    "Current: " + currentCalculation;
}

function appendToDisplay(value) {
  document.getElementById("display").value += value;
  currentCalculation = document.getElementById("display").value;
  updateHistory();
}

function appendFunctionToDisplay(funcName) {
  document.getElementById("display").value += `${funcName}(`;
  currentCalculation = document.getElementById("display").value;
  updateHistory();
}

function clearDisplay() {
  document.getElementById("display").value = "";
  currentCalculation = "";
  previousCalculation = "";
  updateHistory();
}

function calculate() {
  const display = document.getElementById("display");
  const expression = display.value;

  try {
    let parsedExpression = expression;
    for (const funcName in functionMap) {
      parsedExpression = parsedExpression
        .split(funcName)
        .join(`functionMap['${funcName}']`);
    }
    const result = eval(parsedExpression);
    previousCalculation = currentCalculation + " = " + result;
    currentCalculation = "";
    display.value = result;
    updateHistory();
  } catch (error) {
    display.value = "Error";
    updateHistory();
  }
}
