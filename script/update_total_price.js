import { bdBurgers } from "./bdBurgers.js";

export const updateTotalPrice = (totalPrice,item,id,quantity) => {
    const filter = bdBurgers.filter( br=> br.id == id)[0];
    totalPrice.textContent = `$${filter.price * quantity}`;
    item.textContent = `${quantity} item`;
}
