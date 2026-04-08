function formataMoeda(valor: number): string {
    return valor.toLocaleString("pt-br", {style: "currency", currency: "BRL"});
}

function formataData(data: Date): string {
    return data.toLocaleDateString("pt-br", {
        weekday: "long",
        day: "2-digit",
        year: "numeric",
        month: "2-digit"
    });
}