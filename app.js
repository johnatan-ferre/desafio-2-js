//Desafío complementario Arrays

const lugares = [];
let totalLugares = 8;

do {
    let nombreIngresado = prompt("Ingrese nombre del lugar");
    lugares.push(nombreIngresado.toUpperCase());
    console.log(lugares);
} while (lugares.length < totalLugares);

alert("Su lista de lugares es: " + "\n" + lugares.join("\n"));