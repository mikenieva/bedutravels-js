import { elements } from './base'

const limitRecipeTitle = (title, limit = 25) => {
    const newTitle = []
    if(title.length > limit){
        title.split(' ').reduce((acc, curr) => {
            if(acc + curr.length <= limit){
                newTitle.push(curr)
            }
            return acc + curr.length
        }, 0)
        return `${newTitle.join(' ')} ...`
    } 
    return title
}

const renderRecipe = recipe => {
    const markup = `
        <li>
        <a class="results__link" href="#${recipe.slug}-${recipe.id}">
            <figure class="results__fig">
                    <img src="${recipe.img}" alt="${recipe.nombreTour}">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.nombreTour)}</h4>
                    <p class="results__author">${recipe.pais}</p>
                </div>
            </a>
        </li>        
    `
    elements.searchReslist.insertAdjacentHTML('beforeend', markup)
}

export const getInput = () => elements.searchInput.value

export const clearInput = () => {
    elements.searchInput.value = ''
}

export const clearResults = () => {
    elements.searchReslist.innerHTML = '';
    elements.searchResPages.innerHTML = '';
}

// type: prev or next
const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page -1 : page +1}>
    <span>Página ${type === "prev" ? page - 1 : page + 1}</span>
    <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-${
        type === "prev" ? "left" : "right"
        }"></use>
    </svg>
    </button>
`;

const createMessage = () => `
    <button class="btn-inline-none">
        Todos los tours están mostrados
    </button>
`;


const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage)
    
    let button;
    if(page === 1 && pages > 1) {
        // Only button to go to next page
        button = createButton(page, 'next')
    } else if(page < pages) {
        // Both Buttons
        button = `
            ${button = createButton(page, 'prev')}
            ${button = createButton(page, 'next')}
        `
    } else if (page === pages && pages > 1){
        // Only button to go to prev page
        button = createButton(page, 'prev')
    } else {
        button = createMessage()
    }

    elements.searchResPages.insertAdjacentHTML('afterbegin', button)

}

export const renderResults = (recipes, page = 1, resPerPage = 5) => {
    console.log(recipes)
    // render results of current page
    const start = (page - 1) * resPerPage
    const end = page * resPerPage

    recipes.slice(start, end).forEach(renderRecipe)

    // render pagination buttons
    renderButtons(page, recipes.length, resPerPage)
}