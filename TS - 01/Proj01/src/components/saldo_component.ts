import { formataData, formataMoeda } from "../utils/formatter.js";
import { FormatoData } from "../types/FormatoData.js";
import Conta from "../types/Conta.js";

const dataAcesso = document.querySelector(".block-saldo time") as HTMLElement;
const saldoCC = document.getElementById("saldoCC") as HTMLElement;

if (dataAcesso != null){
    const dataAcessoVal: Date = Conta.getDataAcesso();
    dataAcesso.textContent = formataData(dataAcessoVal, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}

renderizaSaldo();
function renderizaSaldo(): void {
    if(saldoCC != null) {
        saldoCC.textContent = formataMoeda(Conta.getSaldo());
    }
}

const SaldoComponent = {
    atualizar() {
        renderizaSaldo();
    }
}

export default SaldoComponent;