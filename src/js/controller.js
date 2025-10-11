import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODAL_CLOSE_SEC } from './config.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// if (module.hot) {
//   module.hot.accept();
// }

//this gets the id from the hash url and loads the recipe and render it
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    //0)mark the selected recipe on search results page
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

    //1) loading the recipe
    await model.loadRecipe(id);

    //2) rendering the recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

//this gets the query and pass it to the model so that it searches
//and store it in the state and render the initial page with its buttons
const controlSearchResults = async function () {
  try {
    //1)render spinner is the first thing after clicking search button
    resultsView.renderSpinner();

    //2)get query search from view
    const query = searchView.getQuery();
    if (!query) return;

    //3)sending the query to the model
    await model.loadSearchResults(query);

    //4)render results
    resultsView.render(model.getSearchResultsPage());

    //5)render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    resultsView.renderError(err.message);
  }
};

//this handles the clicks of pagination by rerendering the goTo page
const controlPagination = function (goToPage) {
  //1)render results
  resultsView.render(model.getSearchResultsPage(goToPage));

  //2)render initial pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  //update the recipe state in model
  model.updateServings(newServings);

  //update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlBookmark = function () {
  //1)add/remove bookmarks
  if (!model.state.recipe.bookmarked) {
    model.addBookmark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }
  //2)update recipe view
  recipeView.update(model.state.recipe);

  //3)render bookmarks list
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipes = async function (newRecipe) {
  try {
    //show loading spinner
    addRecipeView.renderSpinner();

    //upload the data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    //change id in the url.
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    //render recipe
    recipeView.render(model.state.recipe);

    //render bookmark view
    bookmarksView.render(model.state.bookmarks);

    //Success message
    addRecipeView.renderMessage();

    //close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error(err);
    addRecipeView.renderError(err.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipes);
};
init();
