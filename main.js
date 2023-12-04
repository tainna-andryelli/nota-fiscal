function salvaDados() {
  if (camposObrigatoriosNaoPreenchidos()) {
    document.querySelector(".mensagemErro").innerHTML =
      "Atenção: Campos obrigatórios não foram preenchidos.";
  } else {
    if (verificaCampoNumerico()) {
      calculaImposto();

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

function verificaCampoNumerico() {
  console.log(campoNumericoIncorreto());
  if (campoNumericoIncorreto()) {
    mudaBordaParaVermelho("prestador-documento");
    mudaBordaParaVermelho("tomador-documento");
    mudaBordaParaVermelho("valor");
    mudaBordaParaVermelho("prestador-inscricaoMunicipal");
    mudaBordaParaVermelho("tomador-inscricaoMunicipal");
    document.querySelector(".mensagemErro").innerHTML =
      "Atenção: Campos numéricos foram preenchidos inadequadamente.";
    return false;
  } else {
    return true;
  }
}

function campoNumericoIncorreto() {
  let prestadorDocumento = document
    .getElementById("prestador-documento")
    .value.replace(/(\.|\/|\-)/g, "");

  let tomadorDocumento = document
    .getElementById("tomador-documento")
    .value.replace(/(\.|\/|\-)/g, "");

  let prestadorInscricao = document.getElementById(
    "prestador-inscricaoMunicipal"
  ).value;

  let tomadorInscricao = document.getElementById(
    "tomador-inscricaoMunicipal"
  ).value;

  let valor = document.getElementById("valor").value;

  return (
    isNaN(prestadorDocumento) ||
    isNaN(tomadorDocumento) ||
    isNaN(valor) ||
    isNaN(prestadorInscricao) ||
    isNaN(tomadorInscricao)
  );
  //isNan retorna verdadeiro se o argumento não for um número
}

function calculaImposto() {
  document.querySelector(".base__calculo").innerHTML =
    document.getElementById("valor").value;

  let imposto = (document.getElementById("valor").value * 5) / 100;

  document.querySelector(".iss").innerHTML = imposto;
}

function formatarCampo(campoTexto) {
  if (campoTexto.value.length <= 11) {
    campoTexto.value = mascaraCpf(campoTexto.value);
  } else {
    campoTexto.value = mascaraCnpj(campoTexto.value);
  }
}

function retirarFormatacao(campoTexto) {
  campoTexto.value = campoTexto.value.replace(/(\.|\/|\-)/g, "");
}

function mascaraCpf(valor) {
  return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
}

function mascaraCnpj(valor) {
  return valor.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
    "$1.$2.$3/$4-$5"
  );
}
