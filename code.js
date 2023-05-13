const white = document.querySelectorAll('.white');
const grey = document.querySelectorAll('.grey');
const red = document.querySelectorAll('.red');
white.forEach(white => {
    white.addEventListener('mouseover', () => {
        white.style['background-color'] = 'rgb(215, 215, 215)';
    });
    white.addEventListener('mouseout', () => {
        white.style['background-color'] = 'buttonface';
    });
});
grey.forEach(grey => {
    grey.addEventListener('mouseover', () => {
        grey.style['background-color'] = 'rgb(182, 182, 182)';
    });
    grey.addEventListener('mouseout', () => {
        grey.style['background-color'] = 'rgb(207, 207, 207)';
    });
});
red.forEach(red => {
    red.addEventListener('mouseover', () => {
        red.style['background-color'] = 'rgb(210, 137, 187)';
    });
    red.addEventListener('mouseout', () => {
        red.style['background-color'] = 'rgb(223, 158, 202)';
    });
});
const inputB = document.querySelectorAll('.input');
inputB.forEach(inputB => {
    inputB.addEventListener('click', () => {
        return inputButton(inputB.textContent);
    })
})
function inputButton (input) {
    console.log(input);
    const screen = document.getElementById('bot');
    const screenT = document.getElementById('top');
    if (input == "C") {
        screen.textContent = 0;
        screenT.textContent = 0;
    }
    else if (input == "del") {
        if (screen.textContent == "0") {
        }
        else if (screen.textContent.length == 1) {
            screen.textContent = "0";
        }
        else {
            screen.textContent = screen.textContent.slice(0, -1);
        }
        return;
        }
        else if (input == '.' && screen.textContent.includes('.')) {
            return;
        }
        else if (input == '.' && screen.textContent == 0) {
            screen.textContent = "0.";
        }
        else if (input == '+' || input == '–'|| input == '÷'|| input == 'x' || input == '=') {
            if (input == '+') {
                return add();
            }
            if (input == 'x') {
                return multiply();
            }
            if (input == '–') {
                return subtract();
            }
            if (input == '÷') {
                return divide();
            }
            if (input == '=') {
                return operate();
            }
        } else if (screen.textContent.length > 9) {
        }
        else {
            return screenInput(input);
        }
    }
    function screenInput (input) {
        const screen = document.getElementById('bot');
        if (screen.textContent == "0") {
            screen.textContent = input;
        }
        else {
            screen.textContent = screen.textContent.concat(input);
        }
}
function operate () {   
    const screen = document.getElementById('bot');
    const screenT = document.getElementById('top');
    if (typeof screenT.textContent.charAt(screenT.textContent.length - 1) !== 'number') {
        if (screenT.textContent.charAt(screenT.textContent.length - 1) == "+") {
            add();
        }
        if (screenT.textContent.charAt(screenT.textContent.length - 1) == "–") {
            subtract();
        }
        if (screenT.textContent.charAt(screenT.textContent.length - 1) == "x") {
            multiply();
        }
        if (screenT.textContent.charAt(screenT.textContent.length - 1) == "÷") {
            divide();
        }
    }
}
function add () { 
    const screen = document.getElementById('bot');
    const screenT = document.getElementById('top');
    if (screenT.textContent == "0") {
        screenT.textContent = screen.textContent.concat(" +");
        screen.textContent = 0;
    }
    else if (typeof screenT.textContent.charAt(screenT.textContent.length - 1) !== 'number') {
        screenT.textContent = Number(screenT.textContent.slice(0, -2)) + Number(screen.textContent) + " +";
        screen.textContent = 0;
    }
    else {
        screenT.textContent = Number(screenT.textContent) + Number(screen.textContent) + " +";
        screen.textContent = 0;
    }
    return;   
}
function subtract () {
    const screen = document.getElementById('bot');
    const screenT = document.getElementById('top');
    if (screenT.textContent == "0") {
        screenT.textContent = screen.textContent.concat(" –");
        screen.textContent = 0;
    }
    else if (typeof screenT.textContent.charAt(screenT.textContent.length - 1) !== 'number') {
        screenT.textContent = Number(screenT.textContent.slice(0, -2)) - Number(screen.textContent) + " –";
        screen.textContent = 0;
    }
    else {
        screenT.textContent = Number(screenT.textContent) - Number(screen.textContent) + " –";
        screen.textContent = 0;
    }
    return;   
}
function multiply () {
    const screen = document.getElementById('bot');
    const screenT = document.getElementById('top');
    if (screenT.textContent == "0") {
        screenT.textContent = screen.textContent.concat(" x");
        screen.textContent = 0;
    }
    else if (typeof screenT.textContent.charAt(screenT.textContent.length - 1) !== 'number') {
        screenT.textContent = Number(screenT.textContent.slice(0, -2)) * Number(screen.textContent) + " x";
        screen.textContent = 0;
    }
    else {
        screenT.textContent = Number(screenT.textContent) * Number(screen.textContent) + " x";
        screen.textContent = 0;
    }
    return;   
}
function divide () {
    const screen = document.getElementById('bot');
    const screenT = document.getElementById('top');
    if (screenT.textContent == "0") {
        screenT.textContent = screen.textContent.concat(" ÷");
        screen.textContent = 0;
    }
    else if (typeof screenT.textContent.charAt(screenT.textContent.length - 1) !== 'number') {
        screenT.textContent = Number(screenT.textContent.slice(0, -2)) / Number(screen.textContent) + " ÷";
        screen.textContent = 0;
    }
    else {
        screenT.textContent = Number(screenT.textContent) / Number(screen.textContent) + " ÷";
        screen.textContent = 0;
    }
    return;   
}