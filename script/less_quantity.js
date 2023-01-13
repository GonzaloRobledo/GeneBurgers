import { updateTotalPrice } from "./update_total_price.js";

export const lessQuantity = () => {
    const $numQuantity = document.querySelector(".numQuantity");
    const $item = document.querySelector(".item");
    const $totalPrice = document.querySelector(".total-price");
    if($numQuantity.textContent != "1"){
        $numQuantity.textContent = parseInt($numQuantity.textContent) - 1;

        updateTotalPrice($totalPrice,$item,$totalPrice.parentNode.dataset.id,parseInt($numQuantity.textContent));
    }
}