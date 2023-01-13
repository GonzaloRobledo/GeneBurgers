import { renderFilterBurgers } from "./load_burgers.js";
import { loadBurgers } from "./load_burgers.js";

export const filterCategory = (burgers, type, sectionBr, sectionCtg) => {
    sectionBr.innerHTML = "";
    if(type=="category"){
        loadBurgers(burgers);
    }else{
        renderFilterBurgers(burgers,type,sectionBr);
    }
    sectionCtg.classList.remove("visible");
}