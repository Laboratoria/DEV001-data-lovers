const typesPokemon = [
  {
    name: "Bug",
    icon: "./../assets/icons/bug.svg",
    color: "BugColor",
  },
  {
    name: "Dark",
    icon: "./../assets/icons/dark.svg",
    color: "DarkColor",
  },
  {
    name: "Dragon",
    icon: "./../assets/icons/dragon.svg",
    color: "DragonColor",
  },
  {
    name: "Electric",
    icon: "./../assets/icons/electric.svg",
    color: "ElectricColor",
  },
  {
    name: "Fairy",
    icon: "./../assets/icons/fairy.svg",
    color: "FairyColor",
  },
  {
    name: "Fighting",
    icon: "./../assets/icons/fighting.svg",
    color: "FightingColor",
  },

  {
    name: "Fire",
    icon: "./../assets/icons/fire.svg",
    color: "FireColor",
  },
  {
    name: "Flying",
    icon: "./../assets/icons/flying.svg",
    color: "FlyingColor",
  },
  {
    name: "Ghost",
    icon: "./../assets/icons/ghost.svg",
    color: "GhostColor",
  },

  {
    name: "Grass",
    icon: "./../assets/icons/grass.svg",
    color: "GrassColor",
  },
  {
    name: "Ground",
    icon: "./../assets/icons/ground.svg",
    color: "GroundColor",
  },
  {
    name: "Ice",
    icon: "./../assets/icons/ice.svg",
    color: "IceColor",
  },
  {
    name: "Normal",
    icon: "./../assets/icons/normal.svg",
    color: "NormalColor",
  },
  {
    name: "Poison",
    icon: "./../assets/icons/poison.svg",
    color: "PoisonColor",
  },
  {
    name: "Psychic",
    icon: "./../assets/icons/psychic.svg",
    color: "PsychicColor",
  },
  {
    name: "Rock",
    icon: "./../assets/icons/rock.svg",
    color: "RockColor",
  },
  {
    name: "Steel",
    icon: "./../assets/icons/steel.svg",
    color: "SteelColor",
  },
  {
    name: "Water",
    icon: "./../assets/icons/water.svg",
    color: "WaterColor",
  },
];

let counter = 0;


const carouselTypes = {
  addTypesPokemon: (containerForTypes) => {
    typesPokemon.forEach((type) => {
      containerForTypes.innerHTML += `<div class="${type.color} CardTypePokemon" id="CardTypePokemon">
      <div class="container-img-type"><img src="${type.icon}" alt="icon-type-pokemon" class="icon-type-pokemon"></div>
      <p class="name-type-pokemon">${type.name}</p>
      </div>`;
    });
  },
  functionalityCarousel: (iconRigth, iconLeft, containerTypePokemon) => {
    
    iconRigth.addEventListener("click", ()=>{
        counter++;

        /*containerTypePokemon.style.left = -(740 * counter) + "px 0";*/
        for(let i of containerTypePokemon){
            if (counter == 0) {i.style.left = "0px";}
            if (counter == 1) {i.style.left = "-500px";}
            if (counter == 2) {i.style.left = "-1000px";}
            if (counter > 2) {counter = 2;}
        }

    });

    iconLeft.addEventListener("click", ()=>{
        counter--;

        /*containerTypePokemon.style.left = -(740 * counter) + "px 0";*/
        for(let i of containerTypePokemon){
            if (counter == 0) {i.style.left = "0px";}
            if (counter == 1) {i.style.left = "-500px";}
            if (counter == 2) {i.style.left = "-1000px";}
            if (counter < 0) {counter=0;}
        }

    });

  },
};

export default carouselTypes;
