"use strict";
var contas = {
    receitas: [1500, 2500, 200, 500],
    despesas: [800, 400, 1500, 1300]
};
function balanco(contas) {
    var total = 0;
    for (var _i = 0, contas_1 = contas; _i < contas_1.length; _i++) {
        var conta = contas_1[_i];
        total = total + conta;
    }
    console.log(total);
    return total;
}
var totalReceita = balanco(contas.receitas);
var totalDespesa = balanco(contas.despesas);
var resultado = totalReceita >= totalDespesa;
console.log(resultado ? "A familia esta com as contas no Azul!" : "A Familia esta com as contas no Vermelho");
