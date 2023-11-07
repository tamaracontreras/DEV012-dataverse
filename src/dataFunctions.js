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


// data y valor filtrado
export const filterData =(personajes, placeOfBirth) =>{
  const personajesFiltrados = personajes.filter(personaje => personaje.facts.placeOfBirth === placeOfBirth)
  return personajesFiltrados
}

export const orderDataByName = (personajes, orden) => {
  personajes.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB){
      return -1; 

    }
    if (nameA > nameB){
      return 1
    }
    return 0;
  })
    
    if(orden === "desc"){
      personajes.reverse() 
    } 
    return personajes
  }

// export const filterSort =(personajes, orden) =>{
//   const personajesOrdenados = personajes.sort()
//   return personajesOrdenados
  

// export const filterOrder =(personajes, orden) =>{
//   const personajesOrdenaz = personajes.sort();
//   return personajesOrdenaz
// }

// export const filterOrder = (personajes, orden) => {
//   Crear una copia del array original antes de ordenar
//   const personajesOrdenados = personajes.sort(personaje =>personaje.name === orden)
//   return personajesOrdenados
// };


