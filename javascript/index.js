//btn 1 ate 4 sao os operadores (+,-,x,÷)
const btn1 = window.document.getElementsByName('btnOp')[0];
const btn2 = window.document.getElementsByName('btnOp')[1];
const btn3 = window.document.getElementsByName('btnOp')[2];
const btn4 = window.document.getElementsByName('btnOp')[3];

//Botao de calcular
const btnCalcular = window.document.getElementById('btnCalcular');

let resultadoPrevio = false;
let resultadoGlobal = 0;
let telaResultado = false; //para saber se ela esta na tela que exibe resposta
let indiceAns = 3;
let vetorExpressao = []
let ultimoIndiceGeral;

function backspace() { //essa function escreve na tela o conteudo do vetor expressao
    console.log('Backspace...')
    let expressao = window.document.getElementById('expressao');

    /*
    Eu tinha cometido um erro de escrever:
    expressao=expressao.innerText
    Isso eh um erro, pois assim a variavel 'expressao' perde a referencia do DOM
    E assim, ao atribuir valor para 'variavel', esse valor nao ia aparecer no html
    Pois eu estaria apenas alterando um valor string chamado expressao
    Esse valor nao esta visivel em lugar nenhum
    */

    let char = expressao.innerText.at(ultimoIndiceGeral);

    if (['+', '-', 'x', '÷'].includes(char)) {
        ativarBotoes();
    }

    if (telaResultado == true) {
        zerar();
        telaResultado = false;
    }

    console.log('O ultimo item é ' + char)

    vetorExpressao.pop();

    expressao.innerText = '' //limpa todo texto da expressao

    for (let i = 0; i < vetorExpressao.length; i++) {
        //escreve a expressao armazenada em vetorExpressao apos o pop()
        expressao.innerText += vetorExpressao[i]
    }
    ultimoIndiceGeral--;

    if (telaResultado == true) {
        let res = window.document.getElementById('res')
        res.innerText = '';
        telaResultado = false;

    }

    if (expressao.innerText.length == 0) {
        desativarBotoes();
        desativarBotaoCalcular();
    }
}

function desativarBotaoCalcular() {
    btnCalcular.disabled = true;
}

function ativarBotaoCalcular() {
    btnCalcular.disabled = false;
}

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
            if (b == 0) {
                resultado = 'Erro: divisão por zero.';
                break;
            } else {
                resultado = a / b;
                break;
            }
        default:
            window.alert('Houve um erro. Tente Novamente')
            break;
    }
    return resultado;
}

function escreverNaTela(a) {
    ativarBotaoCalcular();
    let expressao = window.document.getElementById('expressao');
    let tamanho = (expressao.innerText).length
    if (tamanho == 0) {
        ativarBotoes();
    }

    if (telaResultado == true) {
        let res = window.document.getElementById('res')
        expressao.innerText = '';
        res.innerText = '';
        let char = a

        if (['+', '-', 'x', '÷'].includes(char)) {
            expressao.innerText = 'ANS '
        } else {
            resultadoPrevio = false;
        }
        telaResultado = false;
    }

    expressao.innerText += a
    vetorExpressao.push(a)
    console.log(vetorExpressao)
    console.log(`O último indice é: ${vetorExpressao.length - 1}`)
    ultimoIndiceGeral = vetorExpressao.length - 1;
}

function zerar() {
    let expressao = window.document.getElementById('expressao');
    expressao.innerText = ''
    telaResultado = false;
    let res = window.document.getElementById('res');
    res.innerText = ''
    resultadoPrevio = false;
    resultadoGlobal = 0;
    desativarBotoes();
    desativarBotaoCalcular();
    vetorExpressao = []
}

function calcular() {

    if (resultadoPrevio == false) {
        let primeiroNumero = '';
        let segundoNumero = '';
        let indiceSinal = '';

        console.log('Analise dos números:')

        let expressao = window.document.getElementById('expressao');
        expressao = expressao.innerText

        let existeSinal = false;

        for (let i = 0; i < expressao.length; i++) {
            let char = expressao.at(i);
            if (!['+', '-', 'x', '÷'].includes(char)) {
                primeiroNumero += expressao.at(i);
            } else {
                console.log(`Há símbolos em ${i}! Valor = '${expressao.at(i)}'`)
                indiceSinal = i;
                existeSinal = true;
                break;
            }
        }

        if (expressao.length == indiceSinal + 1) {
            window.alert('Digite o restante da expressão!')
        } else {

            if (!existeSinal) {
                window.alert('[ERRO] Digite um sinal de operação para realizar a conta!');
                zerar();
            } else {
                primeiroNumero = Number(primeiroNumero)
                console.log('O primeiro número é: ' + primeiroNumero)
                indiceSinal = Number(indiceSinal)

                for (let j = indiceSinal + 1; j < expressao.length; j++) {
                    segundoNumero += expressao.at(j);
                }

                segundoNumero = Number(segundoNumero)
                console.log('O segundo numero é ' + segundoNumero)

                let resultado = operar(primeiroNumero, segundoNumero, expressao.at(indiceSinal))

                console.log('Resultado: ' + resultado)
                let res = window.document.getElementById('res')
                res.innerText = (`R: ${resultado}`)
                resultadoPrevio = true;
                resultadoGlobal += resultado;
                ativarBotoes();
                telaResultado = true;

            }

        }



    } else {
        let expressao = window.document.getElementById('expressao');
        expressao = expressao.innerText

        let primeiroNumero = resultadoGlobal;
        let segundoNumero = '';

        console.log('O valor de expressao.length é ' + expressao.length)

        if (expressao.length < 5) {
            window.alert('Digite o restante da expressão!')
        } else {
            for (let i = 4; i < expressao.length; i++) {
                segundoNumero += expressao.at(i);
            }

            segundoNumero = Number(segundoNumero)
            console.log('O novo número é: ' + segundoNumero)
            console.log('Símbolo: ' + expressao.at(indiceAns))

            let resultado = operar(primeiroNumero, segundoNumero, expressao.at(indiceAns))

            console.log('Resultado: ' + resultado)
            let res = window.document.getElementById('res')
            res.innerText = (`R: ${resultado}`)
            resultadoPrevio = true;
            resultadoGlobal = resultado;
            ativarBotoes();
            telaResultado = true;

        }
    }
    
}

//O codigo abaixo permite que o usuario faca contas utilizando o seu teclado

// Keydown eh um tipo de evento do js que identifica as teclas apertadas
document.addEventListener('keydown', function(event) {
    
    // Guarda qual tecla foi apertada
    const tecla = event.key;

    // Mapeando as teclas
    switch (tecla) {
        case '/':
            operacao('÷');
            break;
        case '*':
        case 'x': // Aceita tanto * quanto x
            operacao('x');
            break;
        case '-':
            operacao('-');
            break;
        case '+':
            operacao('+');
            break;
        case 'Enter':
        case '=':
            calcular(); // O Enter calcula o resultado
            break;
        case 'Escape':
            zerar(); // O Esc limpa a tela
            break;
        case 'Backspace':
            backspace(); // apaga um caractere
            break;
        default:
            // Verifica se é um número de 0 a 9
            // Se for número, escreve na tela
            if (!isNaN(Number(tecla)) && tecla !== ' ') {
                escreverNaTela(Number(tecla));
            }
            break;
    }
});

//Os demais EventListeners abaixo

//ATENCAO: A sintaxe abaixo funciona apenas com arrow function (funcao anonima)
btn1.addEventListener('click', () => operacao('+'));
btn2.addEventListener('click', () => operacao('-'));
btn3.addEventListener('click', () => operacao('x'));
btn4.addEventListener('click', () => operacao('÷'));

const btnBackspace = window.document.getElementById('btnBackSpace');
const btnAC = window.document.getElementById('zerar');
const num1 = window.document.getElementsByName('number')[0];
const num2 = window.document.getElementsByName('number')[1];
const num3 = window.document.getElementsByName('number')[2];
const num4 = window.document.getElementsByName('number')[3];
const num5 = window.document.getElementsByName('number')[4];
const num6 = window.document.getElementsByName('number')[5];
const num7 = window.document.getElementsByName('number')[6];
const num8 = window.document.getElementsByName('number')[7];
const num9 = window.document.getElementsByName('number')[8];
const num0 = window.document.getElementsByName('number')[9];

btnAC.addEventListener('click', zerar);
btnBackspace.addEventListener('click', backspace);
num1.addEventListener('click', () => escreverNaTela(1) )
num2.addEventListener('click', () => escreverNaTela(2) )
num3.addEventListener('click', () => escreverNaTela(3) )
num4.addEventListener('click', () => escreverNaTela(4) )
num5.addEventListener('click', () => escreverNaTela(5) )
num6.addEventListener('click', () => escreverNaTela(6) )
num7.addEventListener('click', () => escreverNaTela(7) )
num8.addEventListener('click', () => escreverNaTela(8) )
num9.addEventListener('click', () => escreverNaTela(9) )
num0.addEventListener('click', () => escreverNaTela(0) )
btnCalcular.addEventListener('click', calcular)



