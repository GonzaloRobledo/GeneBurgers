import { bdBurgers } from "./bdBurgers.js"
import { loadBurgers } from "./load_burgers.js";

export const searchBurger = (textSearch,sectionBr) => {
    sectionBr.innerHTML = "";

    const filter = bdBurgers.filter(br => br.name.toLowerCase().includes(textSearch.toLowerCase()));

    if(filter.length == 0){
        sectionBr.innerHTML = `<div class="notFind">Sin coincidencias :(</div>`;
    }else{
        loadBurgers(filter);
    }
}