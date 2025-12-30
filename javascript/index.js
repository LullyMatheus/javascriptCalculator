//window.alert('Estou funcionando')
var operacao = 0;

/*Usar typeof(var) para separar numeros de simbolos 
> var nome ='matheus'
undefined
> nome
'matheus'
> var letra = nome.at(2)
undefined
> letra
't'
*/

function testar(){
    var expressao = window.document.getElementById('expressao');
    expressao = expressao.innerText
    window.alert(`A expressão é ${expressao}. Ela possui ${expressao.length} elementos`)
    if(expressao.at(0)=='+' || expressao.at(0)=='-' || expressao.at(0)=='x' || expressao.at(0)=='÷'){
        console.log('Esse é um sinal de operação')
    } else {
        console.log('Esse é um numero')
    }
    
}

function escreverNaTela(a){
    var expressao = window.document.getElementById('expressao');
    expressao.innerText += a
}

function zerar() {
    var expressao = window.document.getElementById('expressao');
    expressao.innerText = ''
}

function operacaoMais() {
    var operacao = 1;
    escreverNaTela('+')
}

function operacaoMenos() {
    var operacao = 2;
    escreverNaTela('-')
}

function operacaoMt() {
    var operacao = 3;
    escreverNaTela('x')
}

function operacaoDv() {
    var operacao = 4;
    escreverNaTela('÷')
}

function primeiroNumero(){
    var expressao = window.document.getElementById('expressao');
    expressao = expressao.innerText
    for(var i=0;i<expressao.length;i++){
        //if(typeof(Number(expressao.at(i))))
    }
}