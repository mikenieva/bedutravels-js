// 1. Importaciones

import Search from "./models/Search";
import Recipe from "./models/Recipe";
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";
import { elements, renderLoader, clearLoader } from "./views/base";

/* Global State 
    - Search object
    - Current recipe object
    - Shopping list object
    - Liked recipes
*/

const state = {};

/*
SEARCH CONTROLLER
*/

const controlSearch = async () => {
  // 1) Get the query from view
  const query = searchView.getInput()

  if (query) {
    // 2) New search object and add to state
    state.search = new Search(query);

    // 3) Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    try {
        // 4) Search for recipes
        await state.search.getResults();

        // 5) Render results on UI
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
RECIPE CONTROLLER
*/

const controlRecipe = async () => {
  // Get ID from url
  const hashless = window.location.hash.replace("#", "");

  const id =  hashless.match(/\d+/g)[0]
  const country =   hashless.match(/[a-zA-Z]+/g)[0]
  
  if (id) {
    // Prepare UI for changes
    recipeView.clearRecipe()
    renderLoader(elements.recipe)

    // Create new recipe object
    state.recipe = new Recipe(id);

    try {
      // Get recipe data and parse ingredients
        await state.recipe.getRecipe(country);

      // Calculate servings and time
        state.recipe.calcServings();

        // Render recipe
        clearLoader();
        recipeView.renderRecipe(state.recipe)

    } catch (err) {
        alert("Error processing recipe");
        }
    }
};



["hashchange", "load"].forEach(event =>
  window.addEventListener(event, controlRecipe)
);

// Handling reciope button clicks
elements.recipe.addEventListener('click', e => {
  if(e.target.matches('.btn-decrease, .btn-decrease *')){
    // Decrease button is clicked
    if(state.recipe.servings > 1){
        state.recipe.updateServings('dec')
        recipeView.updateServingsIngredients(state.recipe)
    }
  } else if(e.target.matches('.btn-increase, .btn-increase *')){
    // Increase button is clicked
    state.recipe.updateServings('inc')
    recipeView.updateServingsIngredients(state.recipe)
  }
  console.log(state.recipe)
})