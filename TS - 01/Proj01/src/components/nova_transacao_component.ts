import Conta from "../types/Conta.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import SaldoComponent from "./saldo_component.js";

const tipoTransacao = document.querySelector("#tipoTransacao") as HTMLSelectElement;
const valorTransacao = document.querySelector("#valor") as HTMLInputElement;
const dataTransacao = document.querySelector("#data") as HTMLInputElement;

const formSaldo = document.querySelector(".block-nova-transacao form") as HTMLFormElement;
const asideMovimentacoes = document.querySelector(".extrato .registro-transacoes") as HTMLElement;

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

    const novaTransacao: Transacao = {
        tipoTransacao: tipoTransacaoVal,
        valor: valorVal,
        data: dataVal
    }

    Conta.registraHistorico(novaTransacao);
    SaldoComponent.atualizar();

    formSaldo.reset();
});
}

