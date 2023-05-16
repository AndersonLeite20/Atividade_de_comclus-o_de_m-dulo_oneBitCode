const cadastro = Array();

/*const obj = {
  nome: "anderson",
  idade: 25,
  funcao: "dev",
};
cadastro.push(obj);
console.log(cadastro);*/
let opcoes = String();
function menu() {
  opcoes = prompt(
    "1 Listar vagas disponiveis\n2 Criar nova vaga\n3 Visualizar uma vaga \n4 inscrever um candidato em uma vaga \n5 Excluir uma vaga \n6 Sair"
  );
  return opcoes;
}

function listaDevagas() {
  let arrayDeCadastro = String();
  for (let indice = 0; indice < cadastro.length; indice++) {
    arrayDeCadastro += "\n" + [indice + 1] + " - " + cadastro[indice].nome;
  }
  alert("\nNúmero de candidatos: " + cadastro.length + "\n" + arrayDeCadastro);
  return arrayDeCadastro;
}
function criarNovaVaga() {
  nome = prompt("Nome do candidato(a)");
  descricao = prompt("Descrição da vaga");
  data = prompt("Data limite");
  const comfirmar = confirm("Comfirmar a candidatura de " + nome);
  if (comfirmar === true) {
    const candidato = {
      nome,
      descricao,
      data,
    };
    cadastro.push(candidato);
  } else {
    alert("candidatura canselada!");
  }
}
function visualizarvaga() {
  let i = parseFloat(prompt("insira o indice da vaga"));
  if (i > cadastro.length) {
    alert("usuario não encontrado!");
  } else {
    alert(
      "\nindice: " +
        i +
        "\nNome;" +
        cadastro[i - 1].nome +
        "\nDescrição: " +
        cadastro[i - 1].descricao +
        "\nData limita: " +
        cadastro[i - 1].data
    );
  }
}
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
      break;
    case "5":
      break;
    case "6":
      sair();
      break;
    default:
      invalido();
      break;
  }
} while (opcoes !== "6");
