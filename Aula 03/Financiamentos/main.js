function calcTabelaPrice() {
    let valor = Number(document.getElementById("valorFinanciado").value);
    let taxa = Number(document.getElementById("taxaPrice").value);
    let parcelas = Number(document.getElementById("numParcelas").value);

    let tempoTax = document.getElementById("optTaxaPrice").value;
    let tempoParc = document.getElementById("tempPrice").value;

    if (tempoParc == "2") {
        parcelas = parcelas / 30;
    } else if (tempoParc == "3") {
        parcelas = parcelas * 12;
    }

    if (tempoTax == "2") {
        taxa = taxa * 30;
    } else if (tempoTax == "3") {
        taxa = taxa / 12;
    }

    taxa = taxa / 100;

    let parcela = valor * (taxa * Math.pow((1 + taxa), parcelas)) / (Math.pow((1 + taxa), parcelas) - 1);
    let totalPago = parcela * parcelas;
    let jurosTotal = totalPago - valor;

    return {
        parcela: parcela,
        totalPago: totalPago,
        jurosTotal: jurosTotal
    };
}

function exibirResultado() {
    let resultado = calcTabelaPrice();
    
    document.getElementById("valorParcela").innerHTML = `R$ ${resultado.parcela.toFixed(2)}`;
    document.getElementById("totalPago").innerHTML = `R$ ${resultado.totalPago.toFixed(2)}`;
    document.getElementById("jurosTotal").innerHTML = `R$ ${resultado.jurosTotal.toFixed(2)}`;
}