// Criando função de compra dos ingressos↓
function comprar() {
 let tipo = document.getElementById ('tipo-ingresso');
 let qtd = document.getElementById ('qtd').value;

// Convertendo a quantidade para um número inteiro e verificando se é positivo
qtd = parseInt(qtd);
  if (qtd<=0) {
alert('A quantidade de ingressos deve ser um número positivo.');
  return;

    }

// Ramificando tipos de ingressos

  if (tipo.value == 'pista') {
      comprarPista(qtd);
    }
  else if (tipo.value == 'superior') {
      comprarSuperior(qtd);
  }
  else{
      comprarInferior(qtd);

  }
  
}

// Criando função confirmando ingresso do tipo Pista ↓
function comprarPista (qtd) {
 let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
  
  if (qtd > qtdPista) {
      alert ('Quantidade indisponivel para Pista');

  }else{
     qtdPista = qtdPista - qtd;
     document.getElementById('qtd-pista').textContent = qtdPista;
     alert('Compra confirmada!')
    
    
    }
    
}

// Criando função confirmando ingresso do tipo Superior ↓
function comprarSuperior (qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
     if (qtd > qtdSuperior) {
         alert ('Quantidade indisponivel para Pista Superior');
   
     }else{
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra confirmada!')   
       }
   }

// Criando função confirmando ingresso do tipo Inferiori↓
function comprarInferior (qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
     
     if (qtd > qtdInferior) {
         alert ('Quantidade indisponivel para Pista Inferior');
   
     }else{
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra confirmada!')
       
       
       }
   }   