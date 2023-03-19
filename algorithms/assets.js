export function menorValor(lista){
    let menorValor = 0

    for(let atual = 0; atual < lista.length; atual++){
        if(lista[atual] < lista[menorValor])
            menorValor = atual
    }
    return menorValor 
}




