
const admin = {
    nome: "Rick Alves",
    email: "rick@mail.com",
    nascimento: "20/02/1994",
    tipo: "admin",
    criarCurso: function(){
        console.log("Curso foi criado!");
    }
}

const user = {
    nome: "Larissa",
    email: "larissa@mail.com",
    nascimento: "10/04/1997",
    tipo: "estudante",
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

Object.setPrototypeOf(admin, user);

admin.criarCurso();
admin.exibirInfos();
console.log(admin.__proto__.__proto__);