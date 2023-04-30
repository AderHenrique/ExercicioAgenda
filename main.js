const form = document.getElementById("cadastro");
let linhas = "";
let totalContatos = 1;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  adicionaLinha();
  atualizaTabela();
  numerosContatos();
});

function adicionaLinha() {
  const inputContado = document.getElementById("nomeContato");
  const inputNumero = document.getElementById("numeroContato");

  let linha = "<tr>";
  linha += `<td> ${inputContado.value}</td>`;
  linha += `<td> ${inputNumero.value}</td>`;
  linha += "</tr>";

  linhas += linha;

  inputContado.value = "";
  inputNumero.value = "";
}
function atualizaTabela() {
  const corpoTabela = document.querySelector("tbody");
  corpoTabela.innerHTML = linhas;
  const corpoContatos = document.getElementById("numeroTotal");
  corpoContatos.innerHTML = totalContatos;
}

function numerosContatos() {
  totalContatos++;
}
