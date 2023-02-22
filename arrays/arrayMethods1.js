// Arrays base para os testes
const notas = [10, 6.5, 8.0, 7.5, 4.5, 3.5];
const nomes = ["ana Julia", "Caio vinicius", "BIA silva", "Rick", "Lara", "mary"];

// percorrendo array com forEach
notas.forEach((e) => {
    console.log(e)
});

//Mapeando arrays com p map
const notasMaisUmPonto = notas.map(n => n + 1)
console.log(notasMaisUmPonto)

//Capitalize todos os elementos do Array nomes
let nomesLower = nomes.map(nome => nome.toLowerCase())
nomesCapitalize = nomesLower.map(nome => nome.split(' ').map(n => n.charAt(0).toUpperCase()+n.slice(1)))
console.log(nomesCapitalize)

//Filtrando arrays com filter: 
notasMenoresQueSeis = notas.filter(n => n < 6)
console.log(notasMenoresQueSeis)

