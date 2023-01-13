import { renderTrolley } from "./render_trolley.js";

export const trolley = {
    burgers : []
}

export const verificateExists = (id) => {
    let exists = -1;
    trolley.burgers.forEach((el,index)=>{
        if(el.id==id) exists=index;
    })
    return exists;
}

export const addTrolleyBurger = () => {
    const id = document.querySelector("[data-id]").dataset.id;
    const quantity = parseInt(document.querySelector(".numQuantity").textContent);
    let totalPrice = document.querySelector(".total-price").textContent;
    totalPrice = parseInt(totalPrice.substring(1));

    const $infoBurger = document.getElementById("info-burger");
    
    const exists = verificateExists(id);

    if(exists == -1){
        const data = {
            id,
            quantity,
            totalPrice,
        }
    
        trolley.burgers.push(data);
    }else{
        trolley.burgers[exists].totalPrice = totalPrice;
        trolley.burgers[exists].quantity = quantity;
    }

    renderTrolley()

    $infoBurger.classList.remove("translate-0");
}