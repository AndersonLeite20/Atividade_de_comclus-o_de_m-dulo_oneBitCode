const cadastro = Array();

let opcoes = String();
function menu() {
  opcoes = prompt(
    "1 Listar vagas disponiveis\n2 Criar nova vaga\n3 Visualizar uma vaga \n4 inscrever um candidato em uma vaga \n5 Excluir uma vaga \n6 Sair"
  );
  return opcoes;
}

function listaDevagas() {
  const arrayDeCadastro = cadastro.reduce(function (textofinal, vaga, indice) {
    textofinal += indice = ". ";
    textofinal += vaga.nome;
    textofinal += " (" + cadastro.candidato.length + " candidatos)\n";
    return textofinal;
  }, "");
  alert(arrayDeCadastro);
}
function criarNovaVaga() {
  nome = prompt("Nome do candidato(a)");
  descricao = prompt("Descrição da vaga");
  data = prompt("Data limite");
  const comfirmar = confirm(
    "Deseja criar uma nova vaga com essas imformações?\nNome: " +
      nome +
      "\nDescrição" +
      descricao +
      "\nData limite:" +
      data
  );
  if (comfirmar) {
    const candidato = { nome, descricao, data, candidatos: [] };
    cadastro.push(candidato);
    alert("Vaga criada");
  } else {
    alert("candidatura canselada!");
  }
}
function visualizarvaga() {
  const indice = parseFloat(prompt("insira o indice da vaga"));
  const vaga = cadastro[indice];

  const canddatosEnTexto = cadastro.candidato.reduce(function (
    textofinal,
    candidato
  ) {
    return textofinal + "\n - " + candidato;
  },
  "");
  alert(
    "Vaga nº" +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.data +
      "\nQuantidade de candidatos: " +
      cadastro.candidato.length +
      "\nCandidatos inscritos: " +
      canddatosEnTexto
  );
}
function escreverCandidato() {
  const candidato = prompt("Nome do candidato(a)");
  const indice = parseFloat(prompt("insira o indíce da vaga"));
  const vaga = vaga[indice];
  let comfirmar = confirm(
    "inscrever o candidato(a)\nNome: " +
      candidato +
      " na vaga" +
      indice +
      "?\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.data
  );
  if (comfirmar) {
    vaga.cadastro.push(candidato);
    alert("inscrição realizada!");
  }
}
function excluirvaga() {}
function sair() {
  alert("Saindo...");
}
function invalido() {
  alert("Opção inválida!");
}
do {
  menu();
  switch (opcoes) {
    case "1":
      listaDevagas();
      break;
    case "2":
      criarNovaVaga();
      break;
    case "3":
      visualizarvaga();
      break;
    case "4":
      escreverCandidato();
      break;
    case "5":
      excluirvaga();
      break;
    case "6":
      sair();
      break;
    default:
      invalido();
      break;
  }
} while (opcoes !== "6");
