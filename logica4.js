function isPositiveInteger(value) {
    const number = Number(value);
    return Number.isInteger(number) && number > 0;
}

function getFibonacciSeries(n) {
    let fibSeries = [];
    let a = 0, b = 1;

    for (let i = 0; i < n; i++) {
        fibSeries.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }

    return fibSeries;
}

function requestNumber() {
    let input;
    do {
        input = prompt("Introduce un número:");
        if (!isPositiveInteger(input)) {
            alert("Por favor, introduce un número válido.");
            console.error("Error: La entrada no es un número válido.");
        }
    } while (!isPositiveInteger(input));

    return parseInt(input);
}

function displayFibonacciSeries() {
    const number = requestNumber();
    const fibSeries = getFibonacciSeries(number);
    console.log(fibSeries.join(', '));

    const resultDiv = document.getElementById('result');
    resultDiv.textContent = fibSeries.join(', ');
}

window.onload = function() {
    displayFibonacciSeries();
};
