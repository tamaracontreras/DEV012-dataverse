import { placesOfBirth, filterData} from './dataFunctions.js';
import { renderOptions, renderItems} from './view.js';
import data from './data/dataset.js';


const lugares = placesOfBirth(data)

const selectPlaces = document.querySelector("#select-places")
selectPlaces.innerHTML = renderOptions(lugares)

const cardsList = document.querySelector("#cards-list")
cardsList.innerHTML = renderItems(data)

// en esta funcion capturo un elemento de html donde renderiso las imagenes


const selectPlanetas = document.querySelector("#select-places")
selectPlanetas.addEventListener("change", (e)=> {
    const value = e.target.value 
    console.log(filterData(data,value))
    cardsList.innerHTML = renderItems(filterData(data,value))
})

// selectGenero.addEventListener("change", (e)=> console.log(e.target.value))
// change escucha el evento de cambio de seleccion
//e.tarjet.value apunta al elemento que escucha el change, en este caso el valor seleccionado
