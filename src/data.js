import harrypotter from "./data/harrypotter/data.js"
const getBooks = () => {
    return Object.values(harrypotter.books);
}

export {
    getBooks
};
}

