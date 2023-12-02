function salvaDados() {
  let lista = [
    "nome",
    "documento",
    "inscricaoMunicipal",
    "endereco",
    "municipio",
    "uf",
  ];

  let nome = document.getElementById("prestador-nome").value;

  if (nome == "") {
    document.querySelector(".mensagemErro").innerHTML =
      "*campos obrigatórios não foram preenchidos.";
    limparCampos();
  } else {
    for (let i = 0; i < lista.length; i++) {
      let informacao = lista[i];
      console.log(informacao);
      document.querySelector("." + informacao + "-prestador").innerHTML =
        document.getElementById("prestador-" + informacao).value;
    }
    limparCampos();
  }
}

function limparCampos() {
  document.querySelectorAll(".campo").forEach((e) => {
    e.value = "";
  });
}
