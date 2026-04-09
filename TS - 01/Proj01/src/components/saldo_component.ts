import { formataData } from "../utils/formatter.js";
import { FormatoData } from "../types/FormatoData.js";

const dataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if (dataAcesso != null){
    const dataAcessoVal: Date = new Date();
    dataAcesso.textContent = formataData(dataAcessoVal, FormatoData.DIA_SEMANA_DIA_MES_ANO);
}