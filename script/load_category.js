export const loadCategory = (burgers) => {
    const $form = document.querySelector(".sectionCategory form");

    const types = new Set();
    burgers.forEach(br=>{
        types.add(br.type);
    })

    let data = `<div>
                    <label for="category">Categorias (Total: ${burgers.length})</label>
                    <input type="radio" name="category" id="category" value="category" checked>
                </div>`
    types.forEach(type=>{
        const filter = burgers.filter(el=>el.type==type);
        data+=`
        <div>
            <label for=${type}>BURGERS ${type.toUpperCase()} (${filter.length})</label>
            <input type="radio" name="category" id=${type} value=${type}>
        </div>
        `
    })

    $form.innerHTML = data; 
}

{/* <div>
                    <label for="double">BURGERS DOBLES(12)</label>
                    <input type="radio" name="category" id="double">
                </div> */}
