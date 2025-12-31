const btn1 = window.document.getElementsByName('btnOp')[0];
const btn2 = window.document.getElementsByName('btnOp')[1];
const btn3 = window.document.getElementsByName('btnOp')[2];
const btn4 = window.document.getElementsByName('btnOp')[3];

const obs = window.document.getElementById('obs')

let resultadoPrevio = false;
let resultadoGlobal = 0;
let telaResultado = false; //para saber se ela esta na tela que exibe resposta
let indiceAns=3;

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

function operar(a, b, sinal) {
    let resultado;
    switch (sinal) {
        case '+':
            resultado = a + b;
            break;
        case '-':
            resultado = a - b;
            break;
        case 'x':
            resultado = a * b;
            break;
        case '÷':
            resultado = a / b;
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
    let obs = window.document.getElementById('obs')
    if (tamanho == 0) {
        ativarBotoes();
    }
    
    if (telaResultado==true){
        let res = window.document.getElementById('res')
        expressao.innerText='';
        res.innerText='';
        let char = a

        if (['+', '-', 'x', '÷'].includes(char)){
            expressao.innerText = 'ANS '
        } else{
            resultadoPrevio=false;
            obs.innerText='';
        }
        telaResultado=false;        
    }
    expressao.innerText += a
}

function zerar() {
    let expressao = window.document.getElementById('expressao');
    expressao.innerText = ''
    telaResultado=false;
    let res = window.document.getElementById('res');
    res.innerText = ''
    resultadoPrevio = false;
    resultadoGlobal = 0;
    desativarBotoes();
}

function calcular() {

    if (resultadoPrevio == false) {
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

        for (let j = indiceSinal + 1; j < expressao.length; j++) {
            segundoNumero += expressao.at(j);
        }

        segundoNumero = Number(segundoNumero)
        console.log('O segundo numero é ' + segundoNumero)

        let resultado = operar(primeiroNumero, segundoNumero, expressao.at(indiceSinal))

        console.log(resultado)
        let res = window.document.getElementById('res')
        res.innerText = (`R: ${resultado}`)
        resultadoPrevio = true;
        resultadoGlobal += resultado;
        ativarBotoes();
        telaResultado=true;

    } else {
        let expressao = window.document.getElementById('expressao');
        expressao = expressao.innerText

        let primeiroNumero=resultadoGlobal;
        let segundoNumero='';

        for (let i = 4; i < expressao.length; i++) {
            segundoNumero += expressao.at(i);
        }

        segundoNumero = Number(segundoNumero)
        console.log('O novo número é: ' + segundoNumero)

        let resultado = operar(primeiroNumero, segundoNumero, expressao.at(indiceAns))

        console.log(resultado)
        let res = window.document.getElementById('res')
        res.innerText = (`R: ${resultado}`)
        resultadoPrevio = true;
        resultadoGlobal = resultado;
        ativarBotoes();
        telaResultado=true;
        
    }
}