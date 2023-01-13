import { bdBurgers} from "./bdBurgers.js";
import { filterCategory } from "./filter_category.js";
import { loadBurgers } from "./load_burgers.js";
import { loadCategory } from "./load_category.js";
import { showCategory } from "./show_category.js";
import { searchBurger } from "./search_burger.js";
import { showInfoBurger } from "./show_info_burger.js";
import { addQuantity } from "./add_quantity.js";
import { lessQuantity } from "./less_quantity.js";
import { addTrolleyBurger } from "./add_trolley_burger.js";
import { deleteBurgerTrolley } from "./delete_burger_trolley.js";

/* VARIABLES y CONSTANTES DE USO MUY PROBABLE */
const $sectionCategory = document.querySelector(".sectionCategory");
const $sectionBurgers = document.getElementById("sectionBurgers");


/** EVENTOS **/
document.addEventListener("DOMContentLoaded",e=>{
    loadBurgers(bdBurgers);
    loadCategory(bdBurgers);
})

document.addEventListener("click", e=>{
    if(e.target.matches("#sectionFiltros div") || e.target.matches("#sectionFiltros div *")){//MOSTAR o OCULTAR EL FILTRO DE CATEGORIAS
        showCategory($sectionCategory);
    }else{
        if(e.target.matches(".sectionCategory")) showCategory($sectionCategory);
    }

    if(e.target.matches("#sectionBurgers li *")){
        let id;
        if(e.target.matches("img")){
            id = e.target.parentNode.parentNode.id;
        }else{
            id = e.target.parentNode.id;
        }
        showInfoBurger(bdBurgers, id);
    }
    if(e.target.matches(".fa-arrow-left")){
        document.getElementById("info-burger").classList.remove("translate-0");
    }

    if(e.target.matches(".addQuantity")){
        addQuantity()
    }
    if(e.target.matches(".lessQuantity")){
        lessQuantity();
    }

    if(e.target.matches(".add-burger *")){
        addTrolleyBurger();
    }

    if(e.target.matches("#trolley *")){
        document.getElementById("trolley-info").classList.add("visible");
    }

    if(e.target.matches(".close-trolley")){
        document.getElementById("trolley-info").classList.remove("visible");
    }

    if(e.target.matches(".fa-circle-xmark")){
        deleteBurgerTrolley(e.target.parentNode.dataset.elim);
    }

    if(e.target.matches(".btn-buy")){
        alert("COMPRA REALIZADA!")
    }
})

document.addEventListener("change", e=>{
    if(e.target.matches(".sectionCategory input")){
        filterCategory(bdBurgers,e.target.value,$sectionBurgers, $sectionCategory);
    }
})

document.addEventListener("keyup", e=>{
    if(e.target.matches("#searchBurger")){
        searchBurger(e.target.value,$sectionBurgers);
    }
})