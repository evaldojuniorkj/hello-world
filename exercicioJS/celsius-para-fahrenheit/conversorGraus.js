"use strict";
function formulaCelsiusToFahrenheit(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}
function formulaFahrenheitToCelsius(celsius) {
    var fahrenheit = (celsius * 9 / 5 + 32);
    return fahrenheit;
}
function removeCelsius(degree) {
    //convertendo o valor de 30ºC somente para 30
    degree = degree.toUpperCase().replace('C', '');
    return degree; //a função troca o valor do 1 parametro pelo valor do 2 parametro
}
function removeFahrenheit(degree) {
    //convertendo o valor de 30ºC somente para 30
    degree = degree.toUpperCase().replace('F', '');
    return degree; //a função troca o valor do 1 parametro pelo valor do 2 parametro
}
function conversorGraus(graus) {
    var celsius = graus.toUpperCase().includes('C'); //includes() verifica se existe um caractere na string
    var fahrenheit = graus.toUpperCase().includes('F');
    var novoGrau = 0;
    if (!celsius && !fahrenheit) {
        throw new Error('Grau não foi identificado');
    }
    if (celsius) {
        novoGrau = Number(removeCelsius(graus));
        novoGrau = formulaCelsiusToFahrenheit(novoGrau);
        console.log(graus + ' E equivalente a ' + novoGrau + 'F');
    }
    else {
        novoGrau = Number(removeFahrenheit(graus));
        novoGrau = formulaFahrenheitToCelsius(novoGrau);
        console.log(graus + ' E equivalente a ' + novoGrau + 'C');
    }
}
try {
    conversorGraus('33f');
    conversorGraus("33c");
}
catch (error) {
    console.log(error);
}
