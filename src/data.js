import harrypotter from "./data/harrypotter/data.js"
const getBooks = () => {
    return Object.values(harrypotter.books);
}

export {
    getBooks

};

const getSpells = () => {
    return Object.values(harrypotter.spells);
}

export {
    getSpells

};

const getPotions = () => {
    return Object.values(harrypotter.potions);
}

export {
    getPotions

};

const getCharacters = () => {
    return Object.values(harrypotter.characters);
}

export {
    getCharacters

};



//FILTRAR
//Filtrar por tipo gerenero
const filtrargenero = (data, genero) => {
    const arraygenerotype = data.filter(e => e.gender == genero);
    return arraygenerotype
}
//Filtrar por casas
const filtrarcasas = (data, casas) => {
    const arraycasastype = data.filter(e => e.house == casas);
    return arraycasastype
}
export {
    filtrargenero,
    filtrarcasas

}


//Ordenar de AZ-ZA
const ordenAZ = (data) => {
    const ordenAZ = data.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }

        //return 0;
    })
    return ordenAZ;
};


const ordenZA = (data) => {
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


export {
    ordenZA,
    ordenAZ
}
