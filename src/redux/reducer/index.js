import * as types from "../actions/actionTypes";

const initialBody = {
  // All of the keys are needed and you can only send one recipe object
  recipe: {
    title: "",
    description: "",
    budget: null,
    time_required: null,
    difficulty: null
  },

  // This only takes in id's of existing categories, can be several
  recipe_categoires: [],

  // This only takes the string of new tags, can be several
  tags: [],

  // This only takes in id's of existing tags, can be several
  recipe_tags: [],

  // This only takes the string for new image url, can be several
  images: [],

  // This only takes the string of new ingredients, can be several
  ingredients: [],

  // This is always needed and contains the quantity and units for ingredients, existing or new.
  recipe_ingredients: [],

  // This only takes in the strings for the instructions, can be several
  instructions: []
};

export default function newRecipeReducer(state = initialBody, action) {
  switch (action.type) {

    case types.ADD_RECIPE_TO_BODY:
      return {
        ...state,
        recipe: action.payload.recipe
      };

    case types.ADD_RECIPE_CATEGORIES_TO_BODY:
      return {
        ...state,
        recipe_categoires: action.payload.recipe_categoires
      };

    case types.ADD_TAGS_TO_BODY:
      return {
        ...state,
        tags: action.payload.tags
      };

    case types.ADD_RECIPE_TAGS_TO_BODY:
      return {
        ...state,
        recipe_tags: action.payload.recipe_tags
      };
    case types.ADD_IMAGES_TO_BODY:
      return {
        ...state,
        images: action.payload.images
      };
    case types.ADD_INGREDIENTS_TO_BODY:
      return {
        ...state,
        ingredients: action.payload.ingredients
      };
    case types.ADD_RECIPE_INGREDIENTS_TO_BODY:
      return {
        ...state,
        recipe_ingredients: action.payload.recipe_ingredients
      };
    case types.ADD_INSTRUCTIONS_TO_BODY:
      return {
        ...state,
        instructions: action.payload.instructions
      };
    default:
      return state;
  }
}
