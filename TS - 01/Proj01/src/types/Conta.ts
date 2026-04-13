import { Transacao } from "./Transacao.js";
import { TipoTransacao } from "./TipoTransacao.js";
import { formataData } from "../utils/formatter.js";
import { FormatoData } from "./FormatoData.js";

let saldoX: number = 3000;
const asideMovimentacoes = document.querySelector(".extrato .registro-transacoes") as HTMLElement;

const Conta = {
    getSaldo(){
        return saldoX;
    },

    getDataAcesso(): Date {
        return new Date();
    },

    registraHistorico(novaTransacao: Transacao) {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
                saldoX += novaTransacao.valor;
            } else if (novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO || novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA) {
                saldoX -= novaTransacao.valor;
            } else {
                alert("Selecione um tipo de transação válido!");
                return;
            }
        
        asideMovimentacoes.innerHTML += `
        <div class="transacoes-group">
            <strong class="mes-group">${formataData(this.getDataAcesso(), FormatoData.MES)}</strong>
            <div class="transacao-item">
                <div class="transacao-info">
                    <span class="tipo">${novaTransacao.tipoTransacao}</span>
                    <strong class="valor">${novaTransacao.valor}</strong>
                </div>
                <time class="data">${formataData(this.getDataAcesso(), FormatoData.DIA_MES)}</time>
            </div>
        </div>
        `;
    }
}

export default Conta;