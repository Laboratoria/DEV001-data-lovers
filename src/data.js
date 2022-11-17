import data from "./data/harrypotter/data.js"

export const getBooks = () => Object.values(data.books);

export const getSpells = () => Object.values(data.spells);

export const getPotions = () => Object.values(data.potions);

export const getCharacters = () => Object.values(data.characters);
    

//FILTRAR
//Filtrar por tipo genero
export const filtrargenero = (data, genero) => data.filter(e => e.gender == genero);

//Filtrar por casas
export const filtrarcasas = (data, casas) => data.filter(e => e.house == casas);

//Ordenar de AZ-ZA
export const ordenAZ = (data) => {
    const ordenAZ = data.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        //return 0;
    })
    return ordenAZ;
};

export const ordenZA = (data) => {
    const ordenZA = data.sort(function (a, b) {
        if (a.name > b.name) {
            return -1;
        }
        if (a.name < b.name) {
            return 1;
        }
        //  return 0;
    })
    return ordenZA;
};

