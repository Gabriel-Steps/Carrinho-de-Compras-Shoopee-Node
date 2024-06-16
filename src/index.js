import createItem from "./services/item.js";
import * as cartService from "./services/carrinho.js"
const cart = [];

console.log("Seja bem-vindo ao seu carrinho da Shoopee!")

const item1 = await createItem("Hotwheels Ferrari",20.99,1);
const item2 = await createItem("Hotwheels Lamborghini", 39.99, 3);

// Adicionando item no carrinho
await cartService.addItem(cart,item1);
await cartService.addItem(cart,item2);

// Remover item do carrinho
await cartService.removeItem(cart,item2);

// Adicionar quantidade do item no carrinho
await cartService.addQuantItem(cart,item2);
await cartService.addQuantItem(cart,item2);

// Mostrar os itens no carrinho
await cartService.displayCart(cart);

// Deletando item do carrinho
//await cartService.deleteItem(cart,item2.name);
//await cartService.deleteItem(cart,item1.name);

// Mostrar o valor total dos itens no carrinho
await cartService.calculateTotal(cart);