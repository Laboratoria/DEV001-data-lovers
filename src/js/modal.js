let conteinerModal= document.getElementById("conteinerModal");
 
 let modalOfCards=  (pokemon) =>{
   conteinerModal.innerHTML=""
    conteinerModal.innerHTML += `<section class="headerOfCard">
    <div class="infoSup" id="infoSup">
    <span class ="NumYRegion">
        <span>${pokemon.num}</span>
        <span>${pokemon.generation.name}</span>
        </span>
        <div class ="photo" id ="photoModal"> <img id= "imgModal" src=${pokemon.img} alt="pokemones">
        </div>

    <h1 id="nombre"> ${pokemon.name}
    </div> </section>`
   
}


export default modalOfCards