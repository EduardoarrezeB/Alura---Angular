import { formataData, formataMoeda } from "../utils/formatter.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Conta.js";
let saldo = 3000;
const dataAcesso = document.querySelector(".block-saldo time");
const saldoCC = document.getElementById("saldoCC");
if (dataAcesso != null) {
    const dataAcessoVal = Conta.getDataAcesso();
    dataAcesso.textContent = formataData(dataAcessoVal, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}
export function getSaldo() {
    return saldo;
}
renderizaSaldo();
function renderizaSaldo() {
    if (saldoCC != null) {
        saldoCC.textContent = formataMoeda(Conta.getSaldo());
    }
}
const SaldoComponent = {
    atualizar() {
        renderizaSaldo();
    }
};
export default SaldoComponent;
