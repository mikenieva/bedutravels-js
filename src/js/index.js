// 1. Importaciones

import Search from "./models/Search";
import Tour from "./models/Tour";
import * as searchView from "./views/searchView";
import * as tourView from "./views/tourView";
import { elements, renderLoader, clearLoader } from "./views/base";

/* Global State 
    - Search object
    - Current tour object
    - Shopping list object
*/

const state = {};

/*
SEARCH CONTROLLER
*/

const controlSearch = async () => {
  // 1. Obtener la búsqueda de la vista
  const query = searchView.getInput()

  if (query) {
    // 2) Si existe un dato válido, creamos un nuevo objeto "search" y lo agregamos al "state"
    state.search = new Search(query);

    // 3) Preparamos la interfaz para los resultados
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    try {
        // 4) Buscamos los tours
        await state.search.getResults();

        // 5) Renderizamos los resultados en la interfaz
        clearLoader();
        searchView.renderResults(state.search.result);
    } catch(err){
        alert(err)
        clearLoader();
    }  
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

elements.searchResPages.addEventListener("click", e => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

/*
TOUR CONTROLLER
*/

const controltour = async () => {
  // Get ID from url
  const hashless = window.location.hash.replace("#", "");

  const id =  hashless.match(/\d+/g)[0]
  const country =   hashless.match(/[a-zA-Z]+/g)[0]
  
  if (id) {
    // Prepare UI for changes
    tourView.cleartour()
    renderLoader(elements.tour)

    // Create new tour object
    state.tour = new Tour(id);
    
    try {
      // Get tour data and parse ingredients
        await state.tour.getTour(country);

      // Calculate servings and time
        state.tour.calcServings();

        // Render tour
        clearLoader();
        tourView.rendertour(state.tour)

    } catch (err) {
        alert(err);
        }
    }
};

["hashchange", "load"].forEach(event =>
  window.addEventListener(event, controltour)
);

// Handling reciope button clicks
elements.tour.addEventListener('click', e => {
  if(e.target.matches('.btn-decrease, .btn-decrease *')){
    // Decrease button is clicked
    if(state.tour.servings > 1){
        state.tour.updateServings('dec')
        tourView.updateServingsIngredients(state.tour)
    }
  } else if(e.target.matches('.btn-increase, .btn-increase *')){
    // Increase button is clicked
    state.tour.updateServings('inc')
    tourView.updateServingsIngredients(state.tour)
  }
})