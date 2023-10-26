// exporta la funcion placeofbirth 
//para construir el filtro
export const placesOfBirth = (personajes) =>{
  // del objeto data guarda un array de los lugares de nacimiento de todos los personajes
  const placeOfBirthList= personajes.map(personaje => personaje.facts.placeOfBirth);
  //guarda los lugares de nacimiento descartando los repetidos
  const unicos= new Set(placeOfBirthList);

  const lugaresUnicos = Array.from(unicos);
  
  return lugaresUnicos;
}
// function filterData(data, placeOfBirth, value) {
//   return data.filter(item => item[filterBy] === value);
// }

//Filtro de género
// data y valor filtrado
export const filterData =(personajes, placeOfBirth) =>{
  const personajesFiltrados = personajes.filter(personaje => personaje.facts.placeOfBirth === placeOfBirth)
  return personajesFiltrados
}




