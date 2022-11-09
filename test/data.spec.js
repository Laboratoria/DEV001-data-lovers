import { encontrarId,ordenarAaZ, ordenarFecha, ordenarImportancia,filtrarCasa, filtrarGenero,filtrarEspecie,estadisticaCasas} from '../src/data.js';


const dataPrueba=[
  {
    "id": 1,
    "title": "Harry Potter and the Sorcerer's Stone",
    "releaseDay": "June 26, 1997",
    "author": "J. K. Rowling",
    "portada":"https://raw.githubusercontent.com/nicole11robayo/DEV001-data-lovers/main/src/src_imagenes/HarryPotterYLaPiedraFilosofal.jpg",
    "description": "On his birthday, Harry Potter discovers that he is the son of two well-known wizards, from whom he has inherited magical powers. He must attend a famous school of magic and sorcery, where he establishes a friendship with two young men who will become his companions on his adventure. During his first year at Hogwarts, he discovers that a malevolent and powerful wizard named Voldemort is in search of a philosopher's stone that prolongs the life of its owner.",
  },
  {
    "id": 3,
    "title": "Harry Potter and the Prisoner of Azkaban",
    "releseDay": "July 8, 1999",
    "author": "J. K. Rowling",
    "portada": "https://raw.githubusercontent.com/nicole11robayo/DEV001-data-lovers/main/src/src_imagenes/HarryPotterYElPrisioneroDeAzkaban.jpg",
    "description": "Harry's third year of studies at Hogwarts is threatened by Sirius Black's escape from Azkaban prison. Apparently, it is a dangerous wizard who was an accomplice of Lord Voldemort and who will try to take revenge on Harry Potter.",
  },
  {
    "id": 6,
    "title": "Harry Potter and the Half-Blood Prince",
    "releaseDay": "July 16, 2005",
    "author": "J. K. Rowling",
    "portada":"https://raw.githubusercontent.com/nicole11robayo/DEV001-data-lovers/main/src/src_imagenes/HarryPotterYElMisterioPrincipe.jpg",
    "description": "Harry discovers a powerful book and, while trying to discover its origins, collaborates with Dumbledore in the search for a series of magical objects that will aid in the destruction of Lord Voldemort.",
  }
]

const dataPruebaPersonajes=[
  {
    "id": 585,
    "name": "Miranda Goshawk",
    "books_featured_in": [1, 2, 4]
  },
  {
    "id": 587,
    "name": "Hermione Granger",
    "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
  },
  {
    "id": 586,
    "name": "Gregory Goyle's mother",
    "books_featured_in": [5]
  }
];

const dataPruebaPersonajesCasaGenero=[
  {
    "id": 589,
    "name": "Daphne Greengrass",
    "birth": "Between 1 September 1979 and 31 August 1980",
    "death": null,
    "species": "Human",
    "ancestry": "Pure-blood",
    "gender": "Female",
    "hair_color": null,
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": "Slytherin",
    "associated_groups": ["Hogwarts School of Witchcraft and Wizardry", "Slytherin", "Greengrass family"],
    "books_featured_in": [5]
  },
  {
    "id": 592,
    "name": "Curious Gryffindor Girl",
    "birth": "between 1 September 1980 and 31 August 1981 (most likely), Great Britain or Ireland",
    "death": null,
    "species": "Human",
    "ancestry": null,
    "gender": "Female",
    "hair_color": null,
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": "Gryffindor",
    "associated_groups": [],
    "books_featured_in": [5]
  },
  {
    "id": 566,
    "name": "Fawcett",
    "birth": "Between 1 November 1977 and 31 August 1981, Great Britain or Ireland",
    "death": null,
    "species": "Human",
    "ancestry": null,
    "gender": "Female",
    "hair_color": "Black",
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": "Ravenclaw",
    "associated_groups": ["Fawcett family", "Hogwarts School of Witchcraft and Wizardry", "Ravenclaw"],
    "books_featured_in": [2, 4]
  },
  {
    "id": 489,
    "name": "Hengist of Woodcroft",
    "birth": "982 or later",
    "death": null,
    "species": "Human",
    "ancestry": null,
    "gender": "Male",
    "hair_color": "Red",
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": "Hufflepuff",
    "associated_groups": ["Hogsmeade", "Hogwarts School of Witchcraft and Wizardry", "Hufflepuff"],
    "books_featured_in": [1]
  }
]

const dataPruebaPersonajesEspecie=[
  {
    "id": 489,
    "name": "Hengist of Woodcroft",
    "birth": "982 or later",
    "death": null,
    "species": "Human",
    "ancestry": null,
    "gender": "Male",
    "hair_color": "Red",
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": "Hufflepuff",
    "associated_groups": ["Hogsmeade", "Hogwarts School of Witchcraft and Wizardry", "Hufflepuff"],
    "books_featured_in": [1]
  },
  {
    "id": 751,
    "name": "Winky's mother",
    "birth": null,
    "death": null,
    "species": "House-elf",
    "ancestry": null,
    "gender": "Female",
    "hair_color": null,
    "eye_color": null,
    "wand": null,
    "patronus": null,
    "house": null,
    "associated_groups": ["Crouch family"],
    "books_featured_in": [4]
  },
  {
    "id": 352,
    "name": "Ripper",
    "birth": "c. 1980s",
    "death": null,
    "species": "Dog (breed: bulldog)",
    "ancestry": null,
    "gender": "Male",
    "hair_color": "Brown and white",
    "eye_color": "Black",
    "wand": null,
    "patronus": null,
    "house": null,
    "associated_groups": ["Marjorie Dursley"],
    "books_featured_in": [3, 5]
  },
]

describe('Quiero testear que el id de la tarjeta coincida con el id del objeto y me retorne dicho objeto', () => {
  const objetoData=
    {
      "id": 6,
      "title": "Harry Potter and the Half-Blood Prince",
      "releaseDay": "July 16, 2005",
      "author": "J. K. Rowling",
      "portada":"https://raw.githubusercontent.com/nicole11robayo/DEV001-data-lovers/main/src/src_imagenes/HarryPotterYElMisterioPrincipe.jpg",
      "description": "Harry discovers a powerful book and, while trying to discover its origins, collaborates with Dumbledore in the search for a series of magical objects that will aid in the destruction of Lord Voldemort.",
    }
  

  it('id=6 sea igual al objetoData ', () => {
    expect(encontrarId("6", dataPrueba)).toEqual(objetoData);
  });
});

describe('Quiero ordenar los libros de la A a la Z', () => {
 const dataOrdenadaAZ=[ 
  {
    "id": 6,
    "title": "Harry Potter and the Half-Blood Prince",
    "releaseDay": "July 16, 2005",
    "author": "J. K. Rowling",
    "portada":"https://raw.githubusercontent.com/nicole11robayo/DEV001-data-lovers/main/src/src_imagenes/HarryPotterYElMisterioPrincipe.jpg",
    "description": "Harry discovers a powerful book and, while trying to discover its origins, collaborates with Dumbledore in the search for a series of magical objects that will aid in the destruction of Lord Voldemort.",
  },
  {
    "id": 3,
    "title": "Harry Potter and the Prisoner of Azkaban",
    "releseDay": "July 8, 1999",
    "author": "J. K. Rowling",
    "portada": "https://raw.githubusercontent.com/nicole11robayo/DEV001-data-lovers/main/src/src_imagenes/HarryPotterYElPrisioneroDeAzkaban.jpg",
    "description": "Harry's third year of studies at Hogwarts is threatened by Sirius Black's escape from Azkaban prison. Apparently, it is a dangerous wizard who was an accomplice of Lord Voldemort and who will try to take revenge on Harry Potter.",
  },
  {
    "id": 1,
    "title": "Harry Potter and the Sorcerer's Stone",
    "releaseDay": "June 26, 1997",
    "author": "J. K. Rowling",
    "portada":"https://raw.githubusercontent.com/nicole11robayo/DEV001-data-lovers/main/src/src_imagenes/HarryPotterYLaPiedraFilosofal.jpg",
    "description": "On his birthday, Harry Potter discovers that he is the son of two well-known wizards, from whom he has inherited magical powers. He must attend a famous school of magic and sorcery, where he establishes a friendship with two young men who will become his companions on his adventure. During his first year at Hogwarts, he discovers that a malevolent and powerful wizard named Voldemort is in search of a philosopher's stone that prolongs the life of its owner.",
  } 
]
  it('data original organizada alfabéticamente según su título ', () => {
    expect(ordenarAaZ(dataPrueba)).toEqual(dataOrdenadaAZ);
  });
});

describe('Quiero ordenar los libros de la Z a la A', () => {
  const dataOrdenadaZA=[ 
    {
      "id": 1,
      "title": "Harry Potter and the Sorcerer's Stone",
      "releaseDay": "June 26, 1997",
      "author": "J. K. Rowling",
      "portada":"https://raw.githubusercontent.com/nicole11robayo/DEV001-data-lovers/main/src/src_imagenes/HarryPotterYLaPiedraFilosofal.jpg",
      "description": "On his birthday, Harry Potter discovers that he is the son of two well-known wizards, from whom he has inherited magical powers. He must attend a famous school of magic and sorcery, where he establishes a friendship with two young men who will become his companions on his adventure. During his first year at Hogwarts, he discovers that a malevolent and powerful wizard named Voldemort is in search of a philosopher's stone that prolongs the life of its owner.",
    },
    {
      "id": 3,
      "title": "Harry Potter and the Prisoner of Azkaban",
      "releseDay": "July 8, 1999",
      "author": "J. K. Rowling",
      "portada": "https://raw.githubusercontent.com/nicole11robayo/DEV001-data-lovers/main/src/src_imagenes/HarryPotterYElPrisioneroDeAzkaban.jpg",
      "description": "Harry's third year of studies at Hogwarts is threatened by Sirius Black's escape from Azkaban prison. Apparently, it is a dangerous wizard who was an accomplice of Lord Voldemort and who will try to take revenge on Harry Potter.",
    },
    {
      "id": 6,
      "title": "Harry Potter and the Half-Blood Prince",
      "releaseDay": "July 16, 2005",
      "author": "J. K. Rowling",
      "portada":"https://raw.githubusercontent.com/nicole11robayo/DEV001-data-lovers/main/src/src_imagenes/HarryPotterYElMisterioPrincipe.jpg",
      "description": "Harry discovers a powerful book and, while trying to discover its origins, collaborates with Dumbledore in the search for a series of magical objects that will aid in the destruction of Lord Voldemort.",
    }
 ]
   it('data original organizada de la Z a la A según su título ', () => {
     expect(ordenarAaZ(dataPrueba).reverse()).toEqual(dataOrdenadaZA);
   });
});
 
describe("Quiero ordenar los libros según su año de publicación", () =>{

  const dataOrdenadaAntiguoReciente=[ 
    {
      "id": 1,
      "title": "Harry Potter and the Sorcerer's Stone",
      "releaseDay": "June 26, 1997",
      "author": "J. K. Rowling",
      "portada":"https://raw.githubusercontent.com/nicole11robayo/DEV001-data-lovers/main/src/src_imagenes/HarryPotterYLaPiedraFilosofal.jpg",
      "description": "On his birthday, Harry Potter discovers that he is the son of two well-known wizards, from whom he has inherited magical powers. He must attend a famous school of magic and sorcery, where he establishes a friendship with two young men who will become his companions on his adventure. During his first year at Hogwarts, he discovers that a malevolent and powerful wizard named Voldemort is in search of a philosopher's stone that prolongs the life of its owner.",
    },
    {
      "id": 3,
      "title": "Harry Potter and the Prisoner of Azkaban",
      "releseDay": "July 8, 1999",
      "author": "J. K. Rowling",
      "portada": "https://raw.githubusercontent.com/nicole11robayo/DEV001-data-lovers/main/src/src_imagenes/HarryPotterYElPrisioneroDeAzkaban.jpg",
      "description": "Harry's third year of studies at Hogwarts is threatened by Sirius Black's escape from Azkaban prison. Apparently, it is a dangerous wizard who was an accomplice of Lord Voldemort and who will try to take revenge on Harry Potter.",
    },
    {
      "id": 6,
      "title": "Harry Potter and the Half-Blood Prince",
      "releaseDay": "July 16, 2005",
      "author": "J. K. Rowling",
      "portada":"https://raw.githubusercontent.com/nicole11robayo/DEV001-data-lovers/main/src/src_imagenes/HarryPotterYElMisterioPrincipe.jpg",
      "description": "Harry discovers a powerful book and, while trying to discover its origins, collaborates with Dumbledore in the search for a series of magical objects that will aid in the destruction of Lord Voldemort.",
    }
 ]

 it("Ordena los libros de más Antiguo a más reciente", ()=>{
  expect(ordenarFecha(dataPrueba)).toEqual(dataOrdenadaAntiguoReciente);
 })

})

describe("Quiero ordenar los libros según su año de publicación del más reciente al más antiguo", () =>{

  const dataOrdenadaRecienteAntiguo=[ 
    {
      "id": 6,
      "title": "Harry Potter and the Half-Blood Prince",
      "releaseDay": "July 16, 2005",
      "author": "J. K. Rowling",
      "portada":"https://raw.githubusercontent.com/nicole11robayo/DEV001-data-lovers/main/src/src_imagenes/HarryPotterYElMisterioPrincipe.jpg",
      "description": "Harry discovers a powerful book and, while trying to discover its origins, collaborates with Dumbledore in the search for a series of magical objects that will aid in the destruction of Lord Voldemort.",
    },
    {
      "id": 3,
      "title": "Harry Potter and the Prisoner of Azkaban",
      "releseDay": "July 8, 1999",
      "author": "J. K. Rowling",
      "portada": "https://raw.githubusercontent.com/nicole11robayo/DEV001-data-lovers/main/src/src_imagenes/HarryPotterYElPrisioneroDeAzkaban.jpg",
      "description": "Harry's third year of studies at Hogwarts is threatened by Sirius Black's escape from Azkaban prison. Apparently, it is a dangerous wizard who was an accomplice of Lord Voldemort and who will try to take revenge on Harry Potter.",
    },
    {
      "id": 1,
      "title": "Harry Potter and the Sorcerer's Stone",
      "releaseDay": "June 26, 1997",
      "author": "J. K. Rowling",
      "portada":"https://raw.githubusercontent.com/nicole11robayo/DEV001-data-lovers/main/src/src_imagenes/HarryPotterYLaPiedraFilosofal.jpg",
      "description": "On his birthday, Harry Potter discovers that he is the son of two well-known wizards, from whom he has inherited magical powers. He must attend a famous school of magic and sorcery, where he establishes a friendship with two young men who will become his companions on his adventure. During his first year at Hogwarts, he discovers that a malevolent and powerful wizard named Voldemort is in search of a philosopher's stone that prolongs the life of its owner.",
    } 
  ]
  
 it("Ordena los libros de más reciente a más antiguo", ()=>{
  expect(ordenarFecha(dataPrueba).reverse()).toEqual(dataOrdenadaRecienteAntiguo);
 })

})

 describe("quiero  ordenar los personajes por importancia en los libros de mayor a menor", ()=>{
    const dataPersonajes=[
      {
        "id": 587,
        "name": "Hermione Granger",
        "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
      },
      {
        "id": 585,
        "name": "Miranda Goshawk",
        "books_featured_in": [1, 2, 4]
      },
      {
        "id": 586,
        "name": "Gregory Goyle's mother",
        "books_featured_in": [5]
      }
    ]
    it("ordena los personajes de mayor a menor dependiendo en cuantos libros es mencionado",()=>{
      expect(ordenarImportancia(dataPruebaPersonajes).reverse()).toEqual(dataPersonajes);
    })
}
)

describe("quiero  ordenar los personajes por importancia en los libros de menor a mayor", ()=>{
  const dataPersonajes=[
    {
      "id": 586,
      "name": "Gregory Goyle's mother",
      "books_featured_in": [5]
    },
    {
      "id": 585,
      "name": "Miranda Goshawk",
      "books_featured_in": [1, 2, 4]
    },
    {
      "id": 587,
      "name": "Hermione Granger",
      "books_featured_in": [1, 2, 3, 4, 5, 6, 7]
    },
    
  ]
  it("ordena los personajes de mayor a menor dependiendo en cuantos libros es mencionado",()=>{
    expect(ordenarImportancia(dataPruebaPersonajes)).toEqual(dataPersonajes);
  })
}
)

describe("quiero filtrar los personajes dependiendo su casa", ()=>{
  const dataPersonajes=[
    {
      "id": 592,
      "name": "Curious Gryffindor Girl",
      "birth": "between 1 September 1980 and 31 August 1981 (most likely), Great Britain or Ireland",
      "death": null,
      "species": "Human",
      "ancestry": null,
      "gender": "Female",
      "hair_color": null,
      "eye_color": null,
      "wand": null,
      "patronus": null,
      "house": "Gryffindor",
      "associated_groups": [],
      "books_featured_in": [5]
    },
    
  ]
  it("filtra la data y solo muestra los personajes que pertenecen a Gryffindor", ()=>{
    expect(filtrarCasa(dataPruebaPersonajesCasaGenero, "Gryffindor")).toEqual(dataPersonajes);
  })
})

describe("quiero filtrar los personajes dependiendo su género", ()=>{
  const dataPersonajes=[
    {
      "id": 489,
      "name": "Hengist of Woodcroft",
      "birth": "982 or later",
      "death": null,
      "species": "Human",
      "ancestry": null,
      "gender": "Male",
      "hair_color": "Red",
      "eye_color": null,
      "wand": null,
      "patronus": null,
      "house": "Hufflepuff",
      "associated_groups": ["Hogsmeade", "Hogwarts School of Witchcraft and Wizardry", "Hufflepuff"],
      "books_featured_in": [1]
    }
    
  ]
  it("filtra la data y solo muestra los personajes que son hombres (male)", ()=>{
    expect(filtrarGenero(dataPruebaPersonajesCasaGenero, "Male")).toEqual(dataPersonajes);
  })
})

describe("quiero filtrar los personajes dependiendo su Especie", ()=>{
  const dataPersonajes=[
    {
      "id": 352,
      "name": "Ripper",
      "birth": "c. 1980s",
      "death": null,
      "species": "Dog (breed: bulldog)",
      "ancestry": null,
      "gender": "Male",
      "hair_color": "Brown and white",
      "eye_color": "Black",
      "wand": null,
      "patronus": null,
      "house": null,
      "associated_groups": ["Marjorie Dursley"],
      "books_featured_in": [3, 5]
    },
    
  ]
  it("filtra la data y solo muestra la especie Dog (breed: bulldog)", ()=>{
    expect(filtrarEspecie(dataPruebaPersonajesEspecie, "Dog (breed: bulldog)")).toEqual(dataPersonajes);
  })
})

describe("quiero filtrar los personajes dependiendo su género", ()=>{
  const dataPersonajes=[1,1,1,1]
  it("filtra la data y solo muestra los personajes que son hombres (male)", ()=>{
    expect(estadisticaCasas(dataPruebaPersonajesCasaGenero)).toEqual(dataPersonajes);
  })
})

