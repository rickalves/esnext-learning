const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeENota(aluno){
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);

        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a média ${mediaDoAluno}.`);

    } else {
        console.log("Aluno não encontrado!");
    }
}

// exibeNomeENota("Ana");

//Destructuring arrays
const [alunosNovos] = listaDeAlunosEMedias

const [aluno1, aluno2] = alunosNovos

// console.log(aluno1, aluno2)

// for in vs for of
const numeros = [100, 200, 300, 400, 500, 600];

// for(let n in numeros){
//     console.log(numeros[n])
// }

for(let n of numeros){
    console.log(n)
}