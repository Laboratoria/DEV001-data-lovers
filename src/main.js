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
    let fila = document.createElement('td');
    
            
    let td = document.createElement('tr');
    td.innerText = p.title;
    fila.appendChild(td);

    let img = document.createElement('img');
    img.src = p.portada;
    img.height= 400;
    img.style.display="block";
    img.style.margin="auto";
    fila.appendChild(img);

    
   

  
    
    cuerpoTabla.appendChild(fila);

});
tablaProducto.appendChild(cuerpoTabla);


u4.forEach(p => {
    //console.log(p.id);
    let fila2 = document.createElement('td');

            
    let td2 = document.createElement('tr');
    td2.innerText = p.title;
    fila2.appendChild(td2);

    let img = document.createElement('img');
    img.src = p.portada;
    img.height= 400;
    img.style.display="block";
    img.style.margin="auto";
    fila2.appendChild(img);


    cuerpoTabla2.appendChild(fila2);
});

tablaProducto.appendChild(cuerpoTabla2);





