// estudo de arrays com javascript
const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(4, 5, "Rick");//remove elementos de 4 a 5 e adiciona o Rick

// console.log(nomes)

// conctenando arrays
const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

novaSala = salaJS.concat(salaPython)
// console.log(novaSala)

// Arrays de duas dimensões
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];
// console.log(listaDeAlunosEMedias[0][1], listaDeAlunosEMedias[1][1])