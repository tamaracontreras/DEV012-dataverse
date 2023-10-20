// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.


export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
};


// exporta la funcion placeofbirth 

export const placesOfBirth = (personajes) =>{
  // del objeto data guarda un array de los lugares de nacimiento de todos los personajes
  const placeOfBirthList= personajes.map(personaje => personaje.facts.placeOfBirth);
  //guarda los lugares de nacimiento descartando los repetidos
  const unicos= new Set(placeOfBirthList);

  const lugaresUnicos = Array.from(unicos);
  
  return lugaresUnicos;
}




