const notasChar = {a:"A",b:"B",c:"C",d:"D", e:"E", f:"F"};


function obterNota(){
    //obtem o valor do input no html.
    let nota = document.getElementById("nota").value
    return nota;
}

function trasformarNota(notaAluno = obterNota()){

    //realiza as comparações com o valor informado pelo usuário
    notaAluno = Number(notaAluno)
    let nota = ''
    if (notaAluno >= 90 && notaAluno <= 100){
        nota = notasChar.a;
        
    } else if (notaAluno >= 80 && notaAluno <=89) {
        nota = notasChar.b;
        
    } else if (notaAluno >=70 && notaAluno <=79) {
        nota = notasChar.c;
        
    } else if (notaAluno >=60 && notaAluno <=69) {
        nota = notasChar.d;
        
    } else if (notaAluno <=60) {
        nota = notasChar.f;
        
    }
    console.log(nota)

    adcElemento(nota)
}


function adcElemento(nota) {
        // cria um novo elemento div
        // e dá à ele conteúdo
        var divNova = document.createElement("div");
        var conteudoNovo = document.createTextNode("A sua nota é: " + nota + (nota =="A" ? " Parabéns" : " Você pode melhorar")  );
        divNova.appendChild(conteudoNovo); //adiciona o nó de texto à nova div criada
      
        // adiciona o novo elemento criado e seu conteúdo ao DOM
        var divAtual = document.getElementById("div1");
        document.body.insertBefore(divNova, divAtual);
}

