import { elements } from "./base";

const createIngredient = ingredient => `
    <li class="recipe__item">
        <svg class="recipe__icon">
            <use href="img/icons.svg#icon-check"></use>
        </svg>
        <div class="recipe__count">${formatCount(ingredient.count)}</div>
            <div class="recipe__ingredient">
                <span class="recipe__unit">${ingredient.unit}</span>
                ${ingredient.ingredient}
            </div>
        </li>
`;

export const clearRecipe = () => {
  elements.recipe.innerHTML = "";
};


export const renderRecipe = (recipe, isLiked) => {
  const markup = `
        <figure class="recipe__fig">
            <img src="${recipe.img}" alt="${recipe.title}" class="recipe__img">
            <h1 class="recipe__title">
                <span>${recipe.nombreTour}</span>
            </h1>
        </figure>
        <div class="recipe__details">
            <div class="recipe__info">
                <span class="recipe__info-data recipe__info-data--minutes">Desde US$${
                  recipe.precioUSD
                }</span>
            </div>
        </div>

        <div class="recipe__details">
            <div class="recipe__info" style="text-align: center;">
                <span class="recipe__info-data recipe__info-data--minutes">
                <p>Salimos desde:</p>
                ${recipe.zonaSalida}
                </span>
            </div>
            <div class="recipe__info" style="text-align: center;">
            <span class="recipe__info-data recipe__info-data--minutes">
            <p>Llegamos a:</p>
                ${recipe.zonaLlegada}
            </span>
            </div>
        </div>

        <div class="recipe__details">
            <div class="recipe__info" style="text-align: center;">
                <span class="recipe__info-data recipe__info-data--minutes">
                    <p>${recipe.descripcion}</p>
                    <p>Escalas: ${recipe.escalas.map(el => el).join(" > ")}</p>
                </span>
            </div>
        </div>

        <div class="recipe__ingredients">
        <ul class="recipe__ingredient-list">
            <h2>Incluye:</h2>
            <li class="recipe__item" style="">
                <svg class="recipe__icon">
                    <use href="img/icons.svg#icon-check"></use>
                </svg>
                <div class="recipe__ingredient">
                        <span class="recipe__unit">Acomodación</span>
                    </div>
                </li>  
                <li class="recipe__item">
                    <svg class="recipe__icon">
                        <use href="img/icons.svg#icon-check"></use>
                    </svg>
                    <div class="recipe__ingredient">
                        <span class="recipe__unit">Transporte</span>
                    </div>
                </li>

                <li class="recipe__item">
                    <svg class="recipe__icon">
                        <use href="img/icons.svg#icon-check"></use>
                    </svg>
                    <div class="recipe__ingredient">
                        <span class="recipe__unit">12 días de Viaje</span>
                    </div>
                </li>
        
                <li class="recipe__item">
                    <svg class="recipe__icon">
                        <use href="img/icons.svg#icon-check"></use>
                    </svg>
                    <div class="recipe__ingredient">
                        <span class="recipe__unit">Tour en Grupo</span>
                    </div>
                </li>
        </ul>
        <ul class="recipe__ingredient-list">
                        <h2>Requisitos</h2>
                        
            
                        <li class="recipe__item">
                        <svg class="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                        <div class="recipe__ingredient">
                        <span class="recipe__unit">Acomodación</span>
        
                    </div></li>
             
                    <li class="recipe__item">
                    <svg class="recipe__icon">
                        <use href="img/icons.svg#icon-check"></use>
                    </svg>
                    <div class="recipe__ingredient">
                    <span class="recipe__unit">Transporte</span>
        
                </div></li>
         
                <li class="recipe__item">
                <svg class="recipe__icon">
                    <use href="img/icons.svg#icon-check"></use>
                </svg>
                <div class="recipe__ingredient">
                <span class="recipe__unit">12 días de Viaje</span>
        
                        </div></li>
        
                        <li class="recipe__item">
                            <svg class="recipe__icon">
                                <use href="img/icons.svg#icon-check"></use>
                            </svg>
                            <div class="recipe__ingredient">
                                <span class="recipe__unit">Tour en Grupo</span>
                        </div></li>
                    </ul>
                    
                </div>        


        <div class="recipe__directions">
            <h2 class="heading-2">Próximos Tours</h2>
            <div class="recipe__info" style="margin-bottom: 3em;">
                <svg class="recipe__info-icon">
                    <use href="img/icons.svg#icon-man"></use>
                </svg>
                <span class="recipe__info-data recipe__info-data--people">${recipe.servings}</span>
                <span class="recipe__info-text"> personas</span>
                <div class="recipe__info-buttons">
                    <button class="btn-tiny btn-decrease">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-minus"></use>
                        </svg>
                    </button>
                    <button class="btn-tiny btn-increase">
                        <svg>
                            <use href="img/icons.svg#icon-circle-with-plus"></use>
                        </svg>
                    </button>
                </div>
            </div>
            <ul>
                <li style="display: grid;grid-template-columns: 1fr 1fr 1fr 1fr;grid-column-gap: 3.5rem;grid-row-gap: 1.5rem;list-style: none;margin-bottom: 0rem;text-align: center;">
                    <p class="results__link" href="#47746" style="transition: all 0.3s;border-right: 1px solid #fff;text-decoration: none;">
                        28 de Junio
                    </p>
                    <p>28 de Junio</p>
                    <p>28 de Junio</p>
                    <button class="btn-small recipe__btn recipe__btn--add">
                        <svg class="search__icon">
                            <use href="img/icons.svg#icon-shopping-cart"></use>
                        </svg>
                        <span>Pagar Tour</span>
                    </button>
                </li>
            </ul>
        </div>
    `;
  elements.recipe.insertAdjacentHTML("afterbegin", markup);
};

export const updateServingsIngredients = recipe => {

document.querySelector(".recipe__info-data--people").textContent =
    recipe.servings;

const countElements = Array.from(document.querySelectorAll(".recipe__count"));
    countElements.forEach((el, i) => {
        el.textContent = formatCount(recipe.ingredients[i].count);
    });
};


