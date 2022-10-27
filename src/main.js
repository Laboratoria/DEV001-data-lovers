
import { getBooks } from './data.js';

(function () {
  const list = document.querySelector('.menu__links');
  const menu = document.querySelector('.menu__hamburguer');

  menu.addEventListener('click', () => list.classList.toggle('.menu__links--show'));
})

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

const verMas = window.querySelector(".button");
verMas.addEventListener("click", clicked);
function clicked () {
  return alert ("holas");
}

import {getBooks} from './data.js';
/*import harrypotter from "./data/harrypotter/data.js"*/


const  addElement =() =>{
  let newDiv = document.getElementById("listas");
  getBooks().forEach(book => {
    let newContent = document.createElement("div");
  newContent.innerHTML=`<div class="informacion">
                        <img src=${book.img} alt=${book.img} width="300px" height="450px">
                        <h1>${book.title}</h1>
                        <h5>${book.releaseDay}</h5>
                        <span>By: ${book.author}</span>
                        <button>Ver mas...</button></div>`
  newDiv.appendChild(newContent);
});
}




const buttonPelis= document.getElementById("peliculas");

buttonPelis.addEventListener("click",()=>{
    addElement();
    document.getElementById("lista").style.display = 'none';
    document.getElementById("foto").style.display = 'none';
    document.body.style.backgroundImage='none';
})
