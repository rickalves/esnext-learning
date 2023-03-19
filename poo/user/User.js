export default class User{
    constructor(nome, email, nascimento, tipo, ativo=true){
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.tipo = tipo || 'Estudante'
        this.ativo = ativo
    }

    exibirInfos(){
        return `${this.nome}\n${this.email}\n${this.nascimento}\n${this.tipo}`
    }
}
