export default class User{
    #nome
    #email
    #nascimento
    #tipo
    #ativo
    constructor(nome, email, nascimento, tipo, ativo=true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#tipo = tipo || 'Estudante'
        this.#ativo = ativo
    }

    // getters
    get nome(){
        return this.#nome
    }

    get email(){
        return this.#email
    }

    get nascimento(){
        return this.#nascimento
    }

    get tipo(){
        return this.#tipo
    }

    get ativo(){
        return this.#ativo
    }
    
    // setters
    set nome(nome){
        this.#nome = nome
    }

    set email(email){
        this.#email = email
    }

    set nascimento(nascimento){
        this.#nascimento = nascimento
    }

    set tipo(tipo){
        this.#tipo = tipo
    }
    
    set ativo(ativo){
        this.#ativo = ativo
    }
    
    exibirInfos(){
        return `${this.nome}\n${this.email}\n${this.nascimento}\n${this.tipo}`
    }
}
