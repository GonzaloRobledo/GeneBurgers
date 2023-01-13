

export const renderFilterBurgers = (burgers,type, sectionBr) => {
    const filter = burgers.filter(br => br.type==type);
 
    const $article = document.createElement("article");

    let infoBurger = "";

    filter.forEach(br=>{
        infoBurger += `
            <li id=${br.id}>
                <div><img src=${br.img} alt=${br.name}></div>
                <h4>${br.name}</h4>
                <p>$ ${br.price}</p>
            </li>
        `
    })

    $article.innerHTML = `<h2>BURGERS ${filter[0].type.toUpperCase()} <span>(${filter.length})</span></h2>
                            <ul>
                                ${infoBurger}
                            </ul>`

    sectionBr.appendChild($article);
}

export const loadBurgers = (burgers) => {
    const $sectionBurgers = document.getElementById("sectionBurgers")
    const types = new Set();
    burgers.forEach(br=>{
        types.add(br.type);
    })
    
    types.forEach(type=>{
        renderFilterBurgers(burgers,type, $sectionBurgers);
    });
}