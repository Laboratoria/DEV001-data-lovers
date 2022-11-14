import { getBooks, getSpells, getPotions, getCharacters, filtrargenero, filtrarcasas, ordenAZ, ordenZA } from './data.js';
import data from './data/harrypotter/data.js';

/Filtrando libros/
const newDiv = document.getElementById("card");
const filtrarLibros = () => {
  getBooks().forEach(book => {
    const newContent = document.createElement("div");
    newContent.innerHTML += `<div class="informacionBook">
                              <img src=${book.img} alt=${book.img} width="300px" height="450px">
                              <div class="text-total">
                                <h1 class="text">${book.title}</h1><br>
                                <h5 class="text">${book.releaseDay}</h5><br>
                                <h6 class="text">By: ${book.author}</h6>
                              </div>
                              <button id="verMas${book.id}" class="button">Ver mas</button>
                            </div>`
    newDiv.appendChild(newContent);

    //  Modal de los libros 
    const openmimodal = document.querySelector(`#verMas${book.id}`);
    openmimodal.addEventListener('click', (e) => {
      e.preventDefault();
      //console.log('pruebas daniscas');
      document.getElementById("miModal").style.display = "block";
      let modalTitleBook = document.querySelector(".hp");
      modalTitleBook.innerText = `${book.title}`;
      let newDivInformacionMain = document.querySelector(".centerText-1");
      newDivInformacionMain.innerText = `${book.description}`;
      let deleteInformacionMain = document.querySelector(".centerText-2");
      deleteInformacionMain.innerText = ` `;

    })

  })
}
//Boton para acceder a los libros 
const buttonLibros = document.getElementById("libros");
buttonLibros.addEventListener("click", () => {
  filtrarLibros();
  document.getElementById("lista").style.display = 'none';
  const backimagen = document.querySelector("body")
  backimagen.style.backgroundImage = "none";
})

/*Filtrando Spells*/

/*FUNCION PARA AÑADIR/FILTRAR SPELLS */
const addSpells = (data) => {
  let newDiv = document.getElementById("cardSpells");
  newDiv.removeChild(newDiv.firstChild);
  let newContent = document.createElement("div");
  data.forEach(spells => {
    newContent.innerHTML += `<div class="informacionSpells">
                        <h1>${spells.name}</h1>
                        <h5>${spells.pronunciation}</h5>
                        <span>Tipo: ${spells.spell_type}</span>
                        <span>Descripción: ${spells.description}</span></div>`

  });
  newDiv.appendChild(newContent);
}


/* BOTON PARA ACCEDER A LA PAGINA */
const buttonSpells = document.getElementById("spells");
const selectSpells = document.getElementById("filtrarSpells")
const spellsContainer = document.getElementById("spellsContainer")
buttonSpells.addEventListener("click", () => {
  addSpells(getSpells());
  spellsContainer.style.display = "block";
  document.getElementById("lista").style.display = 'none';
  const backimagen = document.querySelector("body")
  backimagen.style.backgroundImage = "none";
})

/* BOTON PARA  FILTRAR TIPO */
selectSpells.addEventListener("click", () => {
  const vals = [...selectSpells.options]
    .map(el => el.value);
  const typeSelected = vals[selectSpells.selectedIndex]
  const typeFiltered = typeSelected !== "Todos" ? getSpells().filter(filtrar => {
    /*return filtrar.spell_type == typeSelected; */
    const typesFiltered = filtrar.spell_type === null ? [filtrar.spell_type] : filtrar.spell_type.split(',');
    return typesFiltered.includes(typeSelected)
  }) : getSpells()
  addSpells(typeFiltered)
})

//TARJETAS DE PERSONAJES
const addPersonajes = (data) => {
  const newDiv5 = document.getElementById("cardPersonajes");
  const newContent5 = document.createElement("div");
  newContent5.classList.add("my-class2");
  data.forEach(characters => {
    newContent5.innerHTML += `<div class="informacionPersonajes">
                        <h1>${characters.name}</h1><br><br>
                        <h5>${characters.birth}</h5>
                        <h5>${characters.death}</h5>
                        <h5>${characters.house}</h5>
                        <span>Tipo: ${characters.species}</span><br>
                        <span>Tipo: ${characters.gender}</span><br><br><br></div>`


  });
  newDiv5.appendChild(newContent5);

}
//FUNCION DE FILTRAR CASAS Y GENERO
const selectCasas = document.getElementById("filterCasas")
selectCasas.addEventListener("change", (e) => {
  let arreglofiltrado2 = filtrarcasas(data.characters, e.target.value)
  //let containerarjetas2 = document.querySelector('.my-class2');
  let housefiltros = document.querySelector(".cardPersonajes");
  let personajesfiltros = document.querySelector(".cardPersonajesGenero");
  housefiltros.innerHTML = "";
  personajesfiltros.innerHTML = "";
  arreglofiltrado2.forEach(characters => {
    housefiltros.innerHTML += `<div class="informacionPersonajes">
    <h1>${characters.name}</h1><br><br>
    <h5>${characters.birth}</h5>
    <h5>${characters.death}</h5>
    <h5>${characters.house}</h5>
    <span>Tipo: ${characters.species}</span><br>
    <span>Tipo: ${characters.gender}</span><br><br><br></div>`
  })
});
const selectGenero = document.getElementById("filterGender")
selectGenero.addEventListener("change", (e) => {
  let arreglofiltrado2 = filtrargenero(data.characters, e.target.value)
  //let containerarjetas2 = document.querySelector('.my-class2');
  let housefiltros = document.querySelector(".cardPersonajes");
  let personajesfiltros = document.querySelector(".cardPersonajesGenero");
  housefiltros.innerHTML = "";
  personajesfiltros.innerHTML = "";
  arreglofiltrado2.forEach(characters => {
    housefiltros.innerHTML += `<div class="informacionPersonajes">
    <h1>${characters.name}</h1><br><br>
    <h5>${characters.birth}</h5>
    <h5>${characters.death}</h5>
    <h5>${characters.house}</h5>
    <span>Tipo: ${characters.species}</span><br>
    <span>Tipo: ${characters.gender}</span><br><br><br></div>`
  })
});






//Boton de personajes
const buttonPersonajes = document.getElementById("peliculas");

const filtrarCasas2 = document.getElementById("filterCasas")
const filtrargenero2 = document.getElementById("filterGender")
const charactersContainer = document.getElementById("charactersContainer")
buttonPersonajes.addEventListener("click", () => {
  addPersonajes(getCharacters());

  charactersContainer.style.display = "block";
  filtrarCasas2.style.display = "block";
  filtrargenero2.style.display = "block";
  document.getElementById("lista").style.display = 'none';
  const backimagen = document.querySelector("body")
  backimagen.style.backgroundImage = "none";


})


//Ordenando de  A a Z
//Crear cartillas para las posiciones

const addPotions = (data) => {

  let newDiv2 = document.getElementById("cardPotions");
  //console.log(newDiv2,newDiv2.firstChild)
  newDiv2.firstChild && newDiv2.removeChild(newDiv2.firstChild);
  let newContent2 = document.createElement("div");
  newContent2.classList.add("my-class");
  data.forEach(potions => {
    newContent2.innerHTML += `<div class="informacion3">
                        <div class="titulo3">
                        <h1 >${potions.id}</h1>
                        <h1 >${potions.name}</h1>
                        <span>Descripción: ${potions.description}</span></div></div>`;


  });
  newDiv2.appendChild(newContent2);


  //Ordenando de AZ
  const selectPotions = document.getElementById("filterAZ")
  selectPotions.addEventListener("change", (e) => {
    const ponts = getPotions();
    if (e.target.value == 'aZ') {
      let arrayAZ = ordenAZ(ponts);
      let containerarjetas = document.querySelector('.my-class');
      let containerarjetasAZ = document.querySelector('.cardPotionsAZ');
      let containerarjetasZA = document.querySelector('.cardPotionsZA');
      containerarjetas.innerHTML = ' ';
      containerarjetasZA.innerHTML = ' ';
      //console.log('arreglo 11');
      arrayAZ.forEach(potions => {
        containerarjetasAZ.innerHTML += `<div class="informacion3">
                            <div class="titulo3">
                            <h1 >${potions.id}</h1>
                            <h1 >${potions.name}</h1>
                            <span>Descripción: ${potions.description}</span></div></div>`;


      });
    } else {
      let arrayZA = ordenZA(ponts);
      let containerarjetas = document.querySelector('.my-class');
      let containerarjetasZA = document.querySelector('.cardPotionsZA');
      let containerarjetasAZ = document.querySelector('.cardPotionsAZ');
      containerarjetas.innerHTML = ' ';
      containerarjetasAZ.innerHTML = ' ';
      //console.log('arreglo 21');
      arrayZA.forEach(potions => {
        containerarjetasZA.innerHTML += `<div class="informacion3">
                            <div class="titulo3">
                            <h1 >${potions.id}</h1>
                            <h1 >${potions.name}</h1>
                            <span>Descripción: ${potions.description}</span></div></div>`;
 });
}



    // let cartPotions = document.getElementById("cardPotions");
    //   const pots = getPotions();
    //   potionsarray(pots);
    // pots.forEach(potions => {

    //   }); 
  })
  //Ordenando de ZA
  // const selectPotions2= document.getElementById("filterZA")
  // selectPotions.addEventListener("click", ()=>{

  //   function SortArray(a, b){
  //     if (a.name < b.name) {return -1;}
  //    if (a.name > b.name) {return 1;}
  //     return 0;
  // }

  // var l = getPotions().sort(SortArray);
  // console.log(s);
  // })

  //Ordenando ZA
  // const selectPotionsZA= document.getElementById("filterZA")
  // selectPotionsZA.addEventListener("click", ()=>{
  //   // const pots = getPotions();
  //   // potionsarraynew(pots);

  //   function SortArray(x, y){
  //      if (x.name < y.name) {return -1;}
  //     if (x.name > y.name) {return 1;}
  //     return 0;
  // }
  // var s = getPotions().sort(SortArray);
  // console.log(s);

  // })
}
const buttonpersonajes = document.getElementById("personajes")
const ordenarSpells = document.getElementById("filterAZ")
buttonpersonajes.addEventListener("click", () => {
  addPotions(getPotions());
  ordenarSpells.style.display = "block";
  document.getElementById("lista").style.display = 'none';
  const backimagen = document.querySelector("body")
  backimagen.style.backgroundImage = "none";
})


/*const selectPotions= document.getElementById("filterAZ")
 selectPotions.addEventListener("click",()=>{
  console.log("hola como estas?")
  if (e.target.value === "zA") {
let arreglodescendente = potionsarraynew (data.potions);
console.log(arreglodescendente)
let nombresdescendentes = document.querySelector(".cardPotions")
        nombresdescendentes.innerHTML = ""
        arreglodescendente.forEach(potions => {
          $('.cardPotions').innerHTML("beforeend", (potions));
  })}

else {
  let arregloascendente =potionsarray (data.potions);
  console.log(arregloascendente)
  let nombresascendentes = document.querySelector(".cardPotions")
        nombresascendentes.innerHTML = ""
        arreglodescendente.forEach(potions => {
          $('.cardPotions').innerHTML("beforeend", (potions));
      })}*/