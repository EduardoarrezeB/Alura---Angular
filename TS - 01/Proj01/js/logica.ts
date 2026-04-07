let saldoInicial = 3000;
const saldo = document.getElementById("saldoCC") as HTMLElement;
const formSaldo = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
const tipoTransacao = document.querySelector("#tipoTransacao") as HTMLSelectElement;
const valorTransacao = document.querySelector("#valor") as HTMLInputElement;
const dataTransacao = document.querySelector("#data") as HTMLInputElement;


if(formSaldo) {
formSaldo.addEventListener("submit", function(event) {
    event.preventDefault();
    if(!formSaldo.checkValidity()) {
        alert("Por favor, preencha todos os campos");
        return;
    }

    let tipoTransacaoVal = tipoTransacao.value;
    let valorVal: number = valorTransacao.valueAsNumber;
    let dataVal: Date = new Date(dataTransacao.value);

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
    }

    console.log(novaTransacao);
    formSaldo.reset();
});
}