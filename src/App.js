import React from "react";
import {useState} from "react"

import './App.css';

const title = "Notes";

const Button = () => {
  const [counter, setCounter] = useState(0);

  const reactButton = function() {
    setCounter((prevCount) => prevCount + 1);
  }

  return (
    <>
      <button onClick={()=>reactButton()} className="addButton">
      +
      </button>
      <div className="numberNotes"> 
        {counter}
      </div>
    </>

  );
}

const App = () => {
  return (
    <> 
      <h1>{title}</h1>
      <div> 
        <Button />
      </div>
    </>
  )
}

export default App;
