let currentInput = '0';
let previousInput = '';
let operator = null;

const currentDisplay = document.getElementById('current-operand');
const previousDisplay = document.getElementById('previous-operand');

function updateDisplay() {
    currentDisplay.innerText = currentInput;
    previousDisplay.innerText = previousInput + (operator || "");
}

function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return;
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function chooseOperator(op) {
    if (currentInput === '') return;
    if (previousInput !== '') compute();
    operator = op;
    previousInput = currentInput;
    currentInput = '';
    updateDisplay();
}

function compute() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;

    switch (operator) {
        case '+': computation = prev + current; break;
        case '-': computation = prev - current; break;
        case '×': computation = prev * current; break;
        case '÷': computation = prev / current; break;
        default: return;
    }

    currentInput = computation.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operator = null;
    updateDisplay();
}

function deleteNumber() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') currentInput = '0';
    updateDisplay();
}