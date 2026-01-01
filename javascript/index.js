const btn1 = window.document.getElementsByName('btnOp')[0];
const btn2 = window.document.getElementsByName('btnOp')[1];
const btn3 = window.document.getElementsByName('btnOp')[2];
const btn4 = window.document.getElementsByName('btnOp')[3];

let resultadoPrevio = false;
let resultadoGlobal = 0;
let telaResultado = false; //para saber se ela esta na tela que exibe resposta
let indiceAns=3;
let vetorExpressao=[]
let ultimoIndiceGeral;

function backspace(){ //essa function escreve na tela o conteudo do vetor expressao
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
    
    if(['+', '-', 'x', '÷'].includes(char)){
        ativarBotoes();
    }

    if(telaResultado==true){
        zerar();
        telaResultado=false;
    }
        
    console.log('O ultimo item é '+char)
    
    vetorExpressao.pop();

    expressao.innerText='' //limpa todo texto da expressao

    for(let i=0;i<vetorExpressao.length;i++){ 
        //escreve a expressao armazenada em vetorExpressao apos o pop()
        expressao.innerText+=vetorExpressao[i]
    }
    ultimoIndiceGeral--;

    if(telaResultado==true){
        let res = window.document.getElementById('res')
        res.innerText='';
        telaResultado=false;

    }
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
        }
        telaResultado=false;        
    }

    expressao.innerText += a
    vetorExpressao.push(a)
    console.log(vetorExpressao)
    console.log(`O último indice é: ${vetorExpressao.length-1}`)
    ultimoIndiceGeral=vetorExpressao.length-1;
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
    vetorExpressao=[]
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

        console.log('Resultado: '+resultado)
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
        console.log('Símbolo: '+expressao.at(indiceAns))

        let resultado = operar(primeiroNumero, segundoNumero, expressao.at(indiceAns))

        console.log('Resultado: '+resultado)
        let res = window.document.getElementById('res')
        res.innerText = (`R: ${resultado}`)
        resultadoPrevio = true;
        resultadoGlobal = resultado;
        ativarBotoes();
        telaResultado=true;
        
    }
}