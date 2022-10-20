import {getBooks} from './data.js';
import harrypotter from "./data/harrypotter/data.js"


const  addElement =() =>{
  let newDiv = document.getElementById("listas");
  getBooks().forEach(book => {
    
    let newContent = document.createElement("h1");
  newContent.innerHTML=`<span>${book.title}</span>`
  newDiv.appendChild(newContent); 
});
}

const buttonPelis= document.getElementById("peliculas");

buttonPelis.addEventListener("click",()=>{
    addElement();
    document.getElementById("libros").style.display = 'none';
    document.getElementById("peliculas").style.display = 'none';
    document.getElementById("precuelas").style.display = 'none';
    document.getElementById("deporte").style.display = 'none';
    document.getElementById("foto").style.display = 'none';
    document.body.style.backgroundImage='none';
})
