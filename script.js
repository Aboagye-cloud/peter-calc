const display = document.getElementById('display');
const previousOperand = document.getElementById('previous-operand');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
  previousOperand.innerText = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    if (display.value.trim() === '') return;
    
    // Store previous equation above display
    previousOperand.innerText = display.value + ' =';
    
    // Evaluate math expression
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
    setTimeout(() => {
      display.value = '';
    }, 1200);
  }
}

// Allow typing via computer keyboard
document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.'].includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === 'Enter' || e.key === '=') {
    calculate();
  } else if (e.key === 'Backspace') {
    deleteLast();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});
