export const renderOptions = (data) => {
  let options ='' 
  data.forEach(d => {
  options += `<option value="${d}">${d}</option>`
  })
  return options
};

export const renderItems = (personajes) => {
  let cards ='' 
  personajes?.forEach(personaje => {
  cards += `<li  class="card-background" itemtype="DragonBall">
  <dl itemscope itemtype="DragonBall">
  <img src="${personaje.imageUrl}" alt="${personaje.name}"/>
  <dt>Name:</dt><dd itemprop="name">${personaje.name}</dd>
  <dt>Description:</dt><dd itemprop="shortDescription">${personaje.shortDescription}</dd>
  <dt>Planet Of Birth</dt><dd itemprop="placeOfBirth">${personaje.facts.placeOfBirth}<dd/>
  <dt>Field of Study:</dt> <dd itemprop="mainField">${personaje.facts.mainField}</dd>

  </dl>

</li>`;

  });
  return `<ul class="cards">${cards}</ul>`;
}
// esta funcion renderiza las 24 imagenes
// function renderCards(data){
  // ctrl k c comentar! ctr k u descomentar
// }

//para construir objetos o elementos html que se van a renderizar en la página