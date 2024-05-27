let numero;

do {
    numero = prompt("Introduce un número:");
    if (isNaN(numero)) {
        console.error("Error: La entrada no es un número válido.");
    }
} while (isNaN(numero));

Fibonacci(parseInt(numero));

function Fibonacci(numero) {
    let a = 0, b = 1, c, s = 1;
    console.log(a, b);
    for (let i = 3; i <= numero; i++) {
        c = a + b;
        console.log(c);
        s = s + c;
        a = b;
        b = c;
    }
}
