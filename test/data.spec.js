import { encontrarId,ordenarAaZ, ordenarFecha} from '../src/data.js';


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