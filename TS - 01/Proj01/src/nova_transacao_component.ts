let saldoInicial = 3000;
const saldo = document.getElementById("saldoCC") as HTMLElement;
const tipoTransacao = document.querySelector("#tipoTransacao") as HTMLSelectElement;
const valorTransacao = document.querySelector("#valor") as HTMLInputElement;
const dataTransacao = document.querySelector("#data") as HTMLInputElement;

const formSaldo = document.querySelector(".block-nova-transacao form") as HTMLFormElement;

if(formSaldo) {
formSaldo.addEventListener("submit", function(event) {
    event.preventDefault();
    if(!formSaldo.checkValidity()) {
        alert("Por favor, preencha todos os campos");
        return;
    }

    const tipoTransacaoVal: string = tipoTransacao.value;
    const valorVal: number = valorTransacao.valueAsNumber;
    const dataVal: Date = new Date(dataTransacao.value);

    if (tipoTransacaoVal == "Depósito") {
        saldoInicial += valorVal;
    }
    if (tipoTransacaoVal == "Transferência" || tipoTransacaoVal == "Pagamento de Boleto") {
        saldoInicial -= valorVal;
    }

    saldo.textContent = saldoInicial.toString();

    const novaTransacao: Transacao = {
        tipoTransacao: tipoTransacaoVal,
        valor: valorVal,
        data: dataVal
    }

    console.log(novaTransacao);
    formSaldo.reset();
});
}