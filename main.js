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
      "Atenção: Campos obrigatórios não foram preenchidos.";
  } else {
    for (let i = 0; i < lista.length; i++) {
      let informacao = lista[i];
      document.querySelector(".prestador-" + informacao).innerHTML =
        document.getElementById("prestador-" + informacao).value;

      document.querySelector(".tomador-" + informacao).innerHTML =
        document.getElementById("tomador-" + informacao).value;

      document.querySelector(".municipio").innerHTML = document.getElementById(
        "prestador-municipio"
      ).value;
    }
    limparCampos();
  }
}

function limparCampos() {
  document.querySelectorAll(".campo").forEach((e) => {
    e.value = "";
  });
}
