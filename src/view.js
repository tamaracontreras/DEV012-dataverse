export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  return 'example';
};

export const renderOptions = (data) => {
  let options ='' 
  data.forEach(d => {
  options += `<option value="${d}">${d}</option>`
  })
  return options
};

export const renderCards = (data) => {
  let cards ='' 
  data.forEach(d => {
  cards += `<li><img src="${d.imageUrl}"/></li>`

  })
  return cards
 }
// esta funcion renderiza las 24 imagenes
// function renderCards(data){
  // ctrl k c comentar! ctr k u descomentar
// }