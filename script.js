let numerosDisponiveis = Array.from({length: 75}, (_, i) => i + 1);
let numerosSorteados = [];

function sortearNumero() {
  if (numerosDisponiveis.length === 0) {
    alert("Todos os números já foram sorteados!");
    return;
  }

  const indice = Math.floor(Math.random() * numerosDisponiveis.length);
  const numero = numerosDisponiveis.splice(indice, 1)[0];
  numerosSorteados.push(numero);

  document.getElementById("current-number").innerText = numero;
  atualizarLista();
}

function atualizarLista() {
  const container = document.getElementById("numeros-sorteados");
  container.innerHTML = "";

  numerosSorteados.sort((a, b) => a - b).forEach(n => {
    const span = document.createElement("span");
    span.innerText = n;
    container.appendChild(span);
  });
}
