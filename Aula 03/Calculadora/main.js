function calcJurosSimples () {
    let capit = Number(document.getElementById("capitalx").value);
    let tax = Number(document.getElementById("taxax").value);
    let tem = Number(document.getElementById("tempoS").value);

    let tempoTax = document.getElementById("optTaxa").value;
    let tempoTem = document.getElementById("temp").value;

    if (tempoTem == "2") {
        tem = tem / 30;
    } else if (tempoTem == "3") {
        tem = tem * 12;
    }

    if (tempoTax == "2") {
        tax = tax * 30;
    } else if (tempoTax == "3") {
        tax = tax / 12;
    }

    tax = tax / 100;

    return capit * tax * tem;
}

function calcJurosCompostos() {
    let capit = Number(document.getElementById("capitalx").value);
    let tax = Number(document.getElementById("taxax").value);
    let tem = Number(document.getElementById("tempoS").value);

    let tempoTax = document.getElementById("optTaxa").value;
    let tempoTem = document.getElementById("temp").value;

    if (tempoTem == "2") {
        tem = tem / 30;
    } else if (tempoTem == "3") {
        tem = tem * 12;
    }

    if (tempoTax == "2") {
        tax = tax * 30;
    } else if (tempoTax == "3") {
        tax = tax / 12;
    }

    tax = tax / 100;

    let montante = capit * Math.pow((1 + tax), tem);

    return montante - capit
}

function pegaMontante(result){
    let capit = Number(document.getElementById("capitalx").value);
    return result + capit;
}

function criaResposta() {
    let jurSimCom = document.getElementById("jurSimCom").value;

    if(jurSimCom == 1){
        resultado = calcJurosSimples();
    } else {
        resultado = calcJurosCompostos();
    }
    let montante = pegaMontante(resultado);
    let divResultado = document.getElementById("resultado");

    divResultado.innerHTML = "";
    divResultado.innerHTML = `Juros: R$ ${resultado.toFixed(2)}  ~~  Montante: R$ ${montante.toFixed(2)}`;
}