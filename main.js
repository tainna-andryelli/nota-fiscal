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

function moeda(a, e, r, t) {
  let n = "",
    h = (j = 0),
    u = (tamanho2 = 0),
    l = (ajd2 = ""),
    o = window.Event ? t.which : t.keyCode;
  if (13 == o || 8 == o) return !0;
  if (((n = String.fromCharCode(o)), -1 == "0123456789".indexOf(n))) return !1;
  for (
    u = a.value.length, h = 0;
    h < u && ("0" == a.value.charAt(h) || a.value.charAt(h) == r);
    h++
  );
  for (l = ""; h < u; h++)
    -1 != "0123456789".indexOf(a.value.charAt(h)) && (l += a.value.charAt(h));
  if (
    ((l += n),
    0 == (u = l.length) && (a.value = ""),
    1 == u && (a.value = "0" + r + "0" + l),
    2 == u && (a.value = "0" + r + l),
    u > 2)
  ) {
    for (ajd2 = "", j = 0, h = u - 3; h >= 0; h--)
      3 == j && ((ajd2 += e), (j = 0)), (ajd2 += l.charAt(h)), j++;
    for (a.value = "", tamanho2 = ajd2.length, h = tamanho2 - 1; h >= 0; h--)
      a.value += ajd2.charAt(h);
    a.value += r + l.substr(u - 2, u);
  }
  return !1;
}
