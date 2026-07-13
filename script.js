const display = document.getElementById('display');

function appendValue(val) {
  if (display.value === 'Error' || display.value === '0') {
    display.value = '';
  }
  display.value += val;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let result = eval(display.value);
    if (result === Infinity || isNaN(result)) {
      display.value = "Error";
    } else {
      display.value = Number(result.toFixed(8));
    }
  } catch (error) {
    display.value = 'Error';
  }
}