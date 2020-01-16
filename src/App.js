import React, { useState } from "react";
import { connect } from "react-redux";
import Step1 from "./form/Step1";
import Step2 from "./form/Step2";
import Step3 from "./form/Step3";



function App(props) {
  const [page, setPage] = useState(3);
  console.log(props)

  const goForward = e => {
    e.preventDefault();
    setPage(page + 1);
  };
  return (
    <div className="App">
      <h1> Create Recipe </h1>
      {page === 0 && <button onClick={goForward}>Create Recipe</button>}
      {page === 1 && <Step1 goForward={goForward}/>}
      {page === 2 && <Step2 goForward={goForward}/>}
      {page === 3 && <Step3 goForward={goForward}/>}


    </div>
  );
}

export default connect(state => state)(App);
