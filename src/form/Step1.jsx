import React, { useState } from "react";
import DropDown from "../atomic/DropDown";

const getAllCategoiresUrl = "http://localhost:3333/api/category";
const getAllTagsUrl = "http://localhost:3333/api/tag";


function Step1(props) {
  const { goForward } = props;

  const [inputState, setInputState] = useState({
    title: "",
    description: "",
    time_required: "",
    difficulty: "",
    budget: "",
    user_id: localStorage.getItem("userID"),
    recipe_categories: "",
    tags: ""
  });

  const inputHandler = e => {
    e.preventDefault();
    setInputState({ ...inputState, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    goForward(e);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        onChange={inputHandler}
        value={inputState.title}
        name="title"
        placeholder="title"
      />
      <br></br>
      <input
        type="text"
        onChange={inputHandler}
        value={inputState.description}
        name="description"
        placeholder="description"
      />
      <br></br>
      <input
        type="number"
        onChange={inputHandler}
        value={inputState.time_required}
        name="time_required"
        placeholder="time_required"
      />
      <br></br>
      <input
        type="number"
        onChange={inputHandler}
        value={inputState.difficulty}
        name="difficulty"
        placeholder="difficulty"
        min="1"
        max="4"
      />
      <br></br>
      <input
        type="number"
        onChange={inputHandler}
        value={inputState.budget}
        name="budget"
        placeholder="budget"
        min="1"
        max="1000"
      />
      <br></br>
      <input
        type="text"
        onChange={inputHandler}
        value={inputState.user_id}
        name="user_id"
        placeholder="user_id"
        disabled
      />
      <br></br>
      <DropDown
        listUrl={getAllCategoiresUrl}
        name="recipe_categories"
        inputHandler={inputHandler}
      />
      <br></br>
      <DropDown
        listUrl={getAllTagsUrl}
        name="recipe_tags"
        inputHandler={inputHandler}
      />
      <br></br>
      <button type="submit">Next</button>
    </form>
  );
}

export default Step1;
