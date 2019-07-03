// 1. Importaciones

import Search from "./models/Search";
import Tour from "./models/Tour";
import * as searchView from "./views/searchView";
import * as tourView from "./views/tourView";
import { elements, renderLoader, clearLoader } from "./views/base";

const state = {};

const controlSearch = async () => {
  const query = searchView.getInput()

  if (query) {
    state.search = new Search(query);

    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    try {
        await state.search.getResults();
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


const controltour = async () => {

  const hashless = window.location.hash.replace("#", "");

  const id =  hashless.match(/\d+/g)[0]
  const country =   hashless.match(/[a-zA-Z]+/g)[0]
  
  if (id) {
    tourView.cleartour()
    renderLoader(elements.tour)

    state.tour = new Tour(id);
    
    try {
        await state.tour.getTour(country);

        state.tour.calcServings();

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

elements.tour.addEventListener('click', e => {
  if(e.target.matches('.btn-decrease, .btn-decrease *')){
    if(state.tour.servings > 1){
        state.tour.updateServings('dec')
        tourView.updateServingsresources(state.tour)
    }
  } else if(e.target.matches('.btn-increase, .btn-increase *')){
      state.tour.updateServings('inc')
      tourView.updateServingsresources(state.tour)
  }
})