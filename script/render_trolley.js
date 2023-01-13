import { trolley } from "./add_trolley_burger.js";
import { bdBurgers } from "./bdBurgers.js";


export const renderTrolley = () => {
    const $trolley = document.getElementById("trolley");
    const $infoTrolley = document.querySelector("#trolley-info ul");

    let quantity = 0;
    let totalPrice = 0;
    let info = "";

    trolley.burgers.forEach(br=>{
        quantity += br.quantity;
        totalPrice += br.totalPrice;
        
        const filter = bdBurgers.filter(el=>el.id == br.id )[0];

        info += `
            <li data-elim=${br.id}>
                <p class="name-br-trolley">${filter.name}</p>
                <p>$${br.totalPrice}</p>
                <i class="fa-solid fa-circle-xmark"></i>
            </li>
        `
    })

    $infoTrolley.innerHTML = info;

    if(trolley.burgers.length != 0){
        $trolley.innerHTML = `
        <div class="conteiner-92">
            <p>Tu pedido</p>
            <p>${quantity} item</p>
            <p>$${totalPrice}</p>
        </div>
    `
    }else{
        $trolley.innerHTML = "";
    }

}