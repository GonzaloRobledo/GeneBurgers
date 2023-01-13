import { trolley } from "./add_trolley_burger.js";
import { renderTrolley } from "./render_trolley.js";

export const deleteBurgerTrolley = (id) => {
    trolley.burgers.forEach((br,index)=>{
        if(br.id==id){
            trolley.burgers.splice(index,1);
        }
    })
    
    if(trolley.burgers.length == 0){
        const $trolleyInfo = document.getElementById("trolley-info");
        $trolleyInfo.classList.remove("visible");
    }
    renderTrolley();
}