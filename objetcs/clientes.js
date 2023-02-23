const clientes = require("./clientes.json")

function encontrar_cliente(chave, valor){
    if(typeof(clientes[chave] === 'object')){
        return clientes.find((cliente) => cliente[chave].logradouro === valor)
    }else{
        return clientes.find((cliente) => cliente[chave].includes(valor))
    }
    
}

function apartamentosSemComplemento(){
    return clientes.filter((cliente) => {
        return cliente.endereco.apartamento && !cliente.endereco.hasOwnProperty("complemento")
    })
}

function ordenarClientes(key="nome"){
    return clientes.sort((a, b) =>{
        if(a[key] < b[key]){
            return -1
        }
        if(a[key] > b[key]){
            return 1
        }
        return 0
    })
}
// const cliente_busca = encontrar_cliente("nome", "Amye")
// console.log(cliente_busca)

// console.log(apartamentosSemComplemento())
console.log(ordenarClientes())