// Criar item com subtotal certo
async function createItem(name,price,quant){
    return {
        name,
        price,
        quant,
        subtotal: price * quant,
    }
}

export default createItem;