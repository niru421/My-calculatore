let currentInput = "";
let currentOperation = null;
let previousInput = "";

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  currentOperation = null;
  updateDisplay();
}

function setOperation(operator) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculateResult();
  }
  currentOperation = operator;
  previousInput = currentInput;
  currentInput = "";
}

function calculateResult() {
  if (previousInput === "" || currentInput === "") return;
  let result;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  switch (currentOperation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      if (current === 0) {
        alert("Cannot divide by 0");
        clearDisplay();
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  currentOperation = null;
  previousInput = "";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("display").value = currentInput;
}
