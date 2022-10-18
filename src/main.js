import data from './data/harrypotter/data.js';

let tbody= document.querySelector ("tr");
tbody.style.setProperty("background-color", "#6ab150");

const libros=data.books;

let mitad= libros.length/2;
console.log(mitad);

let p4= libros.slice(0,mitad);
console.log(p4);

let u4=libros.slice(mitad);
console.log(u4);

let tablaProducto = document.getElementById('libros');
let cuerpoTabla = document.createElement('tbody');
let cuerpoTabla2 = document.createElement('tbody');


p4.forEach(p => {
    //console.log(p.id);
    let fila = document.createElement('tfood');
    
            
    let td = document.createElement('tr');
    td.innerText = p.id;
    fila.appendChild(td);

    td = document.createElement('tr');
    td.innerText = p.title;
    fila.appendChild(td);


    let img = document.createElement('img');
    img.src = "https://m.media-amazon.com/images/I/51jYgLTHC8L._SX313_BO1,204,203,200_.jpg";
    fila.appendChild(img);

  
    
    cuerpoTabla.appendChild(fila);
});
tablaProducto.appendChild(cuerpoTabla);
u4.forEach(p => {
    //console.log(p.id);
    let fila2 = document.createElement('tfood');

            
    let td2 = document.createElement('tr');
    td2.innerText = p.id;
    fila2.appendChild(td2);
    
    td2 = document.createElement('tr');
    td2.innerText = p.title;
    fila2.appendChild(td2);

    cuerpoTabla2.appendChild(fila2);
});

tablaProducto.appendChild(cuerpoTabla2);





