import axios from "axios";
import * as types from "./actionTypes";

export const addRecipeToBody = recipe => dispatch => {
  dispatch({
    type: types.ADD_RECIPE_TO_BODY,
    payload: recipe
  });
};

export const addRecipeCategoriesToBody = recipe_categories => dispatch => {
  dispatch({
    type: types.ADD_RECIPE_CATEGORIES_TO_BODY,
    payload: recipe_categories
  });
};
export const addTagsToBody = tags => dispatch => {
  dispatch({
    type: types.ADD_TAGS_TO_BODY,
    payload: tags
  });
};

export const addRecipeTagsToBody = recipe_tags => dispatch => {
  dispatch({
    type: types.ADD_RECIPE_TAGS_TO_BODY,
    payload: recipe_tags
  });
};

export const addImagesToBody = images => dispatch => {
  dispatch({
    type: types.ADD_IMAGES_TO_BODY,
    payload: images
  });
};

export const addRecipeIngredientsToBody = recipe_ingredients => dispatch => {
  dispatch({
    type: types.ADD_RECIPE_INGREDIENTS_TO_BODY,
    payload: recipe_ingredients
  });
};

export const addInstructionsToBody = instructions => dispatch => {
  dispatch({
    type: types.ADD_INSTRUCTIONS_TO_BODY,
    payload: instructions
  });
};

export const postRecipe = payload => dispatch => {
  axios
    .post("http://localhost:3333/api/recipe", payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      }
    })
    .then(res => {
      dispatch({ type: types.POST_RECIPE_OK, payload: res.data });
    })
    .catch(error => {
      console.dir(error)
      dispatch({ type: types.POST_RECIPE_FAIL, payload: error });
    });
};
