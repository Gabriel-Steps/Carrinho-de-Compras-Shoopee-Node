// Adicionar item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}

// Deletar item do carrinho
async function deleteItem(userCart,name){
    const index = userCart.findIndex((item) => item.name === name);
    index != -1 ? userCart.splice(index,1) : console.log("O produto não está na lista");
}

// Remover item
async function removeItem(useCart,item){
    const indexFound = useCart.findIndex((p) => p.name === item.name);
    if(indexFound == -1){
        console.log("Item não encontrado");
        return;
    }
    if(useCart[indexFound].quant > 1){
        useCart[indexFound].quant -= 1;
        useCart[indexFound].subtotal =  useCart[indexFound].quant * useCart[indexFound].price;
        return;
    }
    if(useCart[indexFound].quant == 1){
        useCart.splice(indexFound,1);
        return;
    }
}

async function addQuantItem(useCart,item){
    const indexFound = useCart.findIndex((p) => p.name === item.name);
    if(indexFound == -1){
        console.log("Item não encontrado");
        return;
    }
    if(useCart[indexFound].quant > 1){
        useCart[indexFound].quant += 1;
        useCart[indexFound].subtotal =  useCart[indexFound].quant * useCart[indexFound].price;
        return;
    }
}

// Calcular total
async function calculateTotal(userCart){
    console.log(`Shoopee cart Total: ${userCart.reduce((total, item) => total + item.subtotal, 0)}`);
}

async function displayCart(userCart){
    console.log("Shoopee cart list:");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quant}x | Subtotal ${item.subtotal}`);
    })
}

export {addItem,calculateTotal,deleteItem,removeItem,displayCart,addQuantItem};