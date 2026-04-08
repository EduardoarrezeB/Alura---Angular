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
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const tipoTransacaoVal: TipoTransacao = tipoTransacao.value as TipoTransacao;
    const valorVal: number = valorTransacao.valueAsNumber;
    const dataVal: Date = new Date(dataTransacao.value);

    if (valorVal == 0) {
        alert("O valor da transação precisa ser maior que zero.");
        return;
    }

    if (tipoTransacaoVal == TipoTransacao.DEPOSITO) {
        saldoInicial += valorVal;
    } else if (tipoTransacaoVal == TipoTransacao.PAGAMENTO_BOLETO || tipoTransacaoVal == TipoTransacao.TRANSFERENCIA) {
        saldoInicial -= valorVal;
    } else {
        alert("Selecione um tipo de transação válido!");
        return;
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