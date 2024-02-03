let display = document.getElementById('display');

function displayFunction(input) {
  display.value += input;
}

function clearFunction() {
  display.value = '';
}

function calculatorFunction() {
  try {
    display.value = eval(display.value); // eval is built-in javascript calculator function;
  } catch (error) {
    display.value = "Error";
  }
}