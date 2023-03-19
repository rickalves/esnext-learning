import User from "./User.js";

class Admin extends User{
    constructor(nome, email, nascimento, tipo="Admin", ativo=true){
        super(nome, email, nascimento, tipo, ativo);
    }

    criaCurso(nome, vagas){
        return `Curso de ${nome} criado com ${vagas} vagas.`
    }
}

const userAdmin = new Admin('Maria', 'maria@mail.com', '20/02/1986');


console.log(userAdmin);
console.log(userAdmin.exibirInfos());
console.log(userAdmin.criaCurso('React', 20));