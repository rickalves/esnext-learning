import User from "./User.js";

export default class Admin extends User{
    constructor(nome, email, nascimento, tipo="Admin", ativo=true){
        super(nome, email, nascimento, tipo, ativo);
    }

    criaCurso(nome, vagas){
        return `Curso de ${nome} criado com ${vagas} vagas.`
    }
}
