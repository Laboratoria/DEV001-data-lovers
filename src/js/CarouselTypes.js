const typesPokemon = [
  {
    name: "Bug",
    icon: "./assets/icons/bug.svg",
    color: "bug",
  },
  {
    name: "Dark",
    icon: "./assets/icons/dark.svg",
    color: "dark",
  },
  {
    name: "Dragon",
    icon: "./assets/icons/dragon.svg",
    color: "dragon",
  },
  {
    name: "Electric",
    icon: "./assets/icons/electric.svg",
    color: "electric",
  },
  {
    name: "Fairy",
    icon: "./assets/icons/fairy.svg",
    color: "fairy",
  },
  {
    name: "Fighting",
    icon: "./assets/icons/fighting.svg",
    color: "fighting",
  },

  {
    name: "Fire",
    icon: "./assets/icons/fire.svg",
    color: "fire",
  },
  {
    name: "Flying",
    icon: "./assets/icons/flying.svg",
    color: "flying",
  },
  {
    name: "Ghost",
    icon: "./assets/icons/ghost.svg",
    color: "ghost",
  },

  {
    name: "Grass",
    icon: "./assets/icons/grass.svg",
    color: "grass",
  },
  {
    name: "Ground",
    icon: "./assets/icons/ground.svg",
    color: "ground",
  },
  {
    name: "Ice",
    icon: "./assets/icons/ice.svg",
    color: "ice",
  },
  {
    name: "Normal",
    icon: "./assets/icons/normal.svg",
    color: "normal",
  },
  {
    name: "Poison",
    icon: "./assets/icons/poison.svg",
    color: "poison",
  },
  {
    name: "Psychic",
    icon: "./assets/icons/psychic.svg",
    color: "psychic",
  },
  {
    name: "Rock",
    icon: "./assets/icons/rock.svg",
    color: "rock",
  },
  {
    name: "Steel",
    icon: "./assets/icons/steel.svg",
    color: "steel",
  },
  {
    name: "Water",
    icon: "./assets/icons/water.svg",
    color: "water",
  },
];

let counter = 0;

const carouselTypes = {
  addTypesPokemon: (containerForTypes) => {
    typesPokemon.forEach((type) => {
      containerForTypes.innerHTML += `<div class="${type.color} CardTypePokemon" id="CardTypePokemon">
      <div class="container-img-type"><img src="${type.icon}" alt="icon-type-pokemon" class="icon-type-pokemon"></div>
      <p class="name-type-pokemon" id="name-type-pokemon">${type.name}</p>
      </div>`;
    });
  },
  functionalityCarousel: (iconRigth, iconLeft, containerTypePokemon) => {
    iconRigth.addEventListener("click", () => {
      counter++;

      if (window.screen.width < 600) {
        for (let i of containerTypePokemon) {
          if (counter == 0) {
            i.style.left = "0px";
          }
          if (counter == 1) {
            i.style.left = "-700px";
          }
          if (counter == 2) {
            i.style.left = "-1400px";
          }
          if (counter == 3) {
            i.style.left = "-2100px";
          }
          if (counter == 4) {
            i.style.left = "-2800px";
          }
          if (counter == 5) {
            i.style.left = "-3500px";
          }
          if (counter > 5) {
            counter = 5;
          }
        }
      } else {
        
        for (let i of containerTypePokemon) {
          if (counter == 0) {
            i.style.left = "0px";
          }
          if (counter == 1) {
            i.style.left = "-500px";
          }
          if (counter == 2) {
            i.style.left = "-1000px";
          }
          if (counter > 2) {
            counter = 2;
          }
        }
      }
    });


    iconLeft.addEventListener("click", () => {
      counter--;

      if (window.screen.width < 600) {
        for (let i of containerTypePokemon) {
          if (counter == 0) {
            i.style.left = "0px";
          }
          if (counter == 1) {
            i.style.left = "-700px";
          }
          if (counter == 2) {
            i.style.left = "-1400px";
          }
          if (counter == 3) {
            i.style.left = "-2100px";
          }
          if (counter == 4) {
            i.style.left = "-2800px";
          }
          if (counter == 5) {
            i.style.left = "-3500px";
          }
          if (counter > 5) {
            counter = 5;
          }
        }
      } else {
        for (let i of containerTypePokemon) {
          if (counter == 0) {
            i.style.left = "0px";
          }
          if (counter == 1) {
            i.style.left = "-500px";
          }
          if (counter == 2) {
            i.style.left = "-1000px";
          }
          if (counter < 0) {
            counter = 0;
          }
        }
      }
    });


  },
};

export default carouselTypes;
