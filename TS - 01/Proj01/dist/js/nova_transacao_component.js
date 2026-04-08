"use strict";
let saldoInicial = 3000;
const saldo = document.getElementById("saldoCC");
const tipoTransacao = document.querySelector("#tipoTransacao");
const valorTransacao = document.querySelector("#valor");
const dataTransacao = document.querySelector("#data");
const formSaldo = document.querySelector(".block-nova-transacao form");
if (formSaldo) {
    formSaldo.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!formSaldo.checkValidity()) {
            alert("Por favor, preencha todos os campos");
            return;
        }
        const tipoTransacaoVal = tipoTransacao.value;
        const valorVal = valorTransacao.valueAsNumber;
        const dataVal = new Date(dataTransacao.value);
        if (tipoTransacaoVal == "Depósito") {
            saldoInicial += valorVal;
        }
        if (tipoTransacaoVal == "Transferência" || tipoTransacaoVal == "Pagamento de Boleto") {
            saldoInicial -= valorVal;
        }
        saldo.textContent = saldoInicial.toString();
        const novaTransacao = {
            tipoTransacao: tipoTransacaoVal,
            valor: valorVal,
            data: dataVal
        };
        console.log(novaTransacao);
        formSaldo.reset();
    });
}
