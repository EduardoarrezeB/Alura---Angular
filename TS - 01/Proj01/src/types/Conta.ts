import { Transacao } from "./Transacao.js";
import { TipoTransacao } from "./TipoTransacao.js";

let saldoX: number = 3000;


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
    }
}

export default Conta;