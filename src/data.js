import harrypotter from "./data/harrypotter/data.js"
const getBooks = () => {
    return Object.values(harrypotter.books);
}

export {
    getBooks
};
/*
(function(){
  const list = document.querySelector('.menuItems');
  const menu = document.querySelector('.boxMenu');

  menu.addEventListener('click', ()=> list.classList.toggle('mostrar'));
})*/
