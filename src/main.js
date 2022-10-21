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
