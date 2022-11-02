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


