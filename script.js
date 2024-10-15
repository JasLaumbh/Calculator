let display = document.getElementById('display');
let memory = 0;

// Append character to the display
function appendCharacter(char) {
    display.value += char;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Remove last character (backspace)
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculate() {
    try {
        display.value = eval(display.value.replace('^', '**'));
    } catch (error) {
        display.value = 'Error';
    }
}

// Square function
function square() {
    if (display.value) {
        display.value = Math.pow(eval(display.value), 2);
    }
}

// Square root function
function sqrt() {
    if (display.value) {
        display.value = Math.sqrt(eval(display.value));
    }
}

// Sin function
function sin() {
    if (display.value) {
        display.value = Math.sin(toRadians(eval(display.value)));
    }
}

// Cos function
function cos() {
    if (display.value) {
        display.value = Math.cos(toRadians(eval(display.value)));
    }
}

// Tan function
function tan() {
    if (display.value) {
        display.value = Math.tan(toRadians(eval(display.value)));
    }
}

// Convert degrees to radians
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Memory operations
function memoryPlus() {
    if (display.value) {
        memory += parseFloat(eval(display.value));
    }
}

function memoryMinus() {
    if (display.value) {
        memory -= parseFloat(eval(display.value));
    }
}

function memoryRecall() {
    display.value = memory;
}

function memoryClear() {
    memory = 0;
}
