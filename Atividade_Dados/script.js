// Seletores dos dados
const dado1 = document.getElementById("dado1");
const dado2 = document.getElementById("dado2");
const botaoJogar = document.getElementById("botaoJogar");
let cont = 0;
let s;
// Função para gerar um número aleatório entre 1 e 6 (representando os lados do dado)
function rolarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

// Função para calcular a soma dos dados
function calcularSoma(dado1, dado2) {
    return dado1 + dado2;
}

// Função para verificar o resultado do jogo
function verificarResultado(soma) {

    if(cont === 0){
        if (soma === 7 || soma === 11) {
            alert("Você GANHOU! Soma: " + soma);
        } else if (soma === 2 || soma === 3 || soma === 12) {
            alert("Você PERDEU! Soma: " + soma);
        }
        else{
            s = soma;
        }

        cont++;
    }
    else{ // se não der nenhum daqueles numeros acima, aí ele continua jogando
        //3- Depois que recebe essa pontuação (número resultante da soma dos dados que caiu):
         
         if (s === soma) { //3.1 - GANHA se nessa próxima rodada cair o mesmo número resultante da soma dos dados (if)
            alert("Você GANHOU! Soma: " + soma);
         }
         else if(soma === 7){ //3.2 - PERDE se nessa próxima rodada cair o número 7
            alert("Você PERDEU! Soma: " + soma);
         }
    }
}

// Manipulador de evento para o botão "JOGAR"
botaoJogar.addEventListener("click", function () {
    // Rolar os dados
    const valorDado1 = rolarDado();
    const valorDado2 = rolarDado();

    // Atualizar as imagens dos dados
    dado1.src = `Imagens/Dado${valorDado1}.png`;
    dado2.src = `Imagens/Dado${valorDado2}.png`;

    // Adicionar um pequeno atraso (100 milissegundos) antes de verificar o resultado
    setTimeout(function () {
        // Calcular a soma dos dados
        const somaDados = calcularSoma(valorDado1, valorDado2);

        // Verificar o resultado do jogo
        verificarResultado(somaDados);
    }, 100);
});