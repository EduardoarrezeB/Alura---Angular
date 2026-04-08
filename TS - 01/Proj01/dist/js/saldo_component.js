"use strict";
const dataAcesso = document.querySelector(".block-saldo time");
if (dataAcesso != null) {
    const dataAcessoVal = new Date();
    dataAcesso.textContent = formataData(dataAcessoVal);
}
