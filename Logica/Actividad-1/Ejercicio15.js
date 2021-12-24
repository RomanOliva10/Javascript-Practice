let n1 = prompt("Ingrese un numero: ")
let n2 = prompt("Ingrese otro numero: ")
let n3 = prompt("Ingrese otro numero: ")

const numeros = [n1, n2, n3];

prueba = numeros.sort(function(a, b){return a - b});

document.write(prueba);