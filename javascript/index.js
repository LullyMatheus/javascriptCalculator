const btn1 = window.document.getElementsByName('btnOp')[0];
const btn2 = window.document.getElementsByName('btnOp')[1];
const btn3 = window.document.getElementsByName('btnOp')[2];
const btn4 = window.document.getElementsByName('btnOp')[3];

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

function operacao(a) {
    desativarBotoes()
    escreverNaTela(a)
}

function operar(a,b,sinal){
    let resultado;
        switch(sinal){
        case '+':
            resultado=a+b;
            break;
        case '-':
            resultado=a-b;
            break;
        case 'x':
            resultado=a*b;
            break;
        case '÷':
            resultado=a/b;
            break;
        default:
            window.alert('Houve um erro. Tente Novamente')
            break;
    }
    return resultado;
}

function escreverNaTela(a) {
    let expressao = window.document.getElementById('expressao');
    let tamanho = (expressao.innerText).length
    if (tamanho == 0) {
        ativarBotoes();
    }
    expressao.innerText += a
}

function zerar() {
    let expressao = window.document.getElementById('expressao');
    expressao.innerText = ''
    desativarBotoes();
    let res = window.document.getElementById('res');
    res.innerText=''
}

function calcular() {

    let primeiroNumero = '';
    let segundoNumero = '';
    let indiceSinal = '';
    console.log('Analise dos números:')
    let expressao = window.document.getElementById('expressao');
    expressao = expressao.innerText

    for (let i = 0; i < expressao.length; i++) {
        let char = expressao.at(i);
        if (!['+', '-', 'x', '÷'].includes(char)) {
            primeiroNumero += expressao.at(i);
        } else {
            console.log(`Há símbolos em ${i}! Valor = '${expressao.at(i)}'`)
            indiceSinal = i;
            break;
        }
    }

    primeiroNumero = Number(primeiroNumero)
    console.log('O primeiro número é: ' + primeiroNumero)
    indiceSinal = Number(indiceSinal)

    for (let j = indiceSinal+1; j < expressao.length; j++) {
        segundoNumero += expressao.at(j);
    }

    segundoNumero = Number(segundoNumero)
    console.log('O segundo numero é ' + segundoNumero)

    let resultado=operar(primeiroNumero,segundoNumero,expressao.at(indiceSinal))

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