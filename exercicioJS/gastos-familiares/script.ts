var contas = {
    receitas: [1500,2500,200,500],
    despesas: [800,400,1500,1300]
}


function balanco(contas: number[]){
    let total: number = 0

    for (let conta of contas){
        total = total + conta
    }
    console.log(total)

    return total
}

let totalReceita = balanco(contas.receitas)
let totalDespesa = balanco(contas.despesas)

let resultado: boolean = totalReceita >= totalDespesa

console.log(resultado ? "A familia esta com as contas no Azul!" : "A Familia esta com as contas no Vermelho")