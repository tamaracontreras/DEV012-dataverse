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
  cards += `<div class="card-background">
  <li>
  <div class="card" itemscope itemtype="DragonBall">
   <img src="${personaje.imageUrl}" alt="${personaje.name}" />
  
   <div id="contenedorTitulo">
    <h6 class="titulo" itemprop="name">${personaje.name}</h6>
    </div>
    <div class="info-container">
    <p itemprop="mainField"><span class="estiloLetra">Context:</span> ${personaje.facts.mainField}</p>
    <p itemprop="description"><span class="estiloLetra">Description:</span> ${personaje.description}</p>
    <p itemprop="yearOfBirth"><span class="estiloLetra">Year Of Birth:</span> ${personaje.facts.yearOfBirth}</p>
    <p itemprop="placeOfBirth"><span class="estiloLetra">Planet Of Birth:</span> ${personaje.facts.placeOfBirth}</p>
  </div>
  </div>
  </div>
  
 </li>
 </div>`;



  });
  return `<ul>${cards}</ul>`;
 }
// esta funcion renderiza las 24 imagenes
// function renderCards(data){
  // ctrl k c comentar! ctr k u descomentar
// }

//para construir objetos o elementos html que se van a renderizar en la página