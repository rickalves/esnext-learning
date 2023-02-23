
const precos = [40, 15, 20.5, 2, 45, 7, 3]

let maisBarato = 0

for(let atual = 0; atual < precos.length; atual++){
    if(precos[atual] < precos[maisBarato])
        maisBarato = atual
}

console.log(maisBarato)
