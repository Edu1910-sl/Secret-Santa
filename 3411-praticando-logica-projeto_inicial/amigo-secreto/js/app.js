// programa que simula um aleatorizador de nomes para realizar um amigo-secreto nas datas natalinas
let amigos = [];
// criando função que adiciona nomes em uma lista 
function adicionar() {
  let nomeAmigo = document.getElementById("nome-amigo").value;

  // Verificar se o nome está vazio
  if (!nomeAmigo.trim()) {
      alert("Por favor, insira um nome válido.");
      return;
  }

  // Verificar se o nome já existe na lista, ignorando case
  if (amigos.map(normalizarNome).includes(normalizarNome(nomeAmigo))) {
      alert("Este nome já foi adicionado.");
      return;
  }

  // Adicionar o nome à lista e atualizar a interface
  amigos.push(nomeAmigo);
  atualizarLista();
  atualizarSorteio();
}
// Criando função que normaliza o entendimento do sistema com o nome (ex: ana = Ana | aNa ...)
function normalizarNome(nome){
 return nome.toLowerCase();

}

function sortear(){  
// declarando condição de minimo de nomes para executar sorteio
 if (amigos.length < 4){
     alert('Adicione pelo menos 4 amigos!');
     return;

}

embaralhar(amigos);
let sorteio = document.getElementById('lista-sorteio');
// declarando loop de sorteio de posições de cada array registrado
for (let i = 0; i < amigos.length; i++) {
// declarando condição de limite para ultimo array confirmado  
 if(i == amigos.length - 1) {
    sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--> ' + amigos[0] + '<br/>';
 
  } else { 
    sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--> ' + amigos[i + 1] + '<br/>'; 
  }
 }
}

// criando função que exclui amigos adicionados anteriormente para o jogo do amigo secreto
function excluirAmigo (index) {
 amigos.splice(index, 1)
 atualizarLista();
 atualizarSorteio();

}

/*criando função que embaralha itens registrados atribuição via destructuring na lista 
  através do array (site utilizado para function → cangaceiro javascript). */

function embaralhar(lista){
//declarando loop de aleatorização de itens
    for (let indice = lista.length; indice; indice--){
         const indiceAleatorio = Math.floor(Math.random() *indice);
         [lista[indice-1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice-1]];
    
 }
    
} 

// criando função que limpa a lista de sorteios e preparar para um novo sorteio
function atualizarSorteio (){
 let sorteio = document.getElementById('lista-sorteio');
 sorteio.innerHTML = '';
 }

// Atualiza a lista de amigos na tela, controlando a adição e exclusão de amigos
function atualizarLista (){
 let lista = document.getElementById ("lista-amigos");
 lista.innerHTML = '';

// loop de repetição para cada amigo criado estar em paragrafo
for (let i = 0; i < amigos.length; i++) {
// cria um elemento de paragrafo para cada amigo
     let paragrafo = document.createElement('p');
         paragrafo.textContent = amigos[i];

// adiciona um evento e função de clique para excluir o amigo adicionado anteriormente
         paragrafo.addEventListener('click',function(){
 excluirAmigo(i);

 });

// adiciona o paragrafo a lista
 lista.appendChild(paragrafo); 
 }
}

//declarando função que atribui a reinicialização das abas de adicionar valores
function reiniciar () {
  amigos = [];
  document.getElementById("lista-amigos").innerHTML = '';
  document.getElementById('lista-sorteio').innerHTML = '';

}