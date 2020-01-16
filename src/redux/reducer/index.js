import * as types from "../actions/actionTypes";

const initialNewlyAddedRecipe = {
  data: [],
  error: ""
};

export function newlyAddedRecipe(state = initialNewlyAddedRecipe, action) {
  switch (action.type) {
    case types.POST_RECIPE_FAIL:
      return { ...state, error: action.payload };
    case types.POST_RECIPE_OK:
      return { ...state, data: action.payload };
  }
}

const initialBody = {
  // All of the keys are needed and you can only send one recipe object
  recipe: {
    title: "",
    description: "",
    budget: null,
    time_required: null,
    difficulty: null
  },

  // This only takes in id's of existing categories, can be several (currently only configured for one category)
  recipe_categories: [],

  // This only takes the string of new tags, can be several (currently not implemented)
  tags: [],

  // This only takes in id's of existing tags, can be several
  recipe_tags: [],

  // This only takes the string for new image url, can be several
  images: [],

  // This only takes the string of new ingredients, can be several (currently not implemented)
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
        recipe: action.payload
      };

    case types.ADD_RECIPE_CATEGORIES_TO_BODY:
      return {
        ...state,
        recipe_categories: action.payload
      };

    case types.ADD_TAGS_TO_BODY:
      return {
        ...state,
        tags: action.payload
      };

    case types.ADD_RECIPE_TAGS_TO_BODY:
      return {
        ...state,
        recipe_tags: action.payload
      };
    case types.ADD_IMAGES_TO_BODY:
      return {
        ...state,
        images: action.payload
      };
    case types.ADD_INGREDIENTS_TO_BODY:
      return {
        ...state,
        ingredients: action.payload
      };
    case types.ADD_RECIPE_INGREDIENTS_TO_BODY:
      return {
        ...state,
        recipe_ingredients: action.payload
      };
    case types.ADD_INSTRUCTIONS_TO_BODY:
      return {
        ...state,
        instructions: action.payload
      };
    default:
      return state;
  }
}
