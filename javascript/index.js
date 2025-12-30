//window.alert('Estou funcionando')
var operacao=0;

/*Usar typeof(var) para separar numeros de simbolos */

function operacaoMais(){
    var op = window.document.getElementById('op');
    operacao = 1;
    op.innerHTML='Operação do tipo: <strong>Adição!</strong>'
    //op.innerText='+'
}

function operacaoMenos(){
    var op = window.document.getElementById('op');
    op.innerText='-'
    op.innerHTML='Operação do tipo: <strong>Subtração!</strong>'
    //operacao = 2;
}

function operacaoMt(){
    var op = window.document.getElementById('op');
    op.innerText='×'
    op.innerHTML='Operação do tipo: <strong>Multiplicação!</strong>'
    //operacao = 3;
}

function operacaoDv(){
    var op = window.document.getElementById('op');
    op.innerText='÷'
    op.innerHTML='Operação do tipo: <strong>Divisão!</strong>'
    //operacao = 4;
}