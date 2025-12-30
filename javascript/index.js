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

var btn1 = window.document.getElementsByName('btnOp')[0];
var btn2 = window.document.getElementsByName('btnOp')[1];
var btn3 = window.document.getElementsByName('btnOp')[2];
var btn4 = window.document.getElementsByName('btnOp')[3];

function desativarBotoes() {
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
}

function ativarBotoes() {
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
    btn4.disabled = false;
}

function testar() {
    var expressao = window.document.getElementById('expressao');
    expressao = expressao.innerText
    window.alert(`A expressão é ${expressao}. Ela possui ${expressao.length} elementos`)
    if (expressao.at(0) == '+' || expressao.at(0) == '-' || expressao.at(0) == 'x' || expressao.at(0) == '÷') {
        console.log('Esse é um sinal de operação')
    } else {
        console.log('Esse é um numero')
    }
}

function escreverNaTela(a) {
    var expressao = window.document.getElementById('expressao');
    var tamanho = (expressao.innerText).length
    if(tamanho==0){
        ativarBotoes();
    }
    expressao.innerText += a
}

function zerar() {
    var expressao = window.document.getElementById('expressao');
    expressao.innerText = ''
    desativarBotoes();
}

function operacaoMais() {
    desativarBotoes()
    var operacao = 1;
    escreverNaTela('+')
}

function operacaoMenos() {
    desativarBotoes()
    var operacao = 2;
    escreverNaTela('-')
}

function operacaoMt() {
    desativarBotoes()
    var operacao = 3;
    escreverNaTela('x')
}

function operacaoDv() {
    desativarBotoes()
    var operacao = 4;
    escreverNaTela('÷')
}

function indiceSinal() {
    var primeiroNumero=0;
    var indiceSinal=0;
    console.log('Analise dos números:')
    var expressao = window.document.getElementById('expressao');
    expressao = expressao.innerText
    for (var i = 0; i < expressao.length; i++) {
        if (expressao.at(i) != '+' && expressao.at(i) != '-' && expressao.at(i) != 'x' && expressao.at(i) != '÷') {
            primeiroNumero+=expressao.at(i);
        } else {
            console.log(`Há símbolos em ${i}! Valor=${expressao.at(i)}`)
            indiceSinal=i;
            break;
        }
    }

    primeiroNumero=Number(primeiroNumero)
    console.log('O primeiro número é: '+primeiroNumero)
    console.log('O indice do sinal é '+indiceSinal)
    
    return indiceSinal;
}