//carregando arquivo JSON
const dados = require("./cliente.json")

// mostrando dados do arquivo
console.log(dados)
console.log(typeof dados)

// transformando JSON em string
const dadosString = JSON.stringify(dados)
console.log(dadosString)

// transformando string em JSON
const cliente = JSON.parse(dadosString)
console.log(cliente.nome)