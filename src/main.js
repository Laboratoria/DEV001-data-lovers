import {getBooks} from './data.js';

(function(){
  const list = document.querySelector('.menu__links');
  const menu = document.querySelector('.menu__hamburguer');

  menu.addEventListener('click', ()=> list.classList.toggle('.menu__links--show'));
})

const  filtrar =() =>{
  let newDiv = document.getElementById("listas");
  getBooks().filter(book => {
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
/*const filtrar =() =>{
  let newDiv = document.getElementById("listas");
  getBooks().filter(book => {
    let newContent = document.createElement("div");
  newContent.innerHTML=`<div class="informacion">
                        <img src=${book.img} alt=${book.img} width="300px" height="450px">
                        <h1>${book.title}</h1>
                        <h5>${book.releaseDay}</h5>
                        <span>By: ${book.author}</span>
                        <button>Ver mas...</button></div>`
  newDiv.appendChild(newContent);

});
}*/

const buttonPelis= document.getElementById("peliculas");
buttonPelis.addEventListener("click",()=>{
    filtrar();
    document.getElementById("lista").style.display = 'none';
    document.getElementById("foto").style.display = 'none';
    document.body.style.backgroundImage='none';
})


