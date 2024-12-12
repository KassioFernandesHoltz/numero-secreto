let numerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

mensagemInicial();


function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector('input').value; 
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagem = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p',mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','o número secreto é menor');    
        } else {
            exibirTextoNaTela('p','o número secreto é maior');  
        }
        tentativas++;
        limparCampo();
    }
        
}

function mensagemInicial(params) {
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p',`Escolha um número entre 1 e ${numeroMaximo}`);    
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt( Math.random() * numeroMaximo + 1);
    let qtdLista = numerosSorteados.length;

    if (qtdLista == numeroMaximo) {
        numerosSorteados = [];    
    }

    if(numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio(); // recursão
    } else {        
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}