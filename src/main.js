import { placesOfBirth } from './dataFunctions.js';
import { renderOptions, renderCards } from './view.js';
import data from './data/dataset.js';


const lugares = placesOfBirth(data)

const selectPlaces = document.querySelector("#select-places")
selectPlaces.innerHTML = renderOptions(lugares)

const cardsList = document.querySelector("#cards-list")
cardsList.innerHTML = renderCards(data)

// en esta funcion capturo un elemento de html donde renderiso las imagenes