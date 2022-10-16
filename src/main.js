import { filterData } from './data.js';

import data from './data/ghibli/ghibli.js';

const gFilms=data.films;

//console.log(data["films"][0]["producer"]);


    //console.log(data["films"][k]["producer"]);
    for (let i=0; i<filterData(gFilms,"producer").length;i++)
    {
        
        console.log( filterData(gFilms,"producer")[i]);
    }

