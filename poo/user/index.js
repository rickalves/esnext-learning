import Admin from "./Admin.js"
import Docente from "./Docente.js"

const novoDocente = new Docente('Lara', 'lara@mail.com', '20/02/1986');

console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante('Fernanda', 'Javascript'));

console.log('------------------------------------------------------')
const userAdmin = new Admin('Maria', 'maria@mail.com', '20/02/1986');

console.log(userAdmin.exibirInfos());
userAdmin.nome = 'Rosa'
console.log(userAdmin.nome);
console.log(userAdmin.criaCurso('React', 20));