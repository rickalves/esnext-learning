const user = {
    init: function(nome, email){
        this.nome = nome;
        this.email = email;
    },
    exibirInfos: function(){
        return `Nome:${this.nome}\nEmail:${this.email}`
    }
}

const newUser = Object.create(user);
newUser.init("Rick", "email@mail");
console.log(newUser.exibirInfos());
// console.log(user.isPrototypeOf(newUser));