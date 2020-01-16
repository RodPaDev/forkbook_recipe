import React, { useState } from "react";
import { connect } from "react-redux";
import * as dispatchers from "./redux/actions/actionCreators";
import Step1 from "./form/Step1";
import Step2 from "./form/Step2";
import Step3 from "./form/Step3";
import Step4 from "./form/Step4";
import Step5 from "./form/Step5";


function App(props) {
  const {
    postRecipe,
    recipe,
    recipe_categories,
    recipe_tags,
    images,
    recipe_ingredients,
    instructions
  } = props;

  const [page, setPage] = useState(0);
  console.log(props);
  const goForward = e => {
    e.preventDefault();
    setPage(page + 1);
  };
  return (
    <div className="App">
      <h1> Create Recipe </h1>
      {page === 0 && <button onClick={goForward}>Create Recipe</button>}
      {page === 1 && <Step1 goForward={goForward} />}
      {page === 2 && <Step2 goForward={goForward} />}
      {page === 3 && <Step3 goForward={goForward} />}
      {page === 4 && <Step4 goForward={goForward} />}
      {page === 5 && <Step5/>}

    </div>
  );
}

export default connect(state => state, dispatchers)(App);
