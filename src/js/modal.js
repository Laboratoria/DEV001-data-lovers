let conteinerModal= document.getElementById("conteinerModal");
 
 let modalOfCards=  (pokemon) =>{
   conteinerModal.innerHTML=""
    conteinerModal.innerHTML += `<section class="info">
    <div class="infoSup" id="infoSup">
    <h1 id="nombre"> ${pokemon.name}
    </div> </section>`
   
}


export default modalOfCards