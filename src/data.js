// array pokekanto que ocuparemos para todo
export function filtroPokeKanto(pokemones) {
    let pokeKanto = []
    pokemones.forEach(function(pokemon) {
        if (pokemon.generation.name === 'kanto') {
            pokeKanto.push(pokemon);
        }
    })
    return pokeKanto;
}
// array de tipo de pokemones con filter
export const filtroPorTipo = (arraypokemon, tipo) => { //Creamos una función para exportar/el arraypokemon no tiene valor aún es nuestro parámetro
    return arraypokemon.filter(elemento => elemento.type.includes(tipo));
}
// ordenar el array con sort
export const ordenAZ = (arraypokemon, ordenSeleccionado) => {
    if (ordenSeleccionado === "AZ") {
        const ordenByAZ = arraypokemon.sort((a, b) =>
            a.name.localeCompare(b.name)
        )
        return ordenByAZ
    } else if (ordenSeleccionado === "ZA") {
        const ordenByZA = arraypokemon.sort((a, b) =>
            b.name.localeCompare(a.name)
        )
        return ordenByZA
    } else { return arraypokemon }
};
// filtrar para poder buscar por nombre
export const searchFilter = (arrayPokemon, nombre)=> {
    return arrayPokemon.filter (x=>x.name.startsWith(nombre.toLowerCase()))
};
// startWhit permite que vayan apareciendo las coincidencias antes de colocar el nombre completo

//toLowerCase devuelve valor en minusculas 

