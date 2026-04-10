import { FormatoData } from "../types/FormatoData.js";
export function formataMoeda(valor) {
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
export function formataData(data, formato = FormatoData.PADRAO) {
    if (formato == FormatoData.DIA_SEMANA_DIA_MES_ANO) {
        return data.toLocaleDateString("pt-br", {
            weekday: "long",
            day: "2-digit",
            year: "numeric",
            month: "2-digit"
        }).replace(/^\w/, capitalizar => capitalizar.toUpperCase());
    }
    else if (formato == FormatoData.DIA_MES) {
        return data.toLocaleDateString("pt-br", { day: "2-digit", month: "2-digit" });
    }
    else if (formato == FormatoData.MES) {
        return data.toLocaleDateString("pt-br", { month: "long" }).replace(/^\w/, capitalizar => capitalizar.toUpperCase());
    }
    return data.toLocaleDateString("pt-br");
}
