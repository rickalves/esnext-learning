// Arrays base para o teste
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

// Usando a função reduce para fazer cálculos com elementos de array

const mediaSalaJs = salaJS.reduce((acumulador, nota) => acumulador + nota, 0) / salaJS.length

console.log(mediaSalaJs)