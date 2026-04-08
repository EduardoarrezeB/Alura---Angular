const dataAcesso = document.querySelector(".block-saldo time") as HTMLElement;

if (dataAcesso != null){
    const dataAcessoVal: Date = new Date();
    dataAcesso.textContent = formataData(dataAcessoVal);
}