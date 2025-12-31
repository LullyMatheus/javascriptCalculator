
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

function somar(a,b){
    return a+b
}

function subtrair(a,b){
    return a-b
}

function multiplicar(a,b){
    return a*b
}

function dividir(a,b){
    return a/b
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
    if (tamanho == 0) {
        ativarBotoes();
    }
    expressao.innerText += a
}

function zerar() {
    var expressao = window.document.getElementById('expressao');
    expressao.innerText = ''
    desativarBotoes();
    var res = window.document.getElementById('res');
    res.innerText=''
}

function operacaoMais() {
    desativarBotoes()
    escreverNaTela('+')
}

function operacaoMenos() {
    desativarBotoes()
    escreverNaTela('-')
}

function operacaoMt() {
    desativarBotoes()
    escreverNaTela('x')
}

function operacaoDv() {
    desativarBotoes()
    escreverNaTela('÷')
}

function calcular() {
    var primeiroNumero = 0;
    var segundoNumero = 0;
    var indiceSinal = 0;
    console.log('Analise dos números:')
    var expressao = window.document.getElementById('expressao');
    expressao = expressao.innerText
    for (var i = 0; i < expressao.length; i++) {
        if (expressao.at(i) != '+' && expressao.at(i) != '-' && expressao.at(i) != 'x' && expressao.at(i) != '÷') {
            primeiroNumero += expressao.at(i);
        } else {
            console.log(`Há símbolos em ${i}! Valor=${expressao.at(i)}`)
            indiceSinal = i;
            break;
        }
    }

    primeiroNumero = Number(primeiroNumero)
    console.log('O primeiro número é: ' + primeiroNumero)
    indiceSinal = Number(indiceSinal)

    for (var j = indiceSinal+1; j < expressao.length; j++) {
        segundoNumero += expressao.at(j);
    }
    segundoNumero = Number(segundoNumero)
    console.log('O segundo numero é ' + segundoNumero)

    var resultado;

    switch(expressao.at(indiceSinal)){
        case '+':
            resultado=somar(primeiroNumero,segundoNumero)
            break;
        case '-':
            resultado=subtrair(primeiroNumero,segundoNumero)
            break;
        case 'x':
            resultado=multiplicar(primeiroNumero,segundoNumero)
            break;
        case '÷':
            resultado=dividir(primeiroNumero,segundoNumero)
            break;
        default:
            window.alert('Houve um erro. Tente Novamente')
            break;
    }

    console.log(resultado)
    var res = window.document.getElementById('res')
    res.innerText=(`R:${resultado}`)

}

/*
Para fazer várias contas na mesma expressao
a logica seria assim
crie uma variavel booleana para o simbolo
se ja tiver ao menos um simbolo, fica true
se o usuario digitar outro simbolo, ele finaliza a conta anterior
e usa o resultado da conta anterior para realizar a proxima operacao
*/