//Ejercicio 1:
document.write("<h1>Ejercicio 1:</h1>")
var numero = prompt("Ingresa un número:");
document.write("<table border='5'>");
document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

// Iterar desde 1 hasta el número dado
for (var i = 1; i <= numero; i++) {
    var cuadrado = i * i;
    var cubo = i * i * i;

    // Escribir fila de la tabla
    document.write("<tr>");
    document.write("<td>" + i + "</td>");
    document.write("<td>" + cuadrado + "</td>");
    document.write("<td>" + cubo + "</td>");
    document.write("<tr>");
}

document.write("</table>");

// Ejercicio 2:
document.write("<h1>Ejercicio 2:</h1>");
// dos números aleatorios entre 1 y 10
var num1 = Math.floor(Math.random() * 10) + 1;
var num2 = Math.floor(Math.random() * 10) + 1;

// sumarlos
var sumaCorrecta = num1 + num2;

// guarda tiempo
var tiempoInicio = new Date();
var respuestaUsuario = prompt("Ingresa el resultado de la suma de "+ num1 + " + "+ num2 + ":");

// calcular tiempo
var tiempoFin = new Date();
var tiempoTranscurrido = tiempoFin - tiempoInicio;

// milisegundos a segundos
tiempoTranscurrido = tiempoTranscurrido/1000;

// verifica respuesta usuario
if (parseInt(respuestaUsuario) === sumaCorrecta) {
    document.write("Correcto :) <br>");
} else {
    document.write("Incorrecto :( <br>");
}

document.write("Tiempo transcurrido: " + tiempoTranscurrido + " segundos.");

// Ejercicio 3:
document.write("<h1>Ejercicio 3:</h1>");
// crear arreglo
let arreglo = [5, 0, 8, -8, 4, 10, -3, 8, 11, -4, 0]
let [negativos, ceros, positivos] = contador(arreglo);


function contador(arr) {
    let negativos = 0;
    let ceros = 0;
    let positivos = 0;

    arr.forEach(num => {
        if (num < 0) {
            negativos++;
        } else if (num === 0) {
            ceros++;
        } else {
            positivos++;
        }
    });

    return [negativos, ceros, positivos];
}

document.write("Negativos: ", negativos, "<br>");
document.write("Ceros: ", ceros, "<br>");
document.write("Positivos: ", positivos, "<br>");

// Ejercicio 4:
document.write("<h1>Ejercicio 4:</h1>");

function CalcularPromedios(matriz) {
    let promedios = [];

    for (let fila of matriz) {
        let suma = fila.reduce((total, num) => total + num, 0);
        let promedio = suma / fila.length;
        promedios.push(promedio);
    }

    return promedios;
}


let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let promedios = CalcularPromedios(matriz);

document.write("Promedios por fila:<br>", promedios);


// Ejercicio 5:
document.write("<h1>Ejercicio 5:</h1>");
function inverso(numero_ejercicio5) {
    // convertir el número a cadena y luego a un arreglo de caracteres
    let digitos = numero_ejercicio5.toString().split('');
    
    // invertir el arreglo de caracteres y unirlos nuevamente 
    let numeroInverso = parseInt(digitos.reverse().join(''));
    
    return numeroInverso;
}

let numero_ejercicio5 = 987654;
let numeroInverso = inverso(numero_ejercicio5);
document.write("Original: ", numero_ejercicio5, "<br>");
document.write("Inverso: ", numeroInverso, "<br>");

// Ejercicio 6:
document.write("<h1>Ejercicio 6:</h1>");
document.write("<p>Para este ejercicio decidi hacer algo relacionado al fútbol, que es para medir tu desempeño en la cancha por lo que se le preguntara al usuario sobre minutos jugados, goles, asistencias, tarjetas, etc. Y con esto dar una calificación del 1-5 siendo 5 el desempeño mas alto.</p>")
function calcularCalificacionDesempeno() {
    let minutosJugados = parseInt(prompt("Minutos jugados:"));
    let goles = parseInt(prompt("Goles marcados:"));
    let asistencias = parseInt(prompt("Asistencias realizadas:"));
    let tarjetas = parseInt(prompt("Tarjetas recibidas:"));

    // Calcular la calificación de desempeño
    let calificacion = 0;
    
    if (minutosJugados >= 75) {
        calificacion += 2; // Bonificación por jugar más de 90 minutos
    } else if (minutosJugados >= 65) {
        calificacion += 1; // Bonificación por jugar al menos 60 minutos
    }
    
    calificacion += goles * 1; 
    calificacion += asistencias * 0.5; 
    calificacion -= tarjetas * 0.5; 

    // asegurarse del rango 1-5
    calificacion = Math.max(1, Math.min(5, calificacion));

    return calificacion;
}

let calificacionFinal = calcularCalificacionDesempeno();
document.write("Tu calificación de desempeño es: ", calificacionFinal)