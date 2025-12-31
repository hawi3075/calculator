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
    if (currentInput === '0') currentInput = number;
    else currentInput += number;
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
        case '^': computation = Math.pow(prev, current); break;
        default: return;
    }
    currentInput = computation.toString();
    operator = null;
    previousInput = '';
    updateDisplay();
}

// Scientific Logic
function calculateSin() { currentInput = Math.sin(parseFloat(currentInput) * (Math.PI / 180)).toFixed(4); updateDisplay(); }
function calculateCos() { currentInput = Math.cos(parseFloat(currentInput) * (Math.PI / 180)).toFixed(4); updateDisplay(); }
function calculateTan() { currentInput = Math.tan(parseFloat(currentInput) * (Math.PI / 180)).toFixed(4); updateDisplay(); }

function calculateLog() { currentInput = Math.log10(parseFloat(currentInput)).toFixed(4); updateDisplay(); }
function calculateLn() { currentInput = Math.log(parseFloat(currentInput)).toFixed(4); updateDisplay(); }

function calculateFactorial() {
    let n = parseInt(currentInput);
    if (n < 0) currentInput = "Error";
    else {
        let res = 1;
        for (let i = 2; i <= n; i++) res *= i;
        currentInput = res.toString();
    }
    updateDisplay();
}

function calculateSquareRoot() { currentInput = Math.sqrt(parseFloat(currentInput)).toFixed(4); updateDisplay(); }
function calculatePercentage() { currentInput = (parseFloat(currentInput) / 100).toString(); updateDisplay(); }

function clearDisplay() { currentInput = '0'; previousInput = ''; operator = null; updateDisplay(); }
function deleteNumber() { currentInput = currentInput.slice(0, -1) || '0'; updateDisplay(); }