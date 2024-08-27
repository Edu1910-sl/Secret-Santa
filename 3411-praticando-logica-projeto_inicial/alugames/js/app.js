// o intuito desse programa é simular um site de alguel de jogos de tabuleiros
// declarando variavel de alugueis
let contadorAluguel = 0;

//criando função que altera os status dos jogos (alugados || não alugados) 
function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

// criando condição de botão para jogo considerado alugado || devolvido
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo.textContent}?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent = 'Alugar';
        }
        }
    else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent = 'Devolver';
        contadorAluguel++;
        registrarAluguel();
        }

// criando função contando o numero de vezes que o jogo foi alugado        
      function registrarAluguel() {
        console.log("Jogo alugado" + contadorAluguel + "vezes");

    }
}