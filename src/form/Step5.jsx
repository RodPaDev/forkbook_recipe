import React from 'react';
import { connect } from "react-redux";
import * as dispatchers from "../redux/actions/actionCreators";

function Step5(props){
  const {
    postRecipe,
    recipe,
    recipe_categories,
    recipe_tags,
    images,
    recipe_ingredients,
    instructions
  } = props;

  const submitRecipe = () => {
    const body = {
      recipe,
      recipe_categories,
      recipe_tags,
      images,
      recipe_ingredients,
      instructions
    };
    postRecipe(body);
  }

  return(<div>
    <h1>Preview of {recipe.title}</h1>
    <img src={images[0]} />
    <button onClick={submitRecipe} >Submit</button>
  </div>)
}

export default connect(state => state, dispatchers)(Step5);
