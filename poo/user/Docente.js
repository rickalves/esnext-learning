import User from "./User.js";

export default class Docente extends User{
    constructor(nome, email, nascimento, tipo="Docente", ativo=true){
        super(nome, email, nascimento, tipo, ativo);
    }

    aprovaEstudante(nome, curso){
        return `Estudante ${nome} foi aprovado no curso ${curso}`
    }
}