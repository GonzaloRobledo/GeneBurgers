import { verificateExists } from "./add_trolley_burger.js";
import { trolley } from "./add_trolley_burger.js";

export const showInfoBurger = (burgers, id) => {
    const $infoBurger = document.getElementById("info-burger");
    
    $infoBurger.classList.add("translate-0");

    const infoBurger = burgers.filter(br=>br.id==id)[0];

    const exists = verificateExists(id);

    $infoBurger.innerHTML = `
    <article>
                <i class="fa-solid fa-arrow-left"></i>
                <div class="img-info-burger">
                    <img
                        src=${infoBurger.img} alt=${infoBurger.name}>
                </div>

                <div class="conteiner-92 info">
                    <h2>${infoBurger.name}</h2>
                    <p>${infoBurger.info}</p>
                    <div class="quantity">
                        <p>Cantidad</p>
                        <div>
                            <p class="br-100 lessQuantity">-</p>
                            <p class="numQuantity">${exists!=-1 ? trolley.burgers[exists].quantity : "1"}</p>
                            <p class="br-100 addQuantity">+</p>
                        </div>
                    </div>
                </div>
                <div class="add-burger">
                    <div data-id=${infoBurger.id}>
                        <p>Agregar</p>
                        <p class="item">${exists!=-1 ? trolley.burgers[exists].quantity : "1"} item</p>
                        <p class="total-price">$${exists!=-1 ? trolley.burgers[exists].totalPrice : infoBurger.price}</p>
                    </div>
                </div>
            </article>
    `
    
}