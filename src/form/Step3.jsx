import React, { useState } from "react";
import DropDown from "../atomic/DropDown";

const getAllIngredientsUrl = "http://localhost:3333/api/ingredient";
const getAlUnitsUrl = "http://localhost:3333/api/unit";

function Step3(props) {
  const { goForward } = props;

  const [inputState, setInputState] = useState({
    unit_id: "",
    unit_name: "",
    quantity: "",
    ingredient_id: "",
    ingredient_name: ""
  });

  const [ingredientsArray, setIngredientsArray] = useState([]);

  const inputHandler = e => {
    e.preventDefault();
    setInputState({ ...inputState, [e.target.name]: e.target.value });

    if (e.target.name === "unit_id") {
      const unitName = e.target.options[e.target.value].text;
      setInputState({ ...inputState, unit_name: unitName });
    }

    if (e.target.name === "ingredient_id") {
      const ingredientName = e.target.options[e.target.value].text;
      setInputState({ ...inputState, ingredient_name: ingredientName });
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    goForward(e);
  };

  const addIngredient = e => {
    e.preventDefault();
    setIngredientsArray([...ingredientsArray, inputState]);
  };

  return (
    <form onSubmit={onSubmit}>
      <button type="submit"> Next </button><br></br>
      <input type="number" name="quantity" onChange={inputHandler} />
      <DropDown
        listUrl={getAlUnitsUrl}
        name="unit_id"
        inputHandler={inputHandler}
      />
      <DropDown
        listUrl={getAllIngredientsUrl}
        name="ingredient_id"
        inputHandler={inputHandler}
      />
      <br></br>
      <button onClick={addIngredient} type="button">
        Add
      </button>

      <ul>
        {ingredientsArray.length
          ? ingredientsArray.map((ing, i) => (
              <li key={i}>
                {ing.quantity} {ing.unit_name} of {ing.ingredient_name}
              </li>
            ))
          : null}
      </ul>
    </form>
  );
}

export default Step3;
