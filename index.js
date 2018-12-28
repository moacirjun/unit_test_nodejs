function aplicarDesconto(preco, desconto) {
    if (preco <= desconto) return 0;
    return preco - desconto;
}

module.exports = {
    aplicarDesconto
};