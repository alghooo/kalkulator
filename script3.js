let currentInput = '';
let currentOperation = '';
let result = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    currentOperation = '';
    result = '';
    document.getElementById('display').value = '';
}

function calculateResult() {
    try {
        result = eval(currentInput);
        document.getElementById('display').value = result;
        currentInput = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function toggleSign() {
    if (currentInput !== '' && currentInput !== 'Error') {
        if (currentInput[0] === '-') {
            currentInput = currentInput.slice(1);
        } else {
            currentInput = '-' + currentInput;
        }
        document.getElementById('display').value = currentInput;
    }
}

function calculateSquareRoot() {
    if (currentInput !== '' && currentInput !== 'Error') {
        const number = parseFloat(currentInput);
        if (number >= 0) {
            result = Math.sqrt(number);
            document.getElementById('display').value = result;
            currentInput = result.toString();
        } else {
            document.getElementById('display').value = 'Error';
        }
    }
}
