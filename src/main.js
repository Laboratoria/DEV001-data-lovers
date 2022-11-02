import { getBooks,getSpells} from './data.js';

/*Filtrando libros*/
const filtrarLibros = () => {
  let newDiv = document.getElementById("card");
  getBooks().filter(book => {
    let newContent = document.createElement("div");
    newContent.innerHTML = `<div class="informacion">
                              <img src=${book.img} alt=${book.img} width="300px" height="450px">
                              <div class="text-total">
                                <h1 class="text">${book.title}</h1>
                                <h5 class="text">${book.releaseDay}</h5>
                                <h6 class="text">By: ${book.author}</h6>
                              </div>
                              <button class="button">Ver mas</button>
                            </div>`
    newDiv.appendChild(newContent);

  });
}

const buttonLibros = document.getElementById("libros");
buttonLibros.addEventListener("click", () => {
  filtrarLibros();
  document.getElementById("lista").style.display = 'none';
  document.getElementById("foto").style.display = 'none';
  document.body.style.backgroundImage = 'none';
})

/*Filtrando Spells*/

/*FUNCION PARA AÑADIR/FILTRAR SPELLS */
const  addSpells =(data) =>{
  let newDiv = document.getElementById("cardSpells");
  newDiv.removeChild(newDiv.firstChild);
  let newContent = document.createElement("div");
  data.forEach(spells => {
  newContent.innerHTML+=`<div class="informacion">
                        <h1>${spells.name}</h1>
                        <h5>${spells.pronunciation}</h5>
                        <span>Tipo: ${spells.spell_type}</span>
                        <span>Descripción: ${spells.description}</span></div>`
                        
  });
  newDiv.appendChild(newContent);
}

/* BOTON PARA ACCEDER A LA PAGINA */
const buttonSpells = document.getElementById("spells");
const selectSpells = document.getElementById ("filtrarSpells")

buttonSpells.addEventListener("click",()=>{
    addSpells(getSpells());
    selectSpells.style.visibility="visible";
    document.getElementById("lista").style.display = 'none';
  })

/* BOTON PARA  FILTRAR TIPO */
selectSpells.addEventListener("click", ()=>{
  const vals = [...selectSpells.options]
  .map(el => el.value); 
  const typeSelected=vals[selectSpells.selectedIndex]
  const typeFiltered = typeSelected!=="Todos"?getSpells().filter(filtrar => {
    /*return filtrar.spell_type == typeSelected; */
    const typesFiltered=filtrar.spell_type=== null?[filtrar.spell_type]:filtrar.spell_type.split(',');
    return typesFiltered.includes(typeSelected)
  }):getSpells()
  addSpells(typeFiltered)
  
})

