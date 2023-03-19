import User from "./User.js";

class Docente extends User{
    constructor(nome, email, nascimento, tipo="Docente", ativo=true){
        super(nome, email, nascimento, tipo, ativo);
    }

    aprovaEstudante(nome, curso){
        return `Estudante ${nome} foi aprovado no curso ${curso}`
    }
}

const novoDocente = new Docente('Lara', 'lara@mail.com', '20/02/1986');


console.log(novoDocente);
console.log(novoDocente.aprovaEstudante('Lais', 'Javascript'));