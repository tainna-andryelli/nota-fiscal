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
  let contador = 0;

  if (document.getElementById("prestador-uf").value == "Selecione") {
    mudaBordaParaVermelho("prestador-uf");
    contador++;
  } else {
    tiraBordaVermelha("prestador-uf");
  }

  if (document.getElementById("tomador-uf").value == "Selecione") {
    mudaBordaParaVermelho("tomador-uf");
    contador++;
  } else {
    tiraBordaVermelha("tomador-uf");
  }

  if (document.getElementById("valor").value == "") {
    mudaBordaParaVermelho("valor");
    contador++;
  } else {
    tiraBordaVermelha("valor");
  }

  for (let i = 0; i < camposObrigatorios.length; i++) {
    informacao = camposObrigatorios[i];
    if (document.getElementById("prestador-" + informacao).value == "") {
      mudaBordaParaVermelho("prestador-" + informacao);
      contador++;
    } else {
      tiraBordaVermelha("prestador-" + informacao);
    }

    if (document.getElementById("tomador-" + informacao).value == "") {
      mudaBordaParaVermelho("tomador-" + informacao);
      contador++;
    } else {
      tiraBordaVermelha("prestador-" + informacao);
    }
  }

  if (contador > 0) {
    return true;
  }
  return false;
}

function mudaBordaParaVermelho(elemento) {
  document.getElementById(elemento).style.border = "2px solid #f15946";
}

function tiraBordaVermelha(elemento) {
  document.getElementById(elemento).style.border = "none";
}
