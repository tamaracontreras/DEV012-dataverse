import { placesOfBirth, filterData, orderDataByName} from './dataFunctions.js';
import { renderOptions, renderItems} from './view.js';
import { data }from './data/dataset.js';


const lugares = placesOfBirth(data)

const selectPlaces = document.querySelector("#select-filter")
selectPlaces.innerHTML = renderOptions(lugares)

const cardsList = document.querySelector("#root")
cardsList.innerHTML = renderItems(data)

// en esta funcion capturo un elemento de html donde renderiso las imagenes

// crear una const que sellame resuktados actuales y cada accion el resultado de filtrar lo asigno 

let resultadosActuales = data
const selectPlanetas = document.querySelector("#select-filter")
selectPlanetas.addEventListener("change", (e)=> {
    const value = e.target.value 
    resultadosActuales = filterData(data,value)
    cardsList.innerHTML = renderItems(resultadosActuales)
})

const selectOrden = document.querySelector("#select-sort")
selectOrden.addEventListener("change", (e)=> {
    const value = e.target.value 
    
    cardsList.innerHTML = renderItems(orderDataByName(resultadosActuales,value))
})

// Obtener referencia al botón por su atributo data-testid
const clearButton = document.querySelector('[data-testid="button-clear"]');

// Agregar un manejador de eventos al botón
clearButton.addEventListener('click', function () {
    // Lógica para reiniciar la aplicación (limpiar filtros y ordenamientos)
    // ...
    cardsList.innerHTML = renderItems(data)
    // Por ejemplo, puedes redirigir o recargar la página para reiniciar la aplicación
    // location.reload();
});


    
//     cardsList.innerHTML = renderItems(filterSort(data,value))
// })


// const selectOrden = document.querySelector("#sorting")
// selectOrden.addEventListener("change", (e)=> {
//     const value = e.target.value 
    
//     cardsList.innerHTML = renderItems(filterOrder(data,value))
// })

// selectGenero.addEventListener("change", (e)=> console.log(e.target.value))
// change escucha el evento de cambio de seleccion
//e.tarjet.value apunta al elemento que escucha el change, en este caso el valor seleccionado
