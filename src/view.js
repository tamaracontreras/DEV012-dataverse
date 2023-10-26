export const renderOptions = (data) => {
  let options ='' 
  data.forEach(d => {
  options += `<option value="${d}">${d}</option>`
  })
  return options
};

export const renderItems = (personajes) => {
  let cards ='' 
  personajes.forEach(personaje => {
  cards += `<li>
  <dl itemscope itemtype="WomenInTech">
  <img src="${personaje.imageUrl}" alt="${personaje.name}" />
  <dt>Nombre:</dt><dd itemprop="name">${personaje.name}</dd>
  <dt>Descripción:</dt><dd itemprop="description">${personaje.description}</dd>
  <dt>Año de nacimiento:</dt><dd itemprop="yearOfBirth">${personaje.facts.yearOfBirth}</dd>
  <dt>Lugar de nacimiento:</dt><dd itemprop="placeOfBirth">${personaje.facts.placeOfBirth}</dd>
  <dt>Campo de desempeño:</dt><dd itemprop="mainField">${personaje.facts.mainField}</dd>
  </dl>
  </li>`

  })
  return cards
 }
// esta funcion renderiza las 24 imagenes
// function renderCards(data){
  // ctrl k c comentar! ctr k u descomentar
// }

//para construir objetos o elementos html que se van a renderizar en la página