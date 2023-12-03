function salvaDados() {
  let lista = [
    "nome",
    "documento",
    "inscricaoMunicipal",
    "endereco",
    "municipio",
    "uf",
  ];

  if (camposObrigatoriosNaoPreenchidos()) {
    console.log(camposObrigatoriosNaoPreenchidos());
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

function camposObrigatoriosNaoPreenchidos() {
  let camposObrigatorios = [
    "nome",
    "documento",
    "inscricaoMunicipal",
    "endereco",
    "municipio",
  ];

  for (let i = 0; i < camposObrigatorios.length; i++) {
    informacao = camposObrigatorios[i];
    if (
      document.getElementById("prestador-" + informacao).value == "" ||
      document.getElementById("prestador-uf").value == "Selecione" ||
      document.getElementById("tomador-" + informacao).value == "" ||
      document.getElementById("tomador-uf") == "Selecione" ||
      document.getElementById("valor").value == ""
    ) {
      return true;
    }
  }

  return false;
}
