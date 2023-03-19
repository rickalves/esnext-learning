function User(nome, email){
    this.nome = nome;
    this.email = email;
    this.tipo = "Estudante";

    this.exibirInfos = function(){
        console.log('--------------------------------------')
        console.log(
            `User:${this.nome}\nEmail:${this.email}\nTipo:${this?.tipo}`
        )
    }
}

function Admin(nome, email){
    User.call(this, nome, email);
    this.tipo = "admin";
}

// Admin.prototype = Object.create(User);

const newUser = new User("Rick", "rick@mail.com");
const adminUser = new Admin("Fernanda", "email@email.com");

adminUser.exibirInfos();
newUser.exibirInfos();
