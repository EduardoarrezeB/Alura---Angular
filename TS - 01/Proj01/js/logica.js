"use strict";
let saldoInicial = 3000;
const saldo = document.getElementById("saldoCC");
const formSaldo = document.querySelector(".block-nova-transacao form");
const tipoTransacao = document.querySelector("#tipoTransacao");
const valorTransacao = document.querySelector("#valor");
const dataTransacao = document.querySelector("#data");
if (formSaldo) {
    formSaldo.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!formSaldo.checkValidity()) {
            alert("Por favor, preencha todos os campos");
            return;
        }
        let tipoTransacaoVal = tipoTransacao.value;
        let valorVal = valorTransacao.valueAsNumber;
        let dataVal = dataTransacao.value;
        if (tipoTransacaoVal == "Depósito") {
            saldoInicial += valorVal;
        }
        if (tipoTransacaoVal == "Transferência" || tipoTransacaoVal == "Pagamento de Boleto") {
            saldoInicial -= valorVal;
        }
        saldo.textContent = saldoInicial.toString();
        const novaTransacao = {
            tipoTransacaoVal: tipoTransacaoVal,
            valorVal: valorVal,
            dataVal: dataVal
        };
        console.log(novaTransacao);
        formSaldo.reset();
    });
}
