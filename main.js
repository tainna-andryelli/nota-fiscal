function salvaDados() {
  if (camposObrigatoriosNaoPreenchidos()) {
    document.querySelector(".mensagemErro").innerHTML =
      "Atenção: Campos obrigatórios não foram preenchidos.";
  } else {
    if (campoNumericoIncorreto()) {
      mudaBordaParaVermelho("prestador-documento");
      mudaBordaParaVermelho("tomador-documento");
      mudaBordaParaVermelho("valor");
      document.querySelector(".mensagemErro").innerHTML =
        "Atenção: Campos números foram preenchidos inadequadamente.";
    } else {
      let lista = [
        "nome",
        "documento",
        "inscricaoMunicipal",
        "endereco",
        "municipio",
        "uf",
      ];
      for (let i = 0; i < lista.length; i++) {
        let informacao = lista[i];
        document.querySelector(".prestador-" + informacao).innerHTML =
          document.getElementById("prestador-" + informacao).value;

        document.querySelector(".tomador-" + informacao).innerHTML =
          document.getElementById("tomador-" + informacao).value;

        document.querySelector(".municipio").innerHTML =
          document.getElementById("prestador-municipio").value;
      }
      limparCampos();
    }
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
      tiraBordaVermelha("tomador-" + informacao);
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

function campoNumericoIncorreto() {
  return (
    isNaN(document.getElementById("prestador-documento").value) ||
    isNaN(document.getElementById("tomador-documento").value) ||
    isNaN(document.getElementById("valor").value)
  );
  //isNan retorna verdadeiro se o argumento não for um número
}
